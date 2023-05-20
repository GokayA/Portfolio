'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { FaCss3Alt, FaHtml5, FaJsSquare, FaReact } from 'react-icons/fa';
import {
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

import { useInView } from 'react-intersection-observer';

interface SkillCardProps {
  icon: ReactNode;
  title: string;
  delay: number;
}

const SkillCard = ({ icon, title, delay }: SkillCardProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: 20, opacity: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.5, delay }}
      className="w-full sm:w-1/2 md:w-1/3 mb-6"
    >
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-center h-12 w-12 mb-4 rounded-full bg-blue-100">
          {icon}
        </div>
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        </div>
      </div>
    </motion.div>
  );
};

const SkillsPage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-6">My Skills</h2>
      <div className="flex flex-wrap -mx-4">
        <SkillCard icon={<FaHtml5 />} title="HTML" delay={0} />
        <SkillCard icon={<FaCss3Alt />} title="CSS" delay={0.2} />
        <SkillCard icon={<FaJsSquare />} title="JavaScript" delay={0.4} />
        <SkillCard icon={<FaReact />} title="React" delay={0.6} />
        <SkillCard icon={<SiNextdotjs />} title="Next.js" delay={0.8} />
        <SkillCard icon={<SiTailwindcss />} title="TailwindCSS" delay={1} />
        <SkillCard icon={<SiMongodb />} title="MongoDB" delay={1.2} />
        <SkillCard icon={<SiPostgresql />} title="PostgreSQL" delay={1.4} />
        <SkillCard icon={<SiTypescript />} title="TypeScript" delay={1.6} />
      </div>
    </div>
  );
};

export default SkillsPage;
