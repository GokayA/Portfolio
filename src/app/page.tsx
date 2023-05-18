import Contact from '@/components/Contact';
import ProjectCard from '@/components/ProjectCard';
import Skills from '@/components/Skills';
import Image from 'next/image';
import { aboutMeData, projects } from './data/data';

export default function Home() {
  return (
    <main className="flex flex-col">
      <section
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("/background2.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{aboutMeData.name}</h1>
            <p className="mb-5">{aboutMeData.title}</p>
            <div className="flex justify-center gap-5 pt-10">
              <button className="btn">RESUME</button>
              <div className="divider divider-horizontal"></div>
              <button className="btn">CONTACT ME</button>
            </div>
          </div>
        </div>
      </section>
      <section className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src="/avatar.png"
            className="max-w-sm rounded-lg shadow-2xl"
            alt="profile-image"
            width={700}
            height={475}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
            priority
          />

          <div>
            <h1 className="text-5xl font-bold">{aboutMeData.title}</h1>
            <p className="py-6">{aboutMeData.body}</p>
          </div>
        </div>
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
      <h1 className="text-white bg-black text-center">Resume Page</h1>
      <section className="flex flex-row h-screen overflow-x-hidden">
        Resume Page
      </section>
      <h1 className="text-white bg-black text-center">Contact Page</h1>
      <section className="flex flex-row h-screen overflow-x-hidden">
        <Contact />
      </section>
    </main>
  );
}
