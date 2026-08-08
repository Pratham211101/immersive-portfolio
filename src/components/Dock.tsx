import { motion } from 'framer-motion';
import { Briefcase, MessageCircle, FileText, User, FolderKanban } from 'lucide-react';

const RESUME_URL = "https://drive.google.com/file/d/17_ibMf8NMPtKc8Ohuz6K2MJbD5LhwnNu/view";

interface DockItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  external?: boolean;
}

function DockItem({ href, icon, label, external }: DockItemProps) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="relative flex items-center h-10 rounded-full bg-white/[0.05] border border-white/[0.08] backdrop-blur-md text-primary hover:bg-white/[0.12] transition-colors group cursor-pointer overflow-hidden flex-shrink-0"
      whileTap={{ scale: 0.96 }}
    >
      {/* Fixed-size icon container */}
      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10">
        {icon}
      </div>

      {/* Text slides in via max-width + opacity — no "auto" animation */}
      <div
        className="overflow-hidden whitespace-nowrap flex items-center transition-all duration-300 ease-out"
        style={{ maxWidth: 0, opacity: 0, paddingRight: 0 }}
      >
        <span className="text-xs font-medium text-foreground">{label}</span>
      </div>

      <style>{`
        .group:hover > div:nth-child(2) {
          max-width: 120px !important;
          opacity: 1 !important;
          padding-right: 14px !important;
        }
      `}</style>
    </motion.a>
  );
}

export default function Dock() {
  return (
    <div className="fixed bottom-6 inset-x-0 z-50 pointer-events-none flex justify-center items-center">
      <motion.div
        className="pointer-events-auto flex items-center gap-2 px-3 py-2 rounded-full bg-card/60 backdrop-blur-2xl border border-white/[0.08]"
        style={{
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.04) inset',
        }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5, ease: 'easeOut' }}
      >
        <DockItem
          href="#about"
          icon={<User className="w-5 h-5 text-primary" />}
          label="About"
        />

        <DockItem
          href="#work"
          icon={<Briefcase className="w-5 h-5 text-primary" />}
          label="Experience"
        />

        <DockItem
          href="#projects"
          icon={<FolderKanban className="w-5 h-5 text-primary" />}
          label="View My Work"
        />

        <DockItem
          href="#contact"
          icon={<MessageCircle className="w-5 h-5 text-primary" />}
          label="Contact"
        />

        {/* Separator */}
        <div className="w-px h-5 bg-white/[0.1] mx-0.5" />

        <DockItem
          href={RESUME_URL}
          icon={<FileText className="w-5 h-5 text-primary" />}
          label="Resume"
          external
        />
      </motion.div>
    </div>
  );
}
