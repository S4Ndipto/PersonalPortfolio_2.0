import { motion } from 'framer-motion';

const CertificationCard = ({ title, organization, date, description, url, index }) => {
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
      <p className="text-text font-medium mb-1">{organization}</p>
      <p className="text-text-muted text-sm mb-4">{date}</p>
      <ul className="list-disc pl-5 space-y-2 text-text-muted text-sm mb-4">
        {description.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:underline text-sm font-medium"
      >
        View Certificate →
      </a>
    </motion.div>
  );
};

export default CertificationCard;
