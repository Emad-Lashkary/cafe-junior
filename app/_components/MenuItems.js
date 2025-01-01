import { useCart } from "../_context/CartContext";
import Image from "next/image";

function MenuItems({ items }) {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="border border-primary-200 rounded-lg shadow hover:shadow-lg transition-shadow p-4"
        >
          <div className="relative w-52 h-52 mb-4 mx-auto">
            <Image
              src={item.photo}
              alt={item.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h3 className="text-xl font-bold text-primary-800">{item.name}</h3>
          <p className="text-primary-700 mt-2">{item.description}</p>
          <div className="flex justify-between items-center mt-4">
            <div>
              <span className="text-primary-800 font-bold">
                ${item.discountPrice || item.regularPrice}
              </span>
              {item.discountPrice && (
                <span className="text-primary-600 line-through ml-2">
                  ${item.regularPrice}
                </span>
              )}
            </div>
            <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-sm">
              {item.customerRate} ⭐
            </span>
          </div>
          <button
            onClick={() => addToCart(item)}
            className="mt-4 bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default MenuItems;
