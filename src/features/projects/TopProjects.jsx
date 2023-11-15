/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { LazyLoadImage } from "react-lazy-load-image-component";
import Button from "../../ui/Button";
import "react-lazy-load-image-component/src/effects/blur.css";

function TopProjects({ section }) {
  const { name, description, builtWith, image, url, placeHolder } = section;

  const MyImage = () => (
    <LazyLoadImage
      effect="blur"
      src={image}
      width={600}
      height={400}
      alt="Top Projects Background"
      placeholderSrc={placeHolder}
    />
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 whitespace-normal overflow-ellipsis">
      <div className="relative p-4">
        <div className="font-playpen grid grid-rows-3 gap-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl uppercase">{name}</h1>
          <h2 className="text-xl sm:text-2xl ">{description}</h2>
          <p className="text-xl sm:text-2xl">
            <span className="font-bold">Built with:</span> {builtWith}
          </p>
          <Button to={url} type="project">
            View the code &gt;
          </Button>
        </div>
      </div>
      <div className="w-full">
        {/* <LazyLoadImage
          src={image}
          effect="blur"
          alt="Background Image"
          className="w-full max-w-full h-auto"
        /> */}
        <MyImage />
      </div>
    </div>
  );
}

export default TopProjects;
