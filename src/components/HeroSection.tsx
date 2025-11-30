  import { motion } from 'framer-motion';
  import { ArrowDown } from 'lucide-react';

  export default function HeroSection() {
    return (
      <section id="home" className="relative min-h-screen lg:min-h-0 lg:h-screen flex items-center justify-center overflow-hidden py-16 lg:py-4 xl:py-8">
        {/* Background gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
        
        <div className="relative text-center px-4 sm:px-6 max-w-5xl mx-auto" style={{ zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.p
              className="text-primary font-medium mb-1 lg:mb-1 xl:mb-3 tracking-widest uppercase text-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Creative Developer
            </motion.p>

            <motion.img
              src="/profilepic.png"
              alt="Pratham Goswami"
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-14 lg:h-14 xl:w-28 xl:h-28 rounded-full mx-auto mb-2 lg:mb-1 xl:mb-3 border border-white/20 shadow-lg object-cover"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />

            <motion.h2
              className="text-lg sm:text-xl lg:text-base xl:text-2xl font-semibold mb-1 lg:mb-0.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              Pratham Goswami
            </motion.h2>
            
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-6xl font-bold mb-2 lg:mb-1.5 xl:mb-3 leading-tight">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Crafting Digital
              </motion.span>
              <motion.span
                className="block gradient-text-stable text-glow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Experiences
              </motion.span>
            </h1>
            
            <motion.p
              className="text-muted-foreground text-xs sm:text-sm lg:text-xs xl:text-base max-w-2xl mx-auto mb-3 lg:mb-2 xl:mb-4 px-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              I design and build immersive web experiences that blend creativity 
              with cutting-edge technology. Let's create something extraordinary.
            </motion.p>
            
            <motion.div
              className="flex flex-row gap-2 lg:gap-2 xl:gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <motion.a
                href="#work"
                className="px-4 sm:px-5 lg:px-4 xl:px-6 py-2 sm:py-2.5 lg:py-2 xl:py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-all glow-primary text-xs lg:text-[11px] xl:text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="px-4 sm:px-5 lg:px-4 xl:px-6 py-2 sm:py-2.5 lg:py-2 xl:py-3 glass rounded-full font-medium hover:bg-card/60 transition-all text-xs lg:text-[11px] xl:text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div
          className="absolute bottom-2 sm:bottom-4 lg:bottom-2 xl:bottom-8 left-1/2 -translate-x-1/2"
          style={{ zIndex: 10 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-0.5 lg:gap-0.5 xl:gap-2 text-muted-foreground hover:text-foreground transition-colors"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <span className="text-[10px] lg:text-[10px] xl:text-sm">Scroll</span>
            <ArrowDown size={14} className="lg:w-3 lg:h-3 xl:w-5 xl:h-5" />
          </motion.a>
        </motion.div>
      </section>
    );
  }
