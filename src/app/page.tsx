import Aboutme from '@/components/Aboutme';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import Skills from '@/components/Skills';
import AnimatedText from '@/components/ui/AnimatedText';
import { projects } from '@/data/data';

export default function Home() {
  return (
    <main className="overflow-x-hidden flex flex-col">
      <section id="home">
        {/* ADD overflow-x-hidden TO ALL WEBSITE */}
        <Hero />
      </section>

      <section id="aboutme" className="min-h-screen">
        <Aboutme />
      </section>

      <section
        id="projects"
        className="justify-center min-h-screen flex flex-col items-center  overflow-x-hidden "
      >
        <AnimatedText className="text-2xl md:text-3xl sm:text-3xl lg:text-4xl text-white font-bold mb-4 text-center p-10 ">
          Projects
        </AnimatedText>
        <div className="container grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 justify-center gap-2 ">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      <section id="skills" className="">
        <Skills />
      </section>
    </main>
  );
}
