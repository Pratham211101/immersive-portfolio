import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Server,Database,Cloud } from 'lucide-react';

const skills = [
  { icon: Code2, name: 'Frontend', description: 'React, JavaScript, TypeScript, Redux, Tailwind' },
  { icon: Server, name: 'Backend', description: 'Node.js, Express, REST APIs' },
  { icon: Database, name: 'Databases', description: 'MongoDB, MySQL' },
  { icon: Cloud, name: 'DevOps', description: 'AWS, Docker' },
];


export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-12 xl:py-32 px-4 sm:px-6 relative bg-background/80 backdrop-blur-sm">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-accent/10 rounded-full blur-[100px] sm:blur-[150px]" />
      
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-16 items-center"
        >
          {/* Left Column - Text */}
          <div>
            <motion.p
              className="text-primary font-medium mb-4 tracking-widest uppercase text-sm"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              About Me
            </motion.p>
            
            <motion.h2
              className="font-display text-2xl sm:text-3xl lg:text-2xl xl:text-5xl font-bold mb-4 lg:mb-3 xl:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              Passionate about creating
              <span className="gradient-text-stable"> meaningful </span>
              digital products
            </motion.h2>
            
            <motion.div
              className="space-y-2 lg:space-y-2 xl:space-y-4 text-muted-foreground text-sm lg:text-xs xl:text-base"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              <p>
                I'm a creative full-stack developer who loves crafting modern, responsive, and user-centric web applications.
              </p>
              <p>
                I enjoy blending design and engineering to build interfaces that feel clean, smooth, and immersive.
                As a fresher, I'm focused on strengthening my craft, shipping real projects, and continuously exploring new technologies to build scalable digital experiences.
              </p>
            </motion.div>

            <motion.div
              className="mt-4 lg:mt-3 xl:mt-8 flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4 lg:gap-3 xl:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
            >
              <div className="text-center min-w-[60px] lg:min-w-[50px] xl:min-w-[80px]">
                <div className="font-display text-2xl sm:text-3xl lg:text-2xl xl:text-4xl font-bold gradient-text-stable">2+</div>
                <div className="text-xs lg:text-[10px] xl:text-sm text-muted-foreground">Years Building</div>
              </div>
              <div className="hidden sm:block w-px bg-border" />
              <div className="text-center min-w-[60px] lg:min-w-[50px] xl:min-w-[80px]">
                <div className="font-display text-2xl sm:text-3xl lg:text-2xl xl:text-4xl font-bold gradient-text-stable">15+</div>
                <div className="text-xs lg:text-[10px] xl:text-sm text-muted-foreground">Github Projects</div>
              </div>
              <div className="hidden sm:block w-px bg-border" />
              <div className="text-center min-w-[60px] lg:min-w-[50px] xl:min-w-[80px]">
                <div className="font-display text-2xl sm:text-3xl lg:text-2xl xl:text-4xl font-bold gradient-text-stable">5+</div>
                <div className="text-xs lg:text-[10px] xl:text-sm text-muted-foreground">Live Web Apps</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Skills */}
          <div className="grid grid-cols-2 gap-3 lg:gap-2 xl:gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="glass p-4 lg:p-3 xl:p-6 rounded-xl lg:rounded-lg xl:rounded-2xl hover:bg-card/60 transition-all group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-10 h-10 lg:w-8 lg:h-8 xl:w-12 xl:h-12 rounded-lg xl:rounded-xl bg-primary/10 flex items-center justify-center mb-2 lg:mb-2 xl:mb-4 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="w-5 h-5 lg:w-4 lg:h-4 xl:w-6 xl:h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-base lg:text-sm xl:text-lg mb-1 lg:mb-1 xl:mb-2">{skill.name}</h3>
                <p className="text-muted-foreground text-xs lg:text-[10px] xl:text-sm">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
