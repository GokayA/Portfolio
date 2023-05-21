'use client';
import { motion } from 'framer-motion';
import { FC } from 'react';

interface AnimatedTextProps {
  children: string;
  className: string;
  id?: string;
  style?: {
    background: string;
  };
}

const split = {
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
const word = {
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
      variants={split}
      initial="initial"
      whileInView="whileInView"
    >
      {children.split(' ').map((child, index) => (
        <motion.span key={child + '-' + index} className="" variants={word}>
          {child}&nbsp;
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default AnimatedText;
