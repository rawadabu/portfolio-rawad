import { useLocation } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";

function About() {
  const location = useLocation();
  return (
    <>
      <div className="grid grid-cols-2 my-10 px-4 items-center p-40 sm:my-16 font-playpen">
        <div className="text-center">
          <h1 className="text-3xl">
            Hi, I&apos;m Rawad, Software and Web Developer
          </h1>
          <h2>
            <a className="underline decoration-pink-500">
              Front-End Developer/ JavaScript Fan/ Github Contributer
            </a>
          </h2>
        </div>
        <div>
          Professionally connected with the web development industry.
          <br />
          <br />
          <a className="underline decoration-sky-500">
            Problem solver well-organised person, loyal employee, with high
            attention to detail. Fan of F1, outdoor activities, video games, and
            coding of course.
          </a>
          <br />
          <br />
          Interested in the entire frontend spectrum and working on ambitious
          projects with interesting people.
        </div>
      </div>
      {location.pathname === "/about" && (
        <LinkButton to="-1">&larr; Go back</LinkButton>
      )}
    </>
  );
}

export default About;
