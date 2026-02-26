import ExploreBackground from "../../assets/images/explore-page-bg.png";
import { Popular, JollofRiceEntrees, Swallow } from "./Menu";
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

      <div className="bg-white w-full h-90 md:w-[95%] lg:w-[96.5%] md:ml-5 md:mr-5 md:mt-10 md:rounded-md">
        <div className=" font-medium text-lg pt-13 ">
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
        <div className="md:flex md:flex-wrap justify-between">
          {Popular.map((popular, index) => (
            <div
              key={popular.id}
              className={`flex items-center md:flex-col md:w-[33%] lg:w-[30%] md:object-contain gap-2 mt-10 p-1 md:p-0 bg-white w-full rounded-md shadow-2xl md:gap-10 ${index >= 3 ? "hidden md:block" : ""} }`}
            >
              <img
                src={popular.image}
                alt={popular.name}
                className="w-25 h-25 rounded-md md:w-full md:h-60 md:rounded-b-none  md:object-cover"
              />
              <div className="ml-2 flex flex-col gap-1 p-1 lg:pl-2 lg:pr-2 w-full">
                <h2 className="font-semibold text-lg">{popular.name}</h2>
                <p className="text-sm">{popular.description}</p>
                <div className="flex items-center justify-between w-full">
                  <p className="text-[#FF7A18]">
                    &#8358;{popular.price.toLocaleString()}
                  </p>
                  <div className="bg-[#FF7A18] w-4 h-4 rounded-full">
                    <PlusIcon color="white" size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-10 text-blue-400 cursor-pointer md:hidden">
          View All Categories
        </p>
      </section>
      <section className="mt-10 ml-5 mr-5">
        <h1 className="font-medium pl-3">Jollof Rice & Entrees</h1>
        <div className="md:flex justify-between">
          {JollofRiceEntrees.map((menu) => (
            <div
              key={menu.id}
              className="flex items-center md:flex-col md:w-[33%] lg:w-[30%] md:object-contain gap-2 mt-10 p-1 md:p-0 bg-white w-full rounded-md shadow-2xl md:gap-10"
            >
              <img
                src={menu.image}
                alt={menu.name}
                className="w-25 h-25 rounded-md md:w-full md:h-60 md:rounded-b-none  md:object-cover"
              />
              <div className="ml-2 flex flex-col gap-1 w-full">
                <h2 className="font-semibold text-lg">{menu.name}</h2>
                <p className="text-sm">{menu.description}</p>
                <div className="flex items-center justify-between w-full pr-2">
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
        <p className="text-center mt-10 text-blue-400 cursor-pointer md:hidden">
          View All Categories
        </p>
      </section>
      <section className="mt-10 ml-5 mr-5">
        <h1 className="font-medium pl-3">Swallow & Soups</h1>
        <div className="md:flex justify-between">
          {Swallow.map((menu) => (
            <div
              key={menu.id}
              className="flex items-center md:flex-col md:w-[33%] lg:w-[30%] md:object-contain gap-2 mt-10 p-1 md:p-0 bg-white w-full rounded-md shadow-2xl md:gap-10"
            >
              <img
                src={menu.image}
                alt={menu.name}
                className="w-25 h-25 rounded-md md:w-full md:h-60 md:rounded-b-none  md:object-cover"
              />
              <div className="ml-2 flex flex-col gap-1 w-full">
                <h2 className="font-semibold text-lg">{menu.name}</h2>
                <p className="text-sm">{menu.description}</p>
                <div className="flex items-center justify-between w-full pr-2">
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
        <p className="text-center mt-10 text-blue-400 cursor-pointer md:hidden">
          View All Categories
        </p>
      </section>
    </div>
  );
};

export default ExplorePage;
