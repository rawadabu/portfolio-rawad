/* eslint-disable react/prop-types */
import Button from "../../ui/Button";

function TopProjects({ section }) {
  const { name, description, builtWith, image, url } = section;
  return (
    <div className="grid grid-cols-2">
      <div className="relative">
        <div className="font-playpen px-4 py-4 grid grid-rows-3 gap-4">
          <h1 className="uppercase text-3xl">{name}</h1>

          <h2 className="text-xl">{description}</h2>
          <p className="text-xl">
            <span className="font-bold">Built with:</span> {builtWith}
          </p>
        </div>
        <Button to={url} type="project">
          View the code &gt;
        </Button>
      </div>
      <div className="w-full">
        <img
          src={image}
          alt="Background Image"
          className="w-full h-full max-w-full max-h-full"
        />
      </div>
    </div>
  );
}

export default TopProjects;
