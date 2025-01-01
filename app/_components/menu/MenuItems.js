export default function MenuItems({ items }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item) => (
        <div
          key={item.id}
          className="p-4 bg-white border rounded-lg shadow-lg transition-transform hover:scale-105"
        >
          <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
          <p className="text-gray-600 mb-2">{item.description}</p>
          <p className="text-sm text-gray-500 mb-4">
            <span className="font-medium text-yellow-600">Category:</span>{" "}
            {item.category}
          </p>
          <p className="text-lg font-bold text-green-600">
            ${item.discountPrice || item.regularPrice}
          </p>
        </div>
      ))}
    </div>
  );
}
