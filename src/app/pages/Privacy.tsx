import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { SEO } from "../components/SEO";

// Este es el contenido legal que puedes editar fácilmente
const PRIVACY_CONTENT = `
📜 Política de Privacidad: NexoWeb

**Versión:** 1.0 **Última actualización:** [Abril 2026]

En **NexoWeb**, creemos que tu negocio debe ser soberano, y eso incluye la protección de tus datos. Esta política explica, de forma clara y sin enredos, cómo cuidamos la información que nos entregas. Cumplimos rigurosamente con la **Ley N° 21.719** de Protección de Datos Personales en Chile.

## 1. ¿Quién es el responsable de tus datos?

- **Razón Social:** [RELLENAR: Nombre de Empresa o Persona Natural]
- **RUT:** [RELLENAR: RUT]
- **Representante Legal:** [RELLENAR: Nombre]
- **Dirección:** [RELLENAR: Dirección verificada ante el SII]
- **Correo de contacto:** contacto@nexoweb.cl

## 2. ¿Qué datos recolectamos y para qué?

Solo te pediremos lo estrictamente necesario para ayudarte a crecer:

- **Datos de contacto:** Tu nombre y correo electrónico que ingresas en nuestro formulario para que podamos responderte.
- **Datos de navegación:** Usamos **Google Analytics** para saber qué partes de nuestra web te gustan más y así mejorar tu experiencia. Esto incluye tu dirección IP y cookies técnicas.

**Finalidad:** Usamos estos datos únicamente para gestión comercial (responder tus dudas), enviarte presupuestos y entender cómo mejorar nuestro sitio.

## 3. ¿Cuál es la base legal para usar tus datos?

Tratamos tu información porque tú nos das tu **consentimiento explícito** al marcar la casilla en nuestro formulario o al aceptar las cookies. También es necesario para poder cumplir con el servicio que nos contratas.

## 4. ¿Dónde guardamos tu información? (Soberanía y Transferencias)

Nuestra tecnología evoluciona contigo. Actualmente, la información se almacena en sistemas seguros de **Google Cloud** y, a medida que escalamos, utilizaremos infraestructuras avanzadas como **Supabase o AWS**. Al usar estos servicios, tus datos podrían procesarse en servidores fuera de Chile, pero siempre bajo contratos que garantizan el estándar de seguridad chileno.

## 5. ¿Cuánto tiempo guardaremos tus datos?

Guardaremos tu información por un periodo de **2 años** desde nuestro último contacto o **hasta que tú decidas borrarlos**. Pasado este tiempo, los eliminaremos de forma segura de todos nuestros registros.

## 6. Tus Derechos (ARCO+)

Tú eres el dueño de tus datos y en NexoWeb te lo ponemos fácil. Puedes escribirnos a **contacto@nexoweb.cl** en cualquier momento para pedir:

- **Acceso:** Saber qué datos tenemos de ti.
- **Rectificación:** Corregir si algún dato está mal.
- **Cancelación:** Pedir que borremos todo.
- **Oposición:** Decirnos que no quieres recibir más correos.
- **Portabilidad:** Pedir una copia de tus datos en un formato ordenado.

Si sientes que no hemos respondido correctamente, tienes el derecho de acudir a la **Agencia de Protección de Datos Personales**.

## 7. Política de Cookies

En NexoWeb, aceptar o rechazar cookies es igual de fácil.

- **Cookies Necesarias:** Para que la web funcione (no se pueden desactivar).
- **Cookies de Análisis:** Solo usamos Google Analytics para estadísticas básicas. Puedes cambiar tu decisión en cualquier momento con el botón de "Configuración de Cookies" que verás en el pie de página.

## 8. Compromiso de Seguridad

Implementamos **cifrado HTTPS** y acceso restringido a tus datos. Aquí hablas con humanos que supervisan la tecnología para que tu información nunca sea "slop" digital.
`;

export function Privacy() {
  return (
    <div className="bg-background">
      <SEO 
        title="Política de Privacidad | NexoWeb"
        description="Conoce cómo protegemos y manejamos tus datos en NexoWeb. Transparencia y seguridad en cada paso digital."
      />

      {/* Hero Section */}
      <section className="bg-[var(--color-magenta)] border-b-8 border-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="inline-block px-4 py-2 border-4 border-foreground bg-white text-black font-black uppercase text-sm mb-6 rotate-[-2deg]">
            Legal
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tight">
            POLÍTICA DE <br />
            <span className="text-black bg-[var(--color-lime)] px-2 inline-block mt-2">PRIVACIDAD</span>
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div 
            className="bg-card border-8 border-foreground p-8 md:p-16 shadow-[16px_16px_0px_var(--shadow-solid)]"
            style={{ '--shadow-solid': 'var(--color-cyan)' } as React.CSSProperties}
          >
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                  h2: ({ node, ...props }) => (
                    <h2 className="text-2xl md:text-3xl font-black uppercase border-b-4 border-foreground pb-2 mt-12 mb-6 inline-block" {...props} />
                  ),
                  p: ({ node, ...props }) => (
                    <p className="text-lg md:text-xl leading-relaxed mb-6" {...props} />
                  ),
                  ul: ({ node, ...props }) => (
                    <ul className="space-y-4 mb-8" {...props} />
                  ),
                  li: ({ node, ...props }) => (
                    <li className="list-none grid grid-cols-[auto_1fr] gap-4 items-start text-lg md:text-xl font-medium mb-4" {...props}>
                       <span className="bg-[var(--color-lime)] border-2 border-foreground px-1 font-black text-xs mt-1.5 h-fit select-none">✓</span>
                       <span>{props.children}</span>
                    </li>
                  ),
                  strong: ({ node, ...props }) => (
                    <strong className="font-black text-[var(--color-magenta)]" {...props} />
                  ),
                  blockquote: ({ node, ...props }) => (
                    <blockquote className="bg-accent border-4 border-foreground p-6 rotate-[1deg] my-8" {...props} />
                  )
                }}
              >
                {PRIVACY_CONTENT}
              </ReactMarkdown>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center">
            <div className="bg-[var(--color-orange)] border-4 border-foreground p-4 font-black uppercase inline-block -rotate-1">
              Última actualización: Abril 2026
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
