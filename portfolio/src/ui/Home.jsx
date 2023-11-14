import About from "../features/about/About";
import Contact from "../features/contact/Contact";
import Homepage from "../features/homepage/Homepage";
import Projects from "../features/projects/Projects";
import Skills from "../features/skills/Skills";

import { useEffect, useRef, useState } from "react";

function useIntersectionObserver(ref, options) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      });
    }, options);

    const currentRef = ref.current; // Store ref.current in a variable

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return isVisible;
}

function Home() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const aboutVisible = useIntersectionObserver(aboutRef, { threshold: 0.5 });
  const skillsVisible = useIntersectionObserver(skillsRef, { threshold: 0.5 });
  const projectsVisible = useIntersectionObserver(projectsRef, {
    threshold: 0.5,
  });
  const contactVisible = useIntersectionObserver(contactRef, {
    threshold: 0.5,
  });

  return (
    <div className="font-playpen">
      <Homepage />
      <div
        className={`mt-32 ${aboutVisible ? "animate-fadeIn" : "opacity-0"}`}
        ref={aboutRef}
      >
        <About />
      </div>
      <div
        className={`mt-32 ${skillsVisible ? "animate-fadeIn" : "opacity-0"}`}
        ref={skillsRef}
      >
        <Skills />
      </div>
      <div
        className={`mt-32 ${projectsVisible ? "animate-fadeIn" : "opacity-0"}`}
        ref={projectsRef}
      >
        <Projects />
      </div>
      <div
        className={`mt-32 ${contactVisible ? "animate-fadeIn" : "opacity-0"}`}
        ref={contactRef}
      >
        <Contact />
      </div>
    </div>
  );
}

export default Home;
