import About from "../features/about/About";
import Contact from "../features/contact/Contact";
import Homepage from "../features/homepage/Homepage";
import Projects from "../features/projects/Projects";
import Skills from "../features/skills/Skills";

import useIntersection from "../hooks/useInstersection";

function Home() {
  const aboutIntersection = useIntersection({ threshold: 0.2 });
  const skillsIntersection = useIntersection({ threshold: 0.2 });
  const projectsIntersection = useIntersection({ threshold: 0.2 });
  const contactIntersection = useIntersection({ threshold: 0.2 });

  return (
    <div className="font-playpen">
      <Homepage />
      <div
        className={`mt-32 ${
          aboutIntersection.isVisible ? "animate-fadeInRotate" : "opacity-0"
        }`}
        ref={aboutIntersection.ref}
      >
        <About />
      </div>
      <div
        className={`mt-32 ${
          skillsIntersection.isVisible ? "animate-fadeIn" : "opacity-0"
        }`}
        ref={skillsIntersection.ref}
      >
        <Skills />
      </div>
      <div
        className={`mt-32 ${
          projectsIntersection.isVisible ? "animate-fadeIn" : "opacity-0"
        }`}
        ref={projectsIntersection.ref}
      >
        <Projects />
      </div>
      <div
        className={`mt-32 ${
          contactIntersection.isVisible ? "animate-fadeInRotate" : "opacity-0"
        }`}
        ref={contactIntersection.ref}
      >
        <Contact />
      </div>
    </div>
  );
}

export default Home;
