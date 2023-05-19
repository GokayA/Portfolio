import Aboutme from '@/components/Aboutme';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import Skills from '@/components/Skills';
import { projects } from '@/data/data';

export default function Home() {
  return (
    <main className="flex flex-col">
      <section>
        <Hero />
      </section>
      <section className="hero min-h-screen bg-base-200">
        <Aboutme />
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
      <section className="flex flex-row justify-center items-center pb-20 overflow-x-hidden">
        <Skills />
      </section>
    </main>
  );
}
