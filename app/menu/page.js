import Filter from "../_components/Filter";
import MenuItems from "../_components/menu/MenuItems";
import Sort from "../_components/Sort";
import { menuData } from "../_lib/menuData";

export const metadata = {
  title: "Menu | Cafe Junior",
};

export default async function MenuPage() {
  const menuItems = menuData;
  const categories = [
    "All",
    ...new Set(menuItems.map((item) => item.category)),
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">
        Our Menu
      </h1>

      <div className="flex flex-wrap justify-between items-center gap-6 mb-8">
        <Filter categories={categories} />
        <Sort />
      </div>

      <MenuItems items={menuItems} />
    </div>
  );
}
