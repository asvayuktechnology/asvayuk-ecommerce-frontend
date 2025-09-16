"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getProducts } from "@/services/productService";
import ProductGallery from "./ProductGallery";
import ProductDetailContent from "./ProductDetailContent";
import ProductTabs from "./ProductTabs";
import noresult from "../../../../public/images/no-result.svg";
import FullPageLoader from "@/components/ui/common/loader/FullPageLoader";
import ProductCard from "@/components/products/productsInfo/ProductCard";
import ProductModalCard from "@/components/products/productsInfo/ProductModalCard";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description?: string;
  category: string;
  tags?: string[];
  stock?: number;
  rating: {
    rate: number;
    count: number;
  };
}

const defaultProduct: Product = {
  id: 0,
  title: "Default Product",
  price: 99.99,
  image: noresult,
  description: "This is default product description",
  category: "Default Category",
  tags: ["default"],
  stock: 10,
  rating: { rate: 0, count: 0 },
};

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>(defaultProduct);
  const [images, setImages] = useState<string[]>([defaultProduct.image]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Fetch related products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products: Product[] = await getProducts();
        // Filter out current product
        const filtered = products
          .filter((p) => String(p.id) !== id)
          .slice(0, 6);
        setData(filtered);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [id]);

  // Fetch single product
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const products = await getProducts();
        const found = products.find((item) => String(item.id) === id);
        if (found) {
          setProduct({ ...defaultProduct, ...found });
          setImages([found.image || defaultProduct.image]);
        }
      } catch (err) {
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  if (loading)
    return (
      <p className="p-10 text-center">
        <FullPageLoader />
      </p>
    );

  return (
    <section className="bg-gray-50 dark:bg-zinc-900 z-10">
      <div className="bg-white px-0">
        <div className="container mx-auto px-3 sm:px-10 max-w-screen-2xl">
          {/* Breadcrumb */}
          <div className="flex items-center py-6 lg:py-8">
            <ol className="flex items-center w-full overflow-hidden ">
              <li className="text-sm pr-1 font-semibold">
                <Link href="/">Home</Link>
              </li>
              <li className="px-2">›</li>
              <li className="text-sm pr-1 font-semibold">
                <Link href={`/search?category=${product.category}`}>
                  {product.category}
                </Link>
              </li>
              <li className="px-2">›</li>
              <li className="text-sm px-1">{product.title}</li>
            </ol>
          </div>

          {/* Product Detail Layout */}
          <div className="relative lg:grid lg:grid-cols-7 lg:gap-x-6 lg:gap-y-8">
            {/* Gallery */}
            <div className="lg:col-span-3 lg:row-end-1">
              <ProductGallery images={images} />
            </div>

            {/* Content */}
            <div className="lg:sticky top-44 mt-6 lg:mt-0 self-start z-10 mx-auto lg:col-span-4 lg:row-span-2 lg:row-end-2 lg:w-[80%] bg-white w-[100%]">
              <ProductDetailContent product={product} />
            </div>

            {/* Tabs */}
            <div className="mx-auto w-full lg:col-span-3 lg:my-0 my-8 lg:max-w-none">
              <ProductTabs
                description={product.description || defaultProduct.description}
                reviewsCount={product.rating?.count || 0}
              />
            </div>
          </div>

          <div className="pt-10 lg:pt-20 lg:pb-10">
            <h3 className="text-xl font-semibold tracking-tight text-pretty sm:text-3xl mb-6">
              Related Products
            </h3>
            <div className="flex">
              <div className="w-full">
                {loading ? (
                  <FullPageLoader />
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                    {data.map((item) => (
                      <ProductCard
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        stock={item.rating.count}
                        imageUrl={item.image}
                        onClick={() => openProductModal(item)}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductModalCard
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
      />
    </section>
  );
}
