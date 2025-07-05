import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Voice Command Automation Tool',
      description: 'Implemented features: web browsing (Google, YouTube, etc.), real-time calculations, day/time reporting, dice/coin simulation, and music playback. Handled exceptions and edge cases for robust voice command processing, integrated multiple APIs and libraries.',
      techStack: ['Python', 'API Integration', 'Speech Recognition', 'Web Automation', 'Problem Solving'],
      githubUrl: 'https://github.com/S4Ndipto/voice-command-automation',
    },
    {
      title: 'Walmart Sales Analytics',
      description: 'Imported and processed a 10,000+ row Walmart sales dataset using Pandas; automated data retrieval using the Kaggle API. Integrated MySQL with Python using SQLAlchemy and pymysql to streamline querying and reporting from Jupyter Notebook. Performed extensive data profiling and built advanced SQL queries.',
      techStack: ['Python', 'Pandas', 'Jupyter Notebook', 'MySQL', 'Kaggle API', 'SQLAlchemy'],
      githubUrl: 'https://github.com/S4Ndipto/walmart-sales-analytics',
    },
    {
      title: 'Portfolio Website',
      description: 'Designed and developed a responsive personal portfolio website to showcase my skills, projects, and experience. Implemented modern UI/UX principles with smooth animations and dark theme.',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
      githubUrl: 'https://github.com/S4Ndipto/PersonalPortfolio_2.0',
      liveUrl: 'https://sandiptoportfolio.netlify.app/',
    },
    
  ];

  return (
    <div className="pt-24 pb-16">
      <SectionHeading 
        title="Projects" 
        subtitle="Showcasing my technical skills and problem-solving abilities" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;