/* eslint-disable react-refresh/only-export-components */

import { useLoaderData } from "react-router-dom";
import { getSections } from "../../services/apiRepos";
import Button from "../../ui/Button";
import TopProjects from "./topProjects";

function Projects() {
  const sections = useLoaderData();

  return (
    <div className="grid place-items-center sm:my-16 font-playpen">
      <div className="text-center">
        <h1 className="text-3xl"></h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Previous Projects
        </h1>

        <p>
          I have built various different projects during my studies.
          <br /> If you want to see more examples of my work than the ones
          showcased on this site, please contact me!
        </p>
      </div>

      <div className="overflow-x-auto">
        <div className="whitespace-nowrap py-4">
          {sections.map((section) => (
            <div key={section.id} className="inline-block px-4 sm:px-8">
              <TopProjects section={section} />
            </div>
          ))}
        </div>
      </div>

      <Button to="/projects-view" type="primary">
        Go to GitHub Projects
      </Button>
    </div>
  );
}

export async function loadSections() {
  const sections = await getSections();
  return sections;
}

export default Projects;
