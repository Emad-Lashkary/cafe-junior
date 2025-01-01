export default function MenuFilters({
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  return (
    <select
      className="p-3 border rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
      value={selectedCategory}
      onChange={(e) => onSelectCategory(e.target.value)}
    >
      {categories.map((category) => (
        <option key={category} value={category} className="text-gray-800">
          {category}
        </option>
      ))}
    </select>
  );
}
