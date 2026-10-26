# alejodsn-portafolio

Portafolio web personal de Alejandro Bejarano. Sitio estático de una sola página con una sección de privacidad. Está hecho en HTML, CSS y JavaScript y no requiere compilación ni base de datos.

## Abrir localmente

En PowerShell, desde esta carpeta:

```powershell
node preview-server.cjs 8001
```

La dirección local es http://127.0.0.1:8001. Puedes cambiar `8001` por otro puerto disponible. Si no tienes Node.js, puedes abrir `index.html` directamente en el navegador; algunas funciones se prueban mejor desde un servidor local.

## Estructura

- `index.html`: perfil, habilidades, proyectos, trayectoria y contacto.
- `privacy.html`: información de privacidad correspondiente a las funciones actuales.
- `assets/css/styles.css`: estilos y adaptación a pantallas.
- `assets/js/app.js`: catálogo, filtros, galería, visor de imágenes/PDF/video, navegación y animación de habilidades.
- `assets/img/`: portadas y piezas completas disponibles.
- `assets/img/extra/`: miniaturas WebP para las galerías y las portadas de los documentos.
- `assets/img/subir/`: originales de recepción, conservados localmente e ignorados por Git.
- `assets/media/`: copias versionadas de los PDF y videos que utiliza el sitio.
- `assets/js/portfolio-additions.js`: fichas y orden de las nuevas piezas y colecciones.
- `assets/js/media-hashes.js`: manifiesto SHA-256 para evitar referencias repetidas al mismo contenido.
- `assets/vendor/pdfjs-6.3.289/`: visor PDF.js local, worker, mapas de caracteres, fuentes estándar, decodificadores y licencia Apache 2.0.
- `scripts/generate-media-hashes.cjs`: recalcula el manifiesto al incorporar recursos.
- `scripts/validate-portfolio-media.cjs`: comprueba asociaciones, archivos, documentos y duplicados.
- `_headers`: cabeceras de seguridad para plataformas estáticas compatibles con el formato de Netlify/Cloudflare Pages.
- `robots.txt`, `sitemap.xml`: base SEO local; requieren URL absoluta cuando se confirme el dominio.
- `REVISION.md`: matriz de requisitos y verificaciones.
- `backup-*/`: copias locales de recuperación, excluidas del repositorio y de los despliegues.

PDF.js es la única dependencia añadida; se sirve localmente y se carga solo al abrir un PDF. Esto mantiene la lectura de documentos dentro del modal en navegadores sin visor PDF integrado. No se añadieron solicitudes externas ni servicios de seguimiento. Las tipografías usan fuentes de sistema.

Los PDF de la galería se abren desde sus archivos originales en un visor vertical con navegación y zoom; las vistas WebP que ya existían se conservan como miniaturas. El visor multimedia reserva un área de altura estable, con miniaturas horizontales que se desplazan por separado.

Los ocho videos permanecen en su formato original y suman cerca de 352 MB. Se guardan con Git LFS para superar el límite de archivo de GitHub sin comprimir el material. No se descargan en la cuadrícula: al faltar una portada apropiada, el navegador intenta extraer un fotograma al mostrar la tarjeta y usa una portada neutral rotulada si no puede. El video completo se solicita al seleccionarlo/reproducirlo.

Al sumar recursos, conserva los originales, registra identificadores estables y vuelve a ejecutar:

```powershell
node scripts/generate-media-hashes.cjs
node scripts/validate-portfolio-media.cjs
```

La deduplicación compara hashes SHA-256 de contenido, sin descartar variantes visuales con contenido distinto. El sitio presenta las imágenes desde WebP en `assets/img/extra/`; los videos y PDF activos se sirven desde `assets/media/`. `assets/img/subir/` conserva las fuentes locales y no se sincroniza con Git.

## Contenido que requiere confirmación antes de publicar

- Definir el dominio y generar canonical, URL de Open Graph, imagen social absoluta y sitemap con esa dirección.
- Confirmar que los datos de contacto y el texto de privacidad describen las prácticas reales del sitio y su alojamiento.
- Revisar que las piezas y marcas puedan mostrarse públicamente.
- Añadir datos de referencias únicamente con autorización de cada persona.

## GitHub y Vercel

- Repositorio existente: https://github.com/alejodsn/alejodsn-portafolio
- Sitio publicado: https://portafolio-alejodsn.vercel.app/
- La sincronización inicial se prepara en la rama `codex/integracion-inicial`; no actualiza `main`.
- Vista previa actual: https://portafolio-git-codex-integracion-inicial-alejo-dsn.vercel.app/ (Vercel requiere iniciar sesión para verla).
- El commit de esta rama recibió un estado exitoso de Vercel; la rama de producción configurada aún debe confirmarse en el panel del proyecto.
- Los videos se guardan con Git LFS. Vercel debe tener habilitada la descarga de objetos LFS para que los reproductores reciban el video original en sus despliegues.

