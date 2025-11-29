import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Sparkles, Zap } from 'lucide-react';

const skills = [
  { icon: Code2, name: 'Development', description: 'React, TypeScript, Node.js, Three.js' },
  { icon: Palette, name: 'Design', description: 'UI/UX, Figma, Motion Design' },
  { icon: Sparkles, name: '3D & Animation', description: 'WebGL, GSAP, Framer Motion' },
  { icon: Zap, name: 'Performance', description: 'Optimization, Accessibility, SEO' },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-32 px-6 relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" />
      
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
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
              className="font-display text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              Passionate about creating
              <span className="gradient-text"> meaningful </span>
              digital products
            </motion.h2>
            
            <motion.div
              className="space-y-4 text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              <p>
                I'm a creative developer with over 5 years of experience building 
                web applications that not only look stunning but also deliver 
                exceptional user experiences.
              </p>
              <p>
                My passion lies at the intersection of design and technology, 
                where I bring ideas to life through clean code and thoughtful 
                interactions. I believe the best digital experiences are those 
                that feel intuitive and delightful.
              </p>
            </motion.div>

            <motion.div
              className="mt-8 flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
            >
              <div className="text-center">
                <div className="font-display text-4xl font-bold gradient-text">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <div className="font-display text-4xl font-bold gradient-text">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <div className="font-display text-4xl font-bold gradient-text">30+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Skills */}
          <div className="grid sm:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="glass p-6 rounded-2xl hover:bg-card/60 transition-all group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{skill.name}</h3>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
