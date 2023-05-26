'use client';
import { motion } from 'framer-motion';
import { FC } from 'react';

interface AnimatedButtonProps {
  children: string;
  className: string;
}

const buttonVariants = {
  initial: {
    x: '-180vw',
  },
  animate: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
    },
  },
};

const AnimatedButton: FC<AnimatedButtonProps> = ({
  children,
  className = '',
}) => {
  return (
    <motion.button
      variants={buttonVariants}
      initial="initial"
      animate={'animate'}
      className={className}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;
