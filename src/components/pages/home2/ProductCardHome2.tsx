import { FiHeart, FiSearch } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

type Product = {
  title: string;
  imageUrl: string;
  price: number;
  handle: string;
};

type ProductCardHome2Props = {
  product: Product;
};

export default function ProductCardHome2({ product }: ProductCardHome2Props) {
  const { title, imageUrl, price, handle } = product;

  return (
    <div className="group relative max-w-xs text-center">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <Link href={`/products/${handle}`}>
          <Image
            src={imageUrl}
            alt={title}
            width={300}
            height={400}
            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Hover Icons */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
            <FiHeart />
          </button>
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
            <FiSearch />
          </button>
        </div>

        {/* Quick Shop Button */}
        <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-2 text-sm font-medium rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow hover:bg-gray-100">
          Quick Shop
        </button>
      </div>

      {/* Title & Price */}
      <div className="mt-4">
        <h3 className="text-sm text-gray-800 font-medium">{title}</h3>
        <p className="text-sm font-semibold text-black">
          ${(price / 100).toFixed(2)}
        </p>
      </div>
    </div>
  );
}
