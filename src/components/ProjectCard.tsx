'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedText from './ui/AnimatedText';

interface Link {
  text: string;
  url: string;
}
interface Project {
  title: string;
  body1: string;
  body2: string[];
  image: string;
  links: Link[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCardVariant = {
  initial: {
    opacity: 0,
    x: '-300',
  },

  whileInView: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
      stiffness: 120,
    },
  },
};

function ProjectCard({ project }: ProjectCardProps) {
  const { title, body1, body2, links, image } = project;

  return (
    <motion.div
      className="card w-full  bg-info-content shadow-2xl  "
      variants={ProjectCardVariant}
      initial="initial"
      whileInView="whileInView"
    >
      <figure className="h-96">
        <Image width={400} height={400} src={`/${image}`} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center ">{title}</h2>
        <p className="mt-2 ">{body1}</p>
        <div className="flex flex-row flex-wrap gap-2 pt-4 ">
          {body2.map((body, index) => (
            <div key={index} className="card-actions ">
              <div className="badge text-slate-900 font-bold badge-warning p-3">
                {body.split(',')}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="card-actions justify-center my-4 ">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            className=" btn btn-primary "
          >
            {link.text}
          </a>
        ))}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
