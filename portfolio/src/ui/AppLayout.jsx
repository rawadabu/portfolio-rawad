import Header from "./Header";
import { Outlet } from "react-router-dom";

function AppLayout() {
  //   const navigation = useNavigation();
  //  IDLE OR LOADING console.log(navigation);
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] bg-backGround text-textColor">
      {/* {true && <Loader />} */}
      <Header />
      <div className="overflow-scroll">
        {/* className="mx-auto max-w-3xl" */}
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
