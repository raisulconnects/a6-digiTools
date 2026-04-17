export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center pt-10 px-30">
        <div className="md:text-3xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent cursor-pointer text-5xl pb-5">
          DigiTools
        </div>
        <div className="hidden md:block">
          <ul className="flex justify-center items-center gap-10 ">
            <li className="cursor-pointer">Products</li>
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Testimonials</li>
            <li className="cursor-pointer">FAQ</li>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-5">
          <button className="cursor-pointer hidden md:block">Cart</button>
          <button className="cursor-pointer hidden md:block">Login</button>
          <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-4 py-2 rounded-[100px] font-semibold cursor-pointer hidden md:block">
            Get Started
          </button>
        </div>
      </nav>
      <hr className="my-7 border-gray-200" />
    </div>
  );
}
