"use client";

import { useState, useEffect } from "react";
import MenuHeader from "./MenuHeader";
import MenuFilters from "./MenuFilters";
import MenuSort from "./MenuSort";
import MenuItems from "./MenuItems";

export default function MenuPage({ menuItems }) {
  const [filteredItems, setFilteredItems] = useState(menuItems);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    const uniqueCategories = [
      "All",
      ...new Set(menuItems.map((item) => item.category)),
    ];
    setCategories(uniqueCategories);
  }, [menuItems]);

  useEffect(() => {
    let updatedItems = [...menuItems];

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
      <MenuHeader />
      <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
        <MenuFilters
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <MenuSort selectedOption={sortOption} onSelectOption={setSortOption} />
      </div>
      <MenuItems items={filteredItems} />
    </div>
  );
}
