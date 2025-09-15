"use client";
import { useEffect, useState } from "react";
import { getProducts } from "@/services/productService";
import ProductCard from "@/components/products/productsInfo/ProductCard";
import ProductModalCard from "@/components/products/productsInfo/ProductModalCard";
import FilterSidebar from "@/components/products/Filters/FilterSidebar";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  brand?: string;
  color?: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface Filters {
  categoryFilter: string[];
  brandFilter: string[];
  colorFilter: string[];
  priceRange: [number, number];
  minRating: number;
  inStockOnly: boolean;
  sortOption: "default" | "priceLow" | "priceHigh" | "popular";
}

export default function ProductPage() {
  const [data, setData] = useState<Product[]>([]);
  const [filteredData, setFilteredData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [filters, setFilters] = useState<Filters>({
    categoryFilter: [],
    brandFilter: [],
    colorFilter: [],
    priceRange: [0, 1000],
    minRating: 0,
    inStockOnly: false,
    sortOption: "default",
  });

  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts();
        setData(products);
        setFilteredData(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = [...data];
    const {
      categoryFilter,
      brandFilter,
      colorFilter,
      priceRange,
      minRating,
      inStockOnly,
      sortOption,
    } = filters;

    if (categoryFilter.length > 0)
      filtered = filtered.filter((p) => categoryFilter.includes(p.category));
    if (brandFilter.length > 0)
      filtered = filtered.filter((p) =>
        brandFilter.includes(p.brand || "Generic")
      );
    if (colorFilter.length > 0)
      filtered = filtered.filter((p) =>
        colorFilter.includes(p.color || "Unknown")
      );
    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );
    filtered = filtered.filter((p) => p.rating.rate >= minRating);
    if (inStockOnly) filtered = filtered.filter((p) => p.rating.count > 0);

    if (sortOption === "priceLow") filtered.sort((a, b) => a.price - b.price);
    if (sortOption === "priceHigh") filtered.sort((a, b) => b.price - a.price);
    if (sortOption === "popular")
      filtered.sort((a, b) => b.rating.count - a.rating.count);

    setFilteredData(filtered);
  }, [filters, data]);

  if (loading)
    return (
      <p className="p-10 text-center text-gray-500">Loading products...</p>
    );

  const categories = [...new Set(data.map((p) => p.category))];
  const brands = [...new Set(data.map((p) => p.brand || "Generic"))];
  const colors = [...new Set(data.map((p) => p.color || "Unknown"))];
  return (
    <>
      <ProductModalCard
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
      />
      <div className="bg-gray-50">
        <div className="lg:py-16 py-10 mx-auto max-w-screen-2xl px-3 sm:px-10">
          <div className="mb-10 flex justify-center">
            <div className="text-center w-full lg:w-2/5">
              <h2 className="text-xl lg:text-4xl mb-2 font-semibold text-black">
                Our Products
              </h2>
              <p className="text-base font-sans text-gray-600 leading-6 pb-5">
                Browse our products with modern filters to quickly find what you
                need.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar */}
            <FilterSidebar
              categories={categories}
              brands={brands}
              colors={colors}
              filters={filters}
              setFilters={setFilters}
            />

            {/* Products Grid */}
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
              {filteredData.map((item) => (
                <ProductCard
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  stock={item.rating.count}
                  imageUrl={item.image}
                  onClick={() => openProductModal(item)}
                />
              ))}
              {filteredData.length === 0 && (
                <p className="col-span-full text-center text-gray-500 mt-5">
                  No products match the selected filters.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
