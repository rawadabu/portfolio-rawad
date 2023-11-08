import ProjectItem from "./ProjectItem";

function Project() {
  return (
    <div className="justify-between grid grid-cols-2 p-40 text-center  sm:my-16 font-playpen">
      Previous Projects
      <ProjectItem />
    </div>
  );
}

export default Project;
