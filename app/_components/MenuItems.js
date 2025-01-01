// _components/MenuItems.js
"use client"; // Client component for interactive behavior

import { useCart } from "../_context/CartContext";
import Image from "next/image";

const MenuItems = ({ items }) => {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {items.map((item) => (
        <div
          key={item.id}
          className="relative bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-all p-4 overflow-hidden group"
        >
          {/* Image */}
          <div className="relative w-full h-56 mb-4">
            <Image
              src={item.photo}
              alt={item.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg transform group-hover:scale-105 transition-all"
            />
          </div>

          {/* Title and Description */}
          <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
          <p className="text-sm text-gray-600 mt-2">{item.description}</p>

          {/* Price and Rating */}
          <div className="flex justify-between items-center mt-4">
            <div>
              <span className="text-lg font-semibold text-primary-600">
                ${item.discountPrice || item.regularPrice}
              </span>
              {item.discountPrice && (
                <span className="text-sm text-gray-500 line-through ml-2">
                  ${item.regularPrice}
                </span>
              )}
            </div>
            <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full text-sm">
              {item.customerRate} ⭐
            </span>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart(item)}
            className="absolute bottom-4 left-4 right-4 bg-primary-500 text-white px-6 py-2 rounded-lg shadow-md transform group-hover:scale-105 transition-all hover:bg-primary-600"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default MenuItems;
