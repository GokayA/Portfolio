import AnimatedText from '@/components/ui/AnimatedText';
import { aboutMeData } from '@/data/data';
import Link from 'next/link';
import AnimatedButton from './ui/AnimatedButton';

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("/background.png")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <AnimatedText className="mb-5 text-2xl md:text-3xl sm:text-3xl lg:text-6xl primary-content  font-bold">
            {aboutMeData.name}
          </AnimatedText>
          <AnimatedText className="mb-5 primary-content font-semibold text-2xl">
            {aboutMeData.title}
          </AnimatedText>
          <div className="flex justify-center gap-5 pt-10">
            <Link href="/resume.pdf" target="_blank" download="resume.pdf">
              <AnimatedButton className="btn hover:bg-slate-500 primary-content ">
                Rèsumè
              </AnimatedButton>
            </Link>
            <div className="divider divider-horizontal"></div>
            <Link href="mailto:ggokay.akkus@gmail.com">
              <AnimatedButton className="btn hover:bg-slate-500 primary-content ">
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
