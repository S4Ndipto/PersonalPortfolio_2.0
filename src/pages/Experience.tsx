import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ExperienceCard from '../components/ExperienceCard';
import CertificationCard from '../components/CertificationCard';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Data Analyst Intern',
      company: 'ARC Document Solutions India Pvt. Ltd.',
      period: 'Dec 2024 – Feb 2025',
      description: [
        'Performed data cleaning and normalization for 10+ client datasets using MS Excel, improving report accuracy.',
        'Collaborated with cross-functional teams to manage and annotate datasets of 20,000+ entries.'
      ]
    }
  ];

  const certifications = [
    {
      title: 'Deloitte Australia Data Analytics Job Simulation',
      organization: 'Forage',
      date: 'May 2025',
      description: [
        'Completed a Deloitte job simulation involving data analysis and forensic technology',
        'Created a data dashboard using Tableau',
        'Used Excel to classify data and draw business conclusions'
      ],
      url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_Sr5Gu3rvcYdFFrTns_1746859437911_completion_certificate.pdf'
    },
    {
      title: 'Web Development Certification',
      organization: 'CORIZO, Bangalore',
      date: 'April 2024 – May 2024',
      description: [
        'Built an e-commerce website using HTML and CSS'
      ],
      url: 'https://cert.diceid.com/cid/y9SSwXFlvl?verify=true'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <SectionHeading 
        title="Experience" 
        subtitle="My professional journey and work experience" 
      />
      
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-primary mb-8">Work Experience</h3>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              description={exp.description}
              index={index}
            />
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-2xl font-bold text-primary mb-8">Certifications</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={index}
              title={cert.title}
              organization={cert.organization}
              date={cert.date}
              description={cert.description}
              url={cert.url}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;