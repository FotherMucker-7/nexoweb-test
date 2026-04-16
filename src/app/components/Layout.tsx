import { Outlet, ScrollRestoration } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CookieConsent } from "./ui/CookieConsent";

export function Layout() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NexoWeb",
    "url": "https://nexoweb.cl",
    "logo": "https://nexoweb.cl/logo.webp",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+56997236064",
      "contactType": "customer service",
      "email": "contacto@nexoweb.cl",
      "areaServed": "CL",
      "availableLanguage": "Spanish"
    },
    "sameAs": [
      "https://instagram.com/nexoweb.cl",
      "https://linkedin.com/company/nexoweb"
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollRestoration />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Header />
      <main className="flex flex-col flex-1">
        <Outlet />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
