import { Link } from "react-router";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const FOOTER_LINKS = [
  { path: "/about", label: "Nosotros" },
  { path: "/process", label: "Proceso" },
  { path: "/projects", label: "Proyectos" },
  { path: "/contact", label: "Contacto" },
];

const SOCIAL_LINKS = [
  { icon: Linkedin, href: "#", ariaLabel: "LinkedIn", hoverClasses: "hover:bg-[var(--color-magenta)] hover:text-white" },
  { icon: Github, href: "#", ariaLabel: "Github", hoverClasses: "hover:bg-[var(--color-cyan)] hover:text-black" },
  { icon: Twitter, href: "#", ariaLabel: "Twitter", hoverClasses: "hover:bg-[var(--color-lime)] hover:text-black" },
  { icon: Mail, href: "mailto:info@nexoweb.com", ariaLabel: "Email", hoverClasses: "hover:bg-[var(--color-orange)] hover:text-white" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-foreground bg-accent mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-black mb-4">
              NEXO<span className="text-[var(--color-magenta)]">WEB</span>
            </div>
            <p className="text-muted-foreground">
              Transformamos ideas en experiencias digitales potentes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-black uppercase mb-4 text-sm tracking-wider">
              Enlaces
            </h3>
            <div className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-muted-foreground hover:text-[var(--color-cyan)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-black uppercase mb-4 text-sm tracking-wider">
              Síguenos
            </h3>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.ariaLabel}
                    href={social.href}
                    className={`p-3 border-2 border-foreground transition-colors ${social.hoverClasses}`}
                    aria-label={social.ariaLabel}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t-2 border-foreground">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} NexoWeb. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacidad
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Términos
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}