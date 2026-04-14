import { ExternalLink, Wrench, Lightbulb, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { SEO } from "../components/SEO";

interface Project {
  id: number;
  title: string;
  category: string;
  tagline: string;
  challenge: string;
  solution: string;
  result: string;
  tags: string[];
  url: string;
  color: string;
  image?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AcceMap",
    category: "Desarrollo Web",
    tagline: "La ciudad, más accesible para todos.",
    challenge:
      "Las personas con discapacidad no tenían una forma colaborativa de saber si un lugar era realmente accesible antes de llegar. La información existía dispersa, desactualizada y sin voz de los propios usuarios.",
    solution:
      "Plataforma web interactiva con mapa en tiempo real donde la comunidad puede descubrir, evaluar y compartir la accesibilidad de espacios públicos y privados, con integración de Firebase para datos en vivo.",
    result:
      "Un espacio digital donde la misma comunidad construye el mapa de la accesibilidad, dando poder a las personas que más lo necesitan para planificar su día con confianza.",
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Firebase", "Leaflet"],
    url: "http://www.accemap.cl",
    color: "var(--color-magenta)",
  },
  {
    id: 2,
    title: "Dog Home",
    category: "Desarrollo Web",
    tagline: "Cada perro merece una familia.",
    challenge:
      "El proceso de adopción de mascotas era informal y fragmentado. Quienes buscaban adoptar no encontraban información clara, y quienes rescataban perros no tenían forma de mostrarlos de manera atractiva y confiable.",
    solution:
      "Aplicación web construida con Vue.js que conecta potenciales adoptantes con perros que necesitan un hogar, con gestión de datos en Firebase y una experiencia de usuario pensada para generar confianza desde el primer scroll.",
    result:
      "Un puente digital que humaniza el proceso de adopción y hace que encontrar una mascota sea tan fácil como hacer una búsqueda en internet.",
    tags: ["Vue.js", "Vuex", "Vuetify", "SCSS", "Firebase"],
    url: "https://dog-home-79316.web.app/",
    color: "var(--color-cyan)",
  },
  {
    id: 3,
    title: "Inversiones Santa Sofía",
    category: "E-commerce",
    tagline: "15 años de experiencia, por fin en internet.",
    challenge:
      "Una empresa con más de 15 años en el rubro de herramientas industriales operaba principalmente por canales tradicionales. Su catálogo era extenso, pero la experiencia digital era inexistente o básica, perdiendo clientes frente a competidores más digitalizados.",
    solution:
      "E-commerce completo sobre WooCommerce con catálogo de productos organizado, gestión de inventario integrada y procesamiento de pagos seguro. El sitio refleja la solidez y confianza que la marca ya tiene en el mundo físico.",
    result:
      "Un motor de ventas online que respeta la trayectoria de la empresa y le abre las puertas a clientes que antes accedían solo por teléfono o visita presencial.",
    tags: ["WordPress", "WooCommerce", "HTML5", "CSS3", "JavaScript", "MySQL"],
    url: "https://inversionessantasofia.cl/",
    color: "var(--color-lime)",
  },
  {
    id: 4,
    title: "Portafolio Pedro Silva",
    category: "Portfolio Web",
    tagline: "Un portafolio tan directo como su dueño.",
    challenge:
      "Un profesional con perfil multidisciplinario (Desarrollador, Product Owner, especialista CX) necesitaba un escaparate digital que lo diferenciara visualmente, fuera completamente accesible y pudiera presentar proyectos técnicos y de gestión en un mismo espacio.",
    solution:
      "Portafolio web Neo-Brutalista construido desde cero en HTML5, CSS3 y JavaScript puro, con navegación dual, galerías de proyectos individuales, estricto cumplimiento WCAG AA y optimización de carga con formatos WebP.",
    result:
      "Un sitio que comunica tanto el perfil técnico como la personalidad del profesional, sin necesidad de plantillas ni frameworks pesados. Ligero, accesible y reconocible a primera vista.",
    tags: ["HTML5", "CSS3", "JavaScript", "Firebase", "SEO", "WCAG AA"],
    url: "https://pedro-silva-r.github.io/portfolio/",
    color: "var(--color-orange)",
  },
  {
    id: 5,
    title: "PaulaLand",
    category: "Portfolio Web",
    tagline: "La elegancia de la fotografía, en pantalla.",
    challenge:
      "Una fotógrafa profesional especializada en fotografía corporativa, gastronómica y de producto necesitaba un escaparate digital que hiciera justicia a la calidad de su trabajo, sin sacrificar velocidad de carga ni usabilidad.",
    solution:
      "Portafolio web elegante construido con Vue.js 3 que incluye galerías interactivas con zoom real, efectos visuales inmersivos y diseño responsivo optimizado para que cada imagen sea protagonista, sin distraer con elementos innecesarios.",
    result:
      "Un sitio que funciona como una galería física en pantalla digital: silencioso en diseño, poderoso en impacto visual, y que convierte visitantes en clientes desde la primera imagen.",
    tags: ["Vue.js 3", "Vuex", "CSS3", "JavaScript", "Vite", "Responsive"],
    url: "https://paulaland.cl",
    color: "var(--color-electric)",
  },
];

