import { Database, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Habilidades", href: "#skills" },
  { label: "Projetos", href: "#projects" },
  { label: "Experiência", href: "#experience" },
  { label: "Sobre", href: "#about" },
  { label: "Contato", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-primary/10">

      <div className="container mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group"
        >
          <div className="relative">

            <Database
              className="w-6 h-6 text-primary transition-all duration-300 group-hover:rotate-12 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <span className="font-serif text-2xl font-bold text-navy tracking-tight group-hover:text-primary transition-colors duration-300">
            DataSol
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10">

          {navLinks.map((link) => (
            <li key={link.href}>

              <a
                href={link.href}
                className="relative text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 group"
              >
                {link.label}

                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">

          <a
            href="/Curriculo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
          >

            <span className="relative z-10">
              Currículo
            </span>

            <div className="absolute inset-0 bg-gradient-to-r from-primary to-turquoise opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-navy"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X size={26} />
          ) : (
            <Menu size={26} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-primary/10 animate-fade-in">

          <ul className="flex flex-col items-center gap-6 py-8">

            {navLinks.map((link) => (
              <li key={link.href}>

                <a
                  href={link.href}
                  className="text-base font-medium text-navy hover:text-primary transition-colors duration-300"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}

            {/* Mobile Resume */}
            <li>
              <a
                href="/curriculo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:scale-105 hover:bg-primary/90 transition-all duration-300"
              >
                Currículo
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;