import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="relative text-center px-4 sm:px-6 max-w-5xl mx-auto" style={{ zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >


          {/* Profile picture */}
          <motion.div
            className="relative mx-auto mb-6 w-32 h-32"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 blur-sm" />
            <img
              src="/pic.png"
              alt="Pratham Goswami"
              className="relative w-32 h-32 rounded-full border-2 border-white/10 shadow-lg object-cover"
            />
          </motion.div>

          <motion.h2
            className="text-2xl md:text-3xl font-semibold mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Pratham Goswami
          </motion.h2>

          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
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
            className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 px-2 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            I design and build immersive web experiences that blend creativity
            with cutting-edge technology. Let's create something extraordinary.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <motion.a
              href="#work"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-all glow-primary text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="px-6 sm:px-8 py-3 sm:py-4 glass-premium rounded-full font-medium hover:bg-card/60 transition-all text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/17_ibMf8NMPtKc8Ohuz6K2MJbD5LhwnNu/view"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3 sm:py-4 glass-premium rounded-full font-medium hover:bg-card/60 transition-all text-sm sm:text-base inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={16} />
              Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        style={{ zIndex: 10 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-sm">Scroll</span>
          <ArrowDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
}
