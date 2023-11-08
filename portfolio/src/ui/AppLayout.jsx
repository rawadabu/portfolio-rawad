import Header from "./Header";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  // console.log(navigation);
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] bg-backGround text-textColor">
      {isLoading && <Loader />}
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
