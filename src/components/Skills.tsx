import { FC } from 'react';

interface SkillsProps {}

const Skills: FC<SkillsProps> = ({}) => {
  return (
    <div className="flex flex-row justify-around container">
      <div className="">
        <h1>Frontend Skills</h1>
        <div className="flex items-center flex-row">
          <p>HTML</p>
          <progress
            className="progress progress-accent w-56"
            value="100"
            max="100"
          ></progress>
        </div>
        <div className="flex items-center flex-row">
          <p>HTML</p>
          <progress
            className="progress progress-accent w-56"
            value="100"
            max="100"
          ></progress>
        </div>
        <div className="flex items-center flex-row">
          <p>HTML</p>
          <progress
            className="progress progress-accent w-56"
            value="100"
            max="100"
          ></progress>
        </div>
        <div className="flex items-center flex-row">
          <p>HTML</p>
          <progress
            className="progress progress-accent w-56"
            value="100"
            max="100"
          ></progress>
        </div>
        <div className="flex items-center flex-row">
          <p>HTML</p>
          <progress
            className="progress progress-accent w-56"
            value="100"
            max="100"
          ></progress>
        </div>
      </div>
      <div>
        <h1>Frontend Skills</h1>
        <div className="flex items-center flex-row">
          <p>HTML</p>
          <progress
            className="progress progress-accent w-56"
            value="100"
            max="100"
          ></progress>
        </div>
        <div className="flex items-center flex-row">
          <p>HTML</p>
          <progress
            className="progress progress-accent w-56"
            value="100"
            max="100"
          ></progress>
        </div>
        <div className="flex items-center flex-row">
          <p>HTML</p>
          <progress
            className="progress progress-accent w-56"
            value="100"
            max="100"
          ></progress>
        </div>
        <div className="flex items-center flex-row">
          <p>HTML</p>
          <progress
            className="progress progress-accent w-56"
            value="100"
            max="100"
          ></progress>
        </div>
        <div className="flex items-center flex-row">
          <p>HTML</p>
          <progress
            className="progress progress-accent w-56"
            value="100"
            max="100"
          ></progress>
        </div>
      </div>
    </div>
  );
};

export default Skills;
