/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
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
  return (
    <div className="flex flex-col items-center gap-6 font-playpen p-4 sm:p-8">
      <div className="text-center">
        <h1 className="sm:text-2xl md:text-3xl">
          A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST
        </h1>
        <p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Skills & Experience
          </h2>
          The main area of expertise is front-end development (client side of
          the web).
        </p>
        HTML, CSS, JS, building small and medium web applications with Angular
        or React, custom plugins, features, animations, and coding interactive
        layouts.
        <br /> I have also full-stack developer experience with one of the most
        popular open-source Company - Red Hat.
        <p>
          Visit my{" "}
          <a
            href="https://www.linkedin.com/in/rawadabu/"
            className="text-sky-600 visited:text-fuchsia-500 hover:underline"
          >
            Linkedin
          </a>{" "}
          for more details.
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <SkillIcon title="React" Icon={BiLogoReact} />
        <SkillIcon title="Angular" Icon={BiLogoAngular} />
        <SkillIcon title="JavaScript" Icon={BiLogoJavascript} />
        <SkillIcon title="Vue.js" Icon={BiLogoVuejs} />
        <SkillIcon title="CSS3" Icon={BiLogoCss3} />
        <SkillIcon title="HTML5" Icon={BiLogoHtml5} />
        <SkillIcon title="GitHub" Icon={BiLogoGithub} />
        <SkillIcon title="Django" Icon={BiLogoDjango} />
        <SkillIcon title="Visual Studio" Icon={BiLogoVisualStudio} />
        <SkillIcon title="Tailwind CSS" Icon={BiLogoTailwindCss} />
      </div>
    </div>
  );
}

function SkillIcon({ title, Icon }) {
  return (
    <div className="group flex flex-col items-center relative">
      <Icon size="40" className="icon" />
      <span className="hidden group-hover:block absolute mt-8 sm:mt-12 bg-gray-800 text-fuchsia-500 px-2 py-1 rounded-md text-lg sm:text-xl">
        {title}
      </span>
    </div>
  );
}

export default Skills;
