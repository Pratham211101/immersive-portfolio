import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowUp } from 'lucide-react';

const footerLinks = [
  { icon: Github, href: 'https://github.com/Pratham211101', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/pratham-goswami-4a2a83228/', label: 'LinkedIn' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-10 px-6 border-t border-border/30 bg-background/80 backdrop-blur-sm" style={{ zIndex: 1 }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Brand */}
          <motion.div
            className="flex flex-col items-center md:items-start gap-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="font-display text-lg font-bold gradient-text-stable">PG.</span>
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Pratham Goswami. Built with passion.
            </p>
          </motion.div>

          {/* Center - Social Links */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {footerLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-secondary/60 border border-border/30 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary/50 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon size={16} />
              </motion.a>
            ))}
          </motion.div>

          {/* Right - Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm group"
            whileHover={{ y: -2 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span>Back to top</span>
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
