# Matriz de requisitos y revisión

Estados: **Implementado y verificado**, **Implementado, no verificado**, **Pendiente**, **No aplica (con motivo)**. Matriz actualizada el 26 de octubre de 2026 para la revisión local; se conserva para iteraciones.

## Conservación y alcance

| ID | Área | Requisito | Estado | Evidencia / observación |
|---|---|---|---|---|
| P-01 | Conservación | Evolucionar la implementación existente y conservar el original | Implementado y verificado | Se mantiene HTML/CSS/JS estático y assets; copia previa en `backup-original-2026-10-24/`. |
| P-02 | Contenido | Mantener perfil, habilidades, proyectos, trayectoria y contacto | Implementado y verificado | Secciones existentes en `index.html`; interacciones de proyecto en `assets/js/app.js`. |
| P-03 | Recursos | Usar solo recursos accesibles del proyecto | Implementado y verificado | Se conservaron imágenes/favicons presentes; no se agregaron imágenes externas. |
| P-04 | Identidad | Conservar dirección visual y responsive existentes | Implementado y verificado | Paleta violeta, retrato, animaciones y componentes existentes conservados; CSS actualizado. |
| P-05 | Contactos de referencia | No exponer datos personales de terceros sin permiso | Implementado y verificado | Nombres, teléfonos y testimonios retirados de la página; referencias no se solicitan ni transmiten. |

## Funcionalidad, UX/UI y accesibilidad

| ID | Criterio | Estado | Evidencia / observación |
|---|---|---|---|
| UX-01 | Navegación por secciones y enlace para saltar al contenido | Implementado y verificado | Navegación del encabezado; skip link con foco visible. |
| UX-02 | Menú móvil operable y con estado accesible | Implementado, no verificado | Botón con `aria-controls`, `aria-expanded`, etiqueta dinámica y cierre con Escape; requiere comprobación visual en ancho móvil. |
| UX-03 | Filtros, proyectos progresivos y galería de detalle | Implementado y verificado | Se probó el filtro «Key Visual», se abrió un proyecto y se cerró con Escape; miniaturas y botón «Descubrir más» siguen en el código original. |
| UX-04 | Diálogo de proyecto y ampliación con teclado | Implementado, no verificado | Foco atrapado, Escape, retorno del foco y nombres accesibles incorporados; falta recorrido manual completo. |
| UX-05 | Experiencia y certificaciones para reclutadores | Implementado y verificado | Disclosure conserva `aria-expanded`; sección y contenidos mantenidos. |
| UX-06 | Responsive/mobile-first | Implementado, no verificado | Breakpoints existentes y estilos móviles; validar en dispositivos y navegadores reales. |
| UX-07 | Movimiento reducido | Implementado, no verificado | CSS y JS respetan `prefers-reduced-motion`; falta comprobar la experiencia manualmente. |
| UX-08 | Semántica, foco, etiquetas y texto alternativo | Implementado, no verificado | `main`, skip link, botones nombrados, `aria-live` en proyectos, alt en imágenes; recorrido manual completo y contraste pendientes. |
| UX-09 | Contraste WCAG 2.2 AA | Pendiente | No se ha medido cada combinación de colores; revisar contraste de violetas, textos secundarios y estados. |
| UX-10 | Estados de carga, error, vacío y recuperación | No aplica (con motivo) | El portafolio no realiza peticiones de datos ni envíos; no hay estado de carga/error de backend. El fallo de una imagen debe observarse si llega a ocurrir. |

## Diez heurísticas de Nielsen

