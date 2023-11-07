// import { useSelector } from "react-redux";
// import CreateUser from "../features/user/CreateUser";
import About from "../features/about/About";
import Contact from "../features/contact/Contact";
import Project from "../features/projects/Project";
import Skills from "../features/skills/Skills";
import Button from "./Button";

function Home() {
  //   const username = useSelector((state) => state.user.username); // READ DATA FROM THE REDUX STORE
  return (
    <>
      <div className=" grid grid-cols-2 my-10 px-4 text-center sm:my-16 font-playpen">
        <div className="...">
          <h1 className="mb-8 text-xl md:text-3xl uppercase">
            Software and web developer.
            <br />
          </h1>
          <h2 className="text-sky-500 ">
            Resolving design problems, building smart user interfaces and useful
            interactions, developing rich web applications and seamless web
            experiences.
          </h2>
          <Button to="/menu" type="primary">
            About me
          </Button>
        </div>
        <div className="...">IMAGE</div>
      </div>
      <div className="flex ">
        <About />
      </div>
      <Skills />
      <Project />
      <Contact />
    </>
  );
}

export default Home;
