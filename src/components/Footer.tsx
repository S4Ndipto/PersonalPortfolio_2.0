import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-darker py-12 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-primary mb-4">Sandipto Das</h3>
            <p className="text-text-muted mb-4">
              I'm always open to collaborating on interesting projects, sharing insights about data analytics, or just having a chat about the latest trends in data science.
            </p>
            <div className="flex items-center text-text-muted">
              <MapPin size={16} className="mr-2" />
              <span>Kolkata, India</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-text-muted hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-text-muted hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/projects" className="text-text-muted hover:text-accent transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="text-text-muted hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-primary mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a 
                href="mailto:sandiptodas@outlook.com" 
                className="text-text-muted hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/sandipto-das" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-text-muted hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/S4Ndipto" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-text-muted hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
            <p className="text-text-muted">
              <a href="mailto:sandiptodas@outlook.com" className="hover:text-accent transition-colors">
                sandiptodas@outlook.com
              </a>
            </p>
            <p className="text-text-muted">+91 9564546678</p>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-text-muted">
          <p>&copy; {currentYear} Sandipto Das. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;