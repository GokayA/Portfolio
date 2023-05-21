import { aboutMeData } from '@/data/data';
import Image from 'next/image';
import AnimatedText from './ui/AnimatedText';

const Aboutme = () => {
  return (
    <div className="hero flex flex-col justify-center">
      <AnimatedText className="text-3xl md:text-4xl sm:text-4xl lg:text-5xl text-white font-bold pt-4 text-center pb-20 ">
        About Me
      </AnimatedText>
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
          <AnimatedText className="flex flex-row text-3xl md:text-4xl sm:text-4xl lg:text-5xl  font-bold">
            {aboutMeData.title}
          </AnimatedText>
          <p className="py-6">{aboutMeData.body}</p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
