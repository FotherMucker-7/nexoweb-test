import { MessageCircle, Map, Hammer, Rocket, LifeBuoy, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { FaqAccordion } from "../components/ui/FaqAccordion";
import { SEO } from "../components/SEO";

const PROCESS_STEPS = [
  {
    number: "01",
    icon: MessageCircle,
    image: "src/assets/1.webp",
    title: "La charla inicial.",
    description:
      "Nos sentamos a conversar. No necesitas saber de código. Queremos entender qué vendes, quiénes son tus clientes y qué metas tienes en mente.",
    color: "var(--color-magenta)",
    details: [
      "Sin tecnicismos ni formularios interminables",
      "Identificamos el problema real que tu web debe resolver",
      "Definimos juntos cómo medir el éxito",
    ],
  },
  {
    number: "02",
    icon: Map,
    image: "src/assets/2.webp",
    title: "Dibujamos el mapa.",
    description:
      "Antes de programar, diseñamos el flujo. Decidimos dónde van los botones y qué decir para que tus clientes confíen en ti y se decidan pronto.",
    color: "var(--color-cyan)",
    details: [
      "Estructura pensada para convertir, no solo para verse bien",
      "Primeros diseños de tu página que tú puedes entender y aprobar",
      "Texto y contenido estratégico desde el día uno",
    ],
  },
  {
    number: "03",
    icon: Hammer,
    image: "src/assets/3.webp",
    title: "Manos a la obra.",
    description:
      "Aquí es donde levantamos la estructura. Usamos herramientas modernas para ir rápido, pero revisamos cada detalle para que todo sea seguro y vuele en cualquier celular.",
    color: "var(--color-lime)",
    details: [
      "Código limpio y sin cosas innecesarias — tu web va a durar años",
      "Compatible con todos los celulares y navegadores",
      "Cada imagen, botón y texto tiene un propósito",
    ],
  },
  {
    number: "04",
    icon: Rocket,
    image: "src/assets/4.webp",
    title: "Revisión y estreno.",
    description:
      "Probamos que todo cargue al segundo. Cuando nos das el \"visto bueno\", encendemos los motores y tu web queda viviendo en su propio terreno.",
    color: "var(--color-orange)",
    details: [
      "Pruebas en dispositivos reales, no solo simuladores",
      "Te mostramos cómo actualizar tu propia web en 15 minutos",
      "El dominio y el servidor son tuyos, no nuestros",
    ],
  },
  {
    number: "05",
    icon: LifeBuoy,
    image: "src/assets/5.webp",
    title: "Apoyo continuo.",
    description:
      "No te soltamos la mano tras el lanzamiento. Tu web nace preparada para crecer. Si mañana necesitas vender online o automatizar algo, los cimientos están listos.",
    color: "var(--color-electric)",
    details: [
      "Soporte real con personas reales",
      "Actualizaciones de seguridad incluidas",
      "Lista para escalar cuando tú lo decidas",
    ],
  },
];

const PROCESS_FAQS = [
  {
    q: "¿Si usan IA para desarrollar, por qué pago por trabajo humano?",
    a: "La IA es una herramienta increíble para ir rápido, pero a veces se equivoca o escribe código \"sucio\". Por eso, nosotros no dejamos que la máquina lo haga todo. Usamos la tecnología para la base, pero nuestros desarrolladores revisan cada línea, corrigen la lógica y se aseguran de que todo sea elegante y seguro. No te entregamos algo genérico; te entregamos ingeniería de verdad."
  },
  {
    q: "¿Será difícil para mí manejar la página cuando esté lista?",
    a: "Para nada. Te damos las llaves y te enseñamos a entrar. El panel de administración que instalamos es intuitivo: subir una foto, cambiar un precio o editar un texto es tan fácil como usar cualquier red social. Queremos que seas independiente y que no tengas que llamarnos para cambiar una simple frase."
  },
  {
    q: "¿Cuánto tarda en estar lista mi web?",
    a: "Depende de la complejidad, pero un sitio informativo puede estar en aire en 2 a 4 semanas. Módulos complejos toman más tiempo, como ves en el cronograma. Lo importante es que avanzamos contigo, aprobando cada etapa antes de pasar a la siguiente sin sorpresas."
  },
  {
    q: "¿Me van a ayudar si algo se rompe después del lanzamiento?",
    a: "Por supuesto. Cada proyecto incluye un periodo de soporte inicial post-lanzamiento. Además, tu web queda lista y optimizada para crecer contigo. Si luego quieres dejar toda la parte técnica delegada en nosotros, te ofrecemos un plan de apoyo continuo a tu medida."
  }
];

const SCHEDULE_ITEMS = [
  { weeks: "1–2", label: "La charla y el mapa", color: "var(--color-magenta)" },
  { weeks: "1–2", label: "Bocetos aprobados", color: "var(--color-cyan)" },
  { weeks: "3–6", label: "Desarrollo y pruebas", color: "var(--color-lime)" },
  { weeks: "1",   label: "Estreno en vivo", color: "var(--color-orange)" },
  { weeks: "∞",   label: "Apoyo continuo", color: "var(--color-electric)" },
];

export function Process() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": PROCESS_FAQS.map((item) => ({
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
        title="Nuestro Proceso | Tu web en 5 pasos"
        description="Sin tecnicismos ni sorpresas. Te guiamos desde la charla inicial hasta el estreno. Un proceso transparente donde tú tienes la última palabra."
        image="/og-process.webp"
        jsonLd={faqJsonLd}
      />
      <div className="container mx-auto px-4">

        {/* Hero */}
        <div className="max-w-4xl mb-20">
          <div className="inline-block px-4 py-2 border-4 border-foreground bg-[var(--color-lime)] text-black font-black uppercase text-sm rotate-[-1deg] mb-8">
            Nuestro Proceso
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[0.9] mb-8">
            TU CASA DIGITAL
            <br />
            <span className="text-[var(--color-magenta)]">EN 5 PASOS.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Sin tecnicismos. Sin sorpresas a mitad del camino. Debes entender y aprobar cada etapa antes de que pasemos a la siguiente.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-24 mb-20">
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={index}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Content */}
              <div
                className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="text-6xl font-black opacity-10"
                    style={{ color: step.color }}
                  >
                    {step.number}
                  </div>
                  <div
                    className="p-3 border-4 border-foreground"
                    style={{ backgroundColor: step.color }}
                  >
                    <step.icon className="w-6 h-6 text-black" />
                  </div>
                </div>

                <h2 className="text-4xl font-black uppercase">{step.title}</h2>

                <p className="text-lg text-muted-foreground">{step.description}</p>

                <ul className="space-y-3">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-5 h-5 mt-1 flex-shrink-0"
                        style={{ color: step.color }}
                      />
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual Block — Ilustración con número gigante de fondo */}
              <div
                className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <div
                  className="border-8 border-foreground bg-white dark:bg-card flex items-center justify-center min-h-[350px] overflow-hidden relative group"
                  style={{
                    boxShadow: `16px 16px 0px 0px ${step.color}`,
                  }}
                >
                  {/* Número gigante de fondo */}
                  <span
                    className="absolute text-[18rem] font-black leading-none select-none pointer-events-none opacity-[0.05] -bottom-10 -right-10 transition-transform group-hover:scale-110 duration-500"
                    style={{ color: step.color }}
                  >
                    {step.number}
                  </span>
                  
                  {/* Ilustración */}
                  <div className="relative z-10 w-full h-full p-8 flex items-center justify-center">
                    <ImageWithFallback
                      src={step.image}
                      alt={step.title}
                      className="max-w-[85%] max-h-[280px] object-contain drop-shadow-[12px_12px_0px_rgba(0,0,0,0.15)] dark:brightness-90 transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs Metodología */}
        <div className="mb-20">
          <FaqAccordion 
            title="Cómo trabajamos"
            color="var(--color-electric)"
            faqs={PROCESS_FAQS} 
          />
        </div>

        {/* Cronograma */}
        <div className="border-8 border-foreground p-12 bg-[#030213] text-white">
          <h2 className="text-3xl font-black mb-2 text-center text-white">CUÁNTO TARDA TODO ESTO.</h2>
          <p className="text-center text-sm opacity-60 mb-10 text-white">Tiempos orientativos según complejidad del proyecto.</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-black">
            {SCHEDULE_ITEMS.map((item, i) => (
              <div
                key={i}
                className="border-4 border-white p-4 text-center hover:translate-y-[-4px] transition-transform"
                style={{ backgroundColor: item.color }}
              >
                <div className="text-3xl font-black mb-1">{item.weeks}</div>
                <div className="text-xs font-black uppercase opacity-80 leading-tight">{item.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-lg opacity-80 mb-6 text-white">
              ¿Quieres saber cuánto tardaría el <strong>tuyo</strong>?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-lime)] text-black font-black uppercase border-4 border-white hover:bg-[var(--color-cyan)] transition-colors"
              style={{ boxShadow: '8px 8px 0px 0px rgba(255,255,255,0.2)' }}
            >
              HABLEMOS HOY
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
