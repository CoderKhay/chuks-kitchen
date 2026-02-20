import ExploreBackground from "../../assets/images/explore-page-bg.png";
import Menus from "./Menu";
import { PlusIcon } from "lucide-react";

const ExplorePage = () => {
  return (
    <div className="bg-[#F3F4F6] pb-5">
      <img
        src={ExploreBackground}
        alt="The background image of the explore page"
        className="h-screen w-full object-cover brightness-50"
      />
      <section className="absolute top-70 text-white ml-6">
        <h1 className="text-4xl font-medium mb-2">Chuks Kitchen</h1>
        <p className="font-light">
          Chuks Kitchen Nigerian Home Cooking 4.8 (1.2k)
        </p>
      </section>

      <div className="bg-white w-full h-90">
        <div className=" font-medium text-lg pt-13">
          <h1 className="mb-2 pl-4">Menu Categories</h1>
          <ul className="flex flex-col gap-2">
            <li className="bg-[#fdc9a4] border-l-4 border-[#FF7A18] p-1">
              <a className="pl-2"> Popular</a>
            </li>
            <li>
              <a className="pl-4">Jollof Rice & Entrees</a>
            </li>
            <li>
              <a className="pl-4">Swallow and Soups</a>
            </li>
            <li>
              <a className="pl-4">Grills & Sides</a>
            </li>
            <li>
              <a className="pl-4">Beverages</a>
            </li>
            <li>
              <a className="pl-4">Desserts</a>
            </li>
          </ul>
        </div>
      </div>

      <section className="mt-10 ml-5 mr-5">
        <h1 className="font-medium">Popular</h1>
        <div>
          {Menus.map((menu) => (
            <div
              key={menu.id}
              className="flex items-center gap-2 mt-10 bg-white w-full rounded-md shadow-2xl p-1"
            >
              <img
                src={menu.image}
                alt={menu.name}
                className="w-25 h-25 object-cover rounded-md"
              />
              <div className="ml-2 flex flex-col gap-1">
                <h2 className="font-semibold text-lg">{menu.name}</h2>
                <p className="text-sm">{menu.description}</p>
                <div className="flex justify-between">
                  <p className="text-[#FF7A18]">
                    &#8358;{menu.price.toLocaleString()}
                  </p>
                  <div className="bg-[#FF7A18] w-4 h-4 rounded-full">
                    <PlusIcon color="white" size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-10 text-blue-400 cursor-pointer">
          View All Categories
        </p>
      </section>
      <section className="mt-10 ml-5 mr-5">
        <h1 className="font-medium pl-3">Jollof Rice & Entrees</h1>
        <div>
          {Menus.map((menu) => (
            <div
              key={menu.id}
              className="flex items-center gap-2 mt-10 bg-white w-full rounded-md shadow-2xl p-1"
            >
              <img
                src={menu.image}
                alt={menu.name}
                className="w-25 h-25 object-cover rounded-md"
              />
              <div className="ml-2 flex flex-col gap-1">
                <h2 className="font-semibold text-lg">{menu.name}</h2>
                <p className="text-sm">{menu.description}</p>
                <div className="flex justify-between">
                  <p className="text-[#FF7A18]">
                    &#8358;{menu.price.toLocaleString()}
                  </p>
                  <div className="bg-[#FF7A18] w-4 h-4 rounded-full">
                    <PlusIcon color="white" size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-10 text-blue-400 cursor-pointer">
          View All Categories
        </p>
      </section>
      <section className="mt-10 ml-5 mr-5">
        <h1 className="font-medium pl-3">Swallow & Soups</h1>
        <div>
          {Menus.map((menu) => (
            <div
              key={menu.id}
              className="flex items-center gap-2 mt-10 bg-white w-full rounded-md shadow-2xl p-1"
            >
              <img
                src={menu.image}
                alt={menu.name}
                className="w-25 h-25 object-cover rounded-md"
              />
              <div className="ml-2 flex flex-col gap-1">
                <h2 className="font-semibold text-lg">{menu.name}</h2>
                <p className="text-sm">{menu.description}</p>
                <div className="flex justify-between">
                  <p className="text-[#FF7A18]">
                    &#8358;{menu.price.toLocaleString()}
                  </p>
                  <div className="bg-[#FF7A18] w-4 h-4 rounded-full">
                    <PlusIcon color="white" size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-10 text-blue-400 cursor-pointer">
          View All Categories
        </p>
      </section>
    </div>
  );
};

export default ExplorePage;
