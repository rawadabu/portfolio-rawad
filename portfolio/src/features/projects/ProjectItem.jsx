/* eslint-disable react/prop-types */
function ProjectItem({ repo }) {
  const { id, name, language, created_at, visibility } = repo;
  return (
    <div
      className="repo-card p-4 border border-gray-300 rounded-lg shadow-md my-4"
      key={id}
    >
      <h2 className="font-semibold text-xl mb-2">{name}</h2>
      <p className="text-gray-600">
        Language: {language === null ? "none" : language}
      </p>
      <p className="text-gray-600">
        Start date & time: {new Date(created_at).toLocaleString()}
      </p>
      <p className="text-gray-600">
        Visibility: {visibility === true ? "Private" : "Public"}
      </p>
    </div>
  );
}

export default ProjectItem;
