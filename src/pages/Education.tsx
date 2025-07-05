import React from 'react';
import SectionHeading from '../components/SectionHeading';
import EducationCard from '../components/EducationCard';

const Education: React.FC = () => {
  const educations = [
    {
      degree: 'Bachelor of Technology in Computer Science Engineering',
      institution: 'Techno India University, Kolkata',
      period: 'Sept 2021 – July 2025 (Expected)',
      score: 'CGPA: 8.26'
    },
    {
      degree: 'Higher Secondary (Class 12)',
      institution: 'Burdwan Municipal High School, Burdwan | WBCHSE',
      period: '2020',
      score: 'Score: 93%'
    },
    {
      degree: 'Secondary (Class 10)',
      institution: 'Burdwan Municipal High School, Burdwan | WBBSE',
      period: '2018',
      score: 'Score: 93.20%'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <SectionHeading 
        title="Education" 
        subtitle="My academic background and qualifications" 
      />
      
      <div className="space-y-6">
        {educations.map((edu, index) => (
          <EducationCard
            key={index}
            degree={edu.degree}
            institution={edu.institution}
            period={edu.period}
            score={edu.score}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;