"use client";
import QuantityCounter from "@/components/products/quantityCounter/QuantityCounter";
import { Product } from "@/services/productService";
import { addToCart } from "@/store/slice/cartSlice";
import Link from "next/link";
import { useState, useMemo } from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
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
    tags = ["Default", "Category"],
  } = product;

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("Small");
  const [selectedColor, setSelectedColor] = useState("Green");

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    setQuantity(1);
  };

  // Memoized helpers
  const numericRating = useMemo(() => Number(rating.rate) || 0, [rating]);
  const numericPrice = useMemo(() => Number(price) || 0, [price]);

  // Static data
  const sizes = useMemo(() => ["Small", "Medium", "Large"], []);
  const colors = useMemo(() => ["Green", "Blue"], []);
  const socialLinks = useMemo(
    () => [
      {
        href: "#",
        label: "Facebook",
        icon: <FaFacebookF className="size-5" />,
      },
      {
        href: "#",
        label: "Instagram",
        icon: <FaInstagram className="size-6" />,
      },
      { href: "#", label: "X", icon: <FaXTwitter className="size-5" /> },
    ],
    []
  );
  const highlights = useMemo(
    () => [
      {
        icon: (
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="1" y="3" width="15" height="13"></rect>
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
            <circle cx="5.5" cy="18.5" r="2.5"></circle>
            <circle cx="18.5" cy="18.5" r="2.5"></circle>
          </svg>
        ),
        text: "Free shipping applies to all orders over shipping €100",
      },
      {
        icon: (
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 12h18M3 12l4-4m-4 4l4 4"></path>
          </svg>
        ),
        text: "Home Delivery within 1 Hour",
      },
      {
        icon: (
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 1v22M5 5h14v14H5z"></path>
          </svg>
        ),
        text: "Cash on Delivery Available",
      },
      {
        icon: (
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 12H5m7-7v14"></path>
          </svg>
        ),
        text: "7 Days Money Back Guarantee",
      },
      {
        icon: (
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 6l-12 12"></path>
          </svg>
        ),
        text: "Warranty Not Available",
      },
      {
        icon: (
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2a10 10 0 0 0-7 17l7 3 7-3a10 10 0 0 0-7-17z"></path>
          </svg>
        ),
        text: "100% Organic Products",
      },
      {
        icon: (
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        ),
        text: "Delivery from Boho One, Middlesbrough",
      },
    ],
    []
  );

  return (
    <>
      {/* Stock & Title */}
      <div className="mb-2 md:mb-2.5 block -mt-1.5">
        <span className="inline-flex items-center justify-center text-xs text-gray-400">
          In stock:{" "}
          <span className="text-green-600 pl-1 font-normal">{stock}</span>
        </span>

        <h1 className="leading-7 text-lg md:text-xl lg:text-2xl mb-1 font-semibold text-gray-800">
          {title}
        </h1>

        {/* Rating */}
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

      {/* Price */}
      <div className="flex items-center mb-8">
        <div className="product-price font-bold">
          <span className="inline-block text-xl">
            ${numericPrice.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Size Selector */}
      <span className="mb-2 block">
        <h4 className="text-sm py-1 text-gray-800 font-medium">Size:</h4>
        <div className="w-full flex flex-wrap gap-2">
          {sizes.map((size) => {
            const isSelected = selectedSize === size;
            return (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-medium h-7 cursor-pointer
                ${
                  isSelected
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-white text-gray-600 hover:bg-emerald-100 hover:shadow-md hover:text-green-700 dark:bg-input/30 dark:border-input dark:hover:bg-input/50"
                }`}
              >
                {size}
              </button>
            );
          })}
        </div>
      </span>

      {/* Color Selector */}
      <span className="mb-2 block">
        <h4 className="text-sm py-1 text-gray-800 font-medium">Color:</h4>
        <div className="w-full flex flex-wrap gap-2">
          {colors.map((color) => {
            const isSelected = selectedColor === color;
            return (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-medium h-7 cursor-pointer
                ${
                  isSelected
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-white text-gray-600 hover:bg-emerald-100 hover:shadow-md hover:text-green-700 dark:bg-input/30 dark:border-input dark:hover:bg-input/50"
                }`}
              >
                {color}
              </button>
            );
          })}
        </div>
      </span>

      {/* Quantity & Add to Cart */}
      <div className="flex items-center mt-4">
        <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 w-full">
          <QuantityCounter quantity={quantity} setQuantity={setQuantity} />
          <button
            onClick={handleAddToCart}
            className="gap-2 whitespace-nowrap bg-black text-white hover:bg-gray-700 text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center rounded-md px-4 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 w-full h-12"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Category & Tags */}
      <div className="mt-4">
        <span className="font-semibold py-1 text-sm d-block">
          <span className="text-gray-700">Category:</span>
          <Link
            href={`/search?category=${category}`}
            className="text-gray-600 font-medium ml-2 hover:text-teal-600"
          >
            {category}
          </Link>
        </span>
        <div className="flex flex-row">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 px-2 py-1 mr-2 text-gray-500 rounded inline-flex items-center justify-center text-xs mt-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="flex items-center text-sm text-gray-500 mt-3">
        <span className="flex items-center">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-1 text-md"
            height="1em"
            width="1em"
          >
            <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
          </svg>
          Call Us for Order
        </span>
        <Link
          href="tel:+8745124587"
          className="font-bold text-emerald-500 ml-1"
          target="_blank"
        >
          +8745124587
        </Link>
      </div>

      {/* Highlights */}
      <div className="mt-6 border-t border-gray-200 pt-6">
        <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
        <ul className="mt-4 my-0 space-y-2">
          {highlights.map((h, i) => (
            <li key={i} className="flex items-center pt-1">
              <span className="text-lg text-gray-400 mr-3">{h.icon}</span>
              <p
                className="text-sm font-normal text-gray-500"
                style={{ fontSize: "14px", color: "#6a7282" }}
              >
                {h.text}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Social Share */}
      <div className="mt-6 border-t border-gray-200 pt-6">
        <h3 className="text-sm font-medium text-gray-900">
          Share your social network
        </h3>
        <p className="text-sm text-gray-500">
          For get lots of traffic from social network share this product
        </p>
        <ul role="list" className="mt-4 flex items-center space-x-6">
          {socialLinks.map(({ href, label, icon }) => (
            <li key={label}>
              <Link
                href={href}
                aria-label={`Share on ${label}`}
                className="flex size-6 items-center justify-center text-gray-400 hover:text-gray-500"
              >
                {icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
