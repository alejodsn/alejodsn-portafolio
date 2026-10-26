document.documentElement.classList.replace("no-js","js");
const T=k=>k.startsWith("x:")?"assets/img/extra/thumb/"+k.slice(2)+".webp":EXTRA_ASSET_OVERRIDES[k]?"assets/img/extra/thumb/"+EXTRA_ASSET_OVERRIDES[k]+".webp":"assets/img/thumb/"+k+".webp";
const F=k=>k.startsWith("x:")?"assets/img/extra/full/"+k.slice(2)+".webp":EXTRA_ASSET_OVERRIDES[k]?"assets/img/extra/full/"+EXTRA_ASSET_OVERRIDES[k]+".webp":"assets/img/full/"+k+".webp";
const P=[
{id:"neuro",cat:["branding"],cover:"neuro",pos:"20% 50%",type:"Branding · Identidad visual",title:"Identidad visual de Neuro",short:"Logo, paleta y sistema de marca nacidos de una «n» y un cerebro.",q:"Un solo trazo que piensa y firma.",fmt:"Tablero de identidad",client:"Neuro",pics:["neuro"],pal:["#DC0E0E","#62109F","#FE6244","#FFDEB9"],
s:[["La idea","La marca nace de una analogía: la interconectividad. Una línea fluida dibuja el cerebro y, a la vez, forma la «n» de neuro, el viaje de un impulso desde el subconsciente hasta la acción de compra."],["Decisiones de diseño","Cuatro colores con nombre propio (Deriva, Nebula, Pulsar y Sensory) equilibran el violeta profundo con coral y rojo, y un crema cálido que suaviza el conjunto. La tipografía Blogger Sans Medium Italic aporta movimiento sin perder legibilidad. El logo se declina en cuatro versiones y funciona como ícono de app."],["Por qué funciona","Un símbolo con concepto, un patrón construido con la propia «n» y fotografía humana en tonos afines: el sistema se siente tecnológico sin volverse frío y se adapta igual a una app que a una pieza publicitaria."]]},
{id:"brandbook",cat:["branding"],cover:"brandbook",pos:"22% 50%",type:"Branding · Manual de imagen",title:"Brand Book de Cinemas Procinal",short:"Portada del manual que define el tono y la identidad de la marca.",q:"Aquí vives el cine, y se nota desde la portada.",fmt:"Portada de manual · 16:9",client:"Cinemas Procinal",role:"Diseñador Gráfico, CineProx",pics:["brandbook"],pal:["#DA0616","#1F1D1B","#CF7430","#CEB294"],
s:[["La idea","Un manual de marca que no suena a norma sino a experiencia. El título «Brand Book» gira en círculo alrededor de «Nuestra esencia en acción» y deja claro que la marca se vive, no solo se aplica."],["Decisiones de diseño","Mosaico de bloques en rojo corporativo, naranja y negro, con fotografías de espectadores reales con su palomitera de marca. El hashtag #EsEmociónALoGrande y el logo cierran la composición con jerarquía clara."],["Por qué funciona","Combina identidad y emoción: color sólido para reconocimiento y fotografía cálida para humanizar. Es una portada que explica el tono de marca antes de abrir la primera página."]]},
{id:"rappi",cat:["key-visual","social"],cover:"rappi3",pos:"50% 30%",type:"Campaña · Contenido para redes",title:"Campaña de domicilios Procinal × Rappi",short:"Tres piezas que cuentan la confitería a domicilio como un estreno.",q:"Las excusas de maratón, convertidas en gancho.",fmt:"Story 9:16 + 2 posts 4:5",client:"Cinemas Procinal × Rappi",role:"Diseñador Gráfico, CineProx",pics:["rappi3","rappi2","rappi1"],pal:["#24033C","#5B3444","#986359","#D3C6C5"],
s:[["La idea","Parodiar los créditos de una película: «De los creadores de: Hoy me acabo la serie». Cada frase es una situación reconocible de quedarse en casa, y la respuesta es siempre la misma: «Llega lo mejor de nuestra confitería a domicilio»."],["Decisiones de diseño","Una plantilla modular: retrato emocional en ambiente cálido, titular blanco en dos líneas, apoyo en naranja, y el producto dentro de un móvil sobre una curva naranja que remite a la app. Logos Procinal y Rappi juntos y llamado claro: «Pídelo haciendo click en la bio»."],["Por qué funciona","El sistema es repetible: cambia la escena y la frase, no la estructura. Eso da coherencia entre piezas y permite escalar la campaña sin rediseñar."]]},
{id:"promo",cat:["key-visual"],cover:"promo",pos:"50% 18%",type:"Key Visual · Promoción",title:"Afiche promocional Cine 2x1 en boletas",short:"Oferta en tipografía gigante y papel rasgado, legible a distancia.",q:"La oferta se lee a diez metros.",fmt:"Afiche vertical",client:"Cinemas Procinal × C.C. Monterrey",role:"Diseñador Gráfico, CineProx",pics:["promo"],pal:["#D62220","#D9563D","#3F201C","#FCF4F2"],
s:[["La idea","Comunicar un beneficio para empleados del C.C. Monterrey con tono de cartelera: directo, ruidoso y fácil de recordar."],["Decisiones de diseño","Titular «2X1 en boletas» en tipografía negra de gran peso sobre papel rasgado, con un toque de spray naranja y cintas circulares repetidas. Abajo, seis tarjetas de beneficio con jerarquía uniforme y las condiciones al pie, legibles pero discretas."],["Por qué funciona","Tres niveles de lectura: oferta, condición y detalle. El diseño grita lo importante y deja el texto legal donde debe estar."]]},
{id:"cafe",cat:["key-visual","social"],cover:"cafe",pos:"50% 60%",type:"Key Visual · Contenido para redes",title:"Anuncio de renovación del Café del Cinema",short:"Story con letrero de madera y comida en movimiento.",q:"Antojo con textura.",fmt:"Story 9:16",client:"Café del Cinema · Cinemas Procinal",role:"Diseñador Gráfico, CineProx",pics:["cafe"],pal:["#5B220E","#B36233","#D89965","#E9CAAB"],
s:[["La idea","Anunciar el renovado Café del Cinema (piso 3, junto a los cines) con una promesa simple: renueva tus ganas de comer."],["Decisiones de diseño","Letrero de madera colgante como titular, mesa rústica de fondo y hamburguesa, papas y malteada con ingredientes flotando para dar movimiento. Gradiente naranja cálido, jerarquía clara (titular, producto, ubicación) y aclaración legal visible."],["Por qué funciona","La comida es la protagonista y todo lo demás la sirve: color, textura y tipografía que abren el apetito."]]},
{id:"satel",cat:["key-visual","social"],cover:"satel2",pos:"50% 50%",type:"Campaña · Contenido para redes",title:"Campaña de rastreo satelital SATEL",short:"Tres posts que comunican precio, servicio y protección.",q:"Seguridad que se entiende de un vistazo.",fmt:"3 posts 1:1",client:"SATEL",pics:["satel2","satel1","satel3"],pal:["#A60C0A","#DD3F13","#230F10","#EFEDEC"],
s:[["La idea","Una misma marca, tres mensajes: precio («$420 mil, sin mensualidad y sin recarga», con 5% de descuento por contrato a 18 meses), servicio («Instalación gratis, soporte 24/7») y protección para moto."],["Decisiones de diseño","Rojo y negro como territorio de marca, tipografía condensada de gran tamaño y el pin de ubicación como recurso gráfico. Moto, auto y camión recortados a distintas escalas hablan a distintos públicos. Cada pieza cierra con botón «Contáctanos», teléfono y web."],["Por qué funciona","Alternar fondo oscuro y claro da variedad en el feed sin romper la identidad. El dato clave siempre es lo más grande de la pieza."]]},
{id:"auto",cat:["key-visual","social"],cover:"milenio1",pos:"50% 40%",type:"Key Visual · Servicios financieros",title:"Anuncio de crédito vehicular Milenio",short:"Cifras claras y una sonrisa para volver amable un crédito.",q:"Las cifras importan; la emoción convence.",fmt:"Story 9:16",client:"Milenio Fondo de Empleados",pics:["milenio1"],pal:["#43A150","#4C5164","#E1E2DE","#84A18C"],
s:[["La idea","Volver amable un producto financiero: un joven con las llaves en la mano y un SUV azul recortado sobre el verde de marca."],["Decisiones de diseño","Tarjeta verde con degradado como escenario, azul del vehículo como contraste, y la información crítica en bloques: hasta 80% nuevo y 70% usado, 1.4% N.M. y hasta 6 años. El sello de papel y el botón «Solicita tu crédito hoy mismo» cierran el recorrido."],["Por qué funciona","Ordena mucho dato sin abrumar: primero emoción, luego condiciones, al final la acción."]]},
{id:"ruta",cat:["key-visual"],cover:"milenio2",pos:"30% 50%",type:"Key Visual · Plan turístico",title:"Banner del plan Ruta Lechera de Milenio",short:"Un chorro de leche que une toda la información del plan.",q:"Una aventura llena de sabor y tradición.",fmt:"Banner panorámico",client:"Milenio Fondo de Empleados",pics:["milenio2"],pal:["#1F9183","#0F5468","#8CBBAE","#D8D7D1"],
s:[["La idea","Vender una salida de campo con ternura: una vaca personaje invita con un bocadillo, y el paisaje antioqueño hace el resto."],["Decisiones de diseño","Formato panorámico con el chorro de leche como hilo conductor que enlaza letreros de madera, la lista «Incluye», las polaroids de Santa Rosa de Osos, Entrerríos y San Pedro de los Milagros y los precios para asociado y acompañante."],["Por qué funciona","Mucha información (fecha, inclusiones, precios, cupos) ordenada en capas, sin perder el tono lúdico."]]},
{id:"ref",cat:["social"],cover:"milenio3",pos:"50% 50%",type:"Contenido para redes · Referidos",title:"Post de referidos de Milenio",short:"Un monto claro y dos sonrisas para invitar a recomendar.",q:"Más referidos, más plata para ti.",fmt:"Post 1:1",client:"Milenio Fondo de Empleados",pics:["milenio3"],pal:["#287129","#7D8B54","#EBE6E0","#3C4B53"],
s:[["La idea","Incentivar el voz a voz: por cada persona referida que se asocie, $30.000 directo a la cuenta."],["Decisiones de diseño","Verde vibrante, elementos 3D en azul y amarillo, protagonistas celebrando con un megáfono. El monto va en un bloque morado de alto contraste y el sello «Más referidos, más plata para ti» refuerza la promesa."],["Por qué funciona","La recompensa es el elemento más legible y la energía de los personajes invita a compartir."]]},
{id:"bosque",cat:["key-visual"],cover:"delbosque",pos:"50% 35%",type:"Key Visual · Producto",title:"Anuncio de la mascarilla Diosa Negra",short:"Producto que emerge de la selva con un mensaje corto y directo.",q:"Devuélvele la vida a tu cabello.",fmt:"Story 9:16",client:"Del Bosque",pics:["delbosque"],pal:["#041C0E","#637140","#FAFAF9","#602E18"],
s:[["La idea","Conectar un producto capilar con la naturaleza que lo inspira: la pieza no muestra un frasco, muestra un origen."],["Decisiones de diseño","El frasco inclinado rompe un recorte circular blanco contra un follaje denso, con hojas desenfocadas en primer plano que dan profundidad. Titular con contorno, cursiva ámbar y blanco, y un sello «Amamos lo natural» que retoma el ámbar del logo."],["Por qué funciona","Paleta verde profundo y ámbar, un solo foco visual y un mensaje corto: se entiende en el scroll."]]},
{id:"fenix",cat:["key-visual"],cover:"fenix",pos:"40% 50%",type:"Key Visual · Portafolio de servicios",title:"Portada de portafolio de Fenix Seguridad",short:"Cercanía humana y tecnología en una sola portada.",q:"Confianza con rostro y lente.",fmt:"Portada 16:9",client:"Fenix Seguridad Electrónica",pics:["fenix"],pal:["#07020A","#6D1114","#AFA892","#534A40"],
s:[["La idea","Abrir un portafolio de servicios con una promesa emocional antes que técnica."],["Decisiones de diseño","Un técnico sonriente con casco rojo equilibra la cámara domo Hikvision. Texto gigante en contorno sobre fondo rojo, líneas finas circulares que guían la mirada y datos de contacto en una pastilla translúcida."],["Por qué funciona","Equilibra lo humano y lo tecnológico: transmite cercanía sin perder autoridad."]]}
];
const assetIdentity=item=>{const path=decodeURI(item.src||item.href||"");return globalThis.MEDIA_HASHES?.[path]||item.assetId||path};
const mergeUniqueAssets=(current=[],incoming=[])=>{const seen=new Set(current.map(assetIdentity));return [...current,...incoming.filter(item=>{const identity=assetIdentity(item);if(!identity||seen.has(identity))return false;seen.add(identity);return true})]};
EXTRA_PROJECTS.forEach(extra=>{
 if(extra.attachTo){
  const project=P.find(item=>item.id===extra.attachTo);
  if(!project)return;
  project.slides=mergeUniqueAssets(project.slides,extra.slides);
  project.docs=mergeUniqueAssets(project.docs,extra.docs);
  if(extra.revisedTitle)project.title=extra.revisedTitle;
  if(extra.revisedShort)project.short=extra.revisedShort;
 }else{
  const existing=P.find(item=>item.id===extra.id);
  if(existing){existing.slides=mergeUniqueAssets(existing.slides,extra.slides);existing.docs=mergeUniqueAssets(existing.docs,extra.docs)}
  else P.push(extra);
 }
});
const CL={branding:"Branding e identidad","key-visual":"Key Visual",social:"Redes sociales",web:"Diseño web / UI",videos:"Videos"};
let flt="all",shown=0,cur=[],lastFocus=null;const STEP=6;
const grid=document.getElementById("grid"),more=document.getElementById("more");
function list(){
 if(flt==="videos")return P.flatMap(project=>projectSlides(project).map((slide,index)=>({project,slide,index})).filter(item=>item.slide.kind==="video").map(({project,slide,index})=>({
  id:`video:${project.id}:${slide.assetId||index}`,sourceProjectId:project.id,sourceAssetId:slide.assetId,sourceProjectTitle:project.title,
  cover:null,coverSrc:slide.thumb||slide.poster||videoFallbackPoster(slide.title||project.title),needsFrame:!!slide.posterFallback,videoSrc:slide.posterFallback?slide.src:null,pos:"50% 50%",type:`Video · ${project.title}`,
  title:slide.title||decodeURIComponent(slide.src.split("/").pop()),short:`${slide.format||"Video"} · Proyecto: ${project.title}`,
  q:slide.detail||project.q,fmt:slide.format||"Video",client:project.client,role:project.role,pal:project.pal,s:[],docs:[]
 })));
 return flt==="all"?P:P.filter(p=>p.cat.includes(flt));
}
const videoPreviewCache=new Map();
function extractVideoPreview(src){
 if(videoPreviewCache.has(src))return videoPreviewCache.get(src);
 const preview=new Promise(resolve=>{
  const video=document.createElement("video");video.muted=true;video.playsInline=true;video.preload="metadata";
  let settled=false;const finish=value=>{if(settled)return;settled=true;clearTimeout(timer);video.pause();video.removeAttribute("src");video.load();resolve(value)};
  const timer=setTimeout(()=>finish(null),8000);
  video.addEventListener("loadedmetadata",()=>{try{video.currentTime=Number.isFinite(video.duration)&&video.duration>0?Math.min(1,video.duration*.08):.2}catch{finish(null)}},{once:true});
  video.addEventListener("seeked",()=>{try{if(!video.videoWidth||!video.videoHeight)return finish(null);const scale=Math.min(1,640/video.videoWidth),canvas=document.createElement("canvas");canvas.width=Math.max(1,Math.round(video.videoWidth*scale));canvas.height=Math.max(1,Math.round(video.videoHeight*scale));canvas.getContext("2d").drawImage(video,0,0,canvas.width,canvas.height);finish(canvas.toDataURL("image/webp",.78))}catch{finish(null)}},{once:true});
  video.addEventListener("error",()=>finish(null),{once:true});video.src=src;video.load();
 });
 videoPreviewCache.set(src,preview);return preview;
}
function hydrateVideoPreview(image,src){extractVideoPreview(src).then(preview=>{if(preview&&image.isConnected){image.src=preview;image.dataset.previewReady="true"}})}
function draw(reset){
 cur=list();if(reset){grid.innerHTML="";shown=0}
 const next=cur.slice(shown,shown+STEP);
 next.forEach((p,i)=>{const b=document.createElement("button");b.className="card";b.setAttribute("aria-label","Ver proyecto: "+p.title);
  const slides=projectSlides(p),totalPieces=p.sourceProjectId?1:slides.length;
  const coverSrc=p.coverSrc||T(p.cover);
  b.innerHTML=`<div class="cov"><img src="${coverSrc}" alt="Portada: ${p.title}" style="object-position:${p.pos||"50% 50%"}" loading="lazy"><i>Ver pieza completa →</i></div><div class="cb"><div class="cc-row"><span class="cc">${p.type}</span><span class="piece-total">${totalPieces} ${totalPieces===1?"pieza":"piezas"}</span></div><h3>${p.title}</h3><p>${p.short}</p></div>`;
 b.onclick=()=>open(p.id);grid.appendChild(b);const videoOnly=slides.length>0&&slides.every(slide=>slide.kind==="video");const previewSrc=p.videoSrc||(videoOnly&&slides[0].posterFallback?slides[0].src:null);if(previewSrc)hydrateVideoPreview(b.querySelector(".cov img"),previewSrc);reveal(b,i)});
 shown+=next.length;const left=cur.length-shown;
 more.innerHTML=left>0?`<button class="btn" id="mb">Descubrir más trabajos</button><small>Hay más piezas esperando. Te muestro ${Math.min(STEP,left)} más.</small>`:`<small style="font-size:.95rem">Eso es todo por ahora. ¿Te imaginas tu marca aquí? <a href="#contacto" style="color:var(--violet);font-weight:600">Conversemos →</a></small>`;
 const mb=document.getElementById("mb");if(mb)mb.onclick=()=>draw(false);
}
document.getElementById("filters").onclick=e=>{const f=e.target.dataset.f;if(!f)return;flt=f;document.querySelectorAll(".fb").forEach(b=>{const active=b===e.target;b.classList.toggle("on",active);b.setAttribute("aria-pressed",String(active))});draw(true)};
draw(true);
/* viewer */
const vw=document.getElementById("vw"),stage=document.getElementById("stage"),panel=document.getElementById("panel");
function projectSlides(project){
 const existing=(project.pics||[]).map((key,i)=>({assetId:`image:${key}`,kind:"image",src:F(key),thumb:T(key),title:`${project.title} · pieza ${i+1}`,detail:`Pieza ${i+1} de la selección de ${project.client}, presentada dentro de este caso.`,format:project.fmt,alt:`${project.title}, pieza ${i+1}`}));
 const seen=new Set();
 return [...existing,...(project.slides||[])].filter(slide=>{
  const assetPath=decodeURI(slide.src||"");
  const contentHash=globalThis.MEDIA_HASHES?.[assetPath];
  const identity=contentHash||slide.assetId||assetPath;
  if(!identity||seen.has(identity))return false;
  seen.add(identity);return true;
 });
}
const PDFJS_BASE="assets/vendor/pdfjs-6.3.289/";let pdfJsPromise;
function loadPdfJs(){
 if(!pdfJsPromise)pdfJsPromise=import(new URL(`${PDFJS_BASE}pdf.mjs`,document.baseURI).href).then(lib=>{
  lib.GlobalWorkerOptions.workerSrc=new URL(`${PDFJS_BASE}pdf.worker.mjs`,document.baseURI).href;return lib;
 });
 return pdfJsPromise;
}
function mountPdfViewer(frame,slide){
 let cancelled=false,loadingTask=null,pdf=null,observer=null,scrollHandler=null,zoom=1,currentPage=1;
 const renderJobs=new Map(),rendered=new Set(),visible=new Set(),pages=new Map();
 frame.innerHTML=`<div class="pdf-shell"><div class="pdf-toolbar" role="toolbar" aria-label="Controles del documento"><button type="button" data-pdf-prev aria-label="Página anterior">↑</button><span data-pdf-page aria-live="polite">Cargando PDF…</span><button type="button" data-pdf-next aria-label="Página siguiente">↓</button><span class="pdf-spacer"></span><button type="button" data-pdf-zoom-out aria-label="Reducir zoom">−</button><button type="button" data-pdf-fit aria-label="Ajustar al ancho">Ajustar</button><button type="button" data-pdf-zoom-in aria-label="Aumentar zoom">+</button></div><div class="pdf-pages" tabindex="0" role="region" aria-label="Páginas del documento"></div></div>`;
 const shell=frame.querySelector(".pdf-shell"),scroller=frame.querySelector(".pdf-pages"),pageLabel=frame.querySelector("[data-pdf-page]"),pageNodes=[];
 const cleanup=()=>{cancelled=true;observer?.disconnect();if(scrollHandler)scroller.removeEventListener("scroll",scrollHandler);for(const job of renderJobs.values())try{job.cancel()}catch{}renderJobs.clear();loadingTask?.destroy()?.catch(()=>{});};
 const updateCounter=()=>{let nearest=1,best=Infinity;pageNodes.forEach((node,index)=>{const distance=Math.abs(node.getBoundingClientRect().top-scroller.getBoundingClientRect().top);if(distance<best){best=distance;nearest=index+1}});currentPage=nearest;pageLabel.textContent=`Página ${currentPage} de ${pdf?.numPages||"…"}`};
 const renderPage=async number=>{
  if(cancelled||!pdf||renderJobs.has(number)||rendered.has(number))return;
  const node=pageNodes[number-1],page=pages.get(number);if(!node||!page)return;
  try{
   const canvas=node.querySelector("canvas"),ctx=canvas.getContext("2d",{alpha:false}),base=page.getViewport({scale:1});
   const fit=Math.min((scroller.clientWidth-24)/base.width,920/base.width),scale=Math.max(.25,fit*zoom),viewport=page.getViewport({scale});
   const outputScale=Math.min(window.devicePixelRatio||1,1.75);canvas.width=Math.floor(viewport.width*outputScale);canvas.height=Math.floor(viewport.height*outputScale);
   node.style.width=`${Math.floor(viewport.width)}px`;canvas.style.width=`${Math.floor(viewport.width)}px`;canvas.style.height=`${Math.floor(viewport.height)}px`;node.style.aspectRatio=`${viewport.width} / ${viewport.height}`;
   const task=page.render({canvasContext:ctx,transform:outputScale===1?null:[outputScale,0,0,outputScale,0,0],viewport});renderJobs.set(number,task);await task.promise;
   if(!cancelled&&renderJobs.get(number)===task){renderJobs.delete(number);rendered.add(number)}
  }catch(error){if(error?.name!=="RenderingCancelledException"&&!cancelled)pageLabel.textContent="No se pudo renderizar esta página.";renderJobs.delete(number)}
 };
 const clearPage=number=>{const job=renderJobs.get(number);if(job){try{job.cancel()}catch{}renderJobs.delete(number)}if(rendered.has(number)){const canvas=pageNodes[number-1]?.querySelector("canvas");if(canvas){canvas.width=0;canvas.height=0;canvas.style.width="";canvas.style.height=""}rendered.delete(number)}};
 loadPdfJs().then(async lib=>{
  if(cancelled)return;
  const baseUrl=new URL(PDFJS_BASE,document.baseURI).href;
  loadingTask=lib.getDocument({url:slide.src,cMapUrl:`${baseUrl}cmaps/`,cMapPacked:true,standardFontDataUrl:`${baseUrl}standard_fonts/`,wasmUrl:`${baseUrl}wasm/`,useWasm:false,isEvalSupported:false});
  pdf=await loadingTask.promise;if(cancelled)return;
  for(let number=1;number<=pdf.numPages;number++){
   const page=await pdf.getPage(number);if(cancelled)return;pages.set(number,page);
   const node=document.createElement("section"),canvas=document.createElement("canvas");node.className="pdf-page";node.setAttribute("aria-label",`Página ${number} de ${pdf.numPages}`);canvas.setAttribute("role","img");canvas.setAttribute("aria-label",`Página ${number}`);node.append(canvas);scroller.append(node);pageNodes.push(node);
   const viewport=page.getViewport({scale:1});node.style.aspectRatio=`${viewport.width} / ${viewport.height}`;
  }
  if(cancelled)return;
  pageLabel.textContent=`Página 1 de ${pdf.numPages}`;
  observer=new IntersectionObserver(entries=>entries.forEach(entry=>{const number=pageNodes.indexOf(entry.target)+1;if(number<1)return;if(entry.isIntersecting){visible.add(number);renderPage(number)}else{visible.delete(number);clearPage(number)}}),{root:scroller,rootMargin:"700px 0px",threshold:0});
  pageNodes.forEach(node=>observer.observe(node));
  scrollHandler=()=>requestAnimationFrame(updateCounter);scroller.addEventListener("scroll",scrollHandler,{passive:true});
  const jump=delta=>{const target=Math.max(1,Math.min(pdf.numPages,currentPage+delta));pageNodes[target-1]?.scrollIntoView({block:"start",behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"})};
  frame.querySelector("[data-pdf-prev]").onclick=()=>jump(-1);frame.querySelector("[data-pdf-next]").onclick=()=>jump(1);
  const rerender=()=>{scroller.classList.toggle("zoomed",zoom>1);new Set([...rendered,...renderJobs.keys()]).forEach(clearPage);visible.forEach(renderPage)};
  frame.querySelector("[data-pdf-zoom-out]").onclick=()=>{zoom=Math.max(.6,zoom-.15);rerender()};
  frame.querySelector("[data-pdf-zoom-in]").onclick=()=>{zoom=Math.min(2,zoom+.15);rerender()};
  frame.querySelector("[data-pdf-fit]").onclick=()=>{zoom=1;rerender()};
 }).catch(error=>{if(!cancelled){pageLabel.textContent="No se pudo abrir este PDF aquí. Usa el enlace al documento original del panel.";shell.classList.add("pdf-error");console.error("PDF viewer error",error)}});
 return cleanup;
}
function open(id){const L=list(),entry=L.find(x=>x.id===id);if(!entry)return;const p=entry.sourceProjectId?P.find(x=>x.id===entry.sourceProjectId):entry;if(!p)return;lastFocus=document.activeElement;const ix=L.findIndex(x=>x.id===id),nx=L[(ix+1)%L.length],slides=projectSlides(p);let selected=entry.sourceAssetId?Math.max(0,slides.findIndex(slide=>slide.assetId===entry.sourceAssetId)):0;
 let stopPdf=()=>{};
 const pics=slides.map((slide,i)=>`<button type="button" data-i="${i}" class="${i===selected?"on":""}" aria-pressed="${i===selected}" aria-label="${slide.title||p.title}" title="${slide.title||p.title}"><img src="${slide.thumb||slide.poster||videoFallbackPoster(slide.title||p.title)}" alt="" loading="lazy">${slide.kind==="video"?'<span class="video-badge" aria-hidden="true">▶</span>':""}</button>`).join("");
 stage.classList.toggle("single",slides.length<=1);
 stage.innerHTML=`<div class="mw" id="mediaFrame"></div>${slides.length>1?`<div class="th" role="group" aria-label="Piezas del proyecto">${pics}</div>`:""}`;
 panel.innerHTML=`<span class="k">${p.type}</span><h2 id="dialogTitle">${p.title}</h2><div class="q">${p.q}</div>
 <div class="meta"><div><b>Cliente</b><span>${p.client}</span></div><div><b>Formato</b><span>${p.fmt}</span></div>${p.role?`<div style="grid-column:1/-1"><b>Mi rol</b><span>${p.role}</span></div>`:""}</div>
 <section class="piece-info" aria-live="polite" aria-atomic="true"><span class="piece-count" id="pieceCount"></span><h3 id="pieceTitle"></h3><p id="pieceDetail"></p><small id="pieceFormat"></small></section>
 ${p.s.map(x=>`<h4>${x[0]}</h4><p>${x[1]}</p>`).join("")}
 <h4>Paleta de la pieza</h4><div class="sw">${p.pal.map(c=>`<i style="background:${c}" title="${c}"></i>`).join("")}</div>
 ${p.docs?.length?`<div class="source-docs"><h4>Documento completo</h4>${p.docs.map(doc=>`<a href="${encodeURI(doc.href)}" target="_blank" rel="noopener noreferrer">${doc.label} ↗</a>`).join("")}</div>`:""}
 <div class="nav2"><button class="btn b1" id="vc">Cerrar y volver al portafolio</button>${L.length>1?`<button class="btn b2" id="vn">${flt==="videos"?"Siguiente video →":"Siguiente proyecto →"}</button>`:""}</div>`;
 const updateSlide=index=>{
  stopPdf();stopPdf=()=>{};
  const oldVideo=document.getElementById("mainVideo");if(oldVideo)oldVideo.pause();
  selected=(index+slides.length)%slides.length;const slide=slides[selected],frame=document.getElementById("mediaFrame");
  frame.classList.remove("media-error");
  if(slide.kind==="video"){
   frame.innerHTML=`<video class="main" id="mainVideo" controls playsinline preload="none" poster="${slide.poster||slide.thumb||videoFallbackPoster(slide.title||p.title)}" aria-label="${slide.title||p.title}"><source src="${slide.src}" type="video/mp4">Tu navegador no puede reproducir este video.</video>`;
   document.getElementById("mainVideo").addEventListener("error",()=>{frame.classList.add("media-error");frame.setAttribute("aria-label","No se pudo cargar el video. La portada del proyecto sigue disponible.")},{once:true});
  }else if(slide.kind==="pdf"){
   stopPdf=mountPdfViewer(frame,slide);
  }else{
   frame.innerHTML=`<img class="main" id="mainImg" src="${slide.src}" alt="${slide.alt||slide.title||p.title}" decoding="async"><button class="zoom" id="zoomBtn" aria-label="Ampliar imagen">⤢ Ampliar</button>`;
   document.getElementById("mainImg").addEventListener("error",()=>{frame.classList.add("media-error");frame.setAttribute("aria-label","No se pudo cargar esta pieza.")},{once:true});
  }
  const count=document.getElementById("pieceCount");count.textContent=slides.length>1?`Pieza ${selected+1} de ${slides.length}`:"Pieza del proyecto";
  document.getElementById("pieceTitle").textContent=slide.title||p.title;
  document.getElementById("pieceDetail").textContent=slide.detail||"";
  document.getElementById("pieceFormat").textContent=slide.format||p.fmt||"";
  stage.querySelectorAll(".th button").forEach((button,i)=>{const active=i===selected;button.classList.toggle("on",active);button.setAttribute("aria-pressed",String(active))});
  const image=document.getElementById("mainImg");if(image){const zoom=()=>{lbi.alt=slide.alt||slide.title;lbOpen(image.src)};image.onclick=zoom;document.getElementById("zoomBtn").onclick=zoom}
 };
 stage.querySelectorAll(".th button").forEach(b=>b.onclick=()=>updateSlide(Number(b.dataset.i)));
 stage.querySelector(".th")?.addEventListener("keydown",e=>{if(!["ArrowLeft","ArrowRight"].includes(e.key))return;e.preventDefault();updateSlide(selected+(e.key==="ArrowRight"?1:-1));stage.querySelector(`.th button[data-i="${selected}"]`)?.focus()});
 document.getElementById("vc").onclick=close;const vn=document.getElementById("vn");if(vn)vn.onclick=()=>open(nx.id);
 stage.scrollTop=0;panel.scrollTop=0;vw.scrollTop=0;
 [...panel.children].forEach((c,i)=>c.style.setProperty("--d",i));
 updateSlide(selected);
 clearTimeout(ct);vw.classList.remove("closing");vw.setAttribute("aria-hidden","false");if(!vw.classList.contains("show")){vw.classList.add("open");document.body.style.overflow="hidden";requestAnimationFrame(()=>vw.classList.add("show"))}
 document.getElementById("vwx").focus();
}
let ct;function close(){vw.classList.add("closing");vw.classList.remove("show");clearTimeout(ct);ct=setTimeout(()=>{vw.classList.remove("open","closing");vw.setAttribute("aria-hidden","true");document.body.style.overflow="";if(lastFocus)lastFocus.focus()},800)}
document.getElementById("vwx").onclick=close;
document.addEventListener("keydown",e=>{
 if(e.key==="Escape"){if(lb.classList.contains("open"))lbClose();else if(vw.classList.contains("open"))close();return}
 const active=lb.classList.contains("open")?lb:vw.classList.contains("open")?vw:null;
 if(e.key!=="Tab"||!active)return;
 const focusable=[...active.querySelectorAll('a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])')].filter(el=>el.offsetParent!==null);
 if(!focusable.length){e.preventDefault();active.focus();return}
 const first=focusable[0],last=focusable[focusable.length-1];
 if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
 else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
});
vw.addEventListener("click",e=>{if(e.target.classList.contains("stage")||e.target.classList.contains("vwg"))close()});
/* montu-style reveal + lightbox */
function reveal(el,i){if(matchMedia("(prefers-reduced-motion:reduce)").matches){el.animate([{opacity:0},{opacity:1}],{duration:600,delay:i*70,fill:"backwards"});return}el.style.transformOrigin="50% 0";el.animate([{opacity:0,transform:"perspective(900px) rotateX(-78deg) translateY(-26px) scale(.96)"},{opacity:1,transform:"perspective(900px) rotateX(0deg) translateY(0) scale(1)"}],{duration:1150,delay:i*95,easing:"cubic-bezier(.16,1,.3,1)",fill:"backwards"})}
const lb=document.getElementById("lb"),lbi=document.getElementById("lbi"),lbh=document.getElementById("lbh");
let lightboxReturnFocus=null;
function lbOpen(src){lightboxReturnFocus=document.activeElement;lbi.src=src;lbi.className="fit";lbh.textContent="Clic en la imagen para ver el tamaño real";lb.setAttribute("aria-hidden","false");lb.classList.add("open");requestAnimationFrame(()=>lb.classList.add("show"));document.getElementById("lbx").focus()}
function lbClose(){lb.classList.remove("show");setTimeout(()=>{lb.classList.remove("open");lb.setAttribute("aria-hidden","true");if(lightboxReturnFocus)lightboxReturnFocus.focus()},450)}
lbi.onclick=()=>{const f=lbi.classList.toggle("fit");lbh.textContent=f?"Clic en la imagen para ver el tamaño real":"Clic para ajustar a la pantalla"};
document.getElementById("lbx").onclick=lbClose;
/* bouncing 3D sphere bubbles (WebGL) + pointer collisions */
(function(){
 const sec=document.getElementById("habilidades"),box=sec.querySelector(".bubbles"),spans=[...sec.querySelectorAll(".bb")];
 const rm=matchMedia("(prefers-reduced-motion:reduce)").matches,cl=(v,a,b)=>Math.max(a,Math.min(b,v));
 const S=spans.map((el,i)=>{const base=(Math.random()<.5?-1:1)*(.25+Math.random()*.2);return{el,k:i,tn:el.dataset.tn||"#8B5CF6",x:0,y:0,vx:0,vy:0,r:0,t:0,ang:rm?0:Math.random()*6.283,av:base,base,ph:Math.random()*6.283,tx:null}});
 let W=0,H=0,run=false,last=0,ptr=null,pt=0,pv={x:0,y:0},gl=null,cv=null,P=null,dpr=1;const U={};
 const VS="attribute vec2 a;uniform vec2 c,rs;uniform float ru;varying vec2 v;void main(){v=a*1.04;vec2 p=vec2(c.x+v.x*ru,c.y-v.y*ru);gl_Position=vec4(p.x/rs.x*2.-1.,1.-p.y/rs.y*2.,0.,1.);}";
 const FS="#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\nvarying vec2 v;uniform sampler2D tx;uniform mat3 rt;uniform float rp;uniform vec3 tn;float M(vec2 u){return texture2D(tx,u).r;}"+
 "void main(){float d=length(v);float al=1.-smoothstep(1.-1.5/rp,1.,d);if(al<=0.)discard;float z=sqrt(max(0.,1.-d*d));vec3 n=vec3(v.x,v.y,z);vec3 p=rt*n;"+
 "float sg=p.z<0.?-1.:1.;vec3 w=vec3(p.x*sg,p.y,p.z*sg);vec2 q=w.xy/(1.+w.z);float Q=.64;"+
 "vec2 uv=vec2(.5+q.x/Q*.5,.5-q.y/Q*.5)+vec2(n.x,-n.y)*.035*(1.-z);vec2 of=vec2(.0045,.0015)*(1.+2.*(1.-z));"+
 "vec3 m=vec3(M(uv+of),M(uv),M(uv-of));float mm=(m.r+m.g+m.b)/3.;float e=.006;"+
 "vec2 gr=vec2(M(uv+vec2(e,0.))-M(uv-vec2(e,0.)),M(uv+vec2(0.,e))-M(uv-vec2(0.,e)));"+
 "float f=pow(1.-z,2.4);float an=atan(v.y,v.x);vec3 iri=.5+.5*cos(6.28318*(vec3(0.,.33,.67)+an*.159+f*1.4));"+
 "vec3 col=vec3(.075,.062,.14)+tn*.1;col+=tn*.28*pow(1.-z,1.6);col+=vec3(.05,.07,.16)*max(-n.y,0.)*.9;col+=mix(iri,tn,.3)*f*.85;"+
 "vec3 L=normalize(vec3(-.45,.62,.64));vec3 lg=vec3(.94,.91,1.);col=mix(col,lg*(.8+.2*max(dot(n,L),0.)),clamp(mm,0.,1.)*.93);"+
 "col+=vec3(max(m.r-mm,0.),max(m.b-mm,0.),max(m.b-mm,0.))*.8;float bv=dot(gr,vec2(-.6,.8));"+
 "col+=vec3(.9,.85,1.)*clamp(bv*2.2,0.,1.)*.55;col-=vec3(.1)*clamp(-bv*2.2,0.,1.);"+
 "float s1=pow(max(reflect(-L,n).z,0.),70.)*.95;vec3 L2=normalize(vec3(.55,-.6,.55));float s2=pow(max(reflect(-L2,n).z,0.),50.)*.35;float sh=smoothstep(.6,.98,dot(n,L))*.16;"+
 "col+=vec3(s1+s2+sh);col+=vec3(.72,.68,1.)*smoothstep(.9,.985,d)*.55;float a2=al*(.88+.12*f);gl_FragColor=vec4(col*a2,a2);}";
 const MK=["<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"512\" height=\"512\" viewBox=\"0 0 48 48\"><rect width=\"48\" height=\"48\" fill=\"#000\"/><rect x=\"8\" y=\"8\" width=\"32\" height=\"32\" rx=\"7\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2.4\"/><text x=\"24\" y=\"30\" text-anchor=\"middle\" font-family=\"Arial,Helvetica,sans-serif\" font-weight=\"700\" font-size=\"17\" fill=\"#fff\">Ps</text></svg>", "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"512\" height=\"512\" viewBox=\"0 0 48 48\"><rect width=\"48\" height=\"48\" fill=\"#000\"/><rect x=\"8\" y=\"8\" width=\"32\" height=\"32\" rx=\"7\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2.4\"/><text x=\"24\" y=\"30\" text-anchor=\"middle\" font-family=\"Arial,Helvetica,sans-serif\" font-weight=\"700\" font-size=\"17\" fill=\"#fff\">Ai</text></svg>", "gpt", "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"512\" height=\"512\" viewBox=\"0 0 48 48\"><rect width=\"48\" height=\"48\" fill=\"#000\"/><path transform=\"translate(8 8) scale(1.33)\" fill=\"#fff\" d=\"M12 0C12.6 6.6 17.4 11.4 24 12 17.4 12.6 12.6 17.4 12 24 11.4 17.4 6.6 12.6 0 12 6.6 11.4 11.4 6.6 12 0Z\"/></svg>", "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"512\" height=\"512\" viewBox=\"0 0 48 48\"><rect width=\"48\" height=\"48\" fill=\"#000\"/><rect x=\"8\" y=\"8\" width=\"32\" height=\"32\" rx=\"7\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2.4\"/><text x=\"24\" y=\"30\" text-anchor=\"middle\" font-family=\"Arial,Helvetica,sans-serif\" font-weight=\"700\" font-size=\"17\" fill=\"#fff\">Id</text></svg>", "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"512\" height=\"512\" viewBox=\"0 0 48 48\"><rect width=\"48\" height=\"48\" fill=\"#000\"/><rect x=\"16.2\" y=\"13\" width=\"5.4\" height=\"22\" rx=\"1.7\" fill=\"#fff\"/><rect x=\"26.4\" y=\"13\" width=\"5.4\" height=\"22\" rx=\"1.7\" fill=\"#fff\"/></svg>", "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"512\" height=\"512\" viewBox=\"0 0 48 48\"><rect width=\"48\" height=\"48\" fill=\"#000\"/><g transform=\"translate(8 8) scale(.25)\"><path fill=\"#fff\" d=\"M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z\"/><path fill=\"#000\" d=\"M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z\"/><path fill=\"#000\" d=\"M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018V87.349z\"/><path fill=\"#000\" d=\"M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z\"/><path fill=\"#000\" d=\"M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z\"/></g></svg>", "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"512\" height=\"512\" viewBox=\"0 0 48 48\"><rect width=\"48\" height=\"48\" fill=\"#000\"/><rect x=\"8\" y=\"8\" width=\"32\" height=\"32\" rx=\"7\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2.4\"/><text x=\"24\" y=\"30\" text-anchor=\"middle\" font-family=\"Arial,Helvetica,sans-serif\" font-weight=\"700\" font-size=\"17\" fill=\"#fff\">Pr</text></svg>", "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"512\" height=\"512\" viewBox=\"0 0 48 48\"><rect width=\"48\" height=\"48\" fill=\"#000\"/><g stroke=\"#fff\" stroke-width=\"3.3\" stroke-linecap=\"round\"><line x1=\"23.91\" y1=\"22.20\" x2=\"23.21\" y2=\"9.02\"/><line x1=\"25.01\" y1=\"22.51\" x2=\"29.31\" y2=\"16.12\"/><line x1=\"25.51\" y1=\"23.02\" x2=\"35.32\" y2=\"16.65\"/><line x1=\"25.80\" y1=\"24.13\" x2=\"32.98\" y2=\"24.63\"/><line x1=\"25.60\" y1=\"24.82\" x2=\"37.81\" y2=\"31.04\"/><line x1=\"24.79\" y1=\"25.62\" x2=\"28.60\" y2=\"33.44\"/><line x1=\"24.09\" y1=\"25.80\" x2=\"24.79\" y2=\"38.98\"/><line x1=\"22.99\" y1=\"25.49\" x2=\"18.69\" y2=\"31.88\"/><line x1=\"22.49\" y1=\"24.98\" x2=\"13.10\" y2=\"31.08\"/><line x1=\"22.20\" y1=\"23.87\" x2=\"15.02\" y2=\"23.37\"/><line x1=\"22.40\" y1=\"23.18\" x2=\"10.19\" y2=\"16.96\"/><line x1=\"23.21\" y1=\"22.38\" x2=\"19.18\" y2=\"14.11\"/></g></svg>", "hg", "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"512\" height=\"512\" viewBox=\"0 0 48 48\"><rect width=\"48\" height=\"48\" fill=\"#000\"/><g transform=\"translate(13.4 8) scale(.56)\" fill=\"#fff\"><path d=\"M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z\"/><path d=\"M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z\"/><path d=\"M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z\"/><path d=\"M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z\"/><path d=\"M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z\"/></g></svg>", "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"512\" height=\"512\" viewBox=\"0 0 48 48\"><rect width=\"48\" height=\"48\" fill=\"#000\"/><g transform=\"translate(8 8) scale(.25)\"><path fill=\"#fff\" d=\"M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z\"/><path fill=\"#000\" d=\"M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z\"/><path fill=\"#000\" d=\"M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-7.012.33-3.658z\"/></g></svg>"];
 function mkTex(b){const h=b.tn.replace("#","");b.tnc=[0,2,4].map(i=>parseInt(h.substr(i,2),16)/255);const c=document.createElement("canvas");c.width=512;c.height=512;const g=c.getContext("2d");g.fillStyle="#000";g.fillRect(0,0,512,512);b.tx=gl.createTexture();
  const up=()=>{gl.bindTexture(gl.TEXTURE_2D,b.tx);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,c);[[gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE],[gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE],[gl.TEXTURE_MIN_FILTER,gl.LINEAR],[gl.TEXTURE_MAG_FILTER,gl.LINEAR]].forEach(q=>gl.texParameteri(gl.TEXTURE_2D,q[0],q[1]));if(!run)draw()};
  up();const m=MK[b.k],im=new Image();
  if(m.charAt(0)==="<"){im.onload=()=>{g.drawImage(im,0,0,512,512);up()};im.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(m)}
  else{im.onload=()=>{g.drawImage(im,0,0,512,512);const d=g.getImageData(0,0,512,512),a=d.data;for(let i=0;i<a.length;i+=4){const v=m==="gpt"?(a[i]-50)*1.5:(255-Math.min(a[i],a[i+1],a[i+2])-18)*6;a[i]=a[i+1]=a[i+2]=Math.max(0,Math.min(255,v))}g.putImageData(d,0,0);up()};im.src=b.el.querySelector("image").getAttribute("href")}}
 try{cv=document.createElement("canvas");cv.className="gl";gl=cv.getContext("webgl",{alpha:true,premultipliedAlpha:true});
  if(gl){const sh=(t,q)=>{const o=gl.createShader(t);gl.shaderSource(o,q);gl.compileShader(o);if(!gl.getShaderParameter(o,gl.COMPILE_STATUS))throw gl.getShaderInfoLog(o);return o};
   P=gl.createProgram();gl.attachShader(P,sh(gl.VERTEX_SHADER,VS));gl.attachShader(P,sh(gl.FRAGMENT_SHADER,FS));gl.linkProgram(P);if(!gl.getProgramParameter(P,gl.LINK_STATUS))throw"link";gl.useProgram(P);
   const bf=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,bf);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);const al=gl.getAttribLocation(P,"a");gl.enableVertexAttribArray(al);gl.vertexAttribPointer(al,2,gl.FLOAT,false,0,0);
   ["c","rs","ru","rp","rt","tx","tn"].forEach(n=>U[n]=gl.getUniformLocation(P,n));gl.uniform1i(U.tx,0);gl.enable(gl.BLEND);gl.blendFunc(gl.ONE,gl.ONE_MINUS_SRC_ALPHA);
   box.appendChild(cv);sec.classList.add("gl-on");S.forEach(mkTex)}else gl=null}catch(e){gl=null;if(cv&&cv.parentNode)cv.remove();sec.classList.remove("gl-on");console.warn("WebGL no disponible",e)}
 function size(){const R=sec.getBoundingClientRect();W=R.width;H=R.height;S.forEach(b=>{b.r=b.el.offsetWidth/2;b.x=cl(b.x,0,W-2*b.r);b.y=cl(b.y,0,H-2*b.r)});
  if(gl){dpr=Math.min(devicePixelRatio||1,2);cv.width=Math.round(W*dpr);cv.height=Math.round(H*dpr);gl.viewport(0,0,cv.width,cv.height)}draw()}
 function draw(){if(!W)return;
  if(gl){gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT);gl.uniform2f(U.rs,W,H);const t=performance.now()/1000;
   S.forEach(b=>{if(!b.r||!b.tx)return;const ti=rm?0:.19*Math.sin(t*.45+b.ph),ca=Math.cos(b.ang),sa=Math.sin(b.ang),ct=Math.cos(ti),st=Math.sin(ti);
    gl.bindTexture(gl.TEXTURE_2D,b.tx);gl.uniform2f(U.c,b.x+b.r,b.y+b.r);gl.uniform1f(U.ru,b.r);gl.uniform1f(U.rp,b.r);gl.uniform3fv(U.tn,b.tnc);
    gl.uniformMatrix3fv(U.rt,false,[ca,0,sa,st*sa,ct,-st*ca,-ct*sa,st,ct*ca]);gl.drawArrays(gl.TRIANGLE_STRIP,0,4)})}
  else S.forEach(b=>{b.el.style.transform=`translate3d(${b.x}px,${b.y}px,0)`})}
 function init(){size();S.forEach(b=>{b.x=Math.random()*Math.max(1,W-2*b.r);b.y=Math.random()*Math.max(1,H-2*b.r);const a=Math.random()*6.283;b.t=13+Math.random()*11;b.vx=Math.cos(a)*b.t;b.vy=Math.sin(a)*b.t});draw()}
 function step(dt){
  pv.x*=Math.max(0,1-dt*8);pv.y*=Math.max(0,1-dt*8);
  for(const b of S){if(!b.r)continue;
   if(ptr){const dx=b.x+b.r-ptr.x,dy=b.y+b.r-ptr.y,d=Math.hypot(dx,dy),m=b.r+9;
    if(d<m&&d>.01){const nx=dx/d,ny=dy/d,px=cl(pv.x,-90,90),py=cl(pv.y,-90,90),vn=(b.vx-px)*nx+(b.vy-py)*ny;
     if(vn<0){const j=-1.9*vn;b.vx+=j*nx;b.vy+=j*ny;b.av=cl(b.av+(nx<0?-1:1)*Math.min(.4,j*.004),-.9,.9)}
     const pen=m-d;b.x+=nx*pen*.35;b.y+=ny*pen*.35}}
   const sp=Math.hypot(b.vx,b.vy)||.01,ns=Math.min(70,sp+(b.t-sp)*Math.min(1,dt*.7));b.vx*=ns/sp;b.vy*=ns/sp;
   b.x+=b.vx*dt;b.y+=b.vy*dt;b.av+=(b.base-b.av)*Math.min(1,dt*.8);b.ang+=b.av*dt;
   if(b.x<0){b.x=0;b.vx=Math.abs(b.vx)}if(b.x>W-2*b.r){b.x=W-2*b.r;b.vx=-Math.abs(b.vx)}
   if(b.y<0){b.y=0;b.vy=Math.abs(b.vy)}if(b.y>H-2*b.r){b.y=H-2*b.r;b.vy=-Math.abs(b.vy)}}
  for(let i=0;i<S.length;i++)for(let j=i+1;j<S.length;j++){const a=S[i],c=S[j];if(!a.r||!c.r)continue;
   const dx=c.x+c.r-a.x-a.r,dy=c.y+c.r-a.y-a.r,d=Math.hypot(dx,dy),m=a.r+c.r;
   if(d<m&&d>.01){const nx=dx/d,ny=dy/d,ma=a.r*a.r,mc=c.r*c.r,wa=mc/(ma+mc),wc=ma/(ma+mc),ov=(m-d)*.6;a.x-=nx*ov*wa;a.y-=ny*ov*wa;c.x+=nx*ov*wc;c.y+=ny*ov*wc;
    const vr=(a.vx-c.vx)*nx+(a.vy-c.vy)*ny;if(vr>0){const ja=2*wa*vr,jc=2*wc*vr;a.vx-=ja*nx;a.vy-=ja*ny;c.vx+=jc*nx;c.vy+=jc*ny}}}
  draw()}
 function loop(t){if(!run)return;const dt=Math.min((t-last)/1000,.05);last=t;step(dt);requestAnimationFrame(loop)}
 function mv(e){const R=sec.getBoundingClientRect(),x=e.clientX-R.left,y=e.clientY-R.top,n=performance.now();
  if(ptr&&n>pt){const d=(n-pt)/1000;pv={x:cl((x-ptr.x)/d,-900,900),y:cl((y-ptr.y)/d,-900,900)}}ptr={x,y};pt=n}
 sec.addEventListener("pointermove",mv);sec.addEventListener("pointerdown",mv);
 ["pointerleave","pointercancel"].forEach(ev=>sec.addEventListener(ev,()=>{ptr=null;pv={x:0,y:0}}));
 init();new ResizeObserver(size).observe(sec);
 if(!rm)new IntersectionObserver(es=>{const v=es[0].isIntersecting;if(v&&!run){run=true;last=performance.now();requestAnimationFrame(loop)}else if(!v)run=false}).observe(sec);
})();
/* timeline, certs */
const X=[["Actualmente · Transversal","Diseñador Gráfico","Autónomo",["Servicios de diseño gráfico, web y redes sociales a través de planes de trabajo creativos y efectivos.","Objetivo: potenciar a empresas y emprendedores con herramientas visuales y digitales de alta calidad."]],
["Jul 2026 – Sep 2026","Diseñador Gráfico","Genesix Agencia",["Desarrollo de conceptos creativos y propuestas estratégicas para campañas, eventos y activaciones de marca.","Desarrollo de la identidad visual de Daniela Buitrago, trabajando conceptos gráficos y recursos visuales para consolidar su presencia de marca.","Creación de piezas y sistemas visuales orientados a objetivos de comunicación y posicionamiento.","Investigación y benchmark de referentes digitales para identificar oportunidades creativas y estratégicas.","Desarrollo de conceptos para experiencias y activaciones BTL, incluyendo propuestas de guerrilla marketing.","Iniciativa en proyectos de innovación creativa e integración de IA para optimizar procesos de conceptualización y creación de contenido."]],
["Dic 2022 – Oct 2024","Diseñador Gráfico","CineProx (antes: Cinemas Procinal)",["Desarrollo de key visuals basados en briefings y objetivos del cliente.","Retoque fotográfico para optimizar imágenes en campañas publicitarias.","Diseño de material publicitario y anuncios para campañas digitales e impresas.","Creación de logotipos y guías de estilo para asegurar coherencia de marca.","Creación de interfaces atractivas para mejorar la experiencia de usuario en web."]],
["Feb 2013 – Jun 2022","Diseñador Web","OPA S.A.S",["Coordinación del área de diseño web, liderando proyectos de diseño y desarrollo de sitios web.","Diseño y administración de sitios web, asegurando funcionalidad, estética y alineación con la identidad de marca.","Creación de programas de actualización para mantener los contenidos y funcionalidades de los sitios al día.","Soporte y atención al cliente, resolviendo consultas y ofreciendo soluciones técnicas."]]];
document.getElementById("tl").innerHTML=X.map(e=>`<div class="ti"><div class="td">${e[0]}</div><h3>${e[1]}</h3><div class="to">${e[2]}</div><ul>${e[3].map(i=>`<li>${i}</li>`).join("")}</ul></div>`).join("");
const C=[["Diseño de Interfaz UI esencial","LinkedIn Learning","Oct 2022","https://bit.ly/certificado-ui-esencial"],["HTML esencial","LinkedIn Learning","Ago 2022","https://bit.ly/certificado-html-esencial"],["CSS esencial","LinkedIn Learning","Ago 2022","https://bit.ly/certificado-css-esencial"],["SEO desde cero","Crehana","Ene 2022","https://www.crehana.com/diplomas/10e0e2f5/"],["Branding e identidad visual","Crehana","Jul 2020","https://bit.ly/certificado-branding-startups"],["Crea, construye y gestiona una marca","Crehana","Ene 2019","https://bit.ly/certificado-gestion-marca"]];
document.getElementById("certs").innerHTML=C.map(c=>`<div class="cert"><span><strong>${c[0]}</strong> · ${c[1]}</span><a href="${c[3]}" target="_blank" rel="noopener">${c[2]} ↗</a></div>`).join("");
/* recruiters */
const rb=document.getElementById("recBtn"),rbody=document.getElementById("recBody");
rb.onclick=()=>{const o=rbody.classList.toggle("open");rb.setAttribute("aria-expanded",o)};
/* nav */
const bg=document.getElementById("burger"),lk=document.getElementById("links");
bg.onclick=()=>{const o=lk.classList.toggle("open");bg.setAttribute("aria-expanded",o);bg.setAttribute("aria-label",o?"Cerrar menú":"Abrir menú")};
lk.querySelectorAll("a").forEach(a=>a.onclick=()=>{lk.classList.remove("open");bg.setAttribute("aria-expanded","false");bg.setAttribute("aria-label","Abrir menú")});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&lk.classList.contains("open")){lk.classList.remove("open");bg.setAttribute("aria-expanded","false");bg.setAttribute("aria-label","Abrir menú");bg.focus()}});
/* parallax + reveal */
const hb=document.getElementById("heroBg"),rm=matchMedia("(prefers-reduced-motion:reduce)").matches;let tk=false;
if(!rm)addEventListener("scroll",()=>{if(tk)return;tk=true;requestAnimationFrame(()=>{const y=scrollY;if(y<innerHeight*1.2)hb.style.transform=`translate3d(0,${y*.32}px,0) scale(${1+y/4000})`;tk=false})},{passive:true});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".rv").forEach(el=>io.observe(el));
