import About from "../features/about/About";
import Contact from "../features/contact/Contact";
import Homepage from "../features/homepage/Homepage";
import Projects from "../features/projects/Projects";
import Skills from "../features/skills/Skills";

function Home() {
  return (
    <div className="font-playpen">
      <Homepage />
      <div className="mt-32">
        <About />
      </div>
      <div className="mt-32">
        <Skills />
      </div>
      <div className="mt-32">
        <Projects />
      </div>
      <div className="mt-32">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
