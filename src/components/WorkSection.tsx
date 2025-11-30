import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github ,Briefcase} from 'lucide-react';

const projects = [
  // {
  //   title: 'Nebula Dashboard',
  //   description: 'A modern analytics dashboard with real-time data visualization and 3D charts.',
  //   tags: ['React', 'Three.js', 'D3.js'],
  //   color: 'from-primary/20 to-accent/20',
  //   image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
  // },
  {
      title: "ToBeHonest: A Blogging Platform",
      description: "A Blogging Platform that allows users to create, read, edit and delete blogs. ",
      image: "/mernblog.png",
      tags: ["React", "Tailwind", "Shadcn UI", "MongoDB", "Appwrite", "NodeJS", "Express"],
      color: 'from-primary/20 to-accent/20',
      repoLink: "https://github.com/Pratham211101/ToBeHonest",
      liveLink: "https://the-blog-hub-tau.vercel.app/"
    },
    {
      title: "CrowdFunding Platform: Using Web3",
      description: "This project aims to create a secure and user-friendly crowdfunding platform leveraging the power of Web3 and blockchain technology.",
      image: "/crowdfunding.png",
      tags: ["NextJS", "Tailwind", "Solidity", "Hardhat", "React", "NodeJS", "Blockchain"],
      color: 'from-primary/20 to-accent/20',
      repoLink: "https://github.com/Pratham211101/crowdfunding-web3-app",
    },
    {
      title: "MediaVault",
      description: "A media management application that allows users to upload, manage, compress, and share their media files. It provides a user-friendly interface for organizing and accessing media content.",
      image: "/mediavault.png",
      tags: ["NextJS" , "Tailwind" , "Node.js" , "NeonDB" , "Express" , "Cloudinary" , "Prisma"],
      repoLink: "https://github.com/Pratham211101/MediaVault",
      color: 'from-primary/20 to-accent/20',
      liveLink: "https://media-vault-dusky.vercel.app"
    },
    {
      title: "StreamFlix",
      description: "A video streaming application that allows users to watch and manage their favorite videos using plalylists. Users can like ,subscribe and comment on videos. It also provides a user-friendly interface for browsing, searching, history and watching content.",
      image: "/streamflix.png",
      tags: ["React", "Tailwind","Node.js", "Express", "MongoDB", "Shadcn UI"],
      color: 'from-primary/20 to-accent/20',
      repoLink: "https://github.com/Pratham211101/frontend-stream-flix",
      liveLink: "https://frontend-stream-flix.vercel.app/"
    },{
      title: "TideWatch",
      description: "TideWatch is a modern web app for tracking real-time tide data, finding the best fishing times, and saving favorite coasts. It automatically detects your location, fetches nearby tide station data, and works offline with cached information — all in a clean, responsive interface built with React, Vite, and Tailwind CSS.",
      image: "/tidewatch.png",
      tags: ["React", "Tailwind","React-leaflet", "moment.js", "Recharts.js", "lucide-react"],
      color: 'from-primary/20 to-accent/20',
      repoLink: "https://github.com/Pratham211101/TideWatch",
      liveLink: "https://tidewatch2111.vercel.app/"
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
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      <div className="relative glass rounded-3xl overflow-hidden">
        <div className="aspect-video overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />
        </div>
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-display text-xl font-semibold">{project.title}</h3>
            <div className="flex gap-2">
              <div className="flex gap-2">
                {project.repoLink && (
                  <motion.a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={18} />
                  </motion.a>
                )}

                {project.liveLink && (
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                )}
              </div>
            </div>
          </div>
          
          <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
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
            <span className="gradient-text-stable"> worked </span>
            with
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/10 hover:border-primary/30 transition-colors"
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div>
              <h3 className="font-display text-lg sm:text-xl font-semibold flex items-center gap-2">
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <span>Web Developer Intern</span>
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm mt-1">
                Orange Essence Technologies · Jan 2025 — Apr 2025
              </p>
            </div>
          </div>

          <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
            Refactored legacy REST APIs by migrating the backend from MongoDB to MySQL, improving data consistency, query performance, and overall reliability. Updated the frontend to integrate with the new API structure, ensuring seamless functionality across the platform. Additionally, contributed to building responsive UI components and improved the overall user experience through cleaner state management.
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-2 sm:px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
              React
            </span>
            <span className="px-2 sm:px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
              Tailwind
            </span>
            <span className="px-2 sm:px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
              REST APIs
            </span>
            <span className="px-2 sm:px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
              UI Components
            </span>
          </div>
        </motion.div>

        {/* add space here */}
        <div className="mt-24" />

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
            <span className="gradient-text-stable"> developed</span>
          </motion.h2>
          
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            Each project is a unique piece of development, designed to push boundaries
            and create memorable experiences.
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
