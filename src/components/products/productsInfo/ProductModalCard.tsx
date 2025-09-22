"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/slice/cartSlice";
import QuantityCounter from "../quantityCounter/QuantityCounter";

interface Product {
  id: number | string;
  title: string;
  price: number;
  image: string;
  description?: string;
  category?: string;
  rating?: {
    count?: number;
    rate?: number;
  };
}

interface ProductModalCardProps {
  isOpen: boolean;
  onClose: () => void;
  product?: Product | null;
}

const ProductModalCard: React.FC<ProductModalCardProps> = ({
  isOpen,
  onClose,
  product,
}) => {
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useDispatch();

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    setQuantity(1);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative bg-white rounded-xl shadow-lg w-full max-w-4xl p-5 lg:p-8 overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-2 py-1 px-3 bg-red-500 hover:bg-red-600 text-end rounded-md cursor-pointer z-10 text-white text-[14px] font-bold"
        >
          ✕
        </button>

        {/* Content */}
        <div className="lg:flex flex-col lg:flex-row md:flex-row w-full overflow-hidden">
          {/* Left - Product Image */}
          <div className="w-full lg:w-[40%] flex items-center justify-center">
            <Image
              src={product.image}
              alt={product.title}
              width={250}
              height={250}
              className="object-contain"
            />
          </div>

          {/* Right - Product Info */}
          <div className="w-full lg:w-[60%] pt-6 lg:pt-0 lg:pl-7 xl:pl-10">
            {/* Stock + Title */}
            <div className="mb-2">
              <span className="text-xs text-gray-400">
                In stock:
                <span className="text-green-600 pl-1">
                  {product.rating?.count || 0}
                </span>
              </span>
              <h2 className="text-lg md:text-xl lg:text-xl font-medium mt-1 hover:text-black">
                {product.title}
              </h2>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-2">
              <span className="text-yellow-500 text-sm">★</span>
              <span className="text-sm text-gray-500">
                {product.rating?.rate || "0.0"} ({product.rating?.count || 0}{" "}
                reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-sm leading-6 text-gray-500">
              {product.description}
            </p>

            {/* Price */}
            <div className="flex items-center my-4">
              <span className="text-xl font-bold text-gray-900">
                ${product.price}
              </span>
              <del className="ml-2 text-gray-400 text-sm">
                ${(product.price * 1.1).toFixed(2)}
              </del>
            </div>

            {/* Quantity + Actions */}
            <div className="grid grid-cols-2 gap-2 mt-4">
              <QuantityCounter quantity={quantity} setQuantity={setQuantity} />
              <button
                onClick={handleAddToCart}
                className="col-span-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded-md cursor-pointer"
              >
                Add to Cart
              </button>
              <Link
                href={`/product/${product.id}`}
                className="col-span-3 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold py-3 px-4 rounded-md text-center"
              >
                View Details
              </Link>
            </div>

            {/* Category + Tags */}
            <div className="mt-4">
              <span className="text-sm font-semibold">
                Category:
                <Link
                  href={`/search?category=${product.category}`}
                  className="ml-2 text-gray-600 hover:text-teal-600"
                >
                  {product.category}
                </Link>
              </span>
              <div className="flex flex-wrap mt-2 gap-2">
                <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded">
                  {product.category}
                </span>
                <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded">
                  Accessories
                </span>
              </div>
            </div>

            {/* Contact */}
            <div className="flex items-center text-sm text-gray-500 border-t border-gray-100 pt-4 mt-4">
              <span>
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1 text-gray-500 text-md"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                </svg>
              </span>{" "}
              Call Us for Order:
              <a
                href="tel:+099949343"
                className="ml-1 font-bold text-emerald-500"
              >
                +099949343
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModalCard;
