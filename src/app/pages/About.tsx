import { Link } from "react-router";
import { KeyRound, Users, Code2, Zap, ShieldCheck, Search, MonitorSmartphone, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { FaqAccordion } from "../components/ui/FaqAccordion";
import { SEO } from "../components/SEO";

const MANIFESTO_ITEMS = [
  {
    icon: Code2,
    title: "Nada de copias.",
    body: "Omitimos las plantillas. Diseñamos cada parte de tu web pensando en cómo compran tus clientes reales. Si tu negocio tiene su propia personalidad, tu web no puede ser una copia.",
    color: "var(--color-magenta)",
  },
  {
    icon: Users,
    title: "Puertas abiertas para todos.",
    body: "El 16% de las personas tiene problemas visuales o motrices al navegar. Si tu web les cierra el paso, pierdes ventas. Nosotros hacemos webs que todos puedan usar, sin excepciones.",
    color: "var(--color-cyan)",
  },
  {
    icon: KeyRound,
    title: "El dueño eres tú.",
    body: "Te entregamos las llaves. Te enseñamos a manejar tu panel en 15 minutos para que no dependas de nadie si quieres cambiar un precio o subir una foto nueva.",
    color: "var(--color-lime)",
  },
];

const GUARANTEE_ITEMS = [
  {
    icon: Zap,
    commitment: "Tu web carga en menos de 1.5 s.",
    detail: "Sin excusas. Lo medimos antes de entregar.",
    color: "var(--color-lime)",
  },
  {
    icon: ShieldCheck,
    commitment: "Accesible para el 100% de tus usuarios.",
    detail: "Cumplimos el estándar WCAG AA desde el primer día.",
    color: "var(--color-cyan)",
  },
  {
    icon: Search,
    commitment: "Visible en Google desde que abre.",
    detail: "SEO técnico integrado en la estructura, no pegado después.",
    color: "var(--color-magenta)",
  },
  {
    icon: MonitorSmartphone,
    commitment: "Perfecta en cualquier pantalla.",
    detail: "Diseñamos primero para celular. El escritorio viene solo.",
    color: "var(--color-orange)",
  },
];

const FAQ_ITEMS = [
  {
    q: "¿Por qué no usan plantillas ya hechas?",
    a: "Las plantillas baratas vienen con mucho código que no necesitas. Es como comprar un traje que le sirve a todo el mundo: al final no le queda bien a nadie y pesa demasiado. Ese \"exceso de equipaje\" hace que tu web sea lenta y difícil de mantener. Nosotros escribimos el código desde cero. Es más trabajo para nosotros, pero tu web será más rápida, segura y durará mucho más tiempo."
  },
  {
    q: "¿De verdad importa si mi página tarda un par de segundos en cargar?",
    a: "Mucho más de lo que crees. Si tu web tarda más de tres segundos, la mitad de la gente se va antes de ver qué ofreces. Es así de crudo. En 2026, la velocidad es respeto. Queremos que tu sitio cargue al instante para que el cliente se centre en comprar, no en esperar."
  },
  {
    q: "¿Qué es la accesibilidad web y por qué debería importarme?",
    a: "Significa que cualquier persona puede usar tu web, tenga o no una discapacidad visual, motriz o auditiva. Más allá de ser lo correcto, hoy es una exigencia legal en algunos países y para muchas empresas. Además, una web accesible es más fácil de leer para Google, lo que te ayuda a posicionarte mejor que tu competencia, que probablemente está ignorando a una parte importante del mercado."
  },
  {
    q: "¿Usan esos botones flotantes de accesibilidad que se ven en algunos sitios?",
    a: "No, porque no funcionan. Esos \"parches\" suelen estorbar a las personas que realmente usan lectores de pantalla y no te protegen legalmente. Nosotros construimos la accesibilidad directamente en el código base. Tu web será fácil de usar para todos de forma natural, sin botones molestos."
  }
];

export function About() {
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
    <div className="py-20">
      <SEO 
        title="Sobre NexoWeb | Código y trato humano"
        description="No somos una fábrica de moldes. Hacemos código a mano para que tu web sea accesible para todos y fácil de manejar para ti. Sin vueltas."
        image="/og-about.webp"
        jsonLd={faqJsonLd}
      />
      <div className="container mx-auto px-4">

        {/* Hero */}
        <div className="max-w-4xl mb-20">
          <div className="inline-block px-4 py-2 border-4 border-foreground bg-[var(--color-cyan)] text-black font-black uppercase text-sm rotate-[-1deg] mb-8">
            Nosotros
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[0.9] mb-8">
            CÓDIGO MODERNO
            <br />
            <span className="text-[var(--color-electric)]">CON TRATO</span>
            <br />
            HUMANO.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            NexoWeb nació para ser el punto de unión entre la agilidad de las nuevas herramientas y la originalidad de un trabajo bien hecho a mano.
          </p>
        </div>

        {/* Manifesto + Image */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-start">
          <div className="relative group">
            <div className="border-8 border-foreground overflow-hidden bg-white dark:bg-card shadow-[12px_12px_0px_0px_var(--color-electric)] aspect-[4/5]">
              <ImageWithFallback
                src="src/assets/about-manifestob.webp"
                alt="Equipo NexoWeb trabajando"
                className="w-full h-full object-cover dark:brightness-90 drop-shadow-[12px_12px_0px_rgba(0,0,0,0.15)] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--color-magenta)] border-4 border-foreground rotate-12 hidden lg:block"></div>
          </div>

          <div className="space-y-6">
            {MANIFESTO_ITEMS.map((item, index) => (
              <div
                key={index}
                className="border-4 border-foreground p-6 bg-background hover:translate-x-1 hover:-translate-y-1 transition-transform"
                style={{ boxShadow: `6px 6px 0px 0px ${item.color}` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="p-2 border-2 border-foreground"
                    style={{ backgroundColor: item.color }}
                  >
                    <item.icon className="w-5 h-5 text-black" />
                  </div>
                  <h2 className="text-xl font-black uppercase">{item.title}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Opción A: Compromisos técnicos */}
        <div className="mb-20">
          <div className="inline-block px-4 py-2 border-4 border-foreground bg-[var(--color-lime)] text-black font-black uppercase text-sm rotate-[1deg] mb-10">
            Lo que garantizamos en cada proyecto
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {GUARANTEE_ITEMS.map((item, index) => (
              <div
                key={index}
                className="border-4 border-foreground p-6 bg-background flex gap-5 items-start hover:translate-x-1 hover:-translate-y-1 transition-transform"
                style={{ boxShadow: `6px 6px 0px 0px ${item.color}` }}
              >
                <div
                  className="p-3 border-2 border-foreground shrink-0"
                  style={{ backgroundColor: item.color }}
                >
                  <item.icon className="w-6 h-6 text-black" />
                </div>
                <div>
                  <p className="font-black uppercase text-sm mb-1">{item.commitment}</p>
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Calidad y WCAG */}
        <div className="mb-20">
          <FaqAccordion 
            title="Calidad Técnica e Inclusión"
            color="var(--color-cyan)"
            faqs={FAQ_ITEMS} 
          />
        </div>

        {/* Opción B: Manifiesto de cierre + CTA */}
        <div className="border-8 border-foreground bg-[#030213] text-white p-12 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-cyan)] opacity-10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 max-w-3xl">
            <p className="text-3xl md:text-4xl font-black leading-tight mb-8">
              "No construimos webs para llenar un portafolio.{" "}
              <span className="text-[var(--color-lime)]">
                Construimos webs para que tu negocio no dependa de nadie más."
              </span>
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-lime)] text-black font-black uppercase border-4 border-white hover:bg-[var(--color-cyan)] transition-colors"
              style={{ boxShadow: '6px 6px 0px 0px rgba(255,255,255,0.2)' }}
            >
              HABLEMOS DE TU PROYECTO
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
