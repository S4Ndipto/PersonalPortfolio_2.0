import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-background-lighter border border-border rounded-xl overflow-hidden shadow-xl hover:shadow-accent/5 transition-all duration-300"
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
        <p className="text-text-muted mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech, i) => (
            <span 
              key={i} 
              className="text-xs font-medium bg-background px-2 py-1 rounded-md border border-border text-accent"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-text-muted hover:text-accent transition-colors"
          >
            <Github size={18} className="mr-1" />
            <span>GitHub</span>
          </a>
          
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-text-muted hover:text-accent transition-colors"
            >
              <ExternalLink size={18} className="mr-1" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;