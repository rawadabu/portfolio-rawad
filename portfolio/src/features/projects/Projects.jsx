import { useLoaderData } from "react-router-dom";
import { getRepos } from "../../services/apiRepos";
import ProjectItem from "./ProjectItem";

function Projects() {
  const repos = useLoaderData();

  return (
    <ul>
      {repos.map((repo) => (
        <ProjectItem repo={repo} key={repo.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const repos = await getRepos();
  return repos;
}

export default Projects;
