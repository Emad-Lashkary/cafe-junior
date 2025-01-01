// _components/Sort.js
"use client"; // Client component for interactive behavior

const Sort = ({ selectedOption, onSelectOption }) => {
  return (
    <div className="flex items-center gap-4">
      <label htmlFor="sort" className="text-sm font-medium text-gray-700">
        Sort by:
      </label>
      <select
        id="sort"
        className="border border-gray-300 rounded-lg p-3 shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500 transition"
        value={selectedOption}
        onChange={(e) => onSelectOption(e.target.value)}
      >
        <option value="priceAsc">Price: Low to High</option>
        <option value="priceDesc">Price: High to Low</option>
        <option value="discount">Most Discount</option>
        <option value="rating">Customer Rating</option>
      </select>
    </div>
  );
};

export default Sort;
