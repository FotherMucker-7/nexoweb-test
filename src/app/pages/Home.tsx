import { Link } from "react-router";
import { ArrowRight, Code, Sparkles, Zap, AlertTriangle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { FaqAccordion } from "../components/ui/FaqAccordion";
import { SEO } from "../components/SEO";

const AWARENESS_ITEMS = [
  { label: "Webs genéricas", bad: true, detail: "Mismo molde para todos. Nadie te recuerda." },
  { label: "Sin control propio", bad: true, detail: "Dependes del algoritmo de Instagram para existir." },
  { label: "Tu espacio propio", bad: false, detail: "Tuya de verdad. Sin intermediarios. Sin sorpresas." },
];

const SERVICES_ITEMS = [
  {
    icon: Code,
    title: "Desarrollo Web",
    description: "Sitios y aplicaciones hechos a medida pensando en cómo compran tus clientes reales. Sin copias.",
    color: "var(--color-magenta)",
  },
  {
    icon: Sparkles,
    title: "Marketing Digital",
    description: "Estrategias concretas para que tu web sea el motor de crecimiento, no solo una tarjeta virtual.",
    color: "var(--color-cyan)",
  },
  {
    icon: Zap,
    title: "Automatizaciones",
    description: "Herramientas que trabajan mientras duermes. Ahorra tiempo sin perder el trato humano.",
    color: "var(--color-lime)",
  },
];

const FAQ_ITEMS = [
  {
    q: "¿Por qué necesito una web si ya vendo bien por redes sociales?",
    a: "Vender solo por Instagram o TikTok es como abrir una tienda en un centro comercial que mañana podría cerrar o cambiarte el arriendo sin avisar. No controlas nada. En NexoWeb creamos tu propia casa: un lugar donde tú mandas, donde los datos de tus clientes son tuyos y donde nadie te impone algoritmos. Una web es el único activo digital que realmente te pertenece."
  },
  {
    q: "¿Cómo hacen para que mi negocio aparezca en las respuestas de ChatGPT o Perplexity?",
    a: "Preparamos el código de tu sitio para que sea \"legible\" para la Inteligencia Artificial. No solo ponemos palabras clave; organizamos la información técnica (lo que llamamos datos estructurados) para que los asistentes de voz y los motores generativos confíen en tu contenido. Si la IA entiende qué vendes y ve que tu sitio es confiable, te recomendará como la mejor solución a lo que el usuario busca."
  }
];

export function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <div className="overflow-x-hidden">
      <SEO 
        title="NexoWeb | Tu propia casa en internet"
        description="Deja de vender en terreno prestado. Creamos webs con código propio que cargan al segundo. Sin plantillas que te vuelvan lento. El control vuelve a ser tuyo."
        image="/og-main.webp"
        jsonLd={faqJsonLd}
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 border-4 border-foreground bg-[var(--color-lime)] text-black font-black uppercase text-sm rotate-[-2deg]">
                Agencia Digital
              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tight">
                DEJA DE VENDER
                <br />
                <span className="text-[var(--color-magenta)]">EN TERRENO</span>
                <br />
                ARRENDADO.
              </h1>

              <p className="text-xl text-muted-foreground max-w-lg">
                Tu negocio no puede depender 100% de lo que Instagram decida hoy. Creamos tu <strong>casa propia en internet</strong>: una web que es tuya, que carga al instante y que te permite controlar tus clientes sin intermediarios.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="group flex items-center gap-2 px-8 py-4 bg-foreground text-background font-black uppercase border-4 border-foreground hover:bg-[var(--color-cyan)] hover:text-black transition-all hover:translate-x-1 hover:-translate-y-1"
                  style={{ boxShadow: '8px 8px 0px 0px var(--shadow-solid)' }}
                >
                  QUIERO MI PROPIO ESPACIO
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/projects"
                  className="px-8 py-4 border-4 border-foreground font-black uppercase hover:bg-[var(--color-magenta)] hover:text-white transition-all"
                >
                  Ver Proyectos
                </Link>
              </div>
            </div>

            <div className="relative group">
              <div className="relative border-8 border-foreground overflow-hidden bg-white dark:bg-card shadow-[16px_16px_0px_0px_var(--color-magenta)] aspect-square md:aspect-[4/5]">
                <ImageWithFallback
                  src="src/assets/hero-finalb.webp"
                  alt="Espacio de trabajo moderno - NexoWeb"
                  className="w-full h-full object-cover object-bottom drop-shadow-[12px_12px_0px_rgba(0,0,0,0.15)] transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Dato Clave Flotante */}
              <div
                className="absolute -bottom-4 -left-4 lg:-left-12 max-w-[220px] bg-[var(--color-orange)] border-4 border-foreground p-4 rotate-[1deg] z-10"
                style={{ boxShadow: '6px 6px 0px 0px var(--shadow-solid)' }}
              >
                <AlertTriangle className="w-5 h-5 mb-2 text-black" />
                <p className="text-black text-xs font-black leading-snug uppercase">
                  Si tu web tarda 1 seg. de más, pierdes un <span className="text-4xl block leading-none">7%</span> de tus ventas.
                </p>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[var(--color-cyan)] border-4 border-foreground rotate-12 hidden lg:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Awareness Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-8">
                EL PROBLEMA DE LAS{" "}
                <span className="text-[var(--color-magenta)]">WEBS GENÉRICAS.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Muchas agencias te venden rapidez usando el mismo molde para todos. Pero esas páginas acumulan "código sucio" que las vuelve lentas en pocos meses. Si tu web tarda más de 3 segundos en aparecer, pierdes a la mitad de tus clientes antes de que vean tu producto.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Nosotros barremos ese desorden para que tú solo te preocupes de vender.
              </p>
            </div>
            <div className="space-y-4">
              {AWARENESS_ITEMS.map((item, i) => (
                <div
                  key={i}
                  className={`border-4 border-foreground p-6 flex items-start gap-4 ${
                    item.bad ? "bg-background" : "bg-[var(--color-lime)]"
                  }`}
                  style={item.bad ? {} : { boxShadow: '6px 6px 0px 0px var(--shadow-solid)' }}
                >
                  <span className="text-2xl font-black shrink-0">{item.bad ? "✗" : "✓"}</span>
                  <div>
                    <p className={`font-black uppercase text-sm mb-1 ${item.bad ? "line-through text-muted-foreground" : ""}`}>
                      {item.label}
                    </p>
                    <p className="text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-black mb-16 text-center">
            LO QUE <span className="text-[var(--color-electric)]">HACEMOS</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES_ITEMS.map((service, index) => (
              <div
                key={index}
                className="group relative bg-background border-4 border-foreground p-8 hover:translate-y-[-4px] transition-transform"
              >
                <div
                  className="absolute top-0 left-0 w-full h-2"
                  style={{ backgroundColor: service.color }}
                ></div>

                <service.icon className="w-12 h-12 mb-6" />

                <h3 className="text-2xl font-black mb-4 uppercase">
                  {service.title}
                </h3>

                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section: Estrategia */}
      <section className="py-20 bg-background border-t-8 border-foreground">
        <div className="container mx-auto px-4">
          <FaqAccordion 
            title="Estrategia y Presencia Digital"
            color="var(--color-magenta)"
            faqs={FAQ_ITEMS} 
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative border-8 border-foreground bg-[#030213] text-white p-12 md:p-20 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-magenta)] opacity-20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-cyan)] opacity-20 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-black mb-6">
                ¿LISTO PARA SER DUEÑO
                <br />
                <span className="text-[var(--color-lime)]">DE TU ESPACIO?</span>
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-xl mx-auto">
                No dejes el futuro de tu negocio en manos de una red social. Hablemos hoy. Te atenderá el equipo que construirá tu plataforma, no un bot.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-lime)] text-black font-black uppercase border-4 border-white hover:bg-[var(--color-cyan)] transition-colors"
                style={{ boxShadow: '6px 6px 0px 0px rgba(255,255,255,0.2)' }}
              >
                EMPEZAR MI PROYECTO
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
