// import { useSelector } from "react-redux";
// import CreateUser from "../features/user/CreateUser";
import About from "../features/about/About";
import Contact from "../features/contact/Contact";
// import Projects from "../features/projects/Projects";
import Skills from "../features/skills/Skills";
import Button from "./Button";
import homeImage from "../assets/homeImage.svg";

function Home() {
  //   const username = useSelector((state) => state.user.username); // READ DATA FROM THE REDUX STORE
  return (
    <>
      {/* Background Image */}

      <div className="grid grid-cols-2 my-10 px-4 text-center sm:my-16 font-playpen p-40">
        <div className="flex-col space-y-8">
          <h1 className="mb-8 text-xl md:text-3xl uppercase">
            Software and web developer.
            <br />
          </h1>
          <h2>
            Resolving design problems, building smart user interfaces and useful
            interactions, developing rich web applications and seamless web
            experiences.
          </h2>
          <Button to="/about" type="primary">
            About me
          </Button>
        </div>
        <div
          className="bg-center bg-no-repeat w-full h-96"
          style={{ backgroundImage: `url(${homeImage})` }}
        ></div>
      </div>
      <About />
      <Skills />
      {/* <Projects /> */}
      <div className="text-center grid place-items-center space-y-6 p-40 sm:my-16 font-playpen">
        <h1 className="text-3xl">Previous Projects</h1>
        <p>
          I have built various different projects to fit different aspects of
          the client&apos;s business. If you want to see more examples of my
          work than the ones showcased in this site, please contact me!
        </p>

        <Button to="/projects" type="primary">
          Go to Projects
        </Button>
      </div>
      <Contact />
    </>
  );
}

export default Home;
