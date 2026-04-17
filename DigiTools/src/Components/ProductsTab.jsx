import ProductCard from "./ProductCard";
import products from "../data/products";

export default function ProductsTab({ setCartItems }) {
  return (
    <div className="grid grid-cols-1 mx-10 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          setCartItems={setCartItems}
        />
      ))}
    </div>
  );
}
