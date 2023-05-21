import AnimatedText from '@/components/ui/AnimatedText';
import { aboutMeData } from '@/data/data';
import Link from 'next/link';
import AnimatedButton from './ui/AnimatedButton';

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("/background2.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <AnimatedText className="mb-5 text-2xl md:text-3xl sm:text-3xl lg:text-6xl text-white font-bold">
            {aboutMeData.name}
          </AnimatedText>
          <AnimatedText className="mb-5 text-2xl">
            {aboutMeData.title}
          </AnimatedText>
          <div className="flex justify-center gap-5 pt-10">
            <Link href="/dummy.pdf" target="_blank" download="true">
              <AnimatedButton className="btn hover:bg-slate-500 text-white">
                Resume
              </AnimatedButton>
            </Link>
            <div className="divider divider-horizontal"></div>
            <Link href="mailto:ggokay.akkus@gmail.com">
              <AnimatedButton className="btn hover:bg-slate-500 text-white">
                CONTACT ME
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
