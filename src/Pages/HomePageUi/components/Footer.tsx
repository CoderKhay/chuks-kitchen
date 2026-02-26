import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-amber-950/76 text-white hidden md:block  p-15 mt-12 md:mt-0">
      <div className="md:flex gap-40">
        <div className="w-40">
          <h1 className="font-Island text-[#FF7A18] text-2xl">Chuks Kitchen</h1>
          <h2>
            Bringing the authentic flavors of Nigerian home cooking to your
            table, with passion and care.
          </h2>
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl">Quick Links</h1>
          <ul className="flex flex-col text-xs gap-2">
            <Link to="" className="mt-2">
              Home
            </Link>
            <Link to="">Explore</Link>
            <Link to="">My Order</Link>
            <Link to="">Account</Link>
            <Link to="">Contact</Link>
          </ul>
        </div>
        <div className="flex flex-col text-xs gap-2">
          <h1 className="text-xl">Contact Us</h1>
          <h2>+234 801 234 5678</h2>
          <h2>hello@chukskitchen.com</h2>
          <h2>123 Taste Blvd, Lagos, Nigeria</h2>
        </div>
        <div className="flex flex-col text-xs gap-2">
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Linkedln</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>

      <p className=" text-xs mt-10">2020 Lift Media. All rights reserved.</p>
    </div>
  );
};

export default Footer;
