import { useLoaderData } from "react-router-dom";
import { getRepos } from "../../services/apiRepos";
import ProjectItem from "./ProjectItem";

function Projects() {
  // console.log("RENDERED");
  const repos = useLoaderData();
  // console.log("Projects component - repos:", repos);

  return (
    <ul>
      {repos.map((repo) => (
        <ProjectItem repo={repo} key={repo.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  // console.log("Loader function - Start");
  const repos = await getRepos();
  // console.log("Loader function - Repos:", repos);
  return repos;
}

export default Projects;
