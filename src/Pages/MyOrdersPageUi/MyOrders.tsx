import orders from "./orders";
import { MinusIcon } from "lucide-react";
import { PlusIcon } from "lucide-react";

const MyOrders = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="bg-white w-110 h-130 p-4 rounded-md mt-10 shadow-2xl flex flex-col items-center gap-2">
        {orders.map((order) => (
          <div
            key={order.id}
            className="flex items-center gap-2 rounded-lg shadow-2xl p-1 border w-105 "
          >
            <img
              src={order.image}
              alt={order.name}
              className="w-20 h-20 object-cover rounded-sm"
            />
            <div className="flex flex-col ml-3 w-75">
              <h2 className="text-xl font-medium">{order.name}</h2>
              <p className=" text-sm">{order.extraInfo}</p>

              <div className="flex justify-between items-center">
                <div className="bg-gray-400 rounded-xs">
                  <PlusIcon size={10} />
                </div>
                <p className="font-medium">1</p>
                <div className="bg-gray-400 rounded-xs">
                  <MinusIcon size={10} />
                </div>
              </div>

              <section className="flex justify-between items-center w-full">
                <p className="text-[#FF7A18]">
                  &#8358; {order.price.toLocaleString()}
                </p>
                <button className="bg-black p-2 text-white rounded-xs w-5 h-4 flex items-center justify-center text-xs">
                  X
                </button>
              </section>
            </div>
          </div>
        ))}

        <div className="flex text-blue-600 gap-3 w-full">
          <PlusIcon />
          <p>Add more items from Chuks Kitchen</p>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
