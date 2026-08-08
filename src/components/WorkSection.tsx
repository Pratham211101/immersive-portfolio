import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const projects = [
  {
    title: "TerraGreen",
    description: "Production-grade full-stack gardening marketplace with 100+ SKUs, supporting catalog management, cart, checkout, order processing, and Razorpay webhook-based payment verification. Includes centralized admin dashboard with RBAC and unified search with weighted relevance ranking.",
    image: "/terragreen.png",
    tags: ["Next.js", "React", "TypeScript", "MongoDB", "Redis", "AWS S3", "Razorpay", "Better Auth"],
    color: 'from-emerald-500/20 to-primary/20',
    repoLink: "https://github.com/Pratham211101/terragreen-next",
    liveLink: "https://terragreen-next.vercel.app/"
  },
  {
    title: "Klyp",
    description: "Full-stack video-sharing platform with adaptive bitrate HLS streaming via FFmpeg (360p/720p/1080p). Built asynchronous media-processing architecture using BullMQ workers and Redis job queues, decoupling video ingestion from transcoding for background processing via AWS S3.",
    image: "/klyp.png",
    tags: ["Next.js", "Express.js", "MongoDB", "Redis", "BullMQ", "FFmpeg", "AWS S3", "HLS"],
    color: 'from-accent/20 to-primary/20',
    repoLink: "https://github.com/Pratham211101/klyp-v2",
    liveLink: "https://klyp-app-v2.vercel.app/"
  },
  {
    title: "CrowdFunding Platform: Web3",
    description: "A secure and user-friendly crowdfunding platform leveraging the power of Web3 and smart contracts on blockchain.",
    image: "/crowdfunding.png",
    tags: ["NextJS", "Tailwind", "Solidity", "Hardhat", "React", "NodeJS", "Blockchain"],
    color: 'from-accent/20 to-primary/20',
    repoLink: "https://github.com/Pratham211101/crowdfunding-web3-app",
  },
  {
    title: "MediaVault",
    description: "Media management application for uploading, compressing, and sharing media files with custom link permissions.",
    image: "/mediavault.png",
    tags: ["NextJS", "Tailwind", "Node.js", "NeonDB", "Express", "Cloudinary", "Prisma"],
    repoLink: "https://github.com/Pratham211101/MediaVault",
    color: 'from-primary/20 to-accent/20',
    liveLink: "https://media-vault-dusky.vercel.app"
  }
];

