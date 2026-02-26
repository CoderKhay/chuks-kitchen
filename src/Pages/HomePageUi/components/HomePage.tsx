import HomeBackground from "../../../assets/images/home-page-bg-image.png";
import PopularCategories from "./PopularCategories";
import ChefSpecial from "./ChefSpecial";
import footerBgImage from "../../../assets/images/footerBgImage.png";
import { SearchIcon } from "lucide-react";

const HomePage = () => {
  return (
    <div className="pt-12 h-full md:h-auto relative">
      <img
        src={HomeBackground}
        alt="home page background image"
        className="w-full h-full object-cover brightness-50 md:h-132"
      />

      <section className="absolute top-60 text-white m-3 flex flex-col gap-5">
        <h1 className="text-3xl font-medium w-90 lg:w-120 md:w-100 ">
          The Heart Of Nigerian Home Cooking
        </h1>
        <p className="lg:text-xl lg:font-medium">
          Handcrafted with passion, delivered with care.{" "}
        </p>
        <button className="bg-[#FF7A18] text-white px-4 py-2 rounded-md w-50 cursor-pointer ">
          Discover what's new
        </button>
      </section>
      <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-white rounded-sm w-87.5 flex items-center gap-2 px-2 py-1 shadow-xl lg:top-138 md:top-136 md:h-12 md:w-[80%]">
        <SearchIcon className="text-gray-500" />
        <input
          type="text"
          placeholder="What are you craving for today?"
          className="flex-1 px-4 py-1 focus:outline-none placeholder:text-black "
        />
      </div>
      <PopularCategories />
      <ChefSpecial />
      <div className="h-120 mt-40 mb-20 relative">
        <img
          src={footerBgImage}
          alt="footer-background-image"
          className="h-140 w-full object-cover brightness-50"
        />
        <div className="absolute top-70 text-white ml-5">
          <h1 className="text-3xl font-semibold mb-2 w-90 md:w-140">
            Introducing Our New Menu Additions!
          </h1>
          <p className="mb-5 font-medium">
            Explore exciting new dishes, crafted with the freshest ingredients
            and authentic Nigerian flavors. Limited time offer!
          </p>
          <button className="bg-[#FF7A18] rounded-sm pl-4 pr-4 p-2 cursor-pointer">
            Discover what's new
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
