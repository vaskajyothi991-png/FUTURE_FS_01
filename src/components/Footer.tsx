import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-secondary">
        © {new Date().getFullYear()} Vaska Jyothi. All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        <a href="https://github.com/vaskajyothi991-png" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">
          <Github size={18} />
        </a>
        <a href="https://www.linkedin.com/in/vaska-jyothi-339316379" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">
          <Linkedin size={18} />
        </a>
        <a href="mailto:vaskajyothi991@gmail.com" className="text-secondary hover:text-primary transition-colors">
          <Mail size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
