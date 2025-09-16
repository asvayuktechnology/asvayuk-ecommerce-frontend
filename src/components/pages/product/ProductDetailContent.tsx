"use client";
import QuantityCounter from "@/components/products/quantityCounter/QuantityCounter";
import { Product } from "@/services/productService";
import { addToCart } from "@/store/slice/cartSlice";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";

interface ProductDetailContentProps {
  product: Product;
}

export default function ProductDetailContent({
  product,
}: ProductDetailContentProps) {
  const {
    title = "Default Product",
    stock = 10,
    rating = { rate: 0, count: 0 },
    reviews = 0,
    price = 99.99,
    category = "Default Category",
    tags = ["default"],
  } = product;

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    setQuantity(1);
  };

  const numericRating = Number(rating.rate) || 0;
  const numericPrice = Number(price) || 0;

  return (
    <>
      <div className="mb-2 md:mb-2.5 block -mt-1.5">
        <div className="relative">
          <span className="inline-flex items-center justify-center text-xs text-gray-400">
            In stock:
            <span className="text-green-600 pl-1 font-normal">{stock}</span>
          </span>
        </div>

        <h1 className="leading-7 text-lg md:text-xl lg:text-2xl mb-1 font-semibold text-gray-800">
          {title}
        </h1>

        <div className="flex gap-0.5 items-center mt-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(numericRating)
                  ? "text-yellow-400"
                  : "text-gray-300"
              } fill-current`}
              viewBox="0 0 24 24"
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 
                                18.18 21.02 12 17.77 5.82 21.02 
                                7 14.14 2 9.27 8.91 8.26 12 2"
              />
            </svg>
          ))}
          <span className="text-xs ml-1 text-gray-400">
            <span className="font-medium">{numericRating.toFixed(1)}</span> (
            {reviews} reviews)
          </span>
        </div>
      </div>

      <div className="flex items-center mb-8">
        <div className="product-price font-bold">
          <span className="inline-block text-xl">
            ${numericPrice.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="flex items-center mt-4">
        <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 w-full">
          <div>
            <QuantityCounter quantity={quantity} setQuantity={setQuantity} />
          </div>
          <button
            onClick={handleAddToCart}
            className="gap-2 whitespace-nowrap bg-teal-500 text-white hover:bg-teal-600 
                       text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 
                       font-semibold text-center justify-center rounded-md px-4 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 w-full h-11"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm font-semibold text-gray-700">
          Category:
          <Link
            href={`/search?category=${category}`}
            className="ml-2 hover:text-teal-600"
          >
            {category}
          </Link>
        </p>
        <div className="flex mt-2 gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 px-2 py-1 text-xs text-gray-500 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center text-sm text-gray-500 mt-3">
        <span>📞 Call Us for Order</span>
        <a href="tel:+099949343" className="font-bold text-emerald-500 ml-1">
          +099949343
        </a>
      </div>

      <div className="mt-6 border-t border-gray-200 pt-6">
        <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
        <ul className="mt-4 space-y-2 text-sm text-gray-500">
          <li>🚚 Free shipping over €100</li>
          <li>🏠 Home Delivery within 1 Hour</li>
          <li>💵 Cash on Delivery Available</li>
          <li>↩️ 7 Days money back guarantee</li>
          <li>⚠️ Warranty not available</li>
          <li>🌿 100% organic products</li>
          <li>📍 Delivery from Boho One, Middlesbrough</li>
        </ul>
      </div>

      <div className="mt-6 border-t border-gray-200 pt-6">
        <h3 className="text-sm font-medium text-gray-900">Share on social</h3>
        <p className="text-sm text-gray-500">
          Share this product to get more traffic
        </p>
        <div className="flex space-x-4 mt-3 text-gray-500">
          <a href="#" className="hover:text-blue-600">
            Facebook
          </a>
          <a href="#" className="hover:text-pink-500">
            Instagram
          </a>
          <a href="#" className="hover:text-black">
            X
          </a>
        </div>
      </div>
    </>
  );
}
