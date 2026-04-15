import { Link, useLocation } from "react-router";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { motion } from "motion/react";
import logoImg from "../../assets/logo.webp";

const NAV_ITEMS = [
  { path: "/", label: "Inicio" },
  { path: "/about", label: "Nosotros" },
  { path: "/process", label: "Proceso" },
  { path: "/projects", label: "Proyectos" },
  { path: "/contact", label: "Contacto" },
];

export function Header() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b-4 border-foreground shadow-[0px_4px_0px_0px_rgba(0,0,0,0.1)] dark:shadow-[0px_4px_0px_0px_rgba(255,255,255,0.05)]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="relative group flex items-center gap-2">
            <img 
              src={logoImg} 
              alt="Logo" 
              className="w-12 h-12 object-contain transition-transform group-hover:scale-110 group-hover:rotate-5" 
            />
            <div className="text-3xl font-black tracking-tight hidden sm:block">
              <span className="relative">
                NEXO
                <span className="text-[var(--color-magenta)]">WEB</span>
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[var(--color-cyan)] transition-all duration-300 group-hover:w-full"></span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 font-black uppercase text-sm transition-all ${
                  isActive(item.path)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-[var(--color-magenta)]"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-2">
            <motion.button
              whileTap={{ scale: 0.95, x: 1, y: 1 }}
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="p-2 border-2 border-foreground hover:bg-[var(--color-lime)] hover:text-black hover:rotate-5 transition-colors"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 border-2 border-foreground hover:bg-[var(--color-cyan)] hover:text-black transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t-2 border-foreground">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 font-black uppercase text-sm border-l-4 ${
                  isActive(item.path)
                    ? "border-[var(--color-magenta)] bg-accent"
                    : "border-transparent hover:border-[var(--color-cyan)] hover:bg-accent"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}