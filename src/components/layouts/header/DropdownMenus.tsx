"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa6";

interface Category {
  title: string;
  icon: string; // URL or path to the image
}

interface DropdownMenusProps {
  categories: Category[];
  menuTitle: string;
}

const DropdownMenus: React.FC<DropdownMenusProps> = ({ categories, menuTitle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="py-2 text-sm font-medium hover:text-emerald-600 rounded-lg inline-flex items-center cursor-pointer text-black"
      >
        {menuTitle}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute z-10 -ml-1 mt-1 transform w-screen max-w-xs c-h-65vh bg-white">
          <div className="rounded-md shadow-lg ring-1 ring-opacity-5 overflow-y-scroll flex-grow scrollbar-hide w-full h-full">
            <div className="flex flex-col w-full h-full bg-white cursor-pointer scrollbar-hide">
              <div className="w-full max-h-full">
                <div className="relative grid gap-2 p-6">
                  {categories.map((category, index) => (
                    <Link
                      key={index}
                      role="button"
                      href={`/${category.title.toLowerCase().replace(/[\s&]+/g, "-")}`}
                      className="p-2 flex items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600"
                    >
                      <Image
                        alt={category.title}
                        src={category.icon}
                        width={18}
                        height={18}
                        className="object-contain"
                      />
                      <div className="inline-flex items-center justify-between ml-3 text-sm font-medium w-full text-black">
                        {category.title}
                        <span className="transition duration-700 ease-in-out inline-flex items-end text-gray-400">
                          <FaAngleRight />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenus;