export default function MenuSort({ selectedOption, onSelectOption }) {
  return (
    <select
      className="p-3 border rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
      value={selectedOption}
      onChange={(e) => onSelectOption(e.target.value)}
    >
      <option value="" disabled className="text-gray-500">
        Sort by
      </option>
      <option value="priceAsc">Price (Low to High)</option>
      <option value="priceDesc">Price (High to Low)</option>
      <option value="discount">Discount</option>
      <option value="rating">Rating</option>
    </select>
  );
}
