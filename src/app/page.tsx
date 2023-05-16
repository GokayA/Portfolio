import Image from 'next/image';
import { aboutMeData } from './data/data';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex  items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-5xl text-white font-bold mb-4 ">
            {aboutMeData.name}
          </h1>
          <p className="text-xl 0 mb-8">{aboutMeData.title}</p>
        </div>
        <Image
          width={2500}
          height={2000}
          className="h-full w-full object-cover opacity-40 absolute"
          src="/background.jpg"
          alt="Background Image"
        />
      </div>
    </main>
  );
}
