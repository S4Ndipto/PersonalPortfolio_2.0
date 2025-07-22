import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import SkillBadge from '../components/SkillBadge';
import ProjectCard from '../components/ProjectCard';
import profilePic from '../assets/profile.jpg';
import TypingText from '../components/TypingText';
import resumePDF from '../assets/resume.pdf';


const Home: React.FC = () => {
  const skills = [
    'Python', 'SQL', 'C/C++', 'Data Analysis', 'Data Visualization', 
    'Data Cleaning', 'Statistical Analysis', 'MS Excel', 'Jupyter Notebook', 
    'MySQL', 'Pandas', 'HTML', 'CSS'
  ];

  const featuredProjects = [
    {
      title: 'Voice Command Automation Tool',
      description: 'A Python-based tool that implements various features including web browsing, real-time calculations, and music playback through voice commands.',
      techStack: ['Python', 'API Integration', 'Speech Recognition', 'Web Automation'],
      githubUrl: 'https://github.com/S4Ndipto/voice-command-automation',
    },
    {
      title: 'Walmart Sales Analytics',
      description: 'Analyzed a 10,000+ row Walmart sales dataset using Python and SQL, with automated data retrieval via Kaggle API and integration with MySQL.',
      techStack: ['Python', 'Pandas', 'Jupyter Notebook', 'MySQL', 'Kaggle API', 'SQLAlchemy'],
      githubUrl: 'https://github.com/S4Ndipto/walmart-sales-analytics',
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
              Hi, I'm <span className="text-accent">Sandipto Das</span>
              <span className="animate-pulse">_</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-medium text-text-muted mb-6">
              Data Analyst
            </h2>
            
            <TypingText
              text="Detail-oriented Data Analyst with hands-on experience in data visualization, SQL, Python, and MS Excel. Transforming raw data into actionable insights."
              speed={75}
              className="text-text-muted text-lg mb-8 max-w-xl"
            />
            
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-accent hover:bg-accent/90 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center"
                >
                  Get in Touch
                  <ArrowRight size={18} className="ml-2" />
                </motion.button>
              </Link>
              
              <motion.a
                href={resumePDF}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border border-accent text-accent hover:bg-accent/10 font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center"
              >
                Download CV
                <Download size={18} className="ml-2" />
              </motion.a>
            </div>
            
            <div className="flex space-x-4 mt-8">
              <motion.a
                href="mailto:sandiptodas@outlook.com"
                whileHover={{ y: -3 }}
                className="text-text-muted hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/sandipto-das"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-text-muted hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </motion.a>
              
              <motion.a
                href="https://github.com/S4Ndipto"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-text-muted hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="w-full h-[500px] rounded-2xl bg-gradient-to-br from-accent/20 to-primary/5 p-1">
              <div className="w-full h-full rounded-xl bg-background-lighter border border-border flex items-center justify-center">
                <div className="text-center p-8">
                  <motion.img
                    src={profilePic}
                    alt="Profile"
                    initial={{ y: 0 }}
                    animate={{ y: [0, -50, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                    whileHover={{ scale: 1.05 }}
                    className="w-48 h-48 rounded-full mx-auto mb-6 object-cover object-top translate-y-1 shadow-[0_0_20px_#a855f7] transition-transform duration-300"
                  />
                  <h3 className="text-2xl font-bold text-primary mb-2">Sandipto Das</h3>
                  <p className="text-text-muted">Data Analyst</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-accent/10 z-[-1]"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-primary/10 z-[-1]"></div>
          </motion.div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-20">
        <SectionHeading 
          title="Skills" 
          subtitle="Technical expertise and competencies" 
        />
        
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <SkillBadge key={skill} name={skill} delay={index * 0.05} />
          ))}
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="py-20">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="Showcasing my recent work and technical abilities" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              githubUrl={project.githubUrl}
              index={index}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-background-lighter border border-border hover:border-accent text-text hover:text-accent font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center mx-auto"
            >
              View All Projects
              <ArrowRight size={18} className="ml-2" />
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;