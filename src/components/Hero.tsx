import AnimatedText from '@/components/ui/AnimatedText';
import { aboutMeData } from '@/data/data';

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
          <AnimatedText className="mb-5 text-5xl font-bold">
            {aboutMeData.name}
          </AnimatedText>
          <AnimatedText className="mb-5">{aboutMeData.title}</AnimatedText>
          <div className="flex justify-center gap-5 pt-10">
            <button className="btn">RESUME</button>
            <div className="divider divider-horizontal"></div>
            <button className="btn">CONTACT ME</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
