export default function Filter({
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  return (
    <div className="flex items-center gap-4">
      <label className="font-medium text-primary-800">
        Filter by Category:
      </label>
      <select
        className="border border-primary-300 rounded-lg p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500 transition"
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
}
