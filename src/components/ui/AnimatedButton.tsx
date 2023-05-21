import { motion } from 'framer-motion';
import { FC } from 'react';

interface AnimatedButtonProps {
  text: string;
  className: string;
}

const AnimatedButton: FC<AnimatedButtonProps> = ({ text, className = '' }) => {
  return <motion.button className={className}>{text}</motion.button>;
};

export default AnimatedButton;
