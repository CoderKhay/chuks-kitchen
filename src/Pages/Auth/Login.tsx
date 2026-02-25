import { Link } from "react-router";
import { MailIcon } from "lucide-react";
import { LockIcon } from "lucide-react";
import { EyeOffIcon } from "lucide-react";
import faceBookLogo from "../../assets/images/facebook-logo.png";
import googleLogo from "../../assets/images/google-logo.png";

const Login = () => {
  return (
    <div className="bg-white h-screen flex flex-col items-center mt-15">
      <h1 className="font-Island text-[#FF7A18] text-3xl ">Chuks Kitchen</h1>
      <h2 className="font-medium mb-5 text-lg">Login Your Account</h2>
      <form className="flex flex-col">
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
          Password
        </label>
        <div className="border border-gray-400 h-9 mt-2 rounded-sm flex items-center pl-1 pr-1 mb-2">
          <LockIcon size={16} />
          <input
            type="text"
            id="password"
            className="ml-2 flex-1 outline-0 placeholder:text-sm placeholder:text-black mr-2"
            placeholder="******"
          />
          <EyeOffIcon size={16} />
        </div>
        <p className=" text-blue-500 text-right text-xs">Forgot Password?</p>
        <button className="bg-[#FF7A18] mt-2 rounded-sm text-white p-2 cursor-pointer">
          Continue
        </button>
        <div className="flex justify-center items-center gap-6 mt-3">
          <div className="border-b-2 border-gray-200 h-1 w-18" />
          <p className="text-center mt-1 text-sm ">Or continue with</p>
          <div className="border-b-2 border-gray-200 h-1 w-18" />
        </div>
        <button className="border-[1.5px] mt-3 p-2 rounded-sm border-gray-300 text-sm font-sans cursor-pointer flex justify-center gap-2">
          <img src={googleLogo} alt="google logo" className="w-5" />
          Continue with Google
        </button>
        <button className="border-[1.5px] mt-3 p-2 rounded-sm border-gray-300 text-sm font-sans mb-3 cursor-pointer flex justify-center gap-2">
          <img src={faceBookLogo} alt="facebook logo" className="w-6" />
          Continue with Apple
        </button>
        <p className="text-xs text-center">
          Don't have an account?
          <Link to="../signup" className="text-blue-400 ml-1">
            Create an account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
