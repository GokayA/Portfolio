'use client';
import { motion } from 'framer-motion';
import { FC } from 'react';

interface AnimatedTextProps {
  children: string;
  className: string;
  style?: {
    background: string;
  };
}

const quote = {
  initial: {
    opacity: 1,
  },
  whileInView: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.09,
    },
  },
};
const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText: FC<AnimatedTextProps> = ({ children, className = '' }) => {
  return (
    <motion.h1
      className={className}
      variants={quote}
      initial="initial"
      whileInView="whileInView"
    >
      {children.split(' ').map((child, index) => (
        <motion.span
          key={child + '-' + index}
          className=""
          variants={singleWord}
        >
          {child}&nbsp;
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default AnimatedText;
