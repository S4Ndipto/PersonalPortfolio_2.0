import React from 'react';
import { motion } from 'framer-motion';

interface SkillBadgeProps {
  name: string;
  delay?: number;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="bg-background-lighter text-text px-4 py-2 rounded-full text-sm font-medium border border-border hover:border-accent transition-colors duration-300"
    >
      {name}
    </motion.div>
  );
};

export default SkillBadge;