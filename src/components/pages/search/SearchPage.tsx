"use client";

import React, { useEffect, useRef, useState } from "react";
import AppImages from "@/config/constant/app.images";
import CTASection from "./CTASection";
import CategoryCard from "./CategoryCard";
import FullPageLoader from "@/components/ui/common/loader/FullPageLoader";
import ProductCard from "@/components/products/productsInfo/ProductCard";
import { getProducts, Product } from "@/services/productService";
import ProductModalCard from "@/components/products/productsInfo/ProductModalCard";

const ctaData = [
  {
    href: "/product",
    imageSrc: AppImages.searchImg.ctaBg1,
    title: "Taste of",
    subtitle: "Fresh & Natural",
    buttonText: "Shop Now",
  },
  {
    href: "/product",
    imageSrc: AppImages.searchImg.ctaBg2,
    title: "Taste of",
    subtitle: "Fresh & Natural",
    buttonText: "Shop Now",
  },
  {
    href: "/product",
    imageSrc: AppImages.searchImg.ctaBg3,
    title: "Taste of",
    subtitle: "Fresh & Natural",
    buttonText: "Shop Now",
  },
];

const categories = [
  {
    name: "Men Perfumes",
    image: AppImages.categories.manPerfume,
    urlCard: "/",
  },
  { name: "Gocha", image: AppImages.categories.placeholder, urlCard: "/" },
  { name: "Fish & Meat", image: AppImages.categories.cat, urlCard: "/" },
  {
    name: "Fruits & Vegetable",
    image: AppImages.categories.cabbage,
    urlCard: "/",
  },
  {
    name: "Cooking Essentials",
    image: AppImages.categories.flyingPan,
    urlCard: "/",
  },
  {
    name: "Biscuits & Cakes",
    image: AppImages.categories.bagelMix,
    urlCard: "/",
  },
  { name: "Household Tools", image: AppImages.categories.spray, urlCard: "/" },
  {
    name: "Beauty & Healths",
    image: AppImages.categories.beauty,
    urlCard: "/",
  },
  {
    name: "Jam & Jelly",
    image: AppImages.categories.strawberryJam,
    urlCard: "/",
  },
  { name: "Milk & Dairy", image: AppImages.categories.milk, urlCard: "/" },
  { name: "Drinks", image: AppImages.categories.juice, urlCard: "/" },
  { name: "Breakfast", image: AppImages.categories.bagelMix, urlCard: "/" },
];

const SearchPage: React.FC = () => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const products: Product[] = await getProducts();
        setData(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const scrollLeft = () =>
    sliderRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  const scrollRight = () =>
    sliderRef.current?.scrollBy({ left: 300, behavior: "smooth" });

  return (
    <>
      <div className="bg-gray-50">
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
          {/* CTA Section */}
          <div className="py-10 lg:py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:gap-6 gap-4">
            {ctaData.map((cta, index) => (
              <div
                key={index}
                className="mx-auto w-full relative rounded-lg overflow-hidden transition-transform duration-300 transform hover:shadow-xl"
              >
                <CTASection {...cta} ImgWidth={550} ImgHeight={234} />
              </div>
            ))}
          </div>

          {/* Categories Slider */}
          <div className="relative mt-2">
            {/* Left Arrow */}
            <button
              onClick={scrollLeft}
              aria-label="Scroll Left"
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-green-500 text-white shadow-md rounded-full h-10 w-10 z-20 cursor-pointer hover:bg-gray-100 hover:text-green-500"
            >
              &#8592;
            </button>

            {/* Slider */}
            <div
              ref={sliderRef}
              className="categories-slider flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-10"
            >
              {categories.map((category, idx) => (
                <div key={idx} className="snap-start flex-shrink-0">
                  <CategoryCard
                    urlCard={category.urlCard}
                    name={category.name}
                    image={category.image}
                  />
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={scrollRight}
              aria-label="Scroll Right"
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-green-500 text-white shadow-md rounded-full h-10 w-10 z-20 cursor-pointer hover:bg-gray-100 hover:text-green-500"
            >
              &#8594;
            </button>
          </div>

          <ProductModalCard
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            product={selectedProduct}
          />

          <div className="flex justify-between mb-5 bg-orange-100 border border-gray-100 rounded p-3 mt-10">
            <h6 className="text-sm">
              Total <span className="font-bold">12</span> Items Found
            </h6>
          </div>

          <div className="flex pb-15">
            <div className="w-full">
              {loading ? (
                <FullPageLoader />
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                  {data.map((item) => (
                    <ProductCard
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      price={item.price}
                      stock={0} // or any default value
                      imageUrl={item.image}
                      rating={0} // default rating
                      reviews={0} // default reviews
                      onClick={() => openProductModal(item)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Slider-specific scrollbar */}
      <style jsx>{`
        .categories-slider::-webkit-scrollbar {
          height: 6px;
        }
        .categories-slider::-webkit-scrollbar-track {
          background: transparent;
        }
        .categories-slider::-webkit-scrollbar-thumb {
          background: rgba(163, 163, 163, 0.3);
          border-radius: 10px;
        }
        .categories-slider::-webkit-scrollbar-thumb:hover {
          background: rgba(107, 114, 128, 0.6);
        }
      `}</style>
    </>
  );
};

export default SearchPage;
