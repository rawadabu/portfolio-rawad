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
    <div className="flex flex-col items-center my-10 px-4 gap-6 font-playpen">
      <p className="text-center">
        <h1 className="text-3xl">
          A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST.
        </h1>
        <p>
          Skills & Experience The main area of expertise is front-end
          development (client side of the web).
        </p>
        HTML, CSS, JS, building small and medium web applications with Vue or
        React, custom plugins, features, animations, and coding interactive
        layouts. I have also full-stack developer experience with one of the
        most popular open-source CMS on the web - WordPress.
        <p>
          Visit my{" "}
          <a
            href="https://www.linkedin.com/in/rawadabu/"
            className="text-sky-600 visited:text-fuchsia-500"
          >
            Linkedin
          </a>{" "}
          for more details.
        </p>
      </p>
      <div className="flex gap-4">
        <BiLogoReact size="40" className="icon" />
        <BiLogoAngular size="40" className="icon" />
        <BiLogoJavascript size="40" className="icon" />
        <BiLogoVuejs size="40" className="icon" />
        <BiLogoCss3 size="40" className="icon" />
        <BiLogoHtml5 size="40" className="icon" />
        <BiLogoGithub size="40" className="icon" />
        <BiLogoDjango size="40" className="icon" />
        <BiLogoVisualStudio size="40" className="icon" />
        <BiLogoTailwindCss size="40" className="icon" />
      </div>
    </div>
  );
}

export default Skills;
