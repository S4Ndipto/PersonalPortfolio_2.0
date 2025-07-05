import { motion } from 'framer-motion';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  index: number;
}

const ExperienceCard = ({ title, company, period, description, index }: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -5,
        transition: { type: 'spring', stiffness: 200, damping: 12 }
      }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-background-lighter border border-border rounded-xl p-6 shadow-lg hover:shadow-[0_0_18px_#a855f7] transition-shadow duration-300"
    >
      <h4 className="text-xl font-bold text-primary mb-2">{title}</h4>
      <p className="text-text font-medium mb-1">{company}</p>
      <p className="text-text-muted text-sm mb-4">{period}</p>
      <ul className="list-disc pl-5 space-y-2 text-text-muted text-sm">
        {description.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ExperienceCard;
