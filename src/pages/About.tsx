import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import SkillBadge from '../components/SkillBadge';
import { Download, Mail, Linkedin, Github, User, Code, Database, BarChart2, FileText } from 'lucide-react';

const About: React.FC = () => {
  const skills = {
    programming: ['Python', 'C/C++', 'SQL', 'HTML', 'CSS'],
    tools: ['Jupyter Notebook', 'MySQL', 'VS Code', 'Pandas', 'MS Excel'],
    dataAnalysis: ['Data Visualization', 'Data Cleaning', 'Statistical Analysis'],
    softSkills: ['Team Collaboration', 'Problem-Solving', 'Agile Methodology']
  };

  return (
    <div className="pt-24 pb-16">
      <SectionHeading 
        title="About Me" 
        subtitle="Get to know more about my background and skills" 
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            y: -5,
            transition: { type: 'spring', stiffness: 200, damping: 12 }
          }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-background-lighter border border-border rounded-xl p-6 shadow-lg hover:shadow-[0_0_18px_#a855f7] transition-shadow duration-300"
        >

          <div className="bg-background-lighter border border-border rounded-xl p-6 shadow-lg">
            <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center mb-6">
              <User size={40} className="text-accent" />
            </div>
            
            <h3 className="text-2xl font-bold text-primary mb-4">Who I Am</h3>
            
            <div className="space-y-4 text-text-muted">
              <p>
                I'm Sandipto Das, a detail-oriented Data Analyst fresher with a passion for transforming raw data into meaningful insights. Currently pursuing my Bachelor's degree in Computer Science Engineering from Techno India University, Kolkata.
              </p>
              <p>
                My journey in data analysis began during my academic projects, where I discovered my passion for extracting patterns and insights from complex datasets. This led me to specialize in data visualization, SQL, Python, and MS Excel.
              </p>
              <p>
                I believe in the power of data to drive informed decision-making and solve real-world problems. My goal is to leverage my technical skills and analytical mindset to help organizations make data-driven decisions.
              </p>
            </div>
            
            <div className="flex space-x-4 mt-8">
              <motion.a
                href="mailto:sandiptodas@outlook.com"
                whileHover={{ y: -3 }}
                className="text-text-muted hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/sandipto-das"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-text-muted hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </motion.a>
              
              <motion.a
                href="https://github.com/S4Ndipto"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-text-muted hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </motion.a>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            y: -5,
            transition: { type: 'spring', stiffness: 200, damping: 12 }
          }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col space-y-6 bg-background-lighter border border-border rounded-xl p-6 shadow-lg hover:shadow-[0_0_18px_#a855f7] transition-shadow duration-300"
        >
          <div className="bg-background-lighter border border-border rounded-xl p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                <FileText size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">Personal Information</h3>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-text-muted text-sm mb-1">Name</p>
                <p className="text-text font-medium">Sandipto Das</p>
              </div>
              
              <div>
                <p className="text-text-muted text-sm mb-1">Email</p>
                <p className="text-text font-medium">sandiptodas@outlook.com</p>
              </div>
              
              <div>
                <p className="text-text-muted text-sm mb-1">Phone</p>
                <p className="text-text font-medium">+91 9564546678</p>
              </div>
              
              <div>
                <p className="text-text-muted text-sm mb-1">Location</p>
                <p className="text-text font-medium">Kolkata, India</p>
              </div>
            </div>
            
            <div className="mt-6">
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent hover:bg-accent/90 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center w-fit"
              >
                Download Resume
                <Download size={16} className="ml-2" />
              </motion.a>
            </div>
          </div>
          
          <div className="bg-background-lighter border border-border rounded-xl p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                <BarChart2 size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">Data Analysis Focus</h3>
              </div>
            </div>
            
            <ul className="space-y-2 text-text-muted">
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Data cleaning and normalization for improved report accuracy</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Statistical analysis and pattern recognition in large datasets</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Creating insightful visualizations to communicate findings</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Implementing automation for data retrieval and processing</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
      
      {/* Skills Section */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-primary mb-8">Technical Skills</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            y: -5,
            transition: { type: 'spring', stiffness: 200, damping: 12 }
          }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-background-lighter border border-border rounded-xl p-6 shadow-lg hover:shadow-[0_0_18px_#a855f7] transition-shadow duration-300"
        >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                <Code size={24} className="text-accent" />
              </div>
              <h4 className="text-xl font-bold text-primary">Programming</h4>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {skills.programming.map((skill, index) => (
                <SkillBadge key={skill} name={skill} delay={index * 0.05} />
              ))}
            </div>
          </motion.div>
          
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            y: -5,
            transition: { type: 'spring', stiffness: 200, damping: 12 }
          }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-background-lighter border border-border rounded-xl p-6 shadow-lg hover:shadow-[0_0_18px_#a855f7] transition-shadow duration-300"
        >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                <Database size={24} className="text-accent" />
              </div>
              <h4 className="text-xl font-bold text-primary">Tools</h4>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill, index) => (
                <SkillBadge key={skill} name={skill} delay={index * 0.05} />
              ))}
            </div>
          </motion.div>
          
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            y: -5,
            transition: { type: 'spring', stiffness: 200, damping: 12 }
          }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-background-lighter border border-border rounded-xl p-6 shadow-lg hover:shadow-[0_0_18px_#a855f7] transition-shadow duration-300"
        >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                <BarChart2 size={24} className="text-accent" />
              </div>
              <h4 className="text-xl font-bold text-primary">Data Analysis</h4>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {skills.dataAnalysis.map((skill, index) => (
                <SkillBadge key={skill} name={skill} delay={index * 0.05} />
              ))}
            </div>
          </motion.div>
          
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            y: -5,
            transition: { type: 'spring', stiffness: 200, damping: 12 }
          }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-background-lighter border border-border rounded-xl p-6 shadow-lg hover:shadow-[0_0_18px_#a855f7] transition-shadow duration-300"
        >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                <User size={24} className="text-accent" />
              </div>
              <h4 className="text-xl font-bold text-primary">Soft Skills</h4>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {skills.softSkills.map((skill, index) => (
                <SkillBadge key={skill} name={skill} delay={index * 0.05} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;