| # | Heurística | Evidencia y hallazgo | Estado |
|---|---|---|---|
| 1 | Visibilidad del estado del sistema | Los filtros muestran selección con estilo y `aria-pressed`; navegación móvil expone `aria-expanded`; miniatura seleccionada resalta. | Implementado, no verificado |
| 2 | Correspondencia con el mundo real | Etiquetas en español corriente: Perfil, Habilidades, Portafolio, Trayectoria, Cliente, Formato. | Implementado y verificado |
| 3 | Control y libertad del usuario | Cerrar/Escape, siguiente proyecto y retorno del foco; Escape se probó en diálogo de proyecto. | Implementado, no verificado |
| 4 | Consistencia y estándares | Enlaces navegan; botones ejecutan acciones; patrón de disclosure y foco visible siguen convenciones web. | Implementado, no verificado |
| 5 | Prevención de errores | Sin transacciones o formularios; enlaces externos se identifican y abren en otra pestaña con `noopener`. | Implementado y verificado |
| 6 | Reconocimiento en lugar de recuerdo | Filtros visibles, miniaturas, datos de proyecto y navegación persistente. | Implementado y verificado |
| 7 | Flexibilidad y eficiencia | Filtrar por categoría, cargar más piezas, saltar a secciones y abrir/cerrar con teclado. | Implementado y verificado |
| 8 | Diseño estético y minimalista | Hero, perfil, habilidades, galería y contacto mantienen jerarquía y dirección visual existente. | Implementado y verificado |
| 9 | Reconocer, diagnosticar y recuperarse de errores | Sin envíos de datos ni estados backend; errores de archivos y fallos de carga requieren revisar en distintos navegadores. | Implementado, no verificado |
| 10 | Ayuda y documentación | El README explica cómo abrir la página y la matriz registra requisitos y límites. | Implementado y verificado |

## Seguridad, privacidad y contenido

| ID | Criterio | Estado | Evidencia / observación |
|---|---|---|---|
| SEC-01 | Minimización de información personal de terceros | Implementado y verificado | Datos de referencias retirados del HTML que se sirve; el respaldo privado conserva el original del usuario. |
| SEC-02 | Política de privacidad proporcional a las funciones | Implementado, no verificado | `privacy.html` explica que no hay formularios, analítica ni cookies de seguimiento en el código y distingue servicios externos. Revisar con prácticas reales de alojamiento. |
| SEC-03 | Consentimiento/cookies | No aplica (con motivo) | El sitio actual no integra cookies de análisis/marketing, píxeles, vídeo embebido, mapas ni preferencias de cookies. Revisar si se añaden integraciones. |
| SEC-04 | Formulario y consentimiento | No aplica (con motivo) | No hay formulario: el contacto ocurre en servicios externos al activar enlaces voluntariamente. |
| SEC-05 | Términos de compra/servicio | No aplica (con motivo) | No hay venta, cuenta, contratación, reserva ni pago dentro del sitio. |
| SEC-06 | Secretos, autenticación y autorización | No aplica (con motivo) | Sitio estático sin endpoints, base de datos, cuentas ni secretos. |
| SEC-07 | Inyección y salida | Implementado, no verificado | El catálogo se define en JavaScript local; no hay contenido externo insertado dinámicamente. Revisar tras futuros cambios de datos. |
| SEC-08 | Dependencias/terceros | Implementado y verificado | PDF.js 6.3.289 se sirve localmente con licencia Apache 2.0; fuentes del sistema y sin solicitudes a Google Fonts. Enlaces externos se limitan a contacto/certificaciones. |
| SEC-09 | Cabeceras de seguridad | Implementado, no verificado | `_headers` define CSP, no-sniff, referrer, frame y permissions policy; solo surte efecto en host compatible y no se ha validado en despliegue. |
| SEC-10 | Vista previa local y copia de respaldo | Implementado y verificado | El servidor devuelve 200 para ambas páginas y 404 para `backup-original-2026-10-24/` y `REVISION.md`; excluir la copia del material que se publique más adelante. |
| SEC-11 | Datos legales del responsable | Pendiente | Confirmar identidad legal/nombre completo y que el correo indicado sirve para consultas de privacidad antes de publicación. |
| SEC-12 | Derechos de uso de trabajos y marcas | Pendiente | El archivo fuente advierte confirmar autorización de publicación de piezas de clientes. |

## SEO, calidad y preparación

