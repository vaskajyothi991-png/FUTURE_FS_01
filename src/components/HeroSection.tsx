import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Download } from "lucide-react";

const roles = [
  "Aspiring Software Developer",
  "AI Enthusiast",
  "CS Student",
  "Problem Solver",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[120px] animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Profile image */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="mb-8 inline-block"
        >
          <div className="w-36 h-36 md:w-44 md:h-44 rounded-full p-1 glow-border mx-auto" style={{ background: "linear-gradient(135deg, hsl(var(--gradient-start)), hsl(var(--gradient-end)))" }}>
            <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-4xl font-heading font-bold gradient-text">
              VJ
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-4"
        >
          Hi, I'm <span className="gradient-text">Vaska Jyothi</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg md:text-2xl text-secondary mb-8 h-8"
        >
          <span>{text}</span>
          <span className="animate-pulse text-primary">|</span>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <a
            href="https://github.com/vaskajyothi991-png"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-secondary hover:text-foreground hover:glow-border transition-all duration-300"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/vaska-jyothi-339316379"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-secondary hover:text-foreground hover:glow-border transition-all duration-300"
          >
            <Linkedin size={20} />
          </a>
        </motion.div>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="glow-button inline-flex items-center gap-2 px-8 py-3 rounded-full text-primary-foreground font-medium"
        >
          <Download size={18} />
          Get In Touch
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
