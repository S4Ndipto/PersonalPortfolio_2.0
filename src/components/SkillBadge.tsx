import { motion } from 'framer-motion';
import React from 'react';

interface SkillBadgeProps {
  name: string;
  delay?: number;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
      whileHover={{
        y: -6,
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 10,
        },
      }}
      className="px-4 py-2 rounded-lg bg-background-lighter text-sm font-medium text-primary border border-border shadow-sm hover:shadow-[0_0_12px_#a855f7] transition-shadow duration-300 cursor-default"
    >
      {name}
    </motion.div>
  );
};

export default SkillBadge;
