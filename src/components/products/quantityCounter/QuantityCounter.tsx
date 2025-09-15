"use client";
import React, { useState } from "react";

interface QuantityCounterProps {
  quantity?: number;
  setQuantity?: React.Dispatch<React.SetStateAction<number>>;
  className?: string;        // wrapper
  decreaseBtnClass?: string; // left button
  quantityClass?: string;    // quantity text
  increaseBtnClass?: string; // right button
}

const QuantityCounter: React.FC<QuantityCounterProps> = ({
  className = "",
  decreaseBtnClass = "",
  quantityClass = "",
  increaseBtnClass = "",
}) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div
      className={`group flex items-center justify-between rounded-md overflow-hidden flex-shrink-0 border h-12 border-gray-300 ${className}`}
    >
      {/* Decrease Button */}
      <button
        className={`flex items-center justify-center h-full flex-shrink-0 transition ease-in-out duration-300 focus:outline-none w-12 text-heading border-e border-gray-300 hover:text-gray-500 text-black cursor-pointer ${decreaseBtnClass}`}
        aria-label="Decrease quantity"
        onClick={() => setQuantity(Math.max(1, quantity - 1))}
      >
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>

      {/* Quantity Display */}
      <p
        className={`font-semibold flex items-center justify-center transition-colors duration-250 ease-in-out flex-shrink-0 text-base text-heading w-10 md:w-20 xl:w-24 text-black cursor-text ${quantityClass}`}
      >
        {quantity}
      </p>

      {/* Increase Button */}
      <button
        onClick={() => setQuantity(quantity + 1)}
        className={`flex items-center justify-center h-full flex-shrink-0 transition ease-in-out duration-300 focus:outline-none w-10 md:w-12 text-heading border-s border-gray-300 hover:text-gray-500 text-black cursor-pointer ${increaseBtnClass}`}
        aria-label="Increase quantity"
      >
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>
    </div>
  );
};

export default QuantityCounter;