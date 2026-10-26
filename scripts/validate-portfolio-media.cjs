const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const read = relative => fs.readFileSync(path.join(root, relative), 'utf8');
const appSource = read('assets/js/app.js');
const start = appSource.indexOf('const P=[');
const end = appSource.indexOf('\n];\nconst assetIdentity', start) + 3;
if (start < 0 || end < 3) throw new Error('Could not locate the base project catalog.');
const baseContext = {};
vm.runInNewContext(`${appSource.slice(start, end)}\nglobalThis.BASE_PROJECTS=P;`, baseContext);

const additionsContext = {};
vm.runInNewContext(`${read('assets/js/portfolio-additions.js')}\nglobalThis.ADDITIONS=EXTRA_PROJECTS;globalThis.OVERRIDES=EXTRA_ASSET_OVERRIDES;`, additionsContext);
const projects = baseContext.BASE_PROJECTS;
const hashSource = read('assets/js/media-hashes.js');
const hashMatch = hashSource.match(/Object\.freeze\(([\s\S]*)\);\s*$/);
if (!hashMatch) throw new Error('Run scripts/generate-media-hashes.cjs before validating.');
const hashes = JSON.parse(hashMatch[1]);
const identity = item => hashes[decodeURI(item.src || item.href || '')] || item.assetId || item.src || item.href;
const mergeUnique = (current = [], incoming = []) => {
  const seen = new Set(current.map(identity));
  return [...current, ...incoming.filter(item => {
    const key = identity(item);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  })];
};
function mergeAdditions() {
  for (const addition of additionsContext.ADDITIONS) {
    if (addition.attachTo) {
      const project = projects.find(item => item.id === addition.attachTo);
      if (!project) throw new Error(`Unknown attachment target: ${addition.attachTo}`);
      project.slides = mergeUnique(project.slides, addition.slides || []);
      project.docs = mergeUnique(project.docs, addition.docs || []);
    } else {
      const project = projects.find(item => item.id === addition.id);
      if (project) {
        project.slides = mergeUnique(project.slides, addition.slides || []);
        project.docs = mergeUnique(project.docs, addition.docs || []);
      } else projects.push(addition);
    }
  }
}
mergeAdditions();
const firstImportState = JSON.stringify(projects.map(project => [project.id, (project.slides || []).length, (project.docs || []).length]));
mergeAdditions();
if (JSON.stringify(projects.map(project => [project.id, (project.slides || []).length, (project.docs || []).length])) !== firstImportState) {
  throw new Error('Re-import simulation registered duplicate slides or documents.');
}
const full = key => key.startsWith('x:')
  ? `assets/img/extra/full/${key.slice(2)}.webp`
  : additionsContext.OVERRIDES[key]
    ? `assets/img/extra/full/${additionsContext.OVERRIDES[key]}.webp`
    : `assets/img/full/${key}.webp`;
const thumb = key => key.startsWith('x:')
  ? `assets/img/extra/thumb/${key.slice(2)}.webp`
  : additionsContext.OVERRIDES[key]
    ? `assets/img/extra/thumb/${additionsContext.OVERRIDES[key]}.webp`
    : `assets/img/thumb/${key}.webp`;
const ensureFile = relative => {
  const decoded = decodeURI(relative);
  if (!fs.existsSync(path.join(root, decoded))) throw new Error(`Missing media file: ${decoded}`);
};

let rawSlides = 0;
let deduplicatedSlides = 0;
let droppedDuplicateSlides = 0;
const videos = [];
const pdfs = [];
for (const project of projects) {
  const slides = [
    ...(project.pics || []).map((key, index) => ({ assetId: `image:${key}`, kind: 'image', src: full(key), thumb: thumb(key), title: `${project.title} · pieza ${index + 1}` })),
    ...(project.slides || [])
  ];
  rawSlides += slides.length;
  const seen = new Set();
  for (const slide of slides) {
    if (slide.src.startsWith('data:')) throw new Error(`Inline data URL used as media source in ${project.id}.`);
    ensureFile(slide.src);
    if (slide.thumb && !slide.thumb.startsWith('data:')) ensureFile(slide.thumb);
    if (slide.poster && !slide.poster.startsWith('data:')) ensureFile(slide.poster);
    if (slide.kind === 'video') videos.push({ project: project.id, slide });
    if (slide.kind === 'pdf') pdfs.push({ project: project.id, slide });
    const contentKey = hashes[decodeURI(slide.src)] || slide.assetId || slide.src;
    if (seen.has(contentKey)) { droppedDuplicateSlides++; continue; }
    seen.add(contentKey);
    deduplicatedSlides++;
  }
  if (project.cover) ensureFile(project.cover.startsWith('x:') ? full(project.cover) : full(project.cover));
  if (project.coverSrc && project.coverSrc.startsWith('assets/')) ensureFile(project.coverSrc);
  for (const doc of project.docs || []) ensureFile(doc.href);
}

const uniqueVideoPaths = new Set(videos.map(({ slide }) => decodeURI(slide.src)));
const uniquePdfPaths = new Set(pdfs.map(({ slide }) => decodeURI(slide.src)));
if (uniqueVideoPaths.size !== 8) throw new Error(`Expected 8 unique registered videos; found ${uniqueVideoPaths.size}.`);
if (uniquePdfPaths.size !== 5 || pdfs.length !== 5) throw new Error(`Expected 5 original PDF slides; found ${pdfs.length} slides / ${uniquePdfPaths.size} files.`);
if (projects.filter(project => project.coverSrc?.startsWith('data:image/svg+xml')).length !== 2) throw new Error('Video-only projects must keep their neutral, labeled cover fallback.');
for (const file of ['assets/vendor/pdfjs-6.3.289/pdf.mjs', 'assets/vendor/pdfjs-6.3.289/pdf.worker.mjs', 'assets/vendor/pdfjs-6.3.289/LICENSE']) ensureFile(file);

console.log(`Projects after merge: ${projects.length}`);
console.log(`Slides before content-hash deduplication: ${rawSlides}`);
console.log(`Slides shown after per-project content-hash deduplication: ${deduplicatedSlides}`);
console.log(`Duplicate slide references suppressed: ${droppedDuplicateSlides}`);
console.log('Repeated import simulation: no new slide or document references registered.');
console.log(`Unique video files: ${uniqueVideoPaths.size}`);
console.log(`Original PDF documents embedded in projects: ${uniquePdfPaths.size}`);
console.log('Referenced slides, posters, thumbnails, covers, documents, and source paths: all present.');
