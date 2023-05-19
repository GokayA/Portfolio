import { aboutMeData } from '@/data/data';
import Image from 'next/image';

const Aboutme = () => {
  return (
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
  );
};

export default Aboutme;
