/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  BiLogoReact,
  BiLogoJavascript,
  BiLogoVuejs,
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoGithub,
  BiLogoDjango,
  BiLogoVisualStudio,
  BiLogoAngular,
  BiLogoTailwindCss,
} from "react-icons/bi";

function Skills() {
  const skills = [
    { title: "React", Icon: BiLogoReact },
    { title: "Angular", Icon: BiLogoAngular },
    { title: "JavaScript", Icon: BiLogoJavascript },
    { title: "Vue.js", Icon: BiLogoVuejs },
    { title: "CSS3", Icon: BiLogoCss3 },
    { title: "HTML5", Icon: BiLogoHtml5 },
    { title: "GitHub", Icon: BiLogoGithub },
    { title: "Django", Icon: BiLogoDjango },
    { title: "Visual Studio", Icon: BiLogoVisualStudio },
    { title: "Tailwind CSS", Icon: BiLogoTailwindCss },
  ];

  return (
    <div className="font-playpen p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Skills & Experience</h1>
        <p className="text-xl">
          The main area of expertise is front-end development (client side of
          the web). I have experience with HTML, CSS, JavaScript, and building
          web applications with various frameworks.
        </p>
        <p className="text-xl mt-4">
          Visit my{" "}
          <a
            href="https://www.linkedin.com/in/rawadabu/"
            className="text-sky-600 visited:text-fuchsia-500 hover:underline"
          >
            LinkedIn
          </a>{" "}
          for more details.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={index} title={skill.title} Icon={skill.Icon} />
        ))}
      </div>
    </div>
  );
}

function SkillCard({ title, Icon }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`p-4 rounded-lg border border-gray-200 hover:shadow-lg ${
        isHovered ? "transform border-fuchsia-500" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon
        size="40"
        className={`text-fuchsia-500 text-4xl mx-auto mb-2 ${
          isHovered
            ? "transition-transform duration-300 transform translate-y-1"
            : ""
        }`}
      />
      <p
        className={`text-xl font-medium text-center ${
          isHovered
            ? "transition-transform duration-300 transform -translate-y-1 text-fuchsia-500"
            : ""
        }`}
      >
        {title}
      </p>
    </div>
  );
}

export default Skills;
