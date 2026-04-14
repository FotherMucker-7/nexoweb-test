import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  jsonLd?: object;
}

export function SEO({ title, description, canonical, image, jsonLd }: SEOProps) {
  useEffect(() => {
    // Actualizar Título
    document.title = title;

    // Actualizar Meta Descripción
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // Actualizar OG Title y Description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", description);

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage && image) ogImage.setAttribute("content", image);

    // Actualizar Canonical
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", canonical || window.location.href);

    // Manejar JSON-LD dinámico
    const scriptId = "seo-json-ld";
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement;
    
    if (jsonLd) {
      if (!scriptElement) {
        scriptElement = document.createElement("script");
        scriptElement.id = scriptId;
        scriptElement.type = "application/ld+json";
        document.head.appendChild(scriptElement);
      }
      scriptElement.text = JSON.stringify(jsonLd);
    } else if (scriptElement) {
      scriptElement.remove();
    }

  }, [title, description, canonical, jsonLd]);

  return null;
}
