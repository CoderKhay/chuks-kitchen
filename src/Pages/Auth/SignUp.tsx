import { Link } from "react-router";
import { MailIcon } from "lucide-react";
import { LockIcon } from "lucide-react";
import { PhoneCallIcon } from "lucide-react";
import { EyeOffIcon } from "lucide-react";
import faceBookLogo from "../../assets/images/facebook-logo.png";
import googleLogo from "../../assets/images/google-logo.png";
import authImage from "../../assets/images/authImage.png";

const SignUp = () => {
  return (
    <div className="bg-white h-screen flex flex-col md:flex-row items-center mb-45">
      <div className="relative w-[45%] hidden md:block h-233 pt-25">
        <img
          loading="lazy"
          src={authImage}
          alt=""
          className="h-179 object-cover w-142 mt-30"
        />
        <div className="absolute top-1 text-center text-white bg-[#FF7A18B2] h-full md:w-full lg:w-full flex justify-center items-center">
          <div className=" text-center text-white">
            <h1 className="font-semibold text-xl">Chuks Kitchen</h1>
            <p className="w-75 font-normal">
              Your journey to delicious, authentic Nigerian meals starts here.
              Sign up or log in to order your favorites today!
            </p>
          </div>
        </div>
      </div>

      <div className="md:w-[45%] md:flex md:flex-col md:justify-center items-center md:mt-30 md:mb-20 mt-15">
        <h1 className="font-Island text-[#FF7A18] text-3xl md:mt-40">
          Chuks Kitchen
        </h1>
        <h2 className="font-medium mb-5 text-lg">Create Your Account</h2>
        <form>
          <label htmlFor="email" className="text-sm">
            Email or phone number
          </label>
          <div className="border border-gray-400 h-9 mt-2 rounded-sm flex items-center pl-1">
            <MailIcon size={16} />
            <input
              type="email"
              id="email"
              className="ml-2 flex-1 outline-0 placeholder:text-sm placeholder:text-black"
              placeholder="name@gmail.com"
            />
          </div>
          <label htmlFor="password" className="text-sm mt-4">
            Phone number
          </label>
          <div className="border border-gray-400 h-9 mt-2 rounded-sm flex items-center pl-1 pr-1 mb-2">
            <PhoneCallIcon size={16} />
            <input
              type="text"
              id="password"
              className="ml-2 flex-1 outline-0 placeholder:text-sm placeholder:text-black mr-2"
              placeholder="8123340690"
            />
            <EyeOffIcon size={16} />
          </div>
          <label htmlFor="password" className="text-sm mt-4">
            Password
          </label>
          <div className="border-2 border-blue-500 h-9 mt-2 rounded-md flex items-center pl-1 pr-1 mb-2">
            <LockIcon size={16} />
            <input
              type="text"
              id="password"
              className="ml-2 flex-1 outline-0 placeholder:text-sm placeholder:text-black mr-2"
              placeholder="QWE123#"
            />
            <EyeOffIcon size={16} />
          </div>

          <label htmlFor="password" className="text-sm mt-4">
            Confirm password
          </label>
          <div className="border border-gray-400 h-9 mt-2 rounded-sm flex items-center pl-1 pr-1 mb-2">
            <LockIcon size={16} />
            <input
              type="text"
              id="password"
              className="ml-2 flex-1 outline-0 placeholder:text-sm placeholder:text-black mr-2"
              placeholder="QWE123#"
            />
          </div>

          <p className="text-xs flex p-1 w-75 gap-1">
            <input type="checkbox" checked />
            <h2 className="pl-1 text-wrap text-xs">
              I agree to{" "}
              <span className="text-blue-600">the Terms & Conditions</span> and{" "}
              <span className="text-blue-600">Privacy Policy</span>
            </h2>
          </p>
          <button className="bg-[#FF7A18] mt-2 rounded-sm text-white p-2 cursor-pointer w-full">
            Continue
          </button>
          <div className="flex justify-center items-center gap-6 mt-3">
            <div className="border-b-2 border-gray-200 h-1 w-18" />
            <p className="text-center mt-1 text-sm ">Or continue with</p>
            <div className="border-b-2 border-gray-200 h-1 w-18" />
          </div>
          <button className="border-[1.5px] mt-3 p-2 rounded-sm border-gray-300 text-sm font-sans cursor-pointer flex justify-center gap-2 w-full">
            <img src={googleLogo} alt="google logo" className="w-5" />
            Continue with Google
          </button>
          <button className="border-[1.5px] mt-3 p-2 rounded-sm border-gray-300 text-sm font-sans mb-3 cursor-pointer flex justify-center gap-2 w-full">
            <img src={faceBookLogo} alt="facebook logo" className="w-6" />
            Continue with Apple
          </button>
          <p className="text-xs text-center mb-3">
            Already have an account?
            <Link to="../login" className="text-blue-400 ml-1">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
