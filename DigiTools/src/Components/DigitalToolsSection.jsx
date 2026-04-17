import CartTab from "./CartTab";
import ProductsTab from "./ProductsTab";

export default function DigitalToolsSection({
  section,
  setSection,
  cartItems,
  setCartItems,
}) {
  return (
    <div className="flex flex-col justify-center items-center gap-20 mx-auto max-w-7xl py-10">
      <div className="text-center">
        <h1 className="font-extrabold text-[48px]">Premium Digital Tools</h1>
        <h2 className="text-[16px] text-[#627382] mt-2 mx-5">
          Choose from our curated collection of premium digital products
          designed <br />
          to boost your productivity and creativity.
        </h2>
      </div>

      {/* Product, Cart Tab */}
      <div
        className={`flex outline outline-gray-300 rounded-[100px] px-2 py-2`}
      >
        <button
          className={`bg-linear-to-r px-4 py-2 rounded-[100px] font-semibold cursor-pointer ${section === "products" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : ""}`}
          onClick={() => setSection("products")}
        >
          Products
        </button>
        <button
          className={`bg-linear-to-r px-4 py-2 rounded-[100px] font-semibold cursor-pointer ${section === "cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : ""}`}
          onClick={() => setSection("cart")}
        >
          Cart {cartItems.length > 0 && `(${cartItems.length})`}
        </button>
      </div>

      <div>
        {section === "products" ? (
          <ProductsTab setCartItems={setCartItems} />
        ) : (
          <CartTab cartItems={cartItems} setCartItems={setCartItems} />
        )}
      </div>
    </div>
  );
}

// Styles
// Button style class -> from-[#4F39F6] to-[#9514FA] text-white

// {/* The Tabs -- name of each tab group should be unique */}
// <div className="tabs tabs-lift">
//   {/* Products */}
//   <label className="tab">
//     <input type="radio" name="my_tabs_4" defaultChecked />
//     Products
//   </label>

//   <div className="tab-content bg-base-100 border-base-300 p-6">
//     Tab content 1
//   </div>

//   {/* Cart */}
//   <label className="tab">
//     <input type="radio" name="my_tabs_4" />
//     Cart()
//   </label>

//   <div className="tab-content bg-base-100 border-base-300 p-6">
//     Tab content 2
//   </div>
// </div>
