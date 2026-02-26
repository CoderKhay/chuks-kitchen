import { Outlet } from "react-router";
import NavigationBar from "../../NavigationBar";
import Footer from "../HomePageUi/components/Footer";

const LayoutRoute = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutRoute;
