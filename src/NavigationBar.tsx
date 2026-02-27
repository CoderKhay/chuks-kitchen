import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink, Link } from "react-router";

const NavigationBar = () => {
  const [mobile, setMobile] = useState(false);

  return (
    <nav className="flex justify-between items-center pr-6 bg-white shadow-2xl fixed top-0 bottom-0 z-1 w-full h-12">
      <h2 className="text-[#FF7A18] font-Island text-3xl ml-6 md:text-lg md:w-60 lg:text-3xl">
        Chuks Kitchen
      </h2>

      <button className="md:hidden" onClick={() => setMobile((prev) => !prev)}>
        {mobile ? (
          <X className="cursor-pointer" />
        ) : (
          <Menu className="cursor-pointer" />
        )}
      </button>
      <div className="absolute top-12 w-full">
        {mobile && (
          <div className=" border-t backdrop-blur-lg bg-white/40">
            <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#FF7A18" : "",
                })}
                to="/"
                className="block text-black hover:text-whibte text-sm lg:text-base"
                onClick={() => setMobile(false)}
              >
                Home
              </NavLink>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#FF7A18" : "",
                })}
                to="explore"
                className="block text-black text-sm lg:text-base"
                onClick={() => setMobile(false)}
              >
                Explore
              </NavLink>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#FF7A18" : "",
                })}
                to="myOrders"
                className="block text-black text-sm lg:text-base"
                onClick={() => setMobile(false)}
              >
                My Orders
              </NavLink>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#FF7A18" : "",
                })}
                to="account"
                className="block text-black text-sm lg:text-base"
                onClick={() => setMobile(false)}
              >
                Account
              </NavLink>
            </div>
          </div>
        )}
      </div>

      <div className="px-4 py-4 hidden  md:block w-[85%] md:flex justify-between items-center">
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#FF7A18" : "",
          })}
          to="/"
          className=" text-black hover:text-whibte text-sm lg:text-base"
          onClick={() => setMobile(false)}
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#FF7A18" : "",
          })}
          to="explore"
          className=" text-black text-sm lg:text-base"
          onClick={() => setMobile(false)}
        >
          Explore
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#FF7A18" : "",
          })}
          to="myOrders"
          className=" text-black text-sm lg:text-base"
          onClick={() => setMobile(false)}
        >
          My Orders
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#FF7A18" : "",
          })}
          to="account"
          className=" text-black text-sm lg:text-base"
          onClick={() => setMobile(false)}
        >
          Account
        </NavLink>
        <button className="bg-[#FF7A18] p-2 w-25 text-white text-sm rounded-md cursor-pointer">
          <Link to="login">Login</Link>
        </button>
      </div>
    </nav>
  );
};

export default NavigationBar;
