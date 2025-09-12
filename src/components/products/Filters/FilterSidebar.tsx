"use client";
import React from "react";
import Checkbox from "@/components/ui/common/inputs/Checkbox"; // ✅ reusable checkbox
import CustomInput from "@/components/ui/common/inputs/CustomInput"; // ✅ reusable input
import CustomSelect from "@/components/ui/common/inputs/CustomSelect"; // ✅ reusable select

interface FiltersState {
  categoryFilter: string[];
  brandFilter: string[];
  colorFilter: string[];
  priceRange: [number, number];
  minRating: number;
  inStockOnly: boolean;
  sortOption: string;
}

interface FilterSidebarProps {
  categories: string[];
  brands: string[];
  colors: string[];
  filters: FiltersState;
  setFilters: React.Dispatch<React.SetStateAction<FiltersState>>;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  categories,
  brands,
  colors,
  filters,
  setFilters,
}) => {
  const {
    categoryFilter,
    brandFilter,
    colorFilter,
    priceRange,
    minRating,
    inStockOnly,
    sortOption,
  } = filters;

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

  return (
    <aside className="lg:w-1/4 bg-white p-5 rounded-lg shadow-sm space-y-5">
      <h3 className="font-bold text-[22px]">Filters</h3>

      {/* Category */}
      <div>
        <span className="font-semibold mb-2 block">Category</span>
        <div className="flex flex-col gap-1">
          {categories.map((cat) => (
            <Checkbox
              key={cat}
              label={cat.charAt(0).toUpperCase() + cat.slice(1)}
              checked={categoryFilter.includes(cat)}
              onChange={(e) =>
                e.target.checked
                  ? setFilters({
                      ...filters,
                      categoryFilter: [...categoryFilter, cat],
                    })
                  : setFilters({
                      ...filters,
                      categoryFilter: categoryFilter.filter((c) => c !== cat),
                    })
              }
            />
          ))}
        </div>
      </div>

      {/* Brand */}
      <div>
        <span className="font-semibold mb-2 block">Brand</span>
        <div className="flex flex-col gap-1">
          {brands.map((b) => (
            <Checkbox
              key={b}
              label={b}
              checked={brandFilter.includes(b)}
              onChange={(e) =>
                e.target.checked
                  ? setFilters({ ...filters, brandFilter: [...brandFilter, b] })
                  : setFilters({
                      ...filters,
                      brandFilter: brandFilter.filter((br) => br !== b),
                    })
              }
            />
          ))}
        </div>
      </div>

      {/* Color */}
      <div>
        <span className="font-semibold mb-2 block">Color</span>
        <div className="flex gap-2 flex-wrap">
          {colors.map((col) => (
            <button
              key={col}
              type="button"
              onClick={() => {
                if (colorFilter.includes(col))
                  setFilters({
                    ...filters,
                    colorFilter: colorFilter.filter((c) => c !== col),
                  });
                else
                  setFilters({
                    ...filters,
                    colorFilter: [...colorFilter, col],
                  });
              }}
              className={`w-6 h-6 rounded-full border ${
                colorFilter.includes(col)
                  ? "ring-2 ring-gray-800"
                  : "border-gray-300"
              }`}
              style={{ backgroundColor: col !== "Unknown" ? col : "#eee" }}
            />
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <span className="font-semibold mb-2 block">
          Price Range (${priceRange[0]} - ${priceRange[1]})
        </span>
        <div className="flex gap-2">
          <CustomInput
            type="number"
            min={0}
            value={priceRange[0]}
            onChange={(e) =>
              setFilters({
                ...filters,
                priceRange: [Number(e.target.value), priceRange[1]],
              })
            }
            className="w-1/2"
            placeholder="Min"
          />
          <CustomInput
            type="number"
            min={0}
            value={priceRange[1]}
            onChange={(e) =>
              setFilters({
                ...filters,
                priceRange: [priceRange[0], Number(e.target.value)],
              })
            }
            className="w-1/2"
            placeholder="Max"
          />
        </div>
      </div>

      {/* Minimum Rating */}
      <CustomSelect
        label="Minimum Rating"
        value={minRating}
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

      {/* In-stock */}
      <Checkbox
        label="In Stock Only"
        checked={inStockOnly}
        onChange={(e) =>
          setFilters({ ...filters, inStockOnly: e.target.checked })
        }
      />

      {/* Sort */}
      <CustomSelect
        label="Sort By"
        value={sortOption}
        onChange={(e) =>
          setFilters({ ...filters, sortOption: e.target.value })
        }
        options={[
          { value: "default", label: "Default" },
          { value: "priceLow", label: "Price: Low → High" },
          { value: "priceHigh", label: "Price: High → Low" },
          { value: "popular", label: "Most Popular" },
        ]}
      />

      {/* Reset */}
      <button
        type="button"
        onClick={handleReset}
        className="bg-gray-800 text-white px-3 py-2 rounded hover:bg-gray-900 w-full"
      >
        Reset Filters
      </button>
    </aside>
  );
};

export default FilterSidebar;
