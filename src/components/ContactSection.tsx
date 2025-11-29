import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Send, Linkedin, Github } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from 'emailjs-com';
import emailjs from 'emailjs-com';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Pratham211101', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/pratham-goswami-4a2a83228/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/Pratham211101', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/pratham-goswami-4a2a83228/', label: 'LinkedIn' },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target as HTMLFormElement;

    try {
      await emailjs.sendForm(
        'service_q5p45kr',
        'YOUR_TEMPLATE_ID',
        form,
        'YOUR_PUBLIC_KEY'
      );
      toast.success("Message sent! I'll get back to you soon.");
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("Oops! Something went wrong. Try again later.");
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 md:px-12 relative bg-background/80 backdrop-blur-sm">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] md:w-[800px] h-[500px] sm:h-[700px] md:h-[800px] bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-[120px] sm:blur-[150px]" />

      <div className="max-w-7xl mx-auto relative" ref={ref}>
        <motion.div
          className="text-center mb-12 sm:mb-16"
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
            Get In Touch
          </motion.p>

          <motion.h2
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Let's create something <span className="gradient-text-stable">amazing</span> together
          </motion.h2>

          <motion.p
            className="text-muted-foreground max-w-xl sm:max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can work together.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass p-6 sm:p-8 rounded-2xl sm:rounded-3xl">
              <h3 className="font-display text-2xl font-semibold mb-6">Contact Info</h3>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-sm sm:text-base">goswamipratham21112001@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium text-sm sm:text-base">Bangalore, IN</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 sm:mt-8 sm:pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-3">Follow me</p>
                <div className="flex gap-2 sm:gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={social.label}
                    >
                      <social.icon size={16} className="sm:!w-5 sm:!h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass p-6 sm:p-8 rounded-2xl sm:rounded-3xl space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1 sm:mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm sm:text-base"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 sm:mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm sm:text-base"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1 sm:mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm sm:text-base"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 sm:mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 sm:py-4 bg-primary text-primary-foreground rounded-xl font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 glow-primary text-sm sm:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send size={16} className="sm:!w-5 sm:!h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
