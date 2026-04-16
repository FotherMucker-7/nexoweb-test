export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  description: string; // For meta tags
  heroImage: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "deja-de-vender-en-terreno-prestado",
    title: "Deja de vender en terreno prestado: por qué tu negocio necesita una web propia en 2026",
    excerpt: "Si hoy vendes por redes, no estás haciendo algo \"mal\". El problema aparece cuando eso se vuelve el plan completo.",
    description: "Descubre por qué depender exclusivamente de las redes sociales es un riesgo para tu negocio en 2026 y cómo una web propia te da el control total de tus ventas y datos.",
    heroImage: "/assets/blog/web-propia-2026.webp",
    content: `# Deja de vender en terreno prestado: por qué tu negocio necesita una web propia en 2026

Imagínate esto: te levantas, miras el teléfono y ves que tu cuenta de Instagram quedó suspendida “por revisión”. No sabes cuándo vuelve. No sabes con quién hablar. Y lo peor: ese canal era tu vitrina y tu caja.

Si hoy vendes por redes, no estás haciendo algo “mal”. De hecho, es donde empieza mucha gente. El problema aparece cuando eso se vuelve el plan completo.

En 2026, tener una web propia ya no es un lujo ni una tarjeta de presentación. Es tu base: un lugar que controlas, donde tus ventas, tus datos y tu mensaje no dependen del humor de una plataforma.

## El problema no son las redes: es depender de ellas

Las redes sirven para descubrirte. Para entretener. Para mantenerte en la cabeza de la gente. Pero son un piso inestable si ahí también quieres cerrar ventas, medir bien y construir una relación que dure.

Dos cosas pasan todo el tiempo:

- Un cambio de algoritmo te baja el alcance y no hay “reclamo”.
- Un bloqueo (por error o por reporte) te deja afuera justo cuando más necesitas estar dentro.

Y aunque todo salga bien, sigues jugando con información prestada: métricas que cambian, audiencias que no puedes exportar y conversaciones que se pierden entre mensajes.

## Privacidad, medición y anuncios: el suelo se movió

La tendencia es clara: cada año hay más restricciones de privacidad y menos señal para medir campañas con precisión fuera de tu sitio. Eso encarece la publicidad y hace más difícil saber qué funcionó y qué no.

Cuando todo vive en redes, tu “base de datos” no es tuya. Si mañana cambian las reglas, pierdes historial, contexto y parte del trabajo.

## Qué te da una web propia (lo concreto)

No se trata de abandonar redes. Se trata de usarlas para llevar gente a tu casa digital. Una web bien hecha te da ventajas que se notan en el día a día:

- **Datos tuyos (first‑party):** correos, formularios, compras, comportamiento. Exportable. Ordenado.
- **Ventas y agenda sin estar pegado al teléfono:** pagos, reservas, preguntas frecuentes, automatizaciones simples.
- **Búsqueda real:** SEO para quienes ya están buscando lo que vendes, y contenido que se puede citar en asistentes de IA si está claro y bien estructurado.
- **Confianza cuando vendes servicios:** para B2B, una web sigue siendo el filtro básico de “esto es serio”.

## Redes sociales vs. web propia: lo que cambia de verdad

| Factor | Redes sociales | Web propia |
| --- | --- | --- |
| Control de la audiencia | La plataforma manda | Tú mandas (y exportas) |
| Intención del usuario | Scroll, ocio, curiosidad | Búsqueda, decisión, compra |
| Visibilidad | Depende del algoritmo | SEO + enlaces + contenido evergreen |
| Riesgo operativo | Bloqueos, cambios, alcance | Depende de tu hosting y tu dominio |
| Automatización | Limitada (y rara vez a tu favor) | Flujos claros: pago, agenda, soporte |

## Ojo con esto: una web mala también te frena

“Tener web” no alcanza. Si tu sitio es pesado, confuso o difícil de usar en celular, te hace perder oportunidades igual que un local con la puerta trabada.

Lo típico que vemos:

- plantillas recicladas que cargan lento,
- textos genéricos que no dicen nada,
- formularios que no se entienden,
- accesibilidad tratada como un parche.

## Cómo lo abordamos en NexoWeb

Trabajamos para que tu web sea una herramienta, no un adorno. En la práctica, esto se traduce en cosas simples:

- **Accesibilidad desde el código:** no “botoncitos mágicos” encima del sitio.
- **Estructura clara para buscadores y respuestas rápidas:** títulos bien jerarquizados, secciones cortas, tablas cuando aportan.
- **Rendimiento en móvil:** que cargue rápido en el teléfono real de tu cliente.
- **Autonomía:** que puedas cambiar textos, precios o imágenes sin quedarte amarrado a soporte.

## Preguntas frecuentes

**¿Si ya vendo por redes, igual me conviene una web?** Sí, sobre todo si quieres estabilidad. Las redes te traen gente; la web te permite convertir con calma y sin depender de un mensaje directo.

**¿Las redes reemplazan el SEO?** No. Las redes ayudan a descubrir. El SEO capta a quien ya está buscando comprar o comparar.

**¿Cómo hago para que mi contenido aparezca en ChatGPT o Perplexity?** No hay un botón. Lo que ayuda es contenido específico, bien ordenado, con respuestas directas y datos verificables cuando aplica.

**¿Es difícil administrar una web?** Depende de cómo esté hecha. Con una estructura simple y un panel decente, actualizarla puede ser parte de tu rutina sin volverte loco.

Si quieres, cuéntame qué vendes y dónde estás vendiendo hoy. Te digo qué tendría sentido armar primero y qué no vale la pena.`
  },

  {
    slug: "accesibilidad-web-chile-ley-20422-wcag",
    title: "Accesibilidad web en Chile: qué exigen WCAG 2.1 AA y la Ley 20.422",
    excerpt: "En Chile y el mundo, la accesibilidad web ya dejó de ser “un extra bonito”.",
    description: "Resumen claro y breve para entender accesibilidad web en Chile: WCAG 2.1 AA, el marco de la Ley 20.422 y el DS N°1 (2015), qué significa para proyectos públicos/privados, y por dónde empezar.",
    heroImage: "/assets/blog/web-accesible-2026.webp",
    content: `# Accesibilidad web en Chile: qué exigen WCAG 2.1 AA y la Ley 20.422

Imagina abrir tu negocio físico y bloquearle la puerta principal al 16% de los clientes. Suena a locura, pero en el mundo digital ocurre todos los días. Hoy, el 94,8% de las páginas de inicio a nivel mundial fallan en pruebas básicas de accesibilidad.

Haz la prueba. Abre tu web, deja el mouse a un lado y muévete solo con teclado. Si te pierdes, si no sabes dónde está el foco o si no puedes completar un formulario, ahí está el problema. No en teoría. En ventas, en trámites, en gente que se va.

## Qué es accesibilidad web (en una frase)

Que tu sitio se pueda usar de verdad por personas con distintas capacidades y contextos: teclado, lector de pantalla, baja visión, movilidad reducida, celular viejo, señal mala. Es usabilidad. Lo demás es adorno.

## El estándar que te van a pedir: WCAG 2.1 AA

Cuando una institución, una licitación o un equipo legal habla de accesibilidad, casi siempre está apuntando a **WCAG 2.1 nivel AA** (W3C). Es el checklist técnico para decir “cumple / no cumple”.

El mundo ha acordado que el "Nivel AA" de la versión 2.1 es la meta a cumplir. No requiere reinventar la rueda, sino aplicar buenas prácticas de diseño:

- **Teclado primero:** menús, modales, carrito, pago y formularios se completan con Tab/Enter.
- **Contraste y legibilidad:** Asegurar un contraste de color mínimo (4.5:1) para que el texto y botones se lean bien en móvil, incluso con sol.
- **Nombres claros:** botones con iconos, campos y mensajes de error tienen etiquetas entendibles (para personas y para lectores de pantalla).

## Chile: Ley 20.422, DS N°1 (2015) y por qué importa aunque no seas “Estado”

La **Ley 20.422** establece el marco de igualdad de oportunidades e inclusión. En lo digital, el empuje más directo está en el **Decreto Supremo N°1 (2015)**, que obliga a sitios y plataformas del sector público a cumplir con accesibilidad universal.

¿Y si eres privado? Dos cosas:

- Si trabajas con sector **público** (o quieres entrar), te lo van a exigir.
- Si tu servicio es **transversal** (educación, salud, finanzas, e‑commerce), la accesibilidad deja de ser “opcional” en la práctica.

Si piensas que esto es letra muerta, te equivocas. Los tribunales ya están actuando. Recientemente, la Corte de Apelaciones de Santiago condenó a una municipalidad al pago de costas y multas por no cumplir con el principio de accesibilidad universal en sus instalaciones y servicios, tipificándolo como un acto de discriminación arbitraria. No es un “capricho de diseño”. Tiene peso.

## Checklist mínimo (si no haces esto, vas tarde)

- Se puede llegar a todo con **teclado** y el foco se ve.
- Los títulos están bien **jerarquizados** (H1, H2, H3) y no son puro diseño.
- Formularios con labels **claros** y errores que explican qué pasó.
- Botones y enlaces con nombre **claro** (no “clic aquí”, no solo iconos).
- **Contraste** decente en texto, botones y estados (hover/focus/disabled).
- **Componentes** interactivos anuncian su estado (abierto/cerrado, seleccionado/no).

## El tsunami regulatorio: EAA y ADA Title II

El verdadero riesgo para las empresas latinoamericanas viene de la globalización de sus servicios. Si tu web vende en mercados internacionales, juegas con reglas internacionales.

### European Accessibility Act (EAA)

Desde el 28 de junio de 2025, la Ley Europea de Accesibilidad exige a todo el sector privado (e-commerce, bancos, plataformas SaaS) cumplir con el estándar WCAG 2.1 AA. Y el cumplimiento se vigila con dureza: en Francia, organizaciones civiles demandaron a gigantes como Carrefour y Auchan porque sus procesos de pago excluían a usuarios ciegos.

**Dato clave:** La EAA no mira dónde está registrada tu empresa. Si tu negocio en Chile o LATAM le vende a usuarios en Europa, la ley te aplica. Las multas pueden llegar a 3 millones de euros o el 5% de tu facturación anual.

### ADA Title II (Estados Unidos)

El Departamento de Justicia de EE. UU. actualizó sus reglas, fijando el 24 de abril de 2026 como fecha límite para que los gobiernos estatales y locales (y los proveedores que construyen sus plataformas) cumplan obligatoriamente con WCAG 2.1 AA.

## Cómo lo hacemos en NexoWeb

En **NexoWeb** trabajamos la accesibilidad como parte del desarrollo, no como parche con "botones de accesibilidad":

- Escribimos el código desde cero,
- Revisamos WCAG 2.1 AA en tus flujos críticos
- Construimos la accesibilidad directamente en el código base.

Tu página cargará al instante, dominará en los buscadores y estará lista para ser navegada por cualquier persona, cumpliendo con los estándares modernos sin sacrificar un milímetro de diseño.

## Respuestas rápidas (AEO)

### ¿Qué es WCAG 2.1 AA?

Es el estándar técnico más usado para evaluar accesibilidad web. El nivel AA es el que normalmente piden auditorías y contratos: uso por teclado, contraste suficiente, formularios y contenido entendibles con lector de pantalla. No es “perfecto”. Es no poner barreras evitables.

### ¿Qué aplica en Chile?

Para el sector público, el DS N°1 (2015) empuja el cumplimiento de accesibilidad universal bajo el marco de la Ley 20.422. Para privados, el impacto suele entrar por exigencias de clientes, contratos, licitaciones y, en casos, por el principio de no discriminación.

### ¿Por dónde empiezo si mi web ya está publicada?

Por las páginas que más importan (home, producto/servicio, contacto, carrito/pago si aplica). Prueba teclado y lector de pantalla, arregla foco/teclado, contraste y formularios. Con eso se destraba gran parte del dolor real.`
  },

  {
slug: "ingenieria-de-la-impaciencia-velocidad-web",
title: "Ingeniería de la impaciencia: cómo cada segundo de carga destruye el 7% de tus ventas",
excerpt: "Una web lenta no solo “se siente peor”: vende menos. Así de simple.",
description: "Entiende por qué una web lenta baja conversiones, sube el rebote y arruina la experiencia: datos de conversión y rebote, una tabla resumida y las causas técnicas más comunes.",
heroImage: "/assets/blog/web-rapida-2026.webp",
content: `# Ingeniería de la impaciencia: cómo cada segundo de carga destruye el 7% de tus ventas

Imagínate esto: entras a una tienda, ya tienes el producto en la mano, vas a pagar… y el cajero se queda quieto. Te mira. Cinco... diez segundos. Nada.

¿Qué haces? Lo normal: dejas el producto y te vas.

En internet pasa lo mismo, solo que más rápido. La paciencia no se mide en minutos; se mide en milisegundos. Y a estas alturas la velocidad no es “una métrica para desarrolladores”: es el factor que define si un negocio gana o pierde dinero hoy.

Así es... una web “lenta pero bonita” suele ser un error caro.

## El costo real de la latencia (y por qué cada milisegundo cuesta dinero)

No es teoría. Empresas gigantes han medido cuánto dinero se les escapa cuando sus servidores se demoran.

Aberdeen mostró que **1 segundo** extra en el tiempo de carga reduce las conversiones en **7%**, baja las páginas vistas en **11%** y hunde la satisfacción del cliente en **16%**. Y Amazon llegó a una conclusión igual de incómoda: **100 milisegundos** adicionales de latencia le cuestan **1%** de sus ingresos.

La psicología del usuario no perdona. HubSpot miró la relación entre tiempo de carga y tasa de rebote (gente que se va sin hacer nada):

- Entre 0 y 1 segundo: la latencia casi ni se nota (**9%** de rebote).
- Entre 1 y 2 segundos: el usuario lo nota, pero aguanta (**38%** de rebote).
- Entre 2 y 3 segundos: aparece la frustración (**66%** de rebote).
- Más de 3 segundos: el abandono es casi total (**95%** de rebote).

Si tu negocio factura **100.000 dólares al mes** y tu web tarda **3 segundos** en cargar, estás dejando **decenas de miles de dólares** en la mesa por una razón ridícula: la pantalla quedó en blanco un instante más de la cuenta.

### Datos clave: impacto de la latencia en las ventas

| Retraso de carga     | Impacto documentado en el negocio                  | Fuente del dato |
| :------------------- | :------------------------------------------------- | :-------------- |
| **100 milisegundos** | Caída del **1%** en la tasa de conversión / ventas | Amazon / Google |
| **1 segundo**        | Caída del **7%** en conversiones                   | Aberdeen Group  |
| **2 segundos**       | Tasa de rebote sube al **38%**                     | HubSpot         |
| **3+ segundos**      | Tasa de rebote sube al **95%**                     | HubSpot         |

## ¿Qué ocurre detrás de la pantalla? El problema del código sucio

La mayoría de las webs lentas se parecen por una razón: cargan equipaje de más. Con plantillas prefabricadas, terminas metiendo un montón de código que tu sitio ni usa.

Para que una web sea realmente rápida y cumpla con las Core Web Vitals de Google (métricas que miden experiencia real), la base tiene que estar ordenada. Esto implica manejar conceptos técnicos que marcan diferencia:

- **TTFB (Time to First Byte):** el tiempo que tarda el navegador en recibir el primer byte desde el servidor. Si el TTFB pasa los **0.8 segundos**, toda la carga parte atrasada.
- **Tree-shaking y code splitting:** técnicas que eliminan código muerto (que no se usa) y dividen archivos para que el navegador descargue solo lo necesario.
- **Lazy loading:** retrasar la carga de imágenes o recursos pesados hasta que el usuario hace scroll y de verdad los necesita.

## Diagnóstico rápido + qué hacer para que cargue rápido (sin romperlo todo)

Si estás apurado y quieres una respuesta útil hoy, parte por ubicar el cuello de botella y atacar lo que más rinde.

1. **Imágenes:** ¿tu hero pesa más de 300–400 KB? Probablemente sí. Ahí se va LCP. Comprime y sirve bien (AVIF/WebP), usa tamaños reales y srcset (nada de subir una imagen de 4000 px para mostrarla a 900).
2. **JavaScript:** ¿tu sitio descarga megas en JS para mostrar una página simple? Ahí se te muere INP. Quita dependencias, divide bundles (code splitting) y carga diferido lo que no es crítico.
3. **Fuentes y CSS:** ¿tienes varios archivos bloqueando el render? Se siente lento incluso con buen hosting. Elimina estilos muertos y evita frameworks gigantes si usas 10 clases.
4. **Terceros:** chats, analytics, pixels, heatmaps… cada “solo es un script” suma. Deja solo lo que realmente pagas con dinero o decisiones.

La gracia es que casi siempre hay un 80/20: dos o tres cambios que se notan de inmediato. No necesitas “una re-arquitectura” para empezar. Necesitas criterio (y medir antes/después).

## Cómo lo hacemos en NexoWeb

Diseñar una web hermosa no sirve si la mitad de tus clientes se va antes de verla. En NexoWeb lo miramos así: velocidad es respeto por el tiempo de tu cliente y por el dinero de tu negocio.

Muchas agencias prometen velocidad, pero usan el mismo molde para todos. Ese código pesado y sobrecargado vuelve la web lenta en pocos meses. Nosotros lo hacemos distinto:

- Evitamos las plantillas baratas
- Levantamos la estructura escribiendo el código desde cero.
- Optimizamos la carga de recursos con buenas prácticas modernas

Deja de perder clientes por una latencia que puedes evitar. Construye tu casa propia en internet con una infraestructura técnica que vuele y te devuelva el control total de tus conversiones.

## Respuestas rápidas

### ¿Qué es el LCP (Largest Contentful Paint)?

El LCP mide cuánto tarda en cargarse el elemento visual más grande y visible de la pantalla inicial (una imagen destacada o un bloque de texto). Para que la experiencia sea buena, ese elemento clave debería aparecer completo en **menos de 2.5 segundos**.

### ¿Cómo afecta la velocidad web al SEO?

Google usa la velocidad (a través de las Core Web Vitals) como factor directo de posicionamiento. Si una web carga rápido, no “salta” y responde bien, suele recibir más tráfico orgánico porque ofrece una mejor experiencia.

### ¿Por qué las plantillas prediseñadas hacen que mi web sea lenta?

Las plantillas comerciales traen miles de líneas de código “genérico”, hechas para cubrir cientos de casos distintos. Ese exceso de CSS y JavaScript obliga al navegador a descargar y procesar cosas inútiles, bloquea la carga del contenido real y aumenta la latencia.`
}
];
