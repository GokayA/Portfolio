import { FC } from 'react';

interface SkillsProps {}

const Skills: FC<SkillsProps> = ({}) => {
  return (
    <div className="flex flex-row ">
      <div className="mr-20">
        <h1 className="text-3xl font-bold mb-6">Frontend Skills</h1>
        <div className="mb-4">
          <p className="font-semibold">HTML</p>
          <div className="flex items-center">
            <progress
              className="progress progress-success w-64 bg-white h-4"
              value="96"
              max="100"
            ></progress>
            <span className="ml-4 text-gray-600">96%</span>
          </div>
        </div>
        <div className="mb-4">
          <p className="font-semibold">CSS</p>
          <div className="flex items-center">
            <progress
              className="progress progress-primary w-64 bg-white h-4"
              value="90"
              max="100"
            ></progress>
            <span className="ml-4 text-gray-600">90%</span>
          </div>
        </div>
        <div className="mb-4">
          <p className="font-semibold">JavaScript</p>
          <div className="flex items-center">
            <progress
              className="progress progress-secondary w-64 bg-white h-4"
              value="85"
              max="100"
            ></progress>
            <span className="ml-4 text-gray-600">85%</span>
          </div>
        </div>
        <div className="mb-4">
          <p className="font-semibold">React</p>
          <div className="flex items-center">
            <progress
              className="progress progress-warning w-64 bg-white h-4"
              value="80"
              max="100"
            ></progress>
            <span className="ml-4 text-gray-600">80%</span>
          </div>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Next.js</p>
          <div className="flex items-center">
            <progress
              className="progress progress-error w-64 bg-white h-4"
              value="75"
              max="100"
            ></progress>
            <span className="ml-4 text-gray-600">75%</span>
          </div>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Tailwind CSS</p>
          <div className="flex items-center">
            <progress
              className="progress progress-info w-64 bg-white h-4"
              value="85"
              max="100"
            ></progress>
            <span className="ml-4 text-gray-600">85%</span>
          </div>
        </div>
        <div className="mb-4">
          <p className="font-semibold">TypeScript</p>
          <div className="flex items-center">
            <progress
              className="progress progress-accent w-64 bg-white h-4"
              value="70"
              max="100"
            ></progress>
            <span className="ml-4 text-gray-600">70%</span>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-6">Backend Skills</h1>
        <div className="mb-4">
          <p className="font-semibold">Node.js</p>
          <div className="flex items-center">
            <progress
              className="progress progress-success w-64 bg-white h-4"
              value="80"
              max="100"
            ></progress>
            <span className="ml-4 text-gray-600">80%</span>
          </div>
        </div>
        <div className="mb-4">
          <p className="font-semibold">MongoDB</p>
          <div className="flex items-center">
            <progress
              className="progress progress-primary w-64 bg-white h-4"
              value="75"
              max="100"
            ></progress>
            <span className="ml-4 text-gray-600">75%</span>
          </div>
        </div>
        <div className="mb-4">
          <p className="font-semibold">PostgreSQL</p>
          <div className="flex items-center">
            <progress
              className="progress progress-secondary w-64 bg-white h-4"
              value="80"
              max="100"
            ></progress>
            <span className="ml-4 text-gray-600">80%</span>
          </div>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Prisma</p>
          <div className="flex items-center">
            <progress
              className="progress progress-warning w-64 bg-white h-4"
              value="70"
              max="100"
            ></progress>
            <span className="ml-4 text-gray-600">70%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
