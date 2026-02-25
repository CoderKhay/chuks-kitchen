import { createBrowserRouter, RouterProvider } from "react-router";
import LayoutRoute from "./Pages/Layout/LayoutRoute";
import HomePage from "./Pages/HomePageUi/components/HomePage";
import ExplorePage from "./Pages/ExplorePageUi/ExplorePage";
import MyOrders from "./Pages/MyOrdersPageUi/MyOrders";
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";

const router = createBrowserRouter([
  {
    Component: LayoutRoute,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "explore",
        Component: ExplorePage,
      },
      {
        path: "myOrders",
        Component: MyOrders,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "signup",
        Component: SignUp,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="bg-[#F3F4F6] h-screen relative font-sans">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
