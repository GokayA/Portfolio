import Aboutme from '@/components/Aboutme';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import Skills from '@/components/Skills';
import AnimatedText from '@/components/ui/AnimatedText';
import { projects } from '@/data/data';

export default function Home() {
  return (
    <main className="overflow-x-hidden flex flex-col">
      <section>
        {/* ADD overflow-x-hidden TO ALL WEBSITE */}
        <Hero />
      </section>

      <section className="min-h-screen">
        <Aboutme />
      </section>
      <AnimatedText className="text-3xl md:text-4xl sm:text-4xl lg:text-5xl text-white font-bold mb-4 text-center p-10 ">
        Projects
      </AnimatedText>
      <section className="justify-center min-h-screen flex flex-col items-center  overflow-x-hidden">
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center gap-2 ">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      <section className="">
        <Skills />
      </section>
    </main>
  );
}
