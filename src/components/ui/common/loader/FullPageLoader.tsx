"use client";
import React from "react";

export default function FullPageLoader() {
  return (
    <span className="fixed inset-0 bg-gray-100/60 dark:bg-black/80 flex flex-col justify-center items-center z-50">
      {/* Shopping Bag */}
      <span className="relative w-16 h-16 mb-4 inline-block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-16 h-16 text-green-500 animate-bounce-slow"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 2h12l1 6H5l1-6zM4 8h16l-1 12H5L4 8z"
          />
        </svg>
      </span>

      {/* Bouncing Coins */}
      <span className="flex space-x-2 mb-4">
        <span className="w-3 h-3 bg-green-300 rounded-full animate-bounce delay-75 inline-block"></span>
        <span className="w-3 h-3 bg-green-300 rounded-full animate-bounce delay-150 inline-block"></span>
        <span className="w-3 h-3 bg-green-300 rounded-full animate-bounce delay-300 inline-block"></span>
      </span>

      {/* Loading Text */}
      <span className="text-gray-700 dark:text-gray-200 text-[25px] inline-block font-bold">
        Wait Your Product in Coming...
      </span>
    </span>
  );
}
