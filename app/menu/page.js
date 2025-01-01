"use client";

import { useState, useEffect } from "react";
import Filter from "../_components/Filter";
import Sort from "../_components/Sort";
import MenuItems from "../_components/MenuItems";

export const metadata = {
  title: "Menu | Cafe Junior",
};

function MenuPage() {
  const [menuItems, setMenuItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    async function fetchMenu() {
      const response = await fetch("/api/menu");
      const data = await response.json();

      setMenuItems(data);
      setFilteredItems(data);

      const uniqueCategories = [
        "All",
        ...new Set(data.map((item) => item.category)),
      ];
      setCategories(uniqueCategories);
    }

    fetchMenu();
  }, []);

  useEffect(() => {
    let updatedItems = menuItems;

    if (selectedCategory !== "All") {
      updatedItems = updatedItems.filter(
        (item) => item.category === selectedCategory
      );
    }

    if (sortOption === "priceAsc") {
      updatedItems.sort((a, b) => a.regularPrice - b.regularPrice);
    } else if (sortOption === "priceDesc") {
      updatedItems.sort((a, b) => b.regularPrice - a.regularPrice);
    } else if (sortOption === "discount") {
      updatedItems.sort(
        (a, b) =>
          b.regularPrice - b.discountPrice - (a.regularPrice - a.discountPrice)
      );
    } else if (sortOption === "rating") {
      updatedItems.sort((a, b) => b.customerRate - a.customerRate);
    }

    setFilteredItems(updatedItems);
  }, [selectedCategory, sortOption, menuItems]);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800 underline underline-offset-4">
        Our Menu
      </h1>

      <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
        <Filter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <Sort selectedOption={sortOption} onSelectOption={setSortOption} />
      </div>

      <MenuItems items={filteredItems} />
    </div>
  );
}

export default MenuPage;
