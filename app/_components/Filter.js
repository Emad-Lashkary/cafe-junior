// _components/Filter.js
"use client"; // Client component for interactive behavior

const Filter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex items-center gap-4">
      <label htmlFor="category" className="text-sm font-medium text-gray-700">
        Filter by Category:
      </label>
      <select
        id="category"
        className="border border-gray-300 rounded-lg p-3 shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500 transition"
        value={selectedCategory}
        onChange={(e) => onSelectCategory(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
