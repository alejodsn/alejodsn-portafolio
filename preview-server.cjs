const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8', '.wasm': 'application/wasm', '.bcmap': 'application/octet-stream', '.pfb': 'application/octet-stream', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.mp4': 'video/mp4', '.pdf': 'application/pdf', '.xml': 'application/xml; charset=utf-8', '.txt': 'text/plain; charset=utf-8' };
const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
  const file = path.resolve(root, `.${urlPath === '/' ? '/index.html' : urlPath}`);
  if (file !== root && !file.startsWith(root + path.sep)) { res.writeHead(403).end('Forbidden'); return; }
  const relativePath = path.relative(root, file);
  if (relativePath.split(path.sep).some(part => part.startsWith('.') || part.startsWith('backup-'))) { res.writeHead(404).end('Not found'); return; }
  const publicFiles = new Set(['index.html', 'privacy.html', 'robots.txt', 'sitemap.xml']);
  if (!publicFiles.has(relativePath) && !relativePath.startsWith(`assets${path.sep}`)) { res.writeHead(404).end('Not found'); return; }
  fs.stat(file, (error, stat) => {
    if (error || !stat.isFile()) { res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('Not found'); return; }
    const headers = { 'Content-Type': types[path.extname(file).toLowerCase()] || 'application/octet-stream', 'Accept-Ranges': 'bytes' };
    const range = req.headers.range;
    if (range) {
      const match = /^bytes=(\d*)-(\d*)$/.exec(range);
      if (!match) { res.writeHead(416, { 'Content-Range': `bytes */${stat.size}` }).end(); return; }
      const start = match[1] ? Number(match[1]) : Math.max(0, stat.size - Number(match[2]));
      const end = match[2] && match[1] ? Math.min(Number(match[2]), stat.size - 1) : stat.size - 1;
      if (start >= stat.size || end < start) { res.writeHead(416, { 'Content-Range': `bytes */${stat.size}` }).end(); return; }
      headers['Content-Range'] = `bytes ${start}-${end}/${stat.size}`;
      headers['Content-Length'] = end - start + 1;
      res.writeHead(206, headers);
      if (req.method === 'HEAD') { res.end(); return; }
      fs.createReadStream(file, { start, end }).pipe(res);
      return;
    }
    headers['Content-Length'] = stat.size;
    res.writeHead(200, headers);
    if (req.method === 'HEAD') { res.end(); return; }
    fs.createReadStream(file).pipe(res);
  });
});
const port = Number(process.argv[2] || process.env.PORT || 8000);
server.listen(port, '127.0.0.1', () => console.log(`Local preview: http://127.0.0.1:${port}`));
