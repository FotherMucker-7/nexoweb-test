import { useState, useMemo } from "react";

export interface FaqItem {
  q: string;
  a: string;
}

interface FaqAccordionProps {
  title?: string;
  faqs: FaqItem[];
  color?: string; // Var name, e.g., "var(--color-cyan)"
  className?: string;
}

export function FaqAccordion({
  title = "Preguntas Frecuentes",
  faqs,
  color = "var(--color-cyan)",
  className = "",
}: FaqAccordionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Generar JSON-LD estructurado para SEO (Optimizado para no re-calcularse en cada render)
  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  }), [faqs]);

  return (
    <div className={`max-w-4xl mx-auto w-full ${className}`}>
      {/* Script oculto SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {title && (
        <div 
          className="inline-block px-4 py-2 border-4 border-foreground text-black font-black uppercase text-sm rotate-[1deg] mb-10"
          style={{ backgroundColor: color }}
        >
          {title}
        </div>
      )}

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openFaq === index;
          return (
            <div 
              key={index} 
              className={`border-4 border-foreground bg-card transition-colors duration-300 ${isOpen ? 'shadow-[8px_8px_0px_0px_var(--shadow-solid)]' : ''}`}
            >
              <button
                onClick={() => setOpenFaq(isOpen ? null : index)}
                className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left hover:bg-accent transition-colors"
                aria-expanded={isOpen}
              >
                <span className="font-black text-base md:text-lg pr-4 leading-tight">{faq.q}</span>
                <span
                  className="text-3xl font-black shrink-0 leading-none transition-transform duration-300"
                  style={{
                    color: color,
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>

              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: isOpen ? "800px" : "0px",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div
                  className="px-5 md:px-6 pb-6 border-t-4 border-foreground pt-4 bg-background"
                  style={{ borderTopColor: color }}
                >
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
