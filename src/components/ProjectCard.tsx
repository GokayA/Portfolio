import Image from 'next/image';
import React from 'react';

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

function ProjectCard({ project }: ProjectCardProps) {
  const { title, body1, body2, links } = project;

  return (
    <div className="card w-full bg-base-100 shadow-2xl">
      <figure>
        <Image width={300} height={300} src="/avatar.png" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center ">{title}</h2>
        <p className="mt-2 ">{body1}</p>
        <div className="flex flex-row flex-wrap gap-2 pt-4">
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
          <a key={index} href={link.url} className=" btn btn-primary ">
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
