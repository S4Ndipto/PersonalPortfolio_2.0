import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} className="text-accent" />,
      title: 'Email',
      value: 'sandiptodas@outlook.com',
      link: 'mailto:sandiptodas@outlook.com'
    },
    {
      icon: <Phone size={24} className="text-accent" />,
      title: 'Phone',
      value: '+91 9564546678',
      link: 'tel:+919564546678'
    },
    {
      icon: <MapPin size={24} className="text-accent" />,
      title: 'Location',
      value: 'Kolkata, India',
      link: null
    },
    {
      icon: <Linkedin size={24} className="text-accent" />,
      title: 'LinkedIn',
      value: 'Sandipto Das',
      link: 'https://linkedin.com/in/sandipto-das'
    },
    {
      icon: <Github size={24} className="text-accent" />,
      title: 'GitHub',
      value: 'S4Ndipto',
      link: 'https://github.com/S4Ndipto'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <SectionHeading 
        title="Contact Me" 
        subtitle="Get in touch for opportunities or collaborations" 
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-primary mb-6"
          >
            Let's Connect
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-text-muted mb-8"
          >
            I'm currently looking for new opportunities in data analysis and related fields. Whether you have a question, a project idea, or just want to say hello, feel free to reach out!
          </motion.p>
          
          <div className="space-y-6 mb-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <div className="w-12 h-12 rounded-full bg-background-lighter border border-border flex items-center justify-center mr-4 shadow-md">
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-lg font-medium text-primary">{info.title}</h4>
                  {info.link ? (
                    <a 
                      href={info.link} 
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-text-muted hover:text-accent transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-text-muted">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;