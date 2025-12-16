import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">

        {/* Product Image */}
        <img 
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
        />

        <div className="p-5 flex flex-col h-full">

          {/* Product Name */}
          <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>

          {/* Product Description */}
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">{product.description}</p>

          {/* Price */}
          <p className="text-xl font-bold text-blue-600 mt-3">
            ₹{product.price}
          </p>

          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart(product)}
            className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition shadow-md hover:shadow-lg"
          >
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
}

export default ProductCard;
