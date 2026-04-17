import { toast } from "react-toastify";

export default function CartTab({ cartItems, setCartItems }) {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="w-6xl max-w-[400px] md:max-w-2xl outline outline-gray-300 p-5 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="outline outline-gray-300 p-10 rounded-3xl text-gray-600 text-center">
          Your cart is empty.
        </p>
      ) : (
        <div className=" p-4 rounded-2xl flex flex-col gap-4">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-200/60 rounded-xl p-4"
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl bg-white p-2 rounded-full">
                  {item.icon}
                </div>

                <div className="flex flex-col">
                  <span className="font-semibold">{item.name}</span>
                  <span className="text-gray-600 text-sm">${item.price}</span>
                </div>
              </div>

              {/* Remove */}
              <button
                className="text-pink-500 text-sm font-medium"
                onClick={() =>
                  setCartItems(cartItems.filter((_, i) => i !== index))
                }
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total */}
          <div className="flex justify-between items-center mt-2 px-1">
            <span className="text-gray-600">Total:</span>
            <span className="font-bold text-lg">${total}</span>
          </div>

          {/* Checkout Button */}
          <button
            className="mt-2 py-3 rounded-full text-white font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA]"
            onClick={() => {
              setCartItems([]);
              toast.success("Checkout successful!");
            }}
          >
            Proceed To Checkout
          </button>
        </div>
      )}
    </div>
  );
}
