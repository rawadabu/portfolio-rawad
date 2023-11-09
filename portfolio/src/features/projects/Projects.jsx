import { useLoaderData, useLocation } from "react-router-dom";
import { getRepos } from "../../services/apiRepos";
import ProjectItem from "./ProjectItem";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";

function Projects() {
  const repos = useLoaderData();
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" && (
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
      )}
      {location.pathname === "/projects" && (
        <>
          <ul className="my-10 px-4 grid grid-cols-4 gap-6">
            {repos.map((repo) => (
              <ProjectItem repo={repo} key={repo.id} />
            ))}
          </ul>
          <LinkButton to="-1">&larr; Go back</LinkButton>
        </>
      )}
    </>
  );
}

export async function loader() {
  const repos = await getRepos();
  return repos;
}

export default Projects;
