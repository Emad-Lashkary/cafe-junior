export default function Sort({ selectedOption, onSelectOption }) {
  return (
    <div className="flex items-center gap-4">
      <label className="font-medium text-primary-800">Sort by:</label>
      <select
        className="border border-primary-200 rounded-lg p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500 transition"
        value={selectedOption}
        onChange={(e) => onSelectOption(e.target.value)}
      >
        <option value="priceAsc">Price: High to Low</option>
        <option value="priceDesc">Price: Low to High</option>
        <option value="discount">Customer Rating</option>
        <option value="rating">Most Discount</option>
      </select>
    </div>
  );
}
