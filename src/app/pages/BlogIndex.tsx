import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "../data/blogData";
import { Link } from "react-router";

export const BlogIndex = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <header className="mb-20 text-center max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter leading-none mb-6">
          Nexo<span className="text-color-orange underline decoration-8 underline-offset-12">Insights</span>
        </h1>
        <p className="text-xl md:text-2xl font-sans font-medium opacity-80 uppercase tracking-widest">
          Recursos, estrategias y guías de autoridad en la era de la IA.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogPosts.map((post) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, x: -8 }}
            className="group relative bg-card border-4 border-foreground shadow-[12px_12px_0px_var(--shadow-solid)] hover:shadow-[20px_20px_0px_var(--color-lime)] transition-all duration-300"
          >
            <div className="aspect-video bg-muted border-b-4 border-foreground overflow-hidden">
               {/* Fixed Image placeholder or actual hero */}
              <img 
                src={post.heroImage} 
                alt={post.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            
            <div className="p-8 flex flex-col gap-4">
              <h2 className="text-2xl font-display font-black uppercase leading-tight group-hover:text-color-orange transition-colors">
                {post.title}
              </h2>
              <p className="font-sans text-lg opacity-70 line-clamp-3">
                {post.excerpt}
              </p>
              
              <Link 
                to={`/blog/${post.slug}`}
                className="mt-4 flex items-center gap-2 font-display font-black uppercase text-xl underline decoration-4 underline-offset-4 hover:text-color-orange transition-colors"
              >
                Leer más <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
