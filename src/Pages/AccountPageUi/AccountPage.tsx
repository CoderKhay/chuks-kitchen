const AccountPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white w-115 h-100 rounded-sm p-3">
        <h1 className="border-b border-gray-300 pb-1 text-lg font-medium">
          Payment
        </h1>
        <div className="p-2 pl-0">
          <h2 className="">Pay with:</h2>
        </div>
        <div className="flex gap-20 text-xs">
          <label className="flex items-center">
            <input type="radio" name="paymentMethod" value="card" />
            <h3 className="ml-1 inline">Card</h3>
          </label>
          <label className="flex items-center">
            <input type="radio" name="paymentMethod" value="bank" />
            <h3 className="inline ml-1">Bank</h3>
          </label>
          <label className="flex items-center">
            <input type="radio" name="paymentMethod" value="transfer" />
            <h3 className="inline ml-1"> Transfer</h3>
          </label>
        </div>
        <form>
          <div>
            <section className="">
              <label htmlFor="number" className="block mt-2 mb-2">
                Card Number
              </label>
              <input
                id="number"
                type="text"
                placeholder="1234 5678 9101 1121"
                className="border-[1.5px] border-gray-300 w-full placeholder:text-xs rounded-sm pl-1 pb-1 "
              />
            </section>
            <section className="flex justify-between">
              <div>
                <label htmlFor="number" className="block mt-2 mb-2">
                  Expiration Date
                </label>
                <input
                  id="number"
                  type="text"
                  placeholder="MM/YY"
                  className="border-[1.5px] border-gray-300 rounded-sm w-53 placeholder:text-xs pl-2 pb-1"
                />
              </div>
              <div>
                <label htmlFor="number" className="block mt-2 mb-2">
                  CVV
                </label>
                <input
                  id="number"
                  type="text"
                  placeholder="123"
                  className="border-[1.5px] border-gray-300 rounded-sm w-53 placeholder:text-xs pl-2 pb-1"
                />
              </div>
            </section>
            <div className="mt-2 mb-2 flex items-center">
              <input type="checkbox" />
              <span className="m-2 text-gray-500">Save card details</span>
            </div>

            <button className="bg-[#FF7A18] w-full p-2 rounded-md text-white text-sm mb-3">
              Pay &#8358;9,900
            </button>
            <p className="text-xs text-gray-400">
              Your pesonal data will be used to process your order, support your
              experience throughout this website , and for other purposes
              described in our privacy policy.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountPage;
