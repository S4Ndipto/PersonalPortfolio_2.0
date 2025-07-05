import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  align = 'left' 
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <motion.div 
      className={`mb-12 max-w-2xl ${alignmentClasses[align]}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
        {title}
        <span className="text-accent">.</span>
      </h2>
      {subtitle && (
        <p className="text-text-muted text-lg">
          {subtitle}
        </p>
      )}
      <div className="w-20 h-1 bg-accent mt-4 rounded-full"></div>
    </motion.div>
  );
};

export default SectionHeading;