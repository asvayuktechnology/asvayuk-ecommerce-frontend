import Image from "next/image";
import { MouseEventHandler } from "react";

interface ProductCardProps {
  title: string;
  price: number | string; // in case price comes as string from API
  stock: number | string; // allow both since APIs sometimes return string
  imageUrl: string;
  onClick?: MouseEventHandler<HTMLDivElement>; // optional click handler
}

export default function ProductCard({
  title,
  price,
  stock,
  imageUrl,
  onClick,
}: ProductCardProps) {
  return (
    <div
      className="group box-border overflow-hidden flex rounded-md pe-0 flex-col items-center bg-white relative"
      onClick={onClick}
    >
      <div className="w-full flex justify-between">
        <span className="bg-gray-100 absolute z-10 text-green-500 rounded-full text-xs px-2 py-0 font-medium">
          Stock:
          <span className="text-orange-700 pl-1 font-bold">{stock}</span>
        </span>
      </div>

      <div className="relative flex justify-center cursor-pointer pt-2 w-full h-44">
        <Image
          alt={title}
          src={imageUrl}
          className="object-contain transition duration-150 ease-linear transform group-hover:scale-105 p-2 w-25"
          sizes="100%"
          width={300}
          height={300}
        />
      </div>

      <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
        <h2 className="text-heading truncate text-sm font-medium text-gray-600">
          <span className="line-clamp-2 text-wrap">{title}</span>
        </h2>
        <div className="flex justify-between items-center text-sm lg:text-xl">
          <span className="text-lg font-semibold text-gray-800">
            ${price}
          </span>
        </div>
      </div>
    </div>
  );
}
