import Button from "../../ui/Button";

/* eslint-disable react/prop-types */
function ProjectItem({ repo }) {
  const { id, name, language, created_at, visibility, html_url } = repo;

  return (
    <div
      key={id}
      className="flex-shrink-0 p-8 border border-gray-300 rounded-lg shadow-md"
    >
      <h2 className="text-xl mb-2 font-bold">{name}</h2>
      <p className="text-gray-600">
        Language: {language === null ? "none" : language}
      </p>
      <p className="text-gray-600">
        Start date & time: {new Date(created_at).toLocaleString()}
      </p>
      <p className="text-gray-600">
        Visibility: {visibility === true ? "Private" : "Public"}
      </p>
      <Button to={html_url} type="project">
        Go to repo &gt;
      </Button>
    </div>
  );
}

export default ProjectItem;
