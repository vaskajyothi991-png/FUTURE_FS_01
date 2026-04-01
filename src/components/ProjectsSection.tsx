import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI Chat Application",
    desc: "A conversational AI interface built with Python and NLP libraries, featuring real-time responses and context awareness.",
    tags: ["Python", "NLP", "AI"],
    github: "https://github.com/vaskajyothi991-png",
  },
  {
    title: "Portfolio Website",
    desc: "A modern, responsive portfolio website built with React and Tailwind CSS featuring smooth animations and glassmorphism design.",
    tags: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/vaskajyothi991-png",
  },
  {
    title: "Task Manager App",
    desc: "Full-stack task management application with authentication, CRUD operations, and a clean intuitive interface.",
    tags: ["JavaScript", "CSS", "HTML"],
    github: "https://github.com/vaskajyothi991-png",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Projects</h2>
          <p className="text-secondary max-w-xl mx-auto">
            Some of the things I've built recently.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card p-6 group hover:glow-border transition-all duration-300 flex flex-col"
            >
              {/* Gradient accent bar */}
              <div
                className="h-1 w-16 rounded-full mb-5"
                style={{ background: "linear-gradient(90deg, hsl(var(--gradient-start)), hsl(var(--gradient-end)))" }}
              />
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-secondary leading-relaxed mb-4 flex-1">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors"
              >
                <Github size={16} />
                View on GitHub
                <ExternalLink size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
