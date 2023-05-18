import ProjectCard from '@/components/ProjectCard';
import Image from 'next/image';
import { aboutMeData, projects } from './data/data';

export default function Home() {
  return (
    <main className="flex flex-col">
      <section className="min-h-screen flex flex-col items-center justify-center overflow-x-hidden">
        <div className="text-center container">
          <h1 className="text-5xl text-white font-bold mb-4 ">
            {aboutMeData.name}
          </h1>
          <p className="text-xl 0 mb-8">{aboutMeData.title}</p>
        </div>
        <Image
          width={2500}
          height={2000}
          className="h-full w-full object-cover opacity-40 absolute"
          src="/background2.jpg"
          alt="Background Image"
        />
      </section>
      <h1 className="text-5xl text-white font-bold mb-4 bg- text-center p-10 ">
        Projects
      </h1>
      <section className="justify-center min-h-screen flex flex-col items-center  overflow-x-hidden">
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center gap-2 ">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
      <h1 className="text-5xl text-white font-bold mb-4 bg- text-center p-10 ">
        Skills
      </h1>
      <section className="h-screen flex flex-row items-center justify-around overflow-x-hidden">
        <div className="text-center ">
          <button className="btn text-5xl text-white font-bold mb-4 ">
            CONTACT ME
          </button>
        </div>
        <div className="text-center ">
          <button className="btn text-5xl text-white font-bold mb-4 ">
            RESUME
          </button>
        </div>
      </section>
      <section className="h-screen flex flex-row items-center justify-around overflow-x-hidden">
        <div className="text-center ">
          <button className="btn text-5xl text-white font-bold mb-4 ">
            CONTACT ME
          </button>
        </div>
        <div className="text-center ">
          <button className="btn text-5xl text-white font-bold mb-4 ">
            RESUME
          </button>
        </div>
      </section>
    </main>
  );
}
