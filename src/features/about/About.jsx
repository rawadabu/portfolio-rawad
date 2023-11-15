import { useLocation } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";

function About() {
  const location = useLocation();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 sm:p-8 md:p-12 lg:p-16 font-playpen">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl">
          Hi ✋🏼, I&apos;m Rawad, a passionate Software and Full Stack Developer
        </h1>
        <h2>
          {/* <a className="underline decoration-pink-500">
            Front-End Developer/ JavaScript Fan/ Github Contributor
          </a> */}
          <a className="underline decoration-pink-500 text-lg">
            BS.c in Computer Science
          </a>{" "}
          /{" "}
          <a className="underline decoration-sky-500 text-lg">
            React Course Certificate
          </a>
        </h2>
      </div>

      <div className=" mt-4 sm:mt-6 lg:mt-8">
        <p className="text-base sm:text-lg lg:text-xl ">
          Passionate about shaping the digital landscape through web
          development.
        </p>
        <p className="mt-2 sm:mt-4 lg:mt-6 text-base sm:text-lg lg:text-xl">
          Enthusiastic problem solver and highly detail-oriented professional.
          <br />
          Outside of coding, you&apos;ll find me exploring the world of tech,
          engaging in sports like cycling, and enjoying a good book.
        </p>
        <p className="mt-2 sm:mt-4 lg:mt-6 text-base sm:text-lg lg:text-xl">
          Excited to tackle challenges across both frontend and backend realms,
          collaborating on innovative projects with diverse and talented
          individuals.
        </p>
      </div>
      {location.pathname === "/about" && (
        <LinkButton to="-1">&larr; Go back</LinkButton>
      )}
    </div>
  );
}

export default About;
