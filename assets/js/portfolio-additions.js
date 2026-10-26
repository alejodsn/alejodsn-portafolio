const EXTRA_ASSET_OVERRIDES = {
  satel1: 'src-satel-pieza-muestra-png',
  satel2: 'src-satel-rent-a-car-banner-08-png',
  satel3: 'src-satel-protege-lo-que-te-costo-tanto-png'
};
const extraImage = (key, title, detail, format = 'Pieza digital') => ({
  assetId: `image:${key}`, kind: 'image', src: `assets/img/extra/full/${key}.webp`, thumb: `assets/img/extra/thumb/${key}.webp`,
  title, detail, format, alt: title
});
const videoFallbackPoster = label => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#21143b"/><stop offset="1" stop-color="#5424b8"/></linearGradient></defs><rect width="1200" height="800" fill="url(#g)"/><circle cx="600" cy="330" r="92" fill="#ffffff" fill-opacity=".13"/><path d="M570 276v108l92-54z" fill="#fff"/><text x="600" y="510" fill="#c4b5fd" font-family="Arial,sans-serif" font-size="28" font-weight="700" text-anchor="middle" letter-spacing="7">VIDEO</text><text x="600" y="574" fill="#fff" font-family="Arial,sans-serif" font-size="34" font-weight="600" text-anchor="middle">${String(label).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[ch]))}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(xml)}`;
};
const extraVideo = (source, posterKey, title, detail, format = 'Video') => ({
  assetId: `video:${source.toLowerCase()}`, kind: 'video', src: encodeURI(`assets/media/${source}`),
  poster: posterKey ? `assets/img/extra/full/${posterKey}.webp` : videoFallbackPoster(title),
  thumb: posterKey ? `assets/img/extra/thumb/${posterKey}.webp` : videoFallbackPoster(title), posterFallback: !posterKey, title, detail, format, alt: title
});
const extraPdf = (source, preview, title, detail, format = 'PDF · documento multipágina') => ({
  assetId: `pdf:${source.toLowerCase()}`, kind: 'pdf', src: encodeURI(source),
  thumb: `assets/img/extra/thumb/${preview}.webp`, title, detail, format, alt: title
});
const EXTRA_PROJECTS = [
  {
    attachTo: 'brandbook',
    docs: [{ label: 'Abrir el Brand Book completo en PDF', href: 'assets/media/Brand-Book-Procinal_compressed.pdf' }],
    slides: [extraPdf('assets/media/Brand-Book-Procinal_compressed.pdf', 'pdf-brand-book-procinal-compressed-p01', 'Brand Book completo · 21 páginas', 'Documento original integrado en el visor; recorre sus páginas con desplazamiento vertical.', 'PDF · 21 páginas')],
    revisedTitle: 'Brand Book de Cinemas Procinal',
    revisedShort: 'Manual de identidad con lineamientos de tono, color, tipografía, fotografía y aplicaciones.'
  },
  {
    attachTo: 'rappi',
    slides: [
      extraImage('src-domicilios-rappi-2-2024-png', 'Domicilios Procinal × Rappi · Hoy me acabo la serie', 'Pieza vertical que convierte el plan de quedarse viendo una serie en el gancho para pedir confitería a domicilio.', 'Historia · 9:16'),
      extraImage('src-rappi-2-domicilios-rappi-v3-1-png', 'Domicilios Rappi · Último capítulo', 'Variación de campaña que relaciona el último capítulo con una orden para acompañar la maratón.', 'Historia · 9:16'),
      extraImage('src-rappi-2-domicilios-rappi-v3-2-png', 'Domicilios Rappi · Nueva temporada', 'Segunda escena de la serie: cambia el momento de consumo y conserva la composición y el tono de campaña.', 'Historia · 9:16'),
      extraImage('src-rappi-2-domicilios-rappi-v3-3-png', 'Domicilios Rappi · Maratón', 'Tercera variación vertical con el mismo sistema de campaña para presentar la confitería en casa.', 'Historia · 9:16')
    ]
  },
  {
    attachTo: 'cafe',
    slides: [
      extraImage('src-el-cafe-historia-1-cafe-cinema-renovado-san-nicolas-png', 'Café del Cinema · Renovación en San Nicolás', 'Historia vertical para anunciar la renovación del Café del Cinema con producto, textura cálida y ubicación.', 'Historia · 9:16'),
      extraVideo('el-cafe/teatro-cafe-cinema-renovado-san-nicolas.mp4', 'src-el-cafe-historia-1-cafe-cinema-renovado-san-nicolas-png', 'Café del Cinema · Video de renovación', 'Pieza audiovisual de la renovación del café, presentada junto con la historia gráfica del mismo proyecto.', 'Video · MP4')
    ]
  },
  {
    attachTo: 'satel',
    slides: [
      extraImage('src-satel-rent-a-car-banner-08-jpg', 'SATEL · Protección para SUV', 'Banner cuadrado con una camioneta como protagonista, el sistema de rastreo y una llamada de contacto.', 'Pieza digital · 1:1'),
      extraVideo('satel/Presentación3-pista2.mp4', 'src-satel-pieza-muestra-png', 'SATEL · Presentación del servicio', 'Video de presentación asociado a la oferta de rastreo satelital de SATEL.', 'Video · MP4'),
      extraVideo('satel/protege-tu-vehiculo-2023-07-02.mp4', 'src-satel-protege-lo-que-te-costo-tanto-png', 'SATEL · Protege tu vehículo', 'Pieza audiovisual sobre protección vehicular que amplía la campaña gráfica de moto y auto.', 'Video · MP4'),
      extraVideo('satel/video-carro.mp4', 'src-satel-rent-a-car-banner-08-jpg', 'SATEL · Video de vehículo', 'Contenido audiovisual de vehículo integrado al grupo de piezas de rastreo SATEL.', 'Video · MP4')
    ]
  },
  {
    attachTo: 'promo', revisedTitle: 'Promociones de Cinemas Procinal Monterrey',
    revisedShort: 'Piezas de beneficios, tarifas y preventa para distintos públicos de Procinal Monterrey.',
    slides: [
      extraImage('src-procinal-monterrey-promo-clientes-monterrey-png', 'Procinal Monterrey · Beneficio para clientes', 'Afiche con el beneficio de una boleta de cine y una secuencia breve de condiciones de la promoción.', 'Afiche · vertical'),
      extraImage('src-procinal-monterrey-promo-empleados-monterrey-v2-jpg', 'Procinal Monterrey · Promoción para empleados', 'Adaptación de la campaña 2×1 para empleados, con jerarquía de oferta y condiciones.', 'Afiche · vertical'),
      extraImage('src-procinal-monterrey-promo-tarifas-monterrey-jpg', 'Procinal Monterrey · Tarifas de preventa', 'Pieza de cartelera que organiza películas, tarifas y llamado a preventa en un formato vertical.', 'Afiche · vertical'),
      extraImage('src-procinal-monterrey-promo-tarifas-preventa-monterrey-v2-png', 'Procinal Monterrey · Preventa de película', 'Adaptación de preventa para una película, con la tarifa y el mensaje principal destacados.', 'Afiche · vertical')
    ]
  },
  {
    id: 'milenio-campaigns', cat: ['social'], cover: 'x:src-campanas-milenio-mes-de-los-dulces-2026-cw-png', pos: '50% 50%',
    type: 'Campañas · Contenido digital', title: 'Campañas de Milenio', short: 'Piezas para convenios, formación, beneficios y actividades de 2025–2026.',
    q: 'Una identidad flexible para hablar de muchos temas.', fmt: 'Piezas digitales · formatos cuadrados y verticales', client: 'Milenio Fondo de Empleados',
    pal: ['#38A74A', '#5A238C', '#F7F5EF', '#F1B4CB'],
    s: [['La idea', 'Reunir campañas distintas bajo una misma identidad, dando a cada tema un recurso visual reconocible y una jerarquía propia.'], ['Decisiones de diseño', 'Fotografía, ilustración y bloques de color cambian según el mensaje; la firma y los recursos de Milenio conectan las piezas.'], ['Por qué funciona', 'El sistema mantiene reconocimiento entre publicaciones de bienestar, educación, convenios, cursos y entretenimiento.']],
    slides: [
      extraImage('src-campanas-milenio-actu-datos-bono-regalo-2026-cw-png', 'Bono regalo · Actualización de datos', 'Invitación a actualizar datos, con retrato monocromático, acentos verdes y morados y una caja de regalo como apoyo visual.', 'Pieza digital · 1:1'),
      extraImage('src-campanas-milenio-cineprox-popsy-cw-png', 'CineProx × Popsy · Plan de cine', 'Pieza de convenio que combina las marcas y presenta beneficios alrededor de una salida a cine.', 'Pieza digital · 1:1'),
      extraImage('src-campanas-milenio-compra-cartera-match-cw-png', 'Compra de cartera · Match', 'Visualiza el producto financiero mediante una escena cotidiana y una pantalla móvil que destaca la tasa.', 'Pieza digital · 1:1'),
      extraImage('src-campanas-milenio-convenio-andar-byd-2026-cw-png', 'Convenio Andar × BYD', 'Presentación de convenio con el vehículo como foco y el descuento como primer nivel de lectura.', 'Pieza digital · 1:1'),
      extraImage('src-campanas-milenio-credito-libre-inversion-2026-cw-png', 'Crédito de libre inversión', 'Pieza informativa con una persona como protagonista y los datos principales del crédito agrupados en una franja inferior.', 'Pieza digital · 1:1'),
      extraImage('src-campanas-milenio-curso-barberia-2026-cw-png', 'Curso de barbería', 'Promoción del curso con retrato, herramienta y valor de inscripción en alto contraste.', 'Pieza digital · 1:1'),
      extraImage('src-campanas-milenio-curso-maquillaje-2026-pi-png', 'Curso de maquillaje', 'Formato vertical que usa un primer plano de maquillaje para abrir la pieza y ubica fecha y valor en módulos de color.', 'Pieza digital · 4:5'),
      extraImage('src-campanas-milenio-feria-movilidad-2026-cw-png', 'Feria de movilidad', 'Invitación a la feria con vehículos, fotografías de personas y datos de fecha y lugar organizados al pie.', 'Pieza digital · 1:1'),
      extraImage('src-campanas-milenio-mes-de-los-dulces-2026-cw-png', 'Mes de los dulces', 'Campaña de temporada con personajes ilustrados, una paleta festiva y la información del evento en una grilla.', 'Pieza digital · 1:1'),
      extraImage('src-campanas-milenio-miniferia-salud-vid-2026-cw-png', 'Miniferia Salud Vida', 'Pieza de evento que combina retratos y bloques informativos para presentar actividades y productos de bienestar.', 'Pieza digital · 1:1'),
      extraImage('src-campanas-milenio-post-curso-asados-barril-2025-cw-png', 'Curso de asados al barril', 'Promoción del curso con fotografía del instructor, el plato como centro visual y la información práctica en tarjetas.', 'Pieza digital · 1:1'),
      extraImage('src-campanas-milenio-ruta-cafe-jardin-2026-2-cw-png', 'Ruta del Café en Jardín', 'Pieza turística que usa el café y el paisaje como imagen principal y organiza valor, salida y recorrido.', 'Pieza digital · 1:1')
    ]
  },
  {
    id: 'milenio-insolvencia', cat: ['social'], cover: 'x:src-carrusel-insolvencia-mln-insolvencia-mln-1-png', pos: '50% 50%',
    type: 'Carrusel · Educación financiera', title: 'Carrusel sobre insolvencia', short: 'Ocho piezas que introducen preguntas y alternativas de acompañamiento financiero.',
    q: 'Una secuencia informativa que invita a detenerse y conversar.', fmt: 'Carrusel · 8 piezas verticales', client: 'Milenio Fondo de Empleados',
    pal: ['#6942A6', '#2E7E48', '#F2F1E9', '#EACB45'],
    s: [['La idea', 'Desarrollar una secuencia en ocho pasos que plantea una inquietud, presenta contexto y cierra con una invitación a buscar orientación.'], ['Decisiones de diseño', 'Titulares grandes, notas sobre papel, cadenas como metáfora y variaciones de verde y morado guían el recorrido.'], ['Por qué funciona', 'Cada lámina presenta una sola idea y deja una señal visual para continuar a la siguiente.']],
    slides: [
      extraImage('src-carrusel-insolvencia-mln-insolvencia-mln-1-png', '01 · Una decisión que puede afectar tu futuro', 'Portada de la secuencia: abre el tema con una pregunta y una nota manuscrita.', 'Carrusel · 1/8'),
      extraImage('src-carrusel-insolvencia-mln-insolvencia-mln-2-png', '02 · La realidad de declararse insolvente', 'Introduce el tema con una expresión de duda y una frase que invita a informarse.', 'Carrusel · 2/8'),
      extraImage('src-carrusel-insolvencia-mln-insolvencia-mln-3-png', '03 · ¿Por qué se considera esta opción?', 'Expone motivos frecuentes en tarjetas ilustradas alrededor de la pregunta principal.', 'Carrusel · 3/8'),
      extraImage('src-carrusel-insolvencia-mln-insolvencia-mln-4-png', '04 · Antes de tomar la decisión', 'Metáfora de una cadena y una lista de aspectos que propone revisar antes de decidir.', 'Carrusel · 4/8'),
      extraImage('src-carrusel-insolvencia-mln-insolvencia-mln-5-png', '05 · Milenio está contigo', 'Presenta el acompañamiento mediante una escena de orientación y escucha.', 'Carrusel · 5/8'),
      extraImage('src-carrusel-insolvencia-mln-insolvencia-mln-6-png', '06 · Alternativa de compra de cartera', 'Introduce una alternativa financiera en una composición de tarjetas y datos.', 'Carrusel · 6/8'),
      extraImage('src-carrusel-insolvencia-mln-insolvencia-mln-7-png', '07 · Avanzar con más tranquilidad', 'Cierra el bloque informativo con una guía visual que ordena la idea de recuperación financiera.', 'Carrusel · 7/8'),
      extraImage('src-carrusel-insolvencia-mln-insolvencia-mln-8-png', '08 · Hablemos antes de decidir', 'Cierre con invitación de contacto y el sistema gráfico de Milenio.', 'Carrusel · 8/8')
    ]
  },
  {
    id: 'milenio-navidad', cat: ['social'], cover: 'x:src-milenio-feria-navidena-feria-navidena-milenio-2026-cw-png', pos: '50% 50%',
    type: 'Campaña · Evento y video', title: 'Feria Navideña de Milenio', short: 'Una campaña de temporada adaptada a tres formatos y una pieza audiovisual.',
    q: 'Un mismo evento contado en formatos distintos.', fmt: 'Cuadrado, vertical, historia y video', client: 'Milenio Fondo de Empleados', pal: ['#146C54', '#E51D27', '#F6D343', '#F5F1E8'],
    s: [['La idea', 'Invitar a la Feria Navideña y reunir marcas, fechas y actividades en una campaña de temporada.'], ['Decisiones de diseño', 'Luces, compras y color festivo construyen el ambiente; la jerarquía deja visibles el evento y su información práctica.'], ['Por qué funciona', 'Las adaptaciones conservan la misma identidad y acomodan el contenido a cada relación de aspecto.']],
    slides: [
      extraImage('src-milenio-feria-navidena-feria-navidena-milenio-2026-cw-png', 'Feria Navideña · Cuadrado', 'Adaptación cuadrada con fotografía, marcas aliadas y datos de las jornadas.', 'Pieza digital · 1:1'),
      extraImage('src-milenio-feria-navidena-feria-navidena-milenio-2026-ew-png', 'Feria Navideña · Historia vertical', 'Versión 9:16 con la misma imagen y la información reorganizada para pantalla móvil.', 'Historia · 9:16'),
      extraImage('src-milenio-feria-navidena-feria-navidena-milenio-2026-pi-png', 'Feria Navideña · Formato 4:5', 'Adaptación vertical de feed con una jerarquía compacta para el evento y sus fechas.', 'Pieza digital · 4:5'),
      extraVideo('milenio-feria-navideña/prom-feria-nvd-mln-2026.mp4', 'src-milenio-feria-navidena-feria-navidena-milenio-2026-cw-png', 'Feria Navideña · Video', 'Pieza audiovisual de la misma campaña de temporada.', 'Video · MP4')
    ]
  },
  {
    id: 'milenio-video', cat: ['social'], cover: null, coverSrc: videoFallbackPoster('Videos de Milenio'), pos: '50% 50%',
    type: 'Audiovisual · Educación financiera', title: 'Videos de Milenio', short: 'Dos piezas audiovisuales sobre crédito y apoyo educativo.',
    q: 'Información práctica llevada a movimiento.', fmt: 'Video · MP4', client: 'Milenio Fondo de Empleados', pal: ['#3AA64A', '#5D1D89', '#F5F3EC', '#35323B'],
    s: [['La idea', 'Ampliar la comunicación de productos y programas de Milenio a través de piezas audiovisuales.'], ['Decisiones de diseño', 'Cada video intenta generar una portada desde un fotograma propio; si el navegador no puede extraerlo, muestra una portada neutral identificada como video.'], ['Por qué funciona', 'El movimiento permite presentar información en una secuencia narrativa y en un formato distinto a las publicaciones estáticas.']],
    slides: [
      extraVideo('videos/credito-edu-mln.mp4', null, 'Crédito educativo · Video', 'Pieza audiovisual identificada como crédito educativo en los archivos originales.', 'Video · MP4'),
      extraVideo('videos/aux-edu-ml.mp4', null, 'Auxilio educativo · Video', 'Pieza audiovisual identificada como auxilio educativo en los archivos originales.', 'Video · MP4')
    ]
  },
  {
    id: 'cinefans-video', cat: ['social'], cover: null, coverSrc: videoFallbackPoster('CineFans 2024'), pos: '50% 50%',
    type: 'Audiovisual · Cine', title: 'CineFans 2024', short: 'Pieza audiovisual de la experiencia CineFans.',
    q: 'Una pieza en movimiento para una experiencia de cine.', fmt: 'Video · MP4', client: 'Cinemas Procinal', pal: ['#2D123D', '#EF6D37', '#F6D63D', '#F7F2E8'],
    s: [['La idea', 'Llevar la comunicación de CineFans a un formato audiovisual.'], ['Decisiones de diseño', 'La portada se extrae del propio video cuando el navegador lo admite; si no, queda una composición neutral rotulada como video.'], ['Por qué funciona', 'El movimiento permite presentar la experiencia más allá de una pieza estática.']],
    slides: [extraVideo('videos/cinefans2024.mp4', null, 'CineFans · Video 2024', 'Video de CineFans 2024 conservado como pieza audiovisual independiente.', 'Video · MP4')]
  },
  {
    id: 'daniela-buitrago', cat: ['branding'], cover: 'x:src-marca-personal-daniela-buitrago-evento-reinicia-reinicia-poster-png', pos: '50% 22%',
    type: 'Branding · Marca personal y evento', title: 'Daniela Buitrago · Identidad y Reinicia', short: 'Moodboard, sistema para redes y una identidad de evento.',
    q: 'Una marca personal y una experiencia con un mismo criterio visual.', fmt: 'Identidad, piezas sociales y póster', client: 'Daniela Buitrago', pal: ['#BDC7CF', '#131314', '#95835D', '#FFF6EB', '#525D6C'],
    s: [['La idea', 'Explorar la identidad personal y una propuesta visual para el evento Reinicia.'], ['Decisiones de diseño', 'El moodboard define una atmósfera editorial; el póster usa una fotografía central y una paleta de azul grisáceo, negro, dorado y marfil.'], ['Por qué funciona', 'Las piezas reúnen una dirección visual reconocible entre exploración de marca, redes y comunicación de evento.']],
    docs: [{ label: 'Abrir identidad del evento Reinicia en PDF', href: 'assets/media/marca-personal-Daniela-Buitrago/evento-reinicia/Identidad-evento-Reinicia.pdf' }],
    slides: [
      extraImage('src-marca-personal-daniela-buitrago-moodboard-identidad-daniela-buitrago-png', 'Moodboard · Identidad personal', 'Tablero vertical de referencias para definir la atmósfera, el color y el lenguaje visual.', 'Moodboard'),
      extraImage('src-marca-personal-daniela-buitrago-feed-daniela-buitrago-png', 'Sistema para feed social', 'Composición de publicaciones que explora fotografía, titulares, frases y recursos gráficos en conjunto.', 'Feed social'),
      extraImage('src-marca-personal-daniela-buitrago-evento-reinicia-reinicia-poster-png', 'Reinicia · Póster', 'Póster vertical con retrato en silueta, tipografía editorial y paleta azul grisácea con acento dorado.', 'Póster · vertical'),
      extraPdf('assets/media/marca-personal-Daniela-Buitrago/evento-reinicia/Identidad-evento-Reinicia.pdf', 'pdf-identidad-evento-reinicia-p01', 'Reinicia · Documento de identidad', 'Documento original abierto dentro del visor del proyecto.', 'PDF · identidad de evento')
    ]
  },
  {
    id: 'procinal-web', cat: ['web'], cover: 'x:pdf-interfaz-procinal-desktop-p01', pos: '50% 15%',
    type: 'Diseño de interfaz · Web', title: 'Interfaz web de Cinemas Procinal', short: 'Propuesta de escritorio y adaptación móvil para el sitio de Procinal.',
    q: 'La experiencia de cine, organizada para descubrir y elegir.', fmt: 'Diseño web · escritorio y móvil', client: 'Cinemas Procinal', pal: ['#D71920', '#1B1532', '#F5F2EB', '#FFFFFF'],
    s: [['La idea', 'Organizar cartelera, novedades y acceso a la experiencia de cine en un sitio de marca.'], ['Decisiones de diseño', 'La propuesta combina un hero de campaña, navegación, módulos de películas y contenido promocional; se presentan las versiones de escritorio y móvil.'], ['Por qué funciona', 'Las dos vistas permiten revisar cómo cambia la jerarquía entre una página amplia y una pantalla larga para teléfono.']],
    docs: [
      { label: 'Diseño de escritorio (PDF)', href: 'assets/media/interfaz-web-procinal/interfaz-procinal-desktop.pdf' },
      { label: 'Diseño móvil (PDF)', href: 'assets/media/interfaz-web-procinal/interfaz-procinal-movil.pdf' }
    ],
    slides: [
      extraPdf('assets/media/interfaz-web-procinal/interfaz-procinal-desktop.pdf', 'pdf-interfaz-procinal-desktop-p01', 'Interfaz · Escritorio', 'Documento original de la propuesta de escritorio. Desplázate por el diseño completo dentro del visor.', 'PDF · escritorio'),
      extraPdf('assets/media/interfaz-web-procinal/interfaz-procinal-movil.pdf', 'pdf-interfaz-procinal-movil-p01', 'Interfaz · Móvil', 'Documento original con la propuesta móvil completa; desplázate por sus secciones dentro del visor.', 'PDF · móvil')
    ]
  },
  {
    id: 'fenix-2025', cat: ['key-visual'], cover: 'x:pdf-portafolio-fenix-2025-p01', pos: '50% 50%',
    type: 'Diseño editorial · Portafolio', title: 'Portafolio de servicios Fenix 2025', short: 'Presentación editorial de seguridad, tecnología y servicio especializado.',
    q: 'Tecnología y seguridad contadas desde las personas.', fmt: 'Documento editorial · 10 páginas', client: 'Fenix Seguridad Electrónica', pal: ['#BD171D', '#26272A', '#F4F1E9', '#6D7378'],
    s: [['La idea', 'Presentar servicios y sectores atendidos con un recorrido visual que combina tecnología, equipo y cobertura.'], ['Decisiones de diseño', 'Fotografía de instalaciones y personas, titulares breves, iconos y acentos rojos organizan la información por página.'], ['Por qué funciona', 'La secuencia alterna servicio, sector y equipo técnico para dar ritmo a una presentación corporativa.']],
    docs: [{ label: 'Abrir Portafolio Fenix 2025 en PDF', href: 'assets/media/portafolio-fenix-2025.pdf' }],
    slides: [extraPdf('assets/media/portafolio-fenix-2025.pdf', 'pdf-portafolio-fenix-2025-p01', 'Portafolio Fenix 2025 · 10 páginas', 'Documento original integrado al visor. Desplázate para recorrer la presentación completa.', 'PDF · 10 páginas')]
  }
];
