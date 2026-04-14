import { ArrowRight, Mail } from "lucide-react";
import { motion } from "motion/react";

export const ArticleClosing = () => {
  return (
    <div className="mt-20 flex flex-col gap-8">
      {/* NexoWeb Approach Section */}
      <section className="bg-color-lime p-8 md:p-12 border-4 border-foreground shadow-[12px_12px_0px_var(--shadow-solid)] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-color-magenta opacity-20 rotate-45 translate-x-16 -translate-y-16 border-l-4 border-b-4 border-foreground" />
        
        <h3 className="text-3xl md:text-4xl font-display font-black mb-6 uppercase tracking-tighter relative z-10">
          En NexoWeb no solo escribimos, <br className="hidden md:block" /> construimos activos.
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8 relative z-10">
          <div className="flex flex-col gap-4">
            <p className="text-lg font-sans font-medium leading-relaxed">
              Viste los datos: tener una web profesional es la diferencia entre ser invisible o ser la referencia de tu industria en 2026.
            </p>
            <p className="text-lg font-sans opacity-90">
              Nuestro enfoque combina accesibilidad radical, SEO de nueva generación y una estética que rompe el molde genérico de la IA.
            </p>
          </div>
          <div className="flex flex-col justify-end gap-6">
            <div className="flex items-center gap-4 bg-foreground text-background p-4 border-2 border-foreground rotate-1">
              <span className="text-2xl font-display font-black">100%</span>
              <p className="font-sans text-sm uppercase tracking-widest font-bold">
                Propiedad de tus datos y dominio. <br /> Sin intermediarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background text-foreground p-10 md:p-16 flex flex-col items-center text-center gap-8 border-4 border-foreground shadow-[12px_12px_0px_var(--color-cyan)]">
        <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tightest leading-none">
          ¿Tu negocio necesita <span className="text-[var(--color-cyan)]">este nivel</span> de independencia?
        </h2>
        
        <p className="text-xl md:text-2xl font-sans opacity-80 max-w-2xl">
          Hablemos sobre tu proyecto y definamos una estrategia que te saque de terreno prestado de una vez por todas.
        </p>

        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05, rotate: -1 }}
          whileTap={{ scale: 0.95 }}
          className="group flex items-center gap-3 bg-[var(--color-magenta)] text-foreground px-8 py-5 text-2xl font-display font-black uppercase border-4 border-foreground shadow-[8px_8px_0px_var(--shadow-solid)] hover:shadow-none transition-all duration-200"
        >
          Escríbenos ahora
          <Mail className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
        </motion.a>

        <a 
          href="https://wa.me/tu-numero" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-display font-bold text-lg uppercase underline decoration-4 underline-offset-8 hover:text-[var(--color-cyan)] transition-colors"
        >
          O contáctanos por WhatsApp <ArrowRight className="w-5 h-5" />
        </a>
      </section>
    </div>
  );
};
