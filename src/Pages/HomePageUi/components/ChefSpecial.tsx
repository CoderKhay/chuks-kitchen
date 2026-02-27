import ChefsSpecial from "../ChefSpecialCategory";

type ChefCategoryType = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
};

const ChefSpecial = () => {
  return (
    <div className="mt-50 md:mt-40">
      <h1 className="text-center mt-26 text-4xl">Chef's Special</h1>
      <div className="flex justify-center flex-wrap mt-10 gap-10">
        {(ChefsSpecial as ChefCategoryType[]).map((chef, index) => (
          <div
            key={chef.id}
            className={`flex flex-col items-center gap-2 mt-10 bg-white w-[80%] rounded-lg shadow-2xl p-1 
              ${index >= 3 ? "hidden md:block" : ""} md:w-[30%]`}
          >
            <img
              loading="lazy"
              src={chef.image}
              alt={chef.name}
              className="w-full h-60 object-cover rounded-t-lg"
            />
            <h2 className="text-center mt-2 mb-2 text-2xl font-medium">
              {chef.name}
            </h2>
            <p className="text-center text-sm font-medium pr-2 pl-2">
              {chef.description}
            </p>

            <section className="flex justify-between items-center w-full p-3 mb-10 mt-3">
              <p className="text-[#FF7A18]">
                &#8358; {chef.price.toLocaleString()}
              </p>
              <button className="bg-[#FF7A18] p-2 text-white rounded-sm w-30">
                Add to Cart
              </button>
            </section>
          </div>
        ))}
        <p className="text-center mt-10 text-blue-400 cursor-pointer md:hidden">
          View all categories
        </p>
      </div>
    </div>
  );
};

export default ChefSpecial;
