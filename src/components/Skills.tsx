'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import AnimatedText from './ui/AnimatedText';

const Skills = () => {
  const skills = [
    'TailwindCSS',
    'TypeScript',
    'Prisma',
    'PostgreSQL',
    'MongoDB',
    'Next.js',
    'React',
    'HTML',
    'CSS',
    'JavaScript',
  ];
  const [radius, setRadius] = useState(0);
  const angle = (2 * Math.PI) / skills.length;

  useEffect(() => {
    const calculateRadius = () => {
      const minDimension = Math.min(window.innerWidth, window.innerHeight);
      const radiusPercentage = 0.4;
      const calculatedRadius = minDimension * radiusPercentage;
      setRadius(calculatedRadius);
    };

    calculateRadius();

    window.addEventListener('resize', calculateRadius);
    return () => window.removeEventListener('resize', calculateRadius);
  }, []);

  return (
    <div
      className="overflow-x-hidden flex flex-col justify-center min-h-screen items-center"
      style={{
        background:
          'radial-gradient(circle, rgba(3,39,74,1) 0%, rgba(7,8,22,1) 24%, rgba(0,43,61,1) 41%)',
      }}
    >
      <div className="relative w-96 h-96 justify-center items-center flex">
        <AnimatedText className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Web Skills
        </AnimatedText>
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            className="absolute  justify-center items-center gap-5 rounded-lg p-4"
            initial={{ x: 0, y: 0 }}
            whileInView={{
              x: radius * Math.cos(index * angle),
              y: radius * Math.sin(index * angle),
            }}
            transition={{
              duration: 0.5,
              ease: 'easeOut',
              delay: index * 0.1,
            }}
            whileHover={{ scale: 1.05 }}
          >
            <button className="btn btn-warning text-lg font-bold text-slate-900 mb-2">
              {skill}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
