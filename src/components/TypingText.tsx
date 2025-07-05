import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

interface TypingTextProps {
  text: string;
  speed?: number; // ms per character
  className?: string;
}

const TypingText: React.FC<TypingTextProps> = ({ text, speed = 30, className }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      setIndex((i) => {
        if (i + 1 >= text.length) {
          clearInterval(interval);
          return i;
        }
        return i + 1;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, index]);

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={className}
    >
      {displayedText}
      {index < text.length && <span className="animate-pulse text-accent">|</span>}
    </motion.p>
  );
};

export default TypingText;
