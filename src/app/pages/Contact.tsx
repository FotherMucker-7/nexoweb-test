import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Copy, ExternalLink } from "lucide-react";
import { useState } from "react";
import { FaqAccordion } from "../components/ui/FaqAccordion";
import { SEO } from "../components/SEO";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
  privacy: boolean;
}

const MAX_MESSAGE = 1000;

const CONTACT_FAQS = [
  {
    q: "¿Tiene algún costo consultar mi idea con ustedes?",
    a: "No, la primera charla es completamente gratuita. Nos sirve para entender qué necesitas, evaluar si somos el equipo correcto para tu proyecto y darte un presupuesto honesto."
  },
  {
    q: "¿El dominio y el servidor quedan a mi nombre o al de ustedes?",
    a: "Todo queda a tu nombre. El dominio, el hosting, las cuentas de correo: son tuyos desde el día uno. No dependes de nosotros para mantener encendida tu web ni para hacer cambios básicos. Esa es la esencia de dejar de arrendar en internet."
  }
];

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [emailRevealed, setEmailRevealed] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ContactFormData>({ mode: "onBlur" });

  const messageValue = watch("message", "");

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("https://formspree.io/f/xkgolgol", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          nombre: data.name,
          email: data.email,
          telefono: data.phone || "No proporcionado",
          servicio: data.service,
          mensaje: data.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
      } else {
        setSubmitError(
          "Algo salió mal al enviar tu mensaje. Inténtalo de nuevo o escríbenos directamente."
        );
      }
    } catch {
      setSubmitError(
        "No pudimos conectar con el servidor. Verifica tu conexión e inténtalo de nuevo."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("contacto@nexoweb.cl");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const inputClass =
    "w-full px-4 py-3 border-4 border-foreground bg-[var(--color-input-background)] dark:bg-card focus:outline-none focus:border-[var(--color-cyan)] transition-colors";

  const inputErrorClass =
    "w-full px-4 py-3 border-4 border-destructive bg-[var(--color-input-background)] dark:bg-card focus:outline-none focus:border-destructive transition-colors";

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": CONTACT_FAQS.map((item) => ({
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
        title="Contacto NexoWeb | Hablemos de tu próximo espacio"
        description="¿Listo para dejar de depender de redes sociales? Escríbenos. Te responderá el equipo que construirá tu sitio, no un bot. Atención directa."
        image="/og-contact.webp"
        jsonLd={faqJsonLd}
      />
      <div className="container mx-auto px-4">

        {/* Hero */}
        <div className="max-w-4xl mb-16">
          <div className="inline-block px-4 py-2 border-4 border-foreground bg-[var(--color-electric)] text-white font-black uppercase text-sm rotate-[-1deg] mb-8">
            Contacto
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[0.9] mb-8">
            ¿LISTO PARA SER
            <br />
            <span className="text-[var(--color-cyan)]">DUEÑO DE</span>
            <br />
            TU ESPACIO?
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            No te atenderá un bot. Escríbenos y el equipo que va a construir tu plataforma te responde directamente.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">

          {/* ── Columna izquierda: datos de contacto ── */}
          <div className="space-y-6">

            {/* Email — revelar por clic */}
            <div className="border-4 border-foreground p-5 bg-card">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 border-2 border-foreground bg-[var(--color-cyan)]">
                  <Mail className="w-5 h-5 text-black" />
                </div>
                <span className="font-black uppercase text-sm text-muted-foreground">Email</span>
              </div>
              {emailRevealed ? (
                <div className="flex items-center gap-2 flex-wrap">
                  <a
                    href="mailto:contacto@nexoweb.cl"
                    className="font-black text-sm hover:text-[var(--color-cyan)] transition-colors break-all"
                  >
                    contacto@nexoweb.cl
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    aria-label="Copiar email"
                    className="p-1 border-2 border-foreground hover:bg-[var(--color-cyan)] transition-colors"
                    title={emailCopied ? "¡Copiado!" : "Copiar"}
                  >
                    <Copy className="w-3 h-3" />
                  </button>
                  {emailCopied && (
                    <span className="text-xs font-black text-[var(--color-lime)]">¡Copiado!</span>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setEmailRevealed(true)}
                  className="text-sm font-black uppercase border-2 border-foreground px-3 py-1 hover:bg-[var(--color-cyan)] hover:text-black transition-colors"
                >
                  Ver email
                </button>
              )}
            </div>

            {/* WhatsApp — clic directo */}
            <div className="border-4 border-foreground p-5 bg-card">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 border-2 border-foreground bg-[var(--color-lime)]">
                  <Phone className="w-5 h-5 text-black" />
                </div>
                <span className="font-black uppercase text-sm text-muted-foreground">WhatsApp</span>
              </div>
              <a
                href="https://wa.me/56997236064"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-black uppercase border-2 border-foreground px-3 py-1 hover:bg-[var(--color-lime)] hover:text-black transition-colors"
              >
                Abrir chat
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Ubicación */}
            <div className="border-4 border-foreground p-5 bg-card">
              <div className="flex items-center gap-3 mb-1">
                <div className="p-2 border-2 border-foreground bg-[var(--color-magenta)]">
                  <MapPin className="w-5 h-5 text-black" />
                </div>
                <span className="font-black uppercase text-sm text-muted-foreground">Ubicación</span>
              </div>
              <p className="text-sm font-black mt-2">Santiago de Chile</p>
            </div>

            {/* Horario */}
            <div className="border-4 border-foreground p-5 bg-card">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 border-2 border-foreground bg-[var(--color-orange)]">
                  <Clock className="w-5 h-5 text-black" />
                </div>
                <span className="font-black uppercase text-sm text-muted-foreground">Horario</span>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Lun – Vie</span>
                  <span className="font-black">09:00 – 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sáb – Dom</span>
                  <span className="font-black text-muted-foreground">Cerrado</span>
                </div>
              </div>
            </div>

            {/* Badge respuesta */}
            <div
              className="border-l-8 p-4"
              style={{ borderColor: "var(--color-lime)", backgroundColor: "var(--color-lime)" }}
            >
              <p className="text-xs font-black text-black uppercase">
                ⚡ Respondemos en menos de 24 horas hábiles.
              </p>
            </div>

          </div>

          {/* ── Columna derecha: formulario ── */}
          <div className="lg:col-span-2">
            <div className="border-8 border-foreground p-8 bg-card">

              {isSubmitted ? (
                /* Estado de éxito — reemplaza el formulario */
                <div className="flex flex-col items-center justify-center text-center py-12 gap-6">
                  <div className="p-6 border-4 border-foreground bg-[var(--color-lime)]">
                    <CheckCircle2 className="w-16 h-16 text-black" />
                  </div>
                  <div>
                    <h2 className="text-4xl font-black uppercase mb-3">¡Mensaje enviado!</h2>
                    <p className="text-muted-foreground text-lg max-w-md">
                      Ya lo recibimos. Alguien del equipo te escribirá a tu email en las próximas horas.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 border-4 border-foreground font-black uppercase text-sm hover:bg-[var(--color-cyan)] transition-colors"
                    style={{ boxShadow: "4px 4px 0px 0px var(--shadow-solid)" }}
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                /* Formulario */
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">

                  <p className="text-xs text-muted-foreground mb-2">
                    Todos los campos son obligatorios salvo los marcados como <span className="font-black">(Opcional)</span>.
                  </p>

                  {/* Nombre + Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block font-black uppercase text-sm mb-2">
                        ¿Cómo te llamas?
                      </label>
                      <input
                        id="name"
                        {...register("name", {
                        required: "Necesitamos tu nombre para dirigirnos a ti.",
                        minLength: {
                          value: 3,
                          message: "El nombre debe tener al menos 3 caracteres.",
                        },
                      })}
                        type="text"
                        autoComplete="name"
                        className={errors.name ? inputErrorClass : inputClass}
                        placeholder="Tu nombre completo"
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" role="alert" className="mt-1.5 text-xs text-destructive font-black">
                          ⚠ {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block font-black uppercase text-sm mb-2">
                        Tu mejor email
                      </label>
                      <input
                        id="email"
                        {...register("email", {
                          required: "Necesitamos un email para responderte.",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Ese email no parece válido. ¿Lo revisas?",
                          },
                        })}
                        type="email"
                        autoComplete="email"
                        className={errors.email ? inputErrorClass : inputClass}
                        placeholder="tu@email.com"
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" role="alert" className="mt-1.5 text-xs text-destructive font-black">
                          ⚠ {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Servicio + Teléfono */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block font-black uppercase text-sm mb-2">
                        ¿Qué necesitas?
                      </label>
                      <select
                        id="service"
                        {...register("service", { required: "Selecciona el tipo de servicio que buscas." })}
                        className={errors.service ? inputErrorClass : inputClass}
                        aria-describedby={errors.service ? "service-error" : undefined}
                      >
                        <option value="">Escoge una opción…</option>
                        <option value="web">Sitio Web a Medida</option>
                        <option value="ecommerce">E-commerce / Tienda Online</option>
                        <option value="marketing">Marketing Digital</option>
                        <option value="automatizacion">Automatizaciones</option>
                        <option value="consultoria">Consultoría</option>
                        <option value="otro">Otro</option>
                      </select>
                      {errors.service && (
                        <p id="service-error" role="alert" className="mt-1.5 text-xs text-destructive font-black">
                          ⚠ {errors.service.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block font-black uppercase text-sm mb-2">
                        Teléfono{" "}
                        <span className="font-normal normal-case text-muted-foreground">(Opcional)</span>
                      </label>
                      <input
                        id="phone"
                        {...register("phone")}
                        type="tel"
                        autoComplete="tel"
                        className={inputClass}
                        placeholder="+56 9 0000 0000"
                      />
                    </div>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <label htmlFor="message" className="block font-black uppercase text-sm">
                        Cuéntanos tu problema o idea
                      </label>
                      <span
                        className={`text-xs font-black tabular-nums ${
                          messageValue?.length > MAX_MESSAGE ? "text-destructive" : "text-muted-foreground"
                        }`}
                      >
                        {messageValue?.length ?? 0}/{MAX_MESSAGE}
                      </span>
                    </div>
                    <textarea
                      id="message"
                      {...register("message", {
                        required: "Cuéntanos aunque sea un poco sobre lo que necesitas.",
                        minLength: {
                          value: 10,
                          message: "Al menos 10 caracteres para que podamos entenderte.",
                        },
                        maxLength: {
                          value: MAX_MESSAGE,
                          message: `No más de ${MAX_MESSAGE} caracteres, por favor.`,
                        },
                      })}
                      rows={6}
                      className={`resize-none ${errors.message ? inputErrorClass : inputClass}`}
                      placeholder="Ej: Tengo una tienda física y quiero empezar a vender por internet. No sé por dónde empezar…"
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" role="alert" className="mt-1.5 text-xs text-destructive font-black">
                        ⚠ {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Checkbox de privacidad */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        {...register("privacy", {
                          required: "Debes aceptar la política de privacidad para continuar.",
                        })}
                        className="w-5 h-5 mt-0.5 border-4 border-foreground accent-[var(--color-cyan)] shrink-0 cursor-pointer"
                        aria-describedby={errors.privacy ? "privacy-error" : undefined}
                      />
                      <span className="text-sm text-muted-foreground leading-snug">
                        Acepto que NexoWeb use mis datos únicamente para responder a esta consulta, de acuerdo con su{" "}
                        <a href="/privacy" className="font-black underline hover:text-[var(--color-cyan)] transition-colors">
                          Política de Privacidad
                        </a>
                        .
                      </span>
                    </label>
                    {errors.privacy && (
                      <p id="privacy-error" role="alert" className="mt-1.5 text-xs text-destructive font-black">
                        ⚠ {errors.privacy.message}
                      </p>
                    )}
                  </div>

                  {/* Error de envío */}
                  {submitError && (
                    <div className="p-4 border-4 border-destructive bg-destructive/10">
                      <p className="text-sm text-destructive font-black">⚠ {submitError}</p>
                    </div>
                  )}

                  {/* Botón de envío */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#030213] text-white font-black uppercase border-4 border-foreground hover:bg-[var(--color-magenta)] transition-all disabled:opacity-60 disabled:cursor-not-allowed hover:translate-y-[-2px]"
                    style={{ boxShadow: "8px 8px 0px 0px var(--shadow-solid)" }}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-pulse">Enviando…</span>
                      </>
                    ) : (
                      <>
                        EMPEZAR MI PROYECTO
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                </form>
              )}
            </div>
          </div>

        </div>

        {/* FAQ Accordion Compacto */}
        <div className="mt-20">
          <FaqAccordion 
            title="Dudas antes de empezar"
            color="var(--color-cyan)"
            faqs={CONTACT_FAQS} 
          />
        </div>

      </div>
    </div>
  );
}
