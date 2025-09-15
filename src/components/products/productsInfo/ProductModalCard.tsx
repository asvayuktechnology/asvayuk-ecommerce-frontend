"use client";

import { Modal, ModalBody } from "flowbite-react";
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

  if (!product) return null;

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    setQuantity(1);
    onClose();
    console.log("Product add Successful");
  };

  return (
    <Modal show={isOpen} onClose={onClose} dismissible size="5xl">
      <ModalBody className="p-0">
        <div className="w-full rounded-lg p-3 lg:p-12 bg-white">
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="flex-shrink-0 xl:pr-10 lg:block w-full mx-auto md:w-6/12 lg:w-5/12 xl:w-4/12 relative">
              <Image
                alt={product.title}
                width={650}
                height={650}
                src={product.image}
                className="w-full h-auto"
              />
            </div>

            {/* Details Section */}
            <div className="md:w-2/3 w-full md:pr-6">
              <div className="mb-6">
                <h1 className="leading-7 text-lg md:text-xl lg:text-2xl mb-1 font-semibold font-serif text-gray-800">
                  {product.title}
                </h1>
                <p className="uppercase font-serif font-medium text-gray-500 text-sm">
                  SKU :{" "}
                  <span className="font-bold text-gray-600">
                    {product.rating?.count}
                  </span>
                </p>
                <div className="relative">
                  <span className="bg-green-100 text-green-500 rounded-full inline-flex items-center justify-center px-2 py-0 text-xs font-semibold font-serif">
                    Stock :
                    <span className="text-orange-700 pl-1 font-bold">5472</span>
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="font-serif font-bold text-2xl text-black">
                {product.price}
                <del className="text-lg font-normal text-gray-400 ml-1">
                  {(product.price - product.price * 0.1).toFixed(2)}
                </del>
              </div>

              {/* Description */}
              <div className="text-sm leading-6 text-gray-500 md:leading-7 mt-4">
                {product.description}
                <br />
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex items-center mt-4">
                <div className="flex items-center justify-between w-full space-x-3 sm:space-x-4">
                  <QuantityCounter
                    quantity={quantity}
                    setQuantity={setQuantity}
                  />
                  <button
                    onClick={handleAddToCart}
                    className="bg-gray-800 text-white text-sm leading-4 font-semibold px-4 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 w-full h-12 rounded-md hover:bg-gray-900 cursor-pointer"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-col mt-4">
                <span className="font-serif font-semibold py-1 text-sm">
                  <span className="text-gray-800">Category:</span>
                  <Link href="/">
                    <button className="text-gray-600 font-serif font-medium underline ml-2 hover:text-teal-600">
                      {product.category}
                    </button>
                  </Link>
                </span>
                <div className="flex flex-row">
                  <span className="bg-gray-50 mr-2 text-gray-600 rounded-full px-3 py-1 text-xs font-semibold font-serif mt-2">
                    category
                  </span>
                  <span className="bg-gray-50 mr-2 text-gray-600 rounded-full px-3 py-1 text-xs font-semibold font-serif mt-2">
                    baby accessories
                  </span>
                </div>
              </div>

              {/* Contact */}
              <div className="mt-8 text-xs sm:text-sm text-gray-700 font-medium flex justify-between">
                <div>
                  Call Us To Order By Mobile Number :
                  <span className="text-emerald-700 font-semibold">
                    {" "}
                    +0044235234
                  </span>
                </div>
                <div>
                  <Link
                    href={`/product/${product.id}`}
                    className="text-orange-400 font-bold"
                  >
                    More Info
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default ProductModalCard;
