import HomeBackground from "../../../assets/images/home-page-bg-image.png";
import PopularCategories from "./PopularCategories";
import ChefSpecial from "./ChefSpecial";
import Footer from "./Footer";
import { SearchIcon } from "lucide-react";

const HomePage = () => {
  return (
    <>
      <div className="pt-12 h-full relative">
        <img
          src={HomeBackground}
          alt="home page background image"
          className="w-full h-full object-cover brightness-50 "
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
        <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-white rounded-sm w-80 flex items-center gap-2 px-2 py-1 shadow-xl lg:w-[80%] md:w-[80%]">
          <SearchIcon className="text-gray-500" />
          <input
            type="text"
            placeholder="What are you craving for today?"
            className="flex-1 px-4 py-1 focus:outline-none placeholder:text-black"
          />
        </div>
        <PopularCategories />
        <ChefSpecial />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
