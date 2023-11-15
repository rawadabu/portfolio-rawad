/* eslint-disable no-unused-vars */
import Header from "./Header";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  // console.log(navigation);
  const isLoading = navigation.state === "loading";

  // const positions = [
  //   { top: "10%", left: "20%", width: "10vw", height: "10vh" },
  //   { top: "30%", left: "70%", width: "15vw", height: "10vh" },
  //   { top: "70%", left: "0%", width: "18vw", height: "18vh" },
  //   { top: "70%", left: "90%", width: "10vw", height: "10vh" },
  // ];

  // const BackgroundShapes = () => {
  //   return (
  //     <div className="relative h-full overflow-hidden bg-backGround text-textColor">
  //       {positions.map((position, index) => (
  //         <div
  //           key={index}
  //           className="absolute bg-cover"
  //           style={{
  //             backgroundImage: `url('https://zukttyxavjmehdcxbaty.supabase.co/storage/v1/object/public/interested/purpleRomb.png')`,
  //             top: position.top,
  //             left: position.left,
  //             width: position.width,
  //             height: position.height,
  //           }}
  //         />
  //       ))}
  //     </div>
  //   );
  // };

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
      {/* <BackgroundShapes /> */}
    </div>
  );
}

export default AppLayout;