| ID | Criterio | Estado | Evidencia / observación |
|---|---|---|---|
| Q-01 | Título, descripción, idioma y favicon | Implementado y verificado | Metadatos de ambas páginas y favicon presentes; la vista local cargó las dos rutas. |
| Q-02 | URLs canónicas y metadatos sociales | Pendiente | Dominio no proporcionado. Se retiraron URLs falsas de ejemplo; definir dominio antes de agregar canonical y URLs absolutas. |
| Q-03 | Sitemap y robots | Implementado, no verificado | `robots.txt` no anuncia dominio ficticio; sitemap no contiene una URL inventada. Debe poblarse al confirmar dominio. |
| Q-04 | Datos estructurados | Implementado, no verificado | JSON-LD Person contiene solo datos ya mostrados; URL del sitio omitida hasta conocer dominio. Validar al publicar. |
| Q-05 | Enlaces y assets locales | Implementado y verificado | 19 proyectos; la validación comprueba todas las referencias locales, documentos, portadas, miniaturas y fuentes asociadas. |
| Q-06 | Peso y rendimiento | Implementado, no verificado | Imágenes WebP locales, carga diferida en portadas y CSS/JS locales; métricas reales no medidas. |
| Q-07 | Navegadores/dispositivos reales | Pendiente | Verificación local en navegador disponible; Safari/Firefox y dispositivos físicos no están disponibles en este entorno. |
| Q-08 | 404 y códigos HTTP | No aplica (con motivo) | Hosting estático aún no elegido; página 404 personalizada y códigos dependen del proveedor y del dominio reales. |
| Q-09 | Build, lint y pruebas automatizadas | Implementado y verificado | No requiere build; se añadieron validadores Node para archivos/referencias y deduplicación de catálogo, además de comprobación de sintaxis. |

## Verificaciones de la importación inicial (24 oct 2026)

- `node --check` sobre `assets/js/app.js` y `preview-server.cjs`: pasó.
- Comprobación de enlaces y referencias locales; no hay IDs repetidos ni anclas internas rotas: pasó.
- Comprobación de las 15 claves de proyectos contra archivos WebP en `thumb/` y `full/`: pasó.
- Servidor local: `index.html` y `privacy.html` responden 200; la copia de respaldo y `REVISION.md` responden 404: pasó.
- Navegador de escritorio: portada y privacidad cargan sin errores de consola; navegar a Portafolio, filtrar «Key Visual», abrir un proyecto y cerrarlo con Escape: comprobado.
- Importación de `assets/img/subir/`: se conservaron intactos los originales. Se sumaron 8 proyectos nuevos y se ampliaron 5 casos existentes; hay 78 piezas añadidas (70 imágenes/páginas PDF optimizadas y 8 videos).
- Integridad de la importación: 13 entradas de datos (5 ampliaciones y 8 casos nuevos), rutas de imágenes y páginas de PDF resueltas, sin recursos ausentes; sintaxis de `portfolio-additions.js`, `app.js` y `preview-server.cjs` válida.
- Navegador de escritorio: tarjeta Rappi muestra 7 piezas; al seleccionar la pieza 2 cambian el título, el texto de detalle, el formato y la imagen. «Descubrir más» incorpora la tarjeta «Campañas de Milenio» con 12 piezas y su galería muestra títulos y descripción individual por pieza.
- Servidor local en puerto 8001: página y catálogo responden 200; solicitud parcial de un video responde 206 (bytes 0–1023); la ruta de respaldo no se sirve (404). La vista previa actual está en `http://127.0.0.1:8001/`.
- Revisión visual de ancho móvil, contraste medido y pruebas con Safari/Firefox/dispositivos físicos: pendiente.
- Reproducción real de cada video y barrido manual de todos los filtros, enlaces y galerías: pendiente; se verificó el soporte HTTP Range y que la carga de video está diferida.
- El archivo `_headers` se revisó en código, pero el servidor local no aplica esas cabeceras; su efecto depende del hosting futuro.

## Importación de piezas desde `subir` (24 oct 2026)

| Comprobación | Resultado | Evidencia / observación |
|---|---|---|
| Conservar los archivos originales | Hecho | Las fuentes siguen en `assets/img/subir/`; no se borraron ni sobrescribieron. Copia del sitio previa a esta importación en `backup-before-import-2026-10-24/`. |
| Agrupar piezas de una misma campaña/proyecto | Hecho | 13 entradas añadidas al catálogo: 5 galerías ampliadas y 8 proyectos nuevos; colecciones con miniaturas seleccionables y datos individuales. |
| Optimizar imágenes y páginas de PDF | Hecho | 70 vistas WebP (miniaturas y versiones completas) bajo `assets/img/extra/`; 34 corresponden a páginas de PDFs. |
| Incorporar videos | Hecho, limitado | 8 videos usan reproductor nativo y `preload="none"`; las fuentes ocupan aproximadamente 336 MB y no fueron transcodificadas. |
| Permiso para exhibir piezas y marcas | Pendiente de Alejandro | Revisar autorización de proyectos y marcas de clientes antes de cualquier publicación. |
| Exposición de archivos fuente | Pendiente de decisión | `assets/img/subir/` es parte de la carpeta servida por la vista previa. Antes de publicación, decidir si se excluye o reorganiza para evitar entregar PDFs, imágenes y videos originales junto a las vistas optimizadas. |

