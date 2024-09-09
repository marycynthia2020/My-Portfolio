import tech from "/techstack.svg";

const Skills = () => {
  return (
    <div className="mx-2 h-auto my-12 min-h-screen flex flex-start flex-col justify-between items-center lg:flex-row-reverse" >
      <div className="w-1/2 ">
        <img src={tech} alt="tech stack" className=" aspect-square w-2/3 lg:w-1/2 max-w-full mx-auto animate-pulse "/>
      </div>
      <ul className="w-full list-disc text-base tracking-wide leading-loose lg:w-2/3 mt-4 pl-4">
      <li className="[list-style-type:disc] text-xl font-bold font-mono">TECH STACK</li>
        <li>
          Languages: <span className="bold">HTML, CSS, Javascript.</span>
        </li>
        <li>
          Styling: <span className="bold">TailwindCSS</span>
        </li>
        <li>
          Framework: <span className="bold">React</span>
        </li>
        <li>
          System version control: <span className="bold">GIT</span>
        </li>
        <li>
          Serverless: <span className="bold">Netlify, Pages</span>
        </li>
        <li>
          {" "}
          I bring designs to life by transforming static Figma prototypes into
          dynamic, responsive, and user-friendly websites and applications. I
          can effectively interpret Figma designs, including complex components
          and interactive prototypes, and translate them into clean, efficient,
          and maintainable code. currently broadening my knnowledge
        </li>
        <li>
          I am continually broadening my knowledge in frontend development,
          actively learning new technologies and frameworks to stay at the
          forefront of the field. I am committed to evolving as a developer and
          will keep updating this portfolio with the latest skills I acquire
        </li>
      </ul>
    </div>
  );
};

export default Skills;
