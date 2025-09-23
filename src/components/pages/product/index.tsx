"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/services/productService";
import ProductCard from "@/components/products/productsInfo/ProductCard";
import ProductModalCard from "@/components/products/productsInfo/ProductModalCard";
import FilterSidebar from "@/components/products/Filters/FilterSidebar";
import FullPageLoader from "@/components/ui/common/loader/FullPageLoader";
import Link from "next/link";
import Image from "next/image";
import noresult from "../../../../public/images/no-result.svg";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  brand?: string;
  color?: string;
  rating?: {
    rate: number;
    count: number;
  };
}

export interface Filters {
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

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts();
        const normalizedProducts = products.map((p) => ({
          ...p,
          rating: p.rating || { rate: 0, count: 0 },
        }));
        setData(normalizedProducts);
        setFilteredData(normalizedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Filter and sort
  useEffect(() => {
    let filtered = [...data];
    const { categoryFilter, brandFilter, colorFilter, priceRange, minRating, inStockOnly, sortOption } = filters;

    if (categoryFilter.length > 0)
      filtered = filtered.filter((p) => categoryFilter.includes(p.category));
    if (brandFilter.length > 0)
      filtered = filtered.filter((p) => brandFilter.includes(p.brand || "Generic"));
    if (colorFilter.length > 0)
      filtered = filtered.filter((p) => colorFilter.includes(p.color || "Unknown"));
    
    filtered = filtered.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);
    filtered = filtered.filter((p) => (p.rating?.rate ?? 0) >= minRating);
    if (inStockOnly) filtered = filtered.filter((p) => (p.rating?.count ?? 0) > 0);

    if (sortOption === "priceLow") filtered.sort((a, b) => a.price - b.price);
    if (sortOption === "priceHigh") filtered.sort((a, b) => b.price - a.price);
    if (sortOption === "popular") filtered.sort((a, b) => (b.rating?.count ?? 0) - (a.rating?.count ?? 0));

    setFilteredData(filtered);
  }, [filters, data]);

  if (loading) return <FullPageLoader />;

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

      {/* Hero */}
      <div className="px-3 sm:px-10 mx-auto max-w-screen-2xl mt-10 hidden md:block">
        <div className="relative bg-gradient-to-r from-black via-gray-900 to-green-700 rounded-2xl text-white mb-12 shadow-xl overflow-hidden p-10">
          <h1 className="text-4xl font-bold mb-4">🛍️ Discover Our Collection</h1>
          <p className="text-lg max-w-2xl mb-6">
            Explore the best hand-picked products crafted with quality and care.
          </p>
          <Link href="/categories">
            <button className="px-6 py-3 bg-white text-black font-semibold rounded-xl shadow hover:bg-gray-100 transition">
              Start Shopping
            </button>
          </Link>
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-gray-50 py-10 lg:py-16">
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-10">
            <h2 className="text-2xl font-semibold">All Products</h2>
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
            <div className="flex-1">
              {filteredData.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                  {filteredData.map((item) => (
                    <ProductCard
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      price={item.price}
                      stock={item.rating?.count ?? 0}
                      imageUrl={item.image}
                      rating={item.rating?.rate ?? 0}
                      reviews={item.rating?.count ?? 0}
                      onClick={() => openProductModal(item)}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col justify-center items-center text-center py-20">
                  <Image src={noresult} width={250} height={250} alt="no items" className="rounded-md object-cover"/>
                  <h3 className="font-semibold text-gray-700 text-lg pt-5">No products found</h3>
                  <p className="text-sm text-gray-500 pt-2 px-8">
                    Sorry, we couldn&#39;t find any products matching your filters.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
