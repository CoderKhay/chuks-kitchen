import { createBrowserRouter, RouterProvider } from "react-router";
import LayoutRoute from "./Pages/Layout/LayoutRoute";
import HomePage from "./Pages/HomePageUi/components/HomePage";
import ExplorePage from "./Pages/ExplorePageUi/ExplorePage";

const router = createBrowserRouter([
  {
    Component: LayoutRoute,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "Explore",
        Component: ExplorePage,
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
