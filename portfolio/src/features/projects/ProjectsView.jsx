import { useLoaderData } from "react-router-dom";
import ProjectItem from "./ProjectItem";
import LinkButton from "../../ui/LinkButton";
import { getRepos } from "../../services/apiRepos";

function ProjectsView() {
  const repos = useLoaderData();
  return (
    <>
      <ul className="flex gap-8 font-playpen py-44 px-4 overflow-x-auto">
        {repos.map((repo) => (
          <ProjectItem repo={repo} key={repo.id} />
        ))}
      </ul>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </>
  );
}

export async function loader() {
  const repos = await getRepos();
  return repos;
}

export default ProjectsView;
