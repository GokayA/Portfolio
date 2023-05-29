'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BiLinkExternal } from 'react-icons/bi';
import { BsCodeSlash } from 'react-icons/bs';

interface Link {
  text: string;
  url: string;
  Icon: React.ReactNode;
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
      className="card w-full  bg-primary shadow-2xl  "
      variants={ProjectCardVariant}
      initial="initial"
      whileInView="whileInView"
    >
      <figure className="h-96 ">
        <Image
          width={400}
          height={400}
          src={`/${image}`}
          alt={title}
          className={'h-auto w-auto '}
          priority={image === 'portfolio2.png'}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center font-bold text-2xl primary-content ">
          {title}
        </h2>
        <p className="mt-2 primary-content">{body1}</p>
        <div className="flex flex-row flex-wrap gap-2 pt-4 ">
          {body2.map((body, index) => (
            <div key={index} className="card-actions ">
              <div className="badge primary-content font-bold badge-warning p-3">
                {body.split(',')}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="card-actions justify-center my-4 ">
        {links.map((link, index) => (
          <a key={index} href={link.url} target="_blank" className="btn btn-">
            {link.Icon === 'BsCodeSlash' ? (
              <BsCodeSlash className="mr-2" />
            ) : link.Icon === 'BiLinkExternal' ? (
              <BiLinkExternal className="mr-2" />
            ) : (
              <span>{link.Icon}</span>
            )}
            <span>{link.text}</span>
          </a>
        ))}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
