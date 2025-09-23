"use client";

import React from "react";
import CheckoutOrderSummary from "./CheckoutOrderSummary";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import QuantityCounter from "@/components/products/quantityCounter/QuantityCounter";
import { CartItem, removeFromCart } from "@/store/slice/cartSlice";
import noresult from "../../../../public/images/no-result.svg";
import { RootState } from "@/store/store";

export default function CheckoutCartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector(
    (state: RootState) => state.cart.items
  ) as CartItem[];

  const handleRemove = (id: number | string) => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      <div className="bg-gray-50 z-10">
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-10 pt-16 pb-16">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Shopping Cart */}
            <div className="w-full lg:w-[60%] xl:w-[55%] divide-y divide-[#E2E8F0]">
              <h2 className="font-bold text-xl pb-3">Shopping Cart</h2>

              <div className="w-full mt-3">
                {cartItems.length === 0 ? (
                  <div className="w-full block mt-3">
                    <div className="mt-10 flex flex-col h-full justify-center">
                      <div className="flex flex-col items-center">
                        <div className="flex-none rounded-md overflow-hidden">
                          <Image
                            src={noresult}
                            alt="no-result"
                            width={250}
                            height={380}
                            className="object-cover"
                          />
                        </div>
                        <h3 className="font-semibold text-gray-700 text-lg pt-5">
                          Your cart is empty
                        </h3>
                        <p className="px-12 text-center text-sm text-gray-500 pt-2">
                          No items added in your cart. Please add product to
                          your cart list.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    {cartItems.map((item) => (
                      <li
                        key={item.id}
                        className="group flex items-center justify-between px-4 border-b border-gray-100 hover:bg-gray-50 transition-all py-5"
                      >
                        <div className="flex">
                          <div className="relative flex-shrink-0 w-12 h-12 rounded-full border border-gray-100 overflow-hidden shadow-sm mr-4 cursor-pointer flex justify-center">
                            <Image
                              src={item.image}
                              alt={item.title}
                              width={40}
                              height={40}
                              className="object-contain p-2 transition-transform duration-150 ease-linear group-hover:scale-105"
                            />
                          </div>

                          <div>
                            <Link
                              href={`/product/${item.id}`}
                              className="truncate text-sm font-medium text-gray-700"
                            >
                              {item.title}
                            </Link>

                            <div className="text-xs text-gray-400 mb-1">
                              Item Price ${item.price}
                            </div>

                            <div className="font-bold text-sm md:text-base">
                              ${(item.price * item.quantity).toFixed(2)}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col items-end justify-end gap-4">
                          <button
                            onClick={() => handleRemove(item.id)}
                            title="Remove"
                            className="text-red-400 hover:text-red-600 text-lg cursor-pointer"
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
                          <QuantityCounter className="bg-white" />
                        </div>
                      </li>
                    ))}
                  </>
                )}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t lg:border-t-0 lg:border-l border-[#E2E8F0] my-10 lg:my-0 lg:mx-10 xl:mx-16 2xl:mx-20 flex-shrink-0"></div>

            {/* Order Summary */}
            <div className="flex-1">
              <CheckoutOrderSummary />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
