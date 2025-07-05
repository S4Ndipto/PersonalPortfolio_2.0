import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  organization: string;
  date: string;
  description?: string[];
  url?: string;
  index: number;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  title,
  organization,
  date,
  description,
  url,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-background-lighter border border-border rounded-xl p-6 shadow-lg hover:shadow-accent/5 transition-all duration-300"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-bold text-primary mb-1">{title}</h3>
          <h4 className="text-lg text-accent mb-2">{organization}</h4>
          
          <div className="flex items-center text-text-muted mb-4">
            <Calendar size={16} className="mr-2" />
            <span>{date}</span>
          </div>
        </div>
        
        <Award size={24} className="text-accent" />
      </div>
      
      {description && description.length > 0 && (
        <ul className="space-y-2 mb-4">
          {description.map((item, i) => (
            <li key={i} className="text-text-muted">
              • {item}
            </li>
          ))}
        </ul>
      )}
      
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-accent hover:underline"
        >
          <span className="mr-1">View Certificate</span>
          <ExternalLink size={16} />
        </a>
      )}
    </motion.div>
  );
};

export default CertificationCard;