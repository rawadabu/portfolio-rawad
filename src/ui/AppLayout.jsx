import Header from "./Header";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  // console.log(navigation);
  const isLoading = navigation.state === "loading";

  const positions = [
    { top: "10vh", left: "20vw", width: "90px", height: "90px" },
    { top: "30vh", left: "70vw", width: "150px", height: "100px" },
    { top: "70vh", left: "0vw", width: "180px", height: "180px" },
    { top: "70vh", left: "90vw", width: "100px", height: "100px" },

    // Add more positions as needed
  ];

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] bg-backGround text-textColor">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-scroll relative z-10">
        {/* className="mx-auto max-w-3xl" */}
        <main>
          <Outlet />
        </main>
      </div>
      {positions.map((position, index) => (
        <div
          key={index}
          className="absolute bg-cover z-0"
          style={{
            backgroundImage: `url('https://zukttyxavjmehdcxbaty.supabase.co/storage/v1/object/public/interested/purpleRomb.png')`,
            top: position.top,
            left: position.left,
            width: position.width,
            height: position.height,
          }}
        />
      ))}
    </div>
  );
}

export default AppLayout;