## Supuestos y datos que requieren revisión

- El dominio aún no está definido; canonical, URLs sociales absolutas y sitemap definitivo se agregan después.
- El correo, WhatsApp, perfil de LinkedIn, historia, certificaciones y descripciones de proyectos se conservan de los archivos iniciales y deben ser confirmados por Alejandro.
- La política es un borrador que describe el comportamiento observado del código, no una validación jurídica. Confirmar el nombre del responsable y los registros técnicos de la plataforma de alojamiento.
- Confirmar permisos de exhibición de marcas y piezas; obtener autorización antes de volver a incluir referencias identificables.
- Se consultaron la [Ley 1581 de 2012 en el Gestor Normativo de Función Pública](https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981) y [WCAG 2.2 de W3C](https://www.w3.org/TR/wcag/) como referencias generales; esto no sustituye revisión jurídica ni una auditoría de conformidad.

## Correcciones del visor y catálogo multimedia (26 oct 2026)

| Requisito | Estado | Evidencia y alcance |
|---|---|---|
| Abrir los PDF originales dentro de cada proyecto | Implementado y verificado | Cinco documentos originales asociados a sus casos. PDF.js local dibuja las páginas dentro del visor; los archivos fuente y enlaces para abrirlos por separado se conservan. |
| Navegar y ampliar PDFs | Implementado y verificado | Visor vertical con páginas diferidas, indicador y controles anterior/siguiente, ajuste, zoom; se comprobó visualmente la primera y segunda página, navegación y zoom en escritorio. |
| Marco estable, miniaturas separadas | Implementado y verificado | Área multimedia con dimensiones estables y carril horizontal de miniaturas. En el ancho móvil de 390 px se comprobó el visor de página y su navegación vertical. |
| Deduplicar por contenido y evitar reimportación | Implementado y verificado | Manifiesto SHA-256 local y deduplicación por proyecto; simulación de reimportación no añade piezas/documentos. No se borraron archivos originales o derivados. |
| Videos en las tarjetas y sus proyectos | Implementado y verificado | Ocho archivos de video, reproductor nativo y filtro global Videos. El filtro muestra cada video como tarjeta y abre su caso original; se reprodujo un video desde el modal. |
| Portadas apropiadas para video | Implementado y verificado | Extracción local diferida de un fotograma cuando no existe portada adecuada; portada neutral rotulada si el navegador no puede generar el fotograma. No se usa arte ajeno como portada de los videos de proyectos solo-video. |
| Cobertura de referencias multimedia | Implementado y verificado | `node scripts/validate-portfolio-media.cjs`: 19 proyectos; 64 referencias de piezas mostradas; 8 videos; 5 PDFs; rutas, carteles, miniaturas y documentos presentes. La simulación de reimportación no registra duplicados. |
| Sintaxis de implementación y scripts | Implementado y verificado | `node --check` pasó para JavaScript de la aplicación, manifiesto, scripts de validación y servidor, además de módulos PDF.js. |

### Resultados de validación reproducibles

- `node scripts/validate-portfolio-media.cjs`: pasó. Proyectos 19; referencias antes/después de deduplicación por proyecto 64/64; duplicados de referencias suprimidos 0; reimportación simulada sin nuevas referencias; 8 videos y 5 PDF originales; rutas verificadas.
- Los hashes se generaron para 179 archivos de medios. Se encontraron 37 grupos de archivos idénticos en disco, pero no había referencias duplicadas en las galerías; por eso se mantuvieron intactos los archivos.
- El servidor local permite cargar el módulo/worker PDF.js y los documentos. La solicitud parcial de video responde con soporte de rangos HTTP. Los PDF no se transformaron: se usan sus documentos de origen.
- En escritorio se observaron páginas PDF renderizadas, controles, cambio de página y zoom; en el reproductor nativo se inició un video y se mostró contenido real. En móvil (ancho de 390 px) se comprobó la disposición apilada y el desplazamiento del documento.
- Consola del navegador durante la revisión del visor: sin errores ni advertencias registrados.
- No se midieron métricas Lighthouse/Core Web Vitals, contraste WCAG, ni se probaron Safari, Firefox o dispositivos físicos. No se hizo revisión manual exhaustiva de cada pieza/enlace.

### Pendientes antes de publicar

- Confirmar derechos para exhibir piezas y marcas de clientes.
- Los 8 videos originales ocupan aproximadamente 352 MB. Reducirlos/transcodificarlos si se publicarán y volver a comprobar su reproducción.
- La carpeta `assets/img/subir/` conserva fuentes completas; revisar qué archivos se deben distribuir al elegir hosting.
- El visor usa canvas para mostrar PDF; el texto de página no tiene capa seleccionable ni lectura accesible equivalente. El enlace al PDF original permanece disponible.
- Confirmar que el hosting futuro sirva `.mjs`, `.wasm`, `.bcmap` y PDF con tipos MIME apropiados; el servidor local ya configura esos tipos. No se ha probado ningún despliegue.
- Revisar contraste, accesibilidad manual completa, dominio/SEO absoluto, datos legales y prácticas reales del hosting antes de una publicación.

## Corrección puntual del carrusel de imágenes (26 oct 2026)

| Criterio | Estado | Evidencia |
|---|---|---|
| Imagen completa, centrada y proporcional | Implementado y verificado | Se recuperó el tamaño intrínseco `auto` de la copia previa, con límites explícitos de ancho y alto. En el navegador se revisaron recursos 540×960 (vertical), 1296×405 (panorámico) y 1080×1080 (cuadrado); las cajas conservan esas proporciones y se ajustan al área disponible. |
| Altura estable del marco y miniaturas | Implementado y verificado | El marco usa el renglón fijo del carrusel; su máximo para la imagen se calcula según el espacio disponible del viewport. En móvil 390×844, al cambiar de la imagen vertical a una 4:5, marco y tira de miniaturas mantuvieron exactamente la misma posición y altura (470.55 px y 68 px). |
| No ampliar imágenes pequeñas | Implementado por CSS | La imagen usa ancho y alto automáticos, sin `width:100%` ni `height:100%`; solo se reduce cuando supera los límites. La proporción 432×540 se redujo al ancho disponible en móvil. |
| Mantener ampliación y cierre anteriores | Implementado y verificado | El botón de lupa abrió el lightbox existente; se conservaron «Clic en la imagen para ver el tamaño real», cierre y texto de alternancia. El tamaño real 540×960 mantuvo desplazamiento vertical en móvil (contenedor 829 px; contenido 1080 px) y cerrar retornó a la pieza 1 seleccionada y al foco del botón de ampliación. |
| Alcance del cambio | Verificado | Solo se cambió `assets/css/styles.css`; no se tocó `app.js`, el diálogo/lightbox de `index.html`, PDF, video, miniaturas ni datos de proyectos. La copia previa permanece intacta en `backup-before-viewer-fixes-2026-10-26/`. |

### Pruebas de esta corrección

- Comparé el CSS actual con `backup-before-viewer-fixes-2026-10-26/styles.css`: la versión anterior usaba `width:auto; height:auto` y límites de tamaño; el carrusel actual había añadido dimensiones forzadas al 100%. Recuperé el tamaño automático, manteniendo el marco de altura fija actual.
- Vista de escritorio 1101×877: la pieza vertical 540×960 se ajustó a 400×711, centrada dentro de 621×711; el banner panorámico 1296×405 quedó limitado por el ancho del marco, alrededor de 621×194 dentro de 621×791; la pieza cuadrada 1080×1080 quedó limitada a 621×621 dentro de 621×711.
- Vista móvil 390×844: la vertical 540×960 se ajustó a 265×471; la pieza cuadrada 1080×1080 se ajustó a 351×351. Cambiar pieza no movió el marco ni la tira de miniaturas.
- Lightbox existente: botón de ampliación, indicación, cambio a tamaño real, desplazamiento y cierre; el contenido quedó en 540×960 y pudo recorrerse verticalmente. El cierre devolvió foco y selección al carrusel.
- Regresión del reproductor: la regla `.stage video.main` conservó sus valores anteriores. Se cargó y reprodujo el video del Café (1998×1080, 13.25 s), se vieron los controles nativos y el contenido quedó contenido en el marco; después se pausó y se cerró el proyecto.
- La regla `width:auto; height:auto` evita ampliar un recurso menor que el marco. No había una imagen de galería pequeña entre los casos visuales usados, así que ese caso no se probó con una pieza real pequeña.
- No se modificó ni volvió a probar el visor PDF, conforme al alcance puntual.

## Corrección puntual del visor: fondo, animaciones y video (26 oct 2026)

| Criterio | Estado | Evidencia |
|---|---|---|
| Recuperar el fondo de la composición del carrusel | Implementado y verificado | Se retiró el fondo oscuro añadido a `.mw`; el marco volvió a ser transparente y deja ver el fondo visual del carrusel. El fondo oscuro propio del elemento de video se conserva. |
| Evitar zoom/desplazamiento de entrada al cambiar de imagen | Implementado y verificado | Se quitó la animación `vIn` únicamente de `.stage img.main` y se retiró su keyframe al quedar sin uso. Vertical, horizontal y cuadrada reportaron `animation:none` y `transform:none`. |
| Mantener ampliación existente | Implementado y verificado | La lupa conserva el cursor `zoom-in`; el lightbox existente mantiene indicación de tamaño real, desplazamiento, cierre y retorno a la imagen/foco seleccionado. |
| Recuperar el encaje correcto del video y sus controles nativos | Implementado y verificado | Se restauró `width:auto; height:auto` con máximos del marco para `.stage video.main`. Antes el video podía medir 621×1104 dentro de un marco de 621×711 con `overflow:hidden`, aunque conservaba el atributo `controls`; por tanto, la zona inferior con controles quedaba recortada antes de cargar metadatos. Ahora el elemento cabe dentro del marco y los controles se ven y responden. |
| Mantener el resto del proyecto intacto | Verificado | Solo cambió `assets/css/styles.css`; no se modificaron HTML, JavaScript, proyectos/datos, miniaturas, visor PDF ni lógica del modal. La copia previa está en `backup-before-background-animation-video-2026-10-26/`. |

### Pruebas de esta corrección

- Comparé las reglas con `backup-before-viewer-fixes-2026-10-26/styles.css`: `.mw` era transparente, las imágenes y videos usaban dimensiones automáticas y el modal tenía reglas propias. Se conservó ese comportamiento previo donde aplicaba.
- Navegador local, escritorio 1101×877: vertical 540×960 ajustada a 400×711; horizontal 1296×405 a 621×194; cuadrada 1080×1080 a 621×621. Las tres quedaron centradas, completas, dentro del marco fijo de 621×711 y sin animación. La tira de miniaturas mantuvo su posición.
- Fondo y ampliación: fondo calculado del marco transparente; cursor de imagen `zoom-in`. Se abrió el lightbox anterior, se confirmó «Clic en la imagen para ver el tamaño real», se amplió la pieza vertical a 540×960, se comprobó desplazamiento en el área limitada y se cerró; selección y foco regresaron al carrusel.
- Video de Café del Cinema: antes de que hubiera metadatos, video 400×711 dentro del marco 621×711 y controles nativos visibles. Se inició la reproducción, se observó avance del tiempo, se pausó y se comprobó que el control de progreso permanecía disponible. Con metadatos, el video se ajustó a 621×335.67 dentro del mismo marco.
- Consola del navegador: sin errores ni advertencias durante la revisión.
- `node scripts/validate-portfolio-media.cjs`: pasó; 19 proyectos, 64 piezas referenciadas, 8 videos y 5 PDF; recursos presentes y simulación de reimportación sin nuevas referencias.
- `node --check assets/js/app.js`: pasó. El JavaScript no se modificó.
- No se volvió a probar el PDF, conforme al alcance. No se probaron Safari, Firefox ni dispositivos físicos; la comprobación visual de esta corrección se hizo en el navegador local de escritorio.

## Integración inicial con GitHub y Vercel (26 oct 2026)

| Control | Estado | Evidencia |
|---|---|---|
| Integrar la carpeta local con el repositorio existente | Implementado y verificado | Se enlazó `https://github.com/alejodsn/alejodsn-portafolio`. El remoto se comparó antes de integrar: `main` tenía dos commits y solo `README.md` e `index.html`; el README remoto se conservó en la documentación local y el `index.html` provisional permanece en la historia de `main`. |
| Mantener `main` sin cambios | Verificado | La sincronización usa `codex/integracion-inicial`; tras el push, `main` seguía en `eaaf488cd927f74380aafd18d69163071a443bbc`. El commit de integración del sitio es `b59093d731ca6d25467f8809d0ab00ae810ae38e`; la documentación final se añadió en `0d800e82cfcd1ee4bd93347e1aa5c9abb0cd7f07`, también verificado en el remoto. |
| Preservar los dos historiales | Implementado y verificado | `ea9ee71` importa el proyecto local; `b59093d` es el merge commit que incluye ambos commits de `main` como ancestros. No se reescribió historia ni se usó force push. |
| Excluir respaldos y configuración local | Implementado y verificado | `.gitignore` omite `backup-*/`, `.vercel/`, `.env*`, cachés y dependencias locales. Los cuatro respaldos continúan en la carpeta de trabajo pero no están versionados. No se detectaron archivos `.env` ni claves por nombre en el inventario local. |
| Gestionar videos grandes | Implementado y verificado | Git LFS está instalado (3.7.1), `.gitattributes` aplica LFS a `*.mp4`, ocho objetos se subieron (352 MB reportados por Git LFS) y `git lfs fsck` pasó. GitHub Free incluye 10 GiB de almacenamiento y transferencia LFS; no se comprobó el saldo actual de la cuenta. |
| Autenticación local segura | Implementado y verificado | Git Credential Manager identificó la cuenta `alejodsn`. Este repositorio usa el almacén DPAPI cifrado; una excepción global `safe.directory` se limitó a esta carpeta exacta por la propiedad del `.git` de la cuenta aislada de Codex. No se instalaron GitHub CLI ni dependencias del portafolio. |
| Vista previa automática | Implementado y verificado parcialmente | GitHub muestra el estado Vercel `success` para `b59093d` y para el posterior commit documental `0d800e8`. Vista previa: `https://portafolio-git-codex-integracion-inicial-alejo-dsn.vercel.app/`; al consultarla sin sesión, responde con la pantalla de inicio de sesión de Vercel, por lo que no se verificó el contenido renderizado ni la reproducción de medios desde esa URL. |
| Proyecto de producción y LFS en Vercel | Pendiente de comprobación | El dominio de producción respondió HTTP 200 con «Portafolio en Construcción», igual que el `index.html` de `main`, y el check Vercel de ese commit está en `success`. No se tuvo acceso de lectura al panel para confirmar la rama de producción ni si el proyecto tiene habilitada la descarga de objetos LFS. No se cambió ninguna configuración de Vercel. |

### Comprobaciones de la integración

- Git 2.53.0, Git LFS 3.7.1 y Git Credential Manager 2.7.3 disponibles en el entorno local. `gh` no está instalado ni se necesitó.
- Push terminado en `origin/codex/integracion-inicial`; el branch local sigue el remoto, está limpio y `git ls-remote` confirmó el SHA remoto. `git lfs fsck` pasó sin objetos pendientes.
- `node scripts/validate-portfolio-media.cjs`: pasó; 19 proyectos, 64 referencias, 8 videos, 5 PDF y rutas presentes. Seis comprobaciones `node --check` pasaron para aplicación, catálogo, manifiesto, scripts y servidor.
- Servidor local en `http://127.0.0.1:8002/`: portada y `privacy.html` respondieron HTTP 200; el título de la portada coincide con el portafolio local.
- La vista previa Vercel requiere acceso autenticado. Los despliegues de ramas no modifican producción; no se abrió un PR, no se fusionó a `main` y no se ejecutó un despliegue manual.
