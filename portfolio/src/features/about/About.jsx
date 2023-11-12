import { useLocation } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";

function About() {
  const location = useLocation();

  return (
    <div className="p-4 sm:p-8 md:p-12 lg:p-16 font-playpen">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl">
          Hi, I&apos;m Rawad, Software and Web Developer
        </h1>
        <h2>
          <a className="underline decoration-pink-500">
            Front-End Developer/ JavaScript Fan/ Github Contributor
          </a>
        </h2>
      </div>
      <div className="mt-4 sm:mt-6 lg:mt-8 text-center">
        <p className="text-base sm:text-lg lg:text-xl">
          Professionally connected with the web development industry.
        </p>
        <p className="mt-2 sm:mt-4 lg:mt-6 text-base sm:text-lg lg:text-xl">
          <a className="underline decoration-sky-500">
            Problem solver, well-organized person, loyal employee, with high
            attention to detail. Fan of F1, outdoor activities, video games, and
            coding, of course.
          </a>
        </p>
        <p className="mt-2 sm:mt-4 lg:mt-6 text-base sm:text-lg lg:text-xl">
          Interested in the entire frontend spectrum and working on ambitious
          projects with interesting people.
        </p>
      </div>
      {location.pathname === "/about" && (
        <LinkButton to="-1">&larr; Go back</LinkButton>
      )}
    </div>
  );
}

export default About;
