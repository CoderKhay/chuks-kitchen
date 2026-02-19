import { Outlet } from "react-router";
import NavigationBar from "../../NavigationBar";

const LayoutRoute = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
};

export default LayoutRoute;
