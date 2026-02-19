import footerBgImage from "../../../assets/images/footerBgImage.png";

const Footer = () => {
  return (
    <div className="h-160 mt-40 relative">
      <img
        src={footerBgImage}
        alt="footer-background-image"
        className="h-160 object-cover brightness-50"
      />
      <div className="absolute top-70 text-white ml-5">
        <h1 className="text-3xl font-semibold mb-2 w-90">
          Introducing Our New Menu Additions!
        </h1>
        <p className="mb-5">
          Explore exciting new dishes, crafted with the freshest ingredients and
          authentic Nigerian flavors. Limited time offer!
        </p>
        <button className="bg-[#FF7A18] rounded-sm pl-4 pr-4 p-2 cursor-pointer">
          Discover what's new
        </button>
      </div>
    </div>
  );
};

export default Footer;
