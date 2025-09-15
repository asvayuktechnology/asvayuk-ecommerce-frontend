"use client";

import { Drawer, DrawerHeader, DrawerItems } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "@/store/slice/cartSlice";
import QuantityCounter from "@/components/products/quantityCounter/QuantityCounter";
import Image from "next/image";
import Link from "next/link";
import { RootState } from "@/store"; // adjust the path if needed
import noresult from "../../../../public/images/no-result.svg";

interface CartItem {
  id: number | string;
  title: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Cart({ isOpen, onClose }: CartProps) {
  const dispatch = useDispatch();
  const cartItems = useSelector(
    (state: RootState) => state.cart.items
  ) as CartItem[];

  const cartTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleRemove = (id: number | string) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Drawer
      open={isOpen}
      onClose={onClose}
      position="right"
      className="lg:w-[450px] md:w-[350px] w-full px-0 py-0 bg-white dark:bg-white"
    >
      <div className="w-full flex justify-between items-center relative px-5 py-4 border-b bg-indigo-50 border-gray-100">
        <h2 className="font-semibold text-lg m-0 text-heading flex items-center">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"></path>
          </svg>
          Shopping Cart
        </h2>
        <button
          onClick={onClose}
          className="inline-flex items-center justify-center text-gray-500 p-2 text-base hover:text-red-400 transition-opacity focus:outline-none cursor-pointer"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path>
          </svg>
          <span className="ml-1 text-sm">Close</span>
        </button>
      </div>

      {/* Items */}
      <DrawerItems>
        <div className="flex flex-col justify-between h-[92vh] bg-white dark:bg-white">
          <div className="flex-grow px-5 py-6 overflow-y-auto">
            {cartItems.length === 0 ? (
              <div className="flex flex-col justify-center items-center text-center mt-10">
                <Image
                  src={noresult}
                  width={250}
                  height={250}
                  alt="no items"
                  className="rounded-md object-cover"
                />
                <h3 className="font-semibold text-gray-700 text-lg pt-5">
                  Your cart is empty
                </h3>
                <p className="text-sm text-gray-500 pt-2 px-8">
                  No items added in your cart. Please add some products.
                </p>
              </div>
            ) : (
              <ul className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="group flex items-center justify-start py-3 px-4 border-b border-gray-100 hover:bg-gray-50 transition-all"
                  >
                    {/* Image */}
                    <div className="relative flex-shrink-0 w-12 h-12 rounded-full border border-gray-100 overflow-hidden shadow-sm mr-4 cursor-pointer flex justify-center">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={40}
                        height={40}
                        className="object-contain p-2 transition-transform duration-150 ease-linear group-hover:scale-105"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex flex-col w-full overflow-hidden">
                      <Link
                        href={`/product/${item.id}`}
                        className="truncate text-sm font-medium text-gray-700"
                      >
                        {item.title}
                      </Link>
                      <span className="text-xs text-gray-400 mb-1">
                        Item Price ${item.price}
                      </span>

                      <div className="flex items-center justify-between">
                        <div className="font-bold text-sm md:text-base">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                        <QuantityCounter />
                        <button
                          onClick={() => handleRemove(item.id)}
                          title="Remove"
                          className="text-red-400 hover:text-red-600 text-lg"
                        >
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
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1="10" y1="11" x2="10" y2="17" />
                            <line x1="14" y1="11" x2="14" y2="17" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          <div className="px-5 py-5 bg-neutral-50">
            <p className="flex justify-between font-semibold text-slate-900">
              <span>
                Subtotal
                <span className="block text-sm text-slate-500 font-normal">
                  Shipping and taxes calculated at checkout.
                </span>
              </span>
              <span>${cartTotal.toFixed(2)}</span>
            </p>
            <div className="flex space-x-3 mt-5">
              <Link
                href="/checkout-cart"
                className="flex-1 inline-flex items-center justify-center py-2 px-3 text-sm sm:text-base font-medium rounded-md border border-slate-200 bg-white text-slate-700 hover:bg-gray-100"
              >
                View Cart
              </Link>
              <Link
                href="/checkout"
                className="flex-1 inline-flex items-center justify-center py-2 px-3 text-sm sm:text-base font-medium rounded-md border border-emerald-500 bg-emerald-500 text-white hover:bg-emerald-600"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </DrawerItems>
    </Drawer>
  );
}