export function Projects() {
  return (
    <div className="py-20">
      <SEO 
        title="Proyectos NexoWeb | Webs que funcionan"
        description="Mira cómo otros negocios recuperaron su independencia digital. Sitios ligeros, rápidos y accesibles que convierten visitas en clientes reales."
        image="/og-projects.webp"
      />
      <div className="container mx-auto px-4">

        {/* Hero */}
        <div className="max-w-4xl mb-20">
          <div className="inline-block px-4 py-2 border-4 border-foreground bg-[var(--color-orange)] text-black font-black uppercase text-sm rotate-[-1deg] mb-8">
            Trabajos Reales
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[0.9] mb-8">
            CLIENTES QUE YA
            <br />
            <span className="text-[var(--color-magenta)]">TIENEN EL</span>
            <br />
            CONTROL.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Cinco proyectos distintos, el mismo principio: una web que le pertenece al cliente, no a la agencia.
          </p>
        </div>

        {/* Projects — lista alternada */}
        <div className="space-y-28">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="grid lg:grid-cols-2 gap-12 items-start"
            >
              {/* Imagen / Placeholder visual */}
              <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div
                  className="border-8 border-foreground bg-card aspect-video flex items-center justify-center overflow-hidden relative group"
                  style={{ boxShadow: `16px 16px 0px 0px ${project.color}` }}
                >
                  {/* Placeholder visual con número y nombre */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <span
                      className="text-[10rem] font-black leading-none opacity-[0.06] select-none absolute"
                      style={{ color: project.color }}
                    >
                      {String(project.id).padStart(2, "0")}
                    </span>
                    <div
                      className="relative z-10 px-6 py-3 border-4 border-foreground font-black uppercase text-sm"
                      style={{ backgroundColor: project.color, color: "black" }}
                    >
                      {project.category}
                    </div>
                    <p className="relative z-10 mt-4 text-2xl font-black text-muted-foreground/30 uppercase tracking-widest">
                      Imagen próximamente
                    </p>
                  </div>
                </div>
              </div>

              {/* Contenido */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                {/* Header */}
                <div>
                  <p className="text-sm font-black uppercase text-muted-foreground mb-2">
                    {project.category}
                  </p>
                  <h2 className="text-4xl md:text-5xl font-black mb-2">
                    {project.title}
                  </h2>
                  <p
                    className="text-lg font-black"
                    style={{ color: project.color }}
                  >
                    {project.tagline}
                  </p>
                </div>

                {/* Narrativa Desafío/Solución/Resultado */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div
                      className="p-1.5 border-2 border-foreground shrink-0 mt-0.5"
                      style={{ backgroundColor: project.color }}
                    >
                      <Lightbulb className="w-4 h-4 text-black" />
                    </div>
                    <div>
                      <p className="font-black uppercase text-xs mb-1 text-muted-foreground">El desafío</p>
                      <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div
                      className="p-1.5 border-2 border-foreground shrink-0 mt-0.5"
                      style={{ backgroundColor: project.color }}
                    >
                      <Wrench className="w-4 h-4 text-black" />
                    </div>
                    <div>
                      <p className="font-black uppercase text-xs mb-1 text-muted-foreground">La solución</p>
                      <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div
                      className="p-1.5 border-2 border-foreground shrink-0 mt-0.5"
                      style={{ backgroundColor: project.color }}
                    >
                      <CheckCircle2 className="w-4 h-4 text-black" />
                    </div>
                    <div>
                      <p className="font-black uppercase text-xs mb-1 text-muted-foreground">El resultado</p>
                      <p className="text-muted-foreground leading-relaxed">{project.result}</p>
                    </div>
                  </div>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 border-2 border-foreground font-black text-xs uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border-4 border-foreground font-black uppercase text-sm hover:translate-x-1 hover:-translate-y-1 transition-transform"
                  style={{
                    backgroundColor: project.color,
                    color: "black",
                    boxShadow: "6px 6px 0px 0px var(--shadow-solid)",
                  }}
                >
                  Visitar Sitio
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="mt-28 border-8 border-foreground bg-[#030213] text-white p-12 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-orange)] opacity-10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              ¿TU PROYECTO
              <br />
              <span className="text-[var(--color-lime)]">ES EL PRÓXIMO?</span>
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-xl mx-auto">
              Hablemos hoy. Sin formularios infinitos ni propuestas automáticas. Una llamada o un mensaje es suficiente para empezar.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-lime)] text-black font-black uppercase border-4 border-white hover:bg-[var(--color-cyan)] transition-colors"
              style={{ boxShadow: "6px 6px 0px 0px rgba(255,255,255,0.2)" }}
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
