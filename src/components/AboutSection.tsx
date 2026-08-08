import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Server, Database, Cloud, Cpu, Layers, Terminal, Activity } from 'lucide-react';

const skillCategories = [
  {
    icon: Cpu,
    name: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'C++', 'SQL']
  },
  {
    icon: Code2,
    name: 'Frontend',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Recharts', 'Framer Motion', 'Responsive Design']
  },
  {
    icon: Server,
    name: 'Backend',
    skills: ['Node.js', 'Express.js', 'Fastify', 'REST API Design', 'JWT Authentication', 'Webhooks', 'RBAC']
  },
  {
    icon: Activity,
    name: 'Real-Time & Messaging',
    skills: ['MQTT', 'Server-Sent Events (SSE)', 'WebSockets', 'Event-Driven Architecture']
  },
  {
    icon: Database,
    name: 'Databases & Caching',
    skills: ['MongoDB', 'MySQL', 'Redis', 'Query Optimization', 'Indexing']
  },
  {
    icon: Cloud,
    name: 'Cloud & DevOps',
    skills: ['AWS (EC2, S3, CloudFront)', 'Docker', 'Git', 'CI/CD', 'Linux']
  },
  {
    icon: Layers,
    name: 'Systems & Architecture',
    skills: ['System Design', 'Microservices', 'Distributed Job Processing', 'Offline-First Architecture']
  },
  {
    icon: Terminal,
    name: 'Testing & Tools',
    skills: ['Jest', 'Postman', 'BullMQ', 'FFmpeg', 'Agile/Scrum']
  }
];

const educationList = [
  {
    degree: "Bachelor of Engineering in Computer Science Engineering",
    institution: "Dr. Ambedkar Institute of Technology",
    location: "Bengaluru, Karnataka, India",
    period: "2021 – 2025",
    score: "CGPA: 8.53"
  },
  {
    degree: "Intermediate",
    institution: "Central Academy Sr. Sec. School",
    location: "Lucknow, Uttar Pradesh, India",
    period: "2020",
    score: "91%"
  }
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative bg-background/80 backdrop-blur-sm">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-accent/10 rounded-full blur-[100px] sm:blur-[150px]" />
      
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {/* Top Row - Text Summary */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                Full-Stack
                <span> </span>
                <span className="gradient-text-stable"> Software Engineer </span>
              </motion.h2>
              
              <motion.div
                className="space-y-4 text-muted-foreground leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
              >
                <p>
                  Full-stack software engineer with 1+ year of production experience building scalable web platforms and real-time systems using React, Next.js, Node.js, and MongoDB.
                </p>
                <p>
                  Shipped an IoT telemetry monitoring platform tracking 200+ connected devices and production-grade applications handling payments, adaptive streaming, and distributed job processing.
                </p>
              </motion.div>

              <motion.div
                className="mt-8 flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
              >
                <div className="text-center min-w-[80px]">
                  <div className="font-display text-3xl sm:text-4xl font-bold gradient-text-stable">1+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">Year Experience</div>
                </div>
                <div className="hidden sm:block w-px bg-border/50" />
                <div className="text-center min-w-[80px]">
                  <div className="font-display text-3xl sm:text-4xl font-bold gradient-text-stable">200+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">IoT Devices Tracked</div>
                </div>
                <div className="hidden sm:block w-px bg-border/50" />
                <div className="text-center min-w-[80px]">
                  <div className="font-display text-3xl sm:text-4xl font-bold gradient-text-stable">8.53</div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">CGPA (B.E. CSE)</div>
                </div>
              </motion.div>
            </div>

            {/* Education Card */}
            <div className="space-y-4">
              <h3 className="text-xl font-display font-semibold mb-4 text-primary">Education</h3>
              {educationList.map((edu, idx) => (
                <div key={idx} className="glass-premium p-6 rounded-2xl border border-border/40 hover-gradient-border">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <h4 className="font-semibold text-lg">{edu.degree}</h4>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">{edu.score}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-1">{edu.institution} • {edu.location}</p>
                  <p className="text-xs text-muted-foreground/70 mt-2">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Section */}
          <div>
            <div className="text-center max-w-xl mx-auto mb-10">
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-2">Technical Skills</h3>
              <p className="text-sm text-muted-foreground">Comprehensive overview of technologies, frameworks, and architecture paradigms I work with.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {skillCategories.map((cat, index) => (
                <motion.div
                  key={cat.name}
                  className="glass-premium p-5 rounded-2xl hover:bg-card/50 transition-all group card-shine hover-gradient-border"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <cat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-display font-semibold text-base mb-3">{cat.name}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => (
                      <span key={skill} className="px-2.5 py-1 bg-secondary/50 text-xs text-secondary-foreground rounded-md border border-border/20">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
