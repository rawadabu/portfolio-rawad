import { useLoaderData } from "react-router-dom";
import { getRepos } from "../../services/apiRepos";
import ProjectItem from "./ProjectItem";
import LinkButton from "../../ui/LinkButton";

function Projects() {
  // console.log("RENDERED");
  const repos = useLoaderData();

  // console.log("Projects component - repos:", repos);

  return (
    <>
      <li className="my-10 px-4 grid grid-cols-4 gap-6 ">
        {repos.map((repo) => (
          <ProjectItem repo={repo} key={repo.id} />
        ))}
      </li>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </>
  );
}

export async function loader() {
  // console.log("Loader function - Start");
  const repos = await getRepos();
  // console.log("Loader function - Repos:", repos);
  return repos;
}

export default Projects;
