import { useEffect, useState } from "react";
import { fetchProducts } from "../api/productApi";
import Carousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 mt-6">
      <Carousel />

      <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-800">🔥 Trending Products</h2>

      <div className="flex flex-wrap -m-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default Home;
