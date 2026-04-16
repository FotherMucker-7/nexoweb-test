import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router";
import { blogPosts } from "../data/blogData";
import { MarkdownRenderer } from "../components/MarkdownRenderer";
import { ArticleClosing } from "../components/ArticleClosing";
import { ArrowLeft } from "lucide-react";

export const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    if (post) {
      // Update Title
      document.title = `${post.title} | NexoWeb`;
      
      // Update Meta Description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', post.description);

      // Inject JSON-LD for SEO/AEO
      const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.description,
        "image": [
          `https://nexoweb.com${post.heroImage}`
        ],
        "author": {
          "@type": "Organization",
          "name": "NexoWeb",
          "url": "https://nexoweb.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "NexoWeb",
          "logo": {
            "@type": "ImageObject",
            "url": "https://nexoweb.com/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://nexoweb.com/blog/${post.slug}`
        }
      };

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = `json-ld-${post.slug}`;
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);

      return () => {
        // Cleanup
        const existingScript = document.getElementById(`json-ld-${post.slug}`);
        if (existingScript) {
          document.head.removeChild(existingScript);
        }
      };
    }
  }, [post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="bg-background pt-32 pb-20">
      <article className="container mx-auto px-6 max-w-4xl">
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 mb-10 font-display font-black uppercase tracking-wider hover:text-color-magenta transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
          Volver a Recursos
        </Link>
        
        {/* Hero Section */}
        <header className="mb-12">
          <div className="aspect-[21/9] w-full bg-muted border-4 border-foreground shadow-[12px_12px_0px_var(--shadow-solid)] mb-10 overflow-hidden">
            <img 
              src={post.heroImage} 
              alt={post.title} 
              // @ts-ignore: Diferencia de versiones entre Tipos de TS y el DOM de React
              fetchpriority="high"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-4xl font-display font-black uppercase tracking-tightest leading-none mb-6">
            {post.title}
          </h1>
          <p className="text-xl md:text-2xl font-sans opacity-70 italic border-l-4 border-color-magenta pl-6">
            {post.excerpt}
          </p>
        </header>

        {/* Content Section */}
        <div className="bg-card border-4 border-foreground p-8 md:p-14 shadow-[16px_16px_0px_var(--shadow-solid)]">
           <MarkdownRenderer content={post.content} />
        </div>

        {/* Closing Section */}
        <ArticleClosing />
      </article>
    </div>
  );
};
