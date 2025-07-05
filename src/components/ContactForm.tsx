import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-background-lighter border border-border rounded-xl p-6 md:p-8 shadow-xl"
    >
      {isSubmitted ? (
        <div className="text-center py-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 10 }}
            className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <Send size={32} className="text-accent" />
          </motion.div>
          <h3 className="text-xl font-bold text-primary mb-2">Message Sent!</h3>
          <p className="text-text-muted">
            Thank you for reaching out. I'll get back to you as soon as possible.
          </p>
        </div>
      ) : (
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={() => setIsSubmitted(true)}
        >
          {/* Required for Netlify forms */}
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-text-muted mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-text-muted mb-2 text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                placeholder="Your email"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="subject" className="block text-text-muted mb-2 text-sm">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
              placeholder="Subject of your message"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-text-muted mb-2 text-sm">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors resize-none"
              placeholder="Your message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-accent hover:bg-accent/90 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
          >
            Send Message
            <Send size={18} className="ml-2" />
          </button>
        </form>
      )}
    </motion.div>
  );
};

export default ContactForm;
