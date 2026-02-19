import Categories from "./Categories"

type PopularCategoryType = {
  id: number;
  name: string;
  image: string;
}

const PopularCategories = () => {

  return (
          <div className="mt-50">
          <h1 className="text-center mt-26 text-4xl">Popular Categories</h1>
          <div className="flex justify-center flex-wrap mt-10">
            {(Categories as PopularCategoryType[]).map((category) => (
              <div key={category.id} className="flex flex-col items-center gap-2 mt-10 bg-white w-[80%] rounded-lg shadow-2xl p-1">
                <img src={category.image} alt={category.name} className="w-full h-60 object-cover rounded-t-lg"/>
                <h2 className="text-center mt-2 mb-2 text-lg">{category.name}</h2>
              </div>
            ))}
            <p className="text-center mt-10 text-blue-400 cursor-pointer">View all categories</p>
          </div>
        </div>
  )
}

export default PopularCategories