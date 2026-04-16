import { useState, useEffect } from "react";
import { Link } from "react-router";
import { X, Cookie } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("nexoweb_cookie_consent");
    if (!consent) {
      // Show immediately if no consent is found
      setIsVisible(true);
    } else if (consent === "accepted") {
      // Si el usuario ya aceptó, inyectar GTM
      enableTracking();
    }
  }, []);

  // Función para manejar la inserción de GTM cuando se acepta
  const enableTracking = () => {
    if (!document.getElementById("gtm-script")) {
      const win = window as any;
      win.dataLayer = win.dataLayer || [];
      win.dataLayer.push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      });

      const script = document.createElement("script");
      script.id = "gtm-script";
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtm.js?id=GTM-M6LQH3NP`;
      document.head.appendChild(script);
    }
    console.log("Google Tag Manager (GTM-M6LQH3NP) activado");
  };

  const handleAccept = () => {
    localStorage.setItem("nexoweb_cookie_consent", "accepted");
    setIsVisible(false);
    enableTracking();
  };

  const handleReject = () => {
    localStorage.setItem("nexoweb_cookie_consent", "rejected");
    setIsVisible(false);
  };

  // Escuchar un evento custom para forzar la apertura desde el footer
  useEffect(() => {
    const handleOpenCookies = () => setIsVisible(true);
    window.addEventListener("open-cookie-settings", handleOpenCookies);
    return () => window.removeEventListener("open-cookie-settings", handleOpenCookies);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-4 left-4 right-4 z-50 flex justify-center pointer-events-none"
      role="dialog"
      aria-labelledby="cookie-heading"
      aria-describedby="cookie-description"
      aria-live="polite"
    >
      <div 
        className="bg-card w-full max-w-2xl border-4 border-foreground shadow-[8px_8px_0px_var(--shadow-solid)] p-4 md:p-5 relative pointer-events-auto flex flex-col gap-4 animate-in slide-in-from-bottom-5 duration-500"
        style={{ '--shadow-solid': 'var(--color-orange)' } as React.CSSProperties}
      >
        <button 
          onClick={handleReject}
          className="absolute top-4 right-4 p-1 hover:bg-[var(--color-magenta)] hover:text-white transition-colors border-2 border-transparent hover:border-foreground focus:outline-none focus-visible:border-foreground"
          aria-label="Cerrar y rechazar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex gap-3 items-start">
          <div className="p-2 bg-[var(--color-magenta)] border-4 border-foreground hidden sm:block shrink-0">
            <Cookie className="w-5 h-5 text-black" />
          </div>
          <div>
            <h2 id="cookie-heading" className="text-lg md:text-xl font-black uppercase mb-1">
              Privacidad y Cookies
            </h2>
            <p id="cookie-description" className="text-muted-foreground leading-relaxed text-xs md:text-sm">
              Usamos cookies para asegurarnos de que la web funcione correctamente y, si lo permites, para estadísticas básicas (sin "slop" digital ni invasiones de privacidad). Puedes leer nuestra{" "}
              <Link to="/privacidad" className="font-bold underline hover:text-[var(--color-cyan)] transition-colors">
                Política de Privacidad
              </Link>{" "}
              para más detalles.
            </p>
          </div>
        </div>

        {/* Action Buttons - Paridad Visual (Opt-in responsable) */}
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Rechazar */}
          <button 
            onClick={handleReject}
            className="flex-1 py-2 px-4 bg-[var(--color-magenta)] text-white text-sm font-black uppercase border-4 border-foreground transition-transform hover:translate-x-1 hover:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-[var(--foreground)]"
            style={{ boxShadow: '4px 4px 0px 0px var(--foreground)' }}
          >
            Solo Necesarias
          </button>
          
          {/* Aceptar */}
          <button 
            onClick={handleAccept}
            className="flex-1 py-2 px-4 bg-[var(--color-cyan)] text-black text-sm font-black uppercase border-4 border-foreground transition-transform hover:translate-x-1 hover:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-[var(--foreground)]"
            style={{ boxShadow: '4px 4px 0px 0px var(--foreground)' }}
          >
            Aceptar Todas
          </button>
        </div>
      </div>
    </div>
  );
}
