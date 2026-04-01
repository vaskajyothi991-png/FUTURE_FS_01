import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Brain, Lightbulb, Rocket } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Clean Code", desc: "Writing readable, maintainable solutions" },
  { icon: Brain, title: "AI / ML", desc: "Exploring intelligent systems & models" },
  { icon: Lightbulb, title: "Problem Solver", desc: "Analytical thinking & creative solutions" },
  { icon: Rocket, title: "Fast Learner", desc: "Quickly adapting to new technologies" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">About Me</h2>
          <p className="text-secondary max-w-xl mx-auto">
            Get to know me and what drives my passion for technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-secondary leading-relaxed mb-6">
              I'm <span className="text-foreground font-medium">Vaska Jyothi</span>, a passionate Computer Science student with a deep interest in software development and artificial intelligence. I love turning ideas into functional, elegant digital solutions.
            </p>
            <p className="text-secondary leading-relaxed mb-6">
              Currently focused on building my skills in full-stack development and exploring the fascinating world of AI/ML. I believe in continuous learning and contributing to the developer community.
            </p>
            <p className="text-secondary leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, participating in hackathons, or reading about the latest advancements in AI.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className="glass-card p-5 text-center group hover:glow-border transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg mx-auto mb-3 flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={22} />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-xs text-secondary">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
