import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  period,
  description,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-12 border-l-2 border-border last:border-l-transparent last:pb-0"
    >
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent"></div>
      
      <div className="bg-background-lighter border border-border rounded-xl p-6 shadow-lg hover:shadow-accent/5 transition-all duration-300">
        <h3 className="text-xl font-bold text-primary mb-1">{title}</h3>
        <h4 className="text-lg text-accent mb-2">{company}</h4>
        
        <div className="flex items-center text-text-muted mb-4">
          <Calendar size={16} className="mr-2" />
          <span>{period}</span>
        </div>
        
        <ul className="space-y-2">
          {description.map((item, i) => (
            <li key={i} className="text-text-muted">
              • {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;