const experiences = [
  {
    title: "Software Engineer",
    company: "CLUIX Pvt. Ltd.",
    logo: "/cluixlogo.png",
    location: "Delhi, India",
    period: "Apr 2026 – Present",
    bullets: [
      "Architected a real-time IoT monitoring platform tracking telemetry from 200+ connected devices with analytics and reporting pipelines using Fastify, MQTT, and Server-Sent Events (SSE).",
      "Built interactive analytics dashboards with React, Recharts, and Framer Motion for real-time visualization of device health and operational metrics for 5+ enterprise clients.",
      "Improved page load performance by 35%+ through Next.js image optimization, lazy loading, dynamic imports, and route-level code splitting.",
      "Reduced API response times by 25%+ through query optimization, indexing, and elimination of N+1 requests across high-frequency telemetry and analytics workloads.",
      "Managed cloud deployments and CI/CD pipelines using AWS EC2, S3, and CloudFront for scalable hosting, automated builds, and global content distribution."
    ],
    tech: ["Fastify", "React", "MQTT", "SSE", "Recharts", "Next.js", "AWS EC2", "S3", "CloudFront"]
  },
  {
    title: "Software Engineer Intern",
    company: "CLUIX Pvt. Ltd.",
    logo: "/cluixlogo.png",
    location: "Delhi, India",
    period: "Dec 2025 – Mar 2026",
    bullets: [
      "Developed customer-facing web applications using React, TypeScript, and Node.js; contributed to 3+ product modules across the agile sprint cycle.",
      "Led dashboard redesign through a unified design system, reducing component duplication by 40%+ and improving UI consistency and maintainability across products."
    ],
    tech: ["React", "TypeScript", "Node.js", "Design Systems", "Agile/Scrum"]
  },
  {
    title: "Web Developer Intern",
    company: "Orange Essence Technologies",
    logo: "/companyimage.png",
    location: "Remote",
    period: "Jan 2025 – Apr 2025",
    bullets: [
      "Refactored legacy REST APIs by migrating the backend from MongoDB to MySQL, improving data consistency, query performance, and overall reliability.",
      "Updated the frontend to integrate with the new API structure, ensuring seamless functionality across the platform.",
      "Contributed to building responsive UI components and improved the overall user experience through cleaner state management."
    ],
    tech: ["React", "Tailwind", "REST APIs", "MySQL", "MongoDB", "UI Components"]
  }
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Glow behind card */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      <div className="relative glass-premium rounded-3xl overflow-hidden card-shine hover-gradient-border h-full flex flex-col justify-between">
        <div>
          {/* Image */}
          <div className="aspect-video overflow-hidden bg-muted/20 relative">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay gradient on image */}
            <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          
          {/* Content */}
          <div className="p-6">
            <div className="flex items-start justify-between mb-3 gap-3">
              <h3 className="font-display text-xl font-semibold leading-tight">{project.title}</h3>
              <div className="flex gap-2 flex-shrink-0">
                {project.repoLink && (
                  <motion.a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-secondary/80 hover:bg-primary hover:text-primary-foreground transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="View source code"
                  >
                    <Github size={18} />
                  </motion.a>
                )}
                {project.liveLink && (
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-secondary/80 hover:bg-primary hover:text-primary-foreground transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="View live demo"
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                )}
              </div>
            </div>
            
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
          </div>
        </div>

        <div className="px-6 pb-6">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/60 text-secondary-foreground border border-border/30 hover:border-primary/30 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function WorkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="work" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative bg-background/80 backdrop-blur-sm">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-primary/10 rounded-full blur-[100px] sm:blur-[150px]" />
      
      <div className="max-w-7xl mx-auto" ref={ref}>

        {/* ═══════════════════ Work Experience ═══════════════════ */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-primary font-medium mb-4 tracking-widest uppercase text-sm"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Work Experience
          </motion.p>
          
          <motion.h2
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Organizations I've
            <span> </span>
            <span className="gradient-text-stable"> worked </span>
            <span> </span>
            with
          </motion.h2>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.period}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-premium p-6 sm:p-8 rounded-2xl sm:rounded-3xl hover-gradient-border card-shine"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-semibold flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 p-1.5 flex items-center justify-center flex-shrink-0 border border-white/10 overflow-hidden">
                      <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                    </div>
                    <span>{exp.title}</span>
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 mt-2 text-muted-foreground">
                    <span className="text-sm font-semibold text-foreground">{exp.company}</span>
                    <span className="hidden sm:inline text-border">•</span>
                    <span className="flex items-center gap-1 text-xs sm:text-sm">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                    <span className="hidden sm:inline text-border">•</span>
                    <span className="flex items-center gap-1 text-xs sm:text-sm">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              <ul className="mt-5 space-y-2.5">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="text-muted-foreground text-sm sm:text-base leading-relaxed flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-border/30">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/60 text-secondary-foreground border border-border/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ═══════════════════ Projects Section ═══════════════════ */}
        <div id="projects" className="pt-32 -mt-32" />

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-primary font-medium mb-4 tracking-widest uppercase text-sm"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Selected Work
          </motion.p>
          
          <motion.h2
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Projects I've
            <span> </span>
            <span className="gradient-text-stable"> developed</span>
          </motion.h2>
          
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            Production-grade systems and application projects designed to solve real-world problems.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
