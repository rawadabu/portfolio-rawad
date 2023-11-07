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
    <div className="flex gap-4 py-2 justify-center">
      <i className="icon">
        <BiLogoReact size="40" />
      </i>
      <i className="icon">
        <BiLogoJavascript size="40" />
      </i>
      <i className="icon">
        <BiLogoVuejs size="40" />
      </i>
      <i className="icon">
        <BiLogoCss3 size="40" />
      </i>
      <i className="icon">
        <BiLogoHtml5 size="40" />
      </i>
      <i className="icon">
        <BiLogoGithub size="40" />
      </i>
      <i className="icon">
        <BiLogoDjango size="40" />
      </i>
      <i className="icon">
        <BiLogoVisualStudio size="40" />
      </i>
      <i className="icon">
        <BiLogoAngular size="40" />
      </i>
      <i className="icon">
        <BiLogoTailwindCss size="40" />
      </i>
    </div>
  );
}

export default Skills;
