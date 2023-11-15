// import Button from "../../ui/Button";

function Homepage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 my-10 px-4 sm:my-16 font-playpen">
      <div className="p-4 sm:p-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl uppercase mb-4 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-200 via-purple-400 to-indigo-400">
          Software and Full Stack Developer
        </h1>
        <p className="text-base sm:text-lg lg:text-xl">
          Addressing design challenges, crafting intelligent user interfaces,
          constructing sophisticated web applications, and delivering fluid and
          engaging web interactions.
        </p>
        <img
          className="rounded-lg shadow-custom"
          src="https://zukttyxavjmehdcxbaty.supabase.co/storage/v1/object/public/interested/purpleRomb.png"
        />
        {/* <Button to="/about" type="project" className="sm:mt-8">
          About me &gt;
        </Button> */}
      </div>
      <div className="bg-center bg-no-repeat ">
        <img
          src="https://zukttyxavjmehdcxbaty.supabase.co/storage/v1/object/public/interested/homeImage.svg"
          className="w-full h-[20rem] sm:h-[40rem]"
        />
      </div>
    </div>
  );
}

export default Homepage;
