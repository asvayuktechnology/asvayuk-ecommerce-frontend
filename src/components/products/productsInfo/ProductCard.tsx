"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";

interface ProductCardProps {
  id: string | number;
  title: string;
  price: number | string;
  stock: number | string;
  imageUrl: string;
  rating?: number;
  reviews?: number;
  // onClick?: MouseEventHandler<HTMLDivElement>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // <-- change here;
}

export default function ProductCard({
  id,
  title,
  price,
  stock,
  imageUrl,
  rating = 0,
  reviews = 0,
  onClick,
}: ProductCardProps) {
  const filledStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - filledStars - (halfStar ? 1 : 0);

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border bg-white border-gray-100 transition-all duration-150 ease-in-out hover:border-emerald-500 cursor-pointer">
      {/* Stock Badge */}
      <span className="absolute top-2 left-2 z-10 bg-gray-100 text-green-500 rounded-full text-xs px-2 py-0 font-medium">
        Stock: <span className="text-orange-700 pl-1 font-bold">{stock}</span>
      </span>

      {/* Product Image */}
      <div className="relative w-full min-h-48 lg:h-48 xl:h-52">
        <div className="relative w-full h-full overflow-hidden bg-gray-100 flex justify-center items-center">
          <Link href={`/product/${id}`}>
            <Image
              alt={title}
              src={imageUrl}
              className="object-contain transition duration-150 ease-linear transform group-hover:scale-105 p-2 w-25"
              sizes="100%"
              width={400}
              height={400}
            />
          </Link>
          {/* Quick View Button */}
          <div className="absolute lg:bottom-0 bottom-4 lg:group-hover:bottom-4 inset-x-1 opacity-100 flex justify-center lg:opacity-0 lg:invisible group-hover:opacity-100 group-hover:visible transition-all">
            <button
              className="flex items-center gap-1 text-xs bg-white text-gray-700 rounded-full px-3 py-1 shadow hover:text-emerald-500 hover:bg-gray-100 cursor-pointer"
              onClick={onClick}
            >
              <FiEye /> Quick View
            </button>
          </div>

          {/* Add to Cart Button */}
          <Link href={`/product/${id}`}>
            <div className="absolute bottom-3 right-3 z-10 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-lg transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-emerald-500">
              <button className="w-11 h-11 md:flex items-center justify-center rounded-full cursor-pointer border-2 bg-emerald-700 text-white border-gray-10 font-medium transition-colors duration-300 hover:border-accent hover:bg-emerald-800 hover:border-emerald-800 hover:text-gray-50 focus:border-emerald-500 focus:bg-emerald-500 focus:text-gray-50 hidden ">
                <FaPlus className="text-[1rem]" />
              </button>
            </div>
          </Link>
        </div>
      </div>

      <Link href={`/product/${id}`}>
        <div className="flex flex-1 flex-col space-y-2 px-4 pt-2 pb-4">
          {/* Product Info */}
          <div className="relative mb-1">
            <h2 className="text-sm font-medium text-gray-800 line-clamp-1 hover:text-emerald-500">
              {title}
            </h2>
          </div>
          {/* Rating */}
          <div className="flex items-center mt-1 text-xs text-gray-400">
            <div className="flex items-center gap-0.5">
              {[...Array(filledStars)].map((_, i) => (
                <svg
                  key={i}
                  className="w-3 h-3 text-yellow-400 fill-current"
                  viewBox="0 0 24 24"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
              {halfStar && (
                <svg
                  className="w-3 h-3 text-yellow-400 fill-current"
                  viewBox="0 0 24 24"
                >
                  <defs>
                    <linearGradient id="half">
                      <stop offset="50%" stopColor="currentColor" />
                      <stop offset="50%" stopColor="gray" />
                    </linearGradient>
                  </defs>
                  <polygon
                    fill="url(#half)"
                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                  />
                </svg>
              )}
              {[...Array(emptyStars)].map((_, i) => (
                <svg
                  key={i}
                  className="w-3 h-3 text-gray-300 fill-current"
                  viewBox="0 0 24 24"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <span className="ml-1 text-gray-400">
              {rating} ({reviews})
            </span>
          </div>

          {/* Price */}
          <div className="product-price font-bold">
            <div className="inline-block text-base text-gray-900">${price}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
