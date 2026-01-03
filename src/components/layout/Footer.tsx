import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-cream/50">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Branding */}
          <div className="text-center md:text-left">
            <Link to="/" className="font-display font-semibold text-lg text-foreground">
              Portfolio
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">
              Crafted with care and pastels
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-6">
            <Link to="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-lavender/50 hover:bg-lavender transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} className="text-foreground" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-baby-blue/50 hover:bg-baby-blue transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} className="text-foreground" />
            </a>
            <a 
              href="mailto:hello@example.com"
              className="p-2 rounded-full bg-peach/50 hover:bg-peach transition-colors"
              aria-label="Email"
            >
              <Mail size={18} className="text-foreground" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
