import { Github, Linkedin, Mail, Database } from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="py-16 border-t border-border/50 relative z-10"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <Database className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform duration-300" />

            <span className="font-serif text-lg font-semibold text-navy">
              DataSol
            </span>
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-6">

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ingridy-solaman-3a8408316/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} strokeWidth={1.5} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/data-analytics-sol"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={18} strokeWidth={1.5} />
            </a>

            {/* Email */}
            <a
              href="mailto:dataanalytics.sol@gmail.com"
              className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300"
              aria-label="E-mail"
            >
              <Mail size={18} strokeWidth={1.5} />
            </a>
          </div>

          {/* Footer Text */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2026 Ingridy Solaman.
            </p>

            <p className="text-xs text-muted-foreground/70 mt-1">
              Desenvolvido com React, TypeScript e muito ☕
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;