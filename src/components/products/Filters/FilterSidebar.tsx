"use client";

import React, { useState } from "react";
import Checkbox from "@/components/ui/common/inputs/Checkbox";
import CustomInput from "@/components/ui/common/inputs/CustomInput";
import CustomSelect from "@/components/ui/common/inputs/CustomSelect";
import { Filters } from "@/components/pages/product";

interface FilterSidebarProps {
  categories: string[];
  brands: string[];
  colors: string[];
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  categories,
  brands,
  colors,
  filters,
  setFilters,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleReset = () => {
    setFilters({
      categoryFilter: [],
      brandFilter: [],
      colorFilter: [],
      priceRange: [0, 1000],
      minRating: 0,
      inStockOnly: false,
      sortOption: "default",
    });
  };

  const handleCheckbox = (
    type: "category" | "brand" | "color",
    value: string,
    checked: boolean
  ) => {
    const key = (type + "Filter") as keyof Filters;
    setFilters((prev) => ({
      ...prev,
      [key]: checked
        ? [...(prev[key] as string[]), value]
        : (prev[key] as string[]).filter((v) => v !== value),
    }));
  };

  return (
    <>
      {/* Mobile Toggle */}
      <button
        className="lg:hidden px-4 py-2 bg-emerald-500 text-white rounded"
        onClick={() => setIsOpen(true)}
      >
        Filter
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`z-20 fixed top-0 left-0 w-80 h-full p-5 transform transition-transform duration-300 rounded-2xl ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static bg-white overflow-y-auto`}
      >
        <div className="flex justify-between items-center mb-6 lg:hidden">
          <h3 className="font-semibold text-lg">Filters</h3>
          <button
            className="text-gray-700 text-xl font-bold"
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>
        </div>

        {/* Categories */}
        <div className="mb-4">
          <span className="font-semibold mb-2 block">Category</span>
          <div className="flex flex-col gap-1">
            {categories.map((cat) => (
              <Checkbox
                key={cat}
                label={cat}
                checked={filters.categoryFilter.includes(cat)}
                onChange={(e) =>
                  handleCheckbox("category", cat, e.target.checked)
                }
              />
            ))}
          </div>
        </div>

        {/* Brands */}
        {/* <div className="mb-4">
          <span className="font-semibold mb-2 block">Brand</span>
          <div className="flex flex-col gap-1">
            {brands.map((brand) => (
              <Checkbox
                key={brand}
                label={brand}
                checked={filters.brandFilter.includes(brand)}
                onChange={(e) =>
                  handleCheckbox("brand", brand, e.target.checked)
                }
              />
            ))}
          </div>
        </div> */}

        {/* Colors */}
        {/* <div className="mb-4">
          <span className="font-semibold mb-2 block">Color</span>
          <div className="flex flex-col gap-1">
            {colors.map((color) => (
              <Checkbox
                key={color}
                label={color}
                checked={filters.colorFilter.includes(color)}
                onChange={(e) =>
                  handleCheckbox("color", color, e.target.checked)
                }
              />
            ))}
          </div>
        </div> */}

        {/* Price Range */}
        <div className="mb-4">
          <span className="font-semibold mb-2 block">
            Price Range (${filters.priceRange[0]} - ${filters.priceRange[1]})
          </span>
          <div className="flex gap-2">
            <CustomInput
              type="number"
              min={0}
              value={filters.priceRange[0]}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  priceRange: [Number(e.target.value), filters.priceRange[1]],
                })
              }
              className="w-1/2"
              placeholder="Min"
            />
            <CustomInput
              type="number"
              min={0}
              value={filters.priceRange[1]}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  priceRange: [filters.priceRange[0], Number(e.target.value)],
                })
              }
              className="w-1/2"
              placeholder="Max"
            />
          </div>
        </div>

        {/* Rating */}
        <div className="mb-4">
          <CustomSelect
            label="Minimum Rating"
            value={filters.minRating}
            onChange={(e) =>
              setFilters({ ...filters, minRating: Number(e.target.value) })
            }
            options={[
              { value: 0, label: "All" },
              { value: 1, label: "1 star & up" },
              { value: 2, label: "2 stars & up" },
              { value: 3, label: "3 stars & up" },
              { value: 4, label: "4 stars & up" },
              { value: 5, label: "5 stars" },
            ]}
          />
        </div>

        {/* In-stock */}
        <div className="mb-4">
          <Checkbox
            label="In Stock Only"
            checked={filters.inStockOnly}
            onChange={(e) =>
              setFilters({ ...filters, inStockOnly: e.target.checked })
            }
          />
        </div>

        {/* Sort */}
        <div className="mb-4">
          <CustomSelect
            label="Sort By"
            value={filters.sortOption}
            onChange={(e) =>
              setFilters({
                ...filters,
                sortOption: e.target.value as Filters["sortOption"],
              })
            }
            options={[
              { value: "default", label: "Default" },
              { value: "priceLow", label: "Price: Low → High" },
              { value: "priceHigh", label: "Price: High → Low" },
              { value: "popular", label: "Most Popular" },
            ]}
          />
        </div>

        {/* Reset */}
        <button
          type="button"
          onClick={handleReset}
          className="bg-gray-800 text-white px-3 py-2 rounded hover:bg-gray-900 w-full"
        >
          Reset Filters
        </button>
      </aside>
    </>
  );
};

export default FilterSidebar;
