import { toast } from "react-toastify";

export default function ProductCard({ product, setCartItems }) {
  return (
    <div className="outline outline-gray-300 p-5 rounded-lg flex justify-start text-left flex-col gap-3  relative ">
      <p className="absolute top-2 right-2 bg-yellow-200 text-orange-400 px-2 py-1 rounded-lg text-sm font-semibold">
        {product.tag}
      </p>
      <p className="outline outline-gray-300 p-2 rounded-3xl w-14 text-3xl">
        {product.icon}
      </p>
      <h2 className="font-bold text-2xl">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className="font-bold text-lg">
        ${product.price} / {product.period}
      </p>
      <ul className="text-gray-600 mb-5">
        {product.features.map((feature, index) => (
          <li key={index}>👋 {feature}</li>
        ))}
      </ul>

      <button
        className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-4 py-4 rounded-[100px] font-semibold cursor-pointer text-center mt-auto"
        onClick={() => {
          setCartItems((prev) => [...prev, product]);
          toast.success(`${product.name} added to cart!`);
        }}
      >
        Buy Now
      </button>
    </div>
  );
}
