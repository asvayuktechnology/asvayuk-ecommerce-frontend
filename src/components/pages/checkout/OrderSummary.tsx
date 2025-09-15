"use client";

import CustomInput from "@/components/ui/common/inputs/CustomInput";
import QuantityCounter from "@/components/products/quantityCounter/QuantityCounter";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTicketAlt } from "react-icons/fa";
import { RootState } from "@reduxjs/toolkit/query";
import { CartItem, removeFromCart } from "@/store/slice/cartSlice";

export default function OrderSummary() {
  const dispatch = useDispatch();
  const cartItems = useSelector(
    (state: RootState) => state.cart.items
  ) as CartItem[];

  const handleRemove = (id: number | string) => {
    dispatch(removeFromCart(id));
  };

  const cartSubtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shippingCost = cartItems.length > 0 ? 20 : 0;
  const discount = 0; // You can extend with coupon logic
  const totalCost = cartSubtotal + shippingCost - discount;

  return (
    <>
      <div className="border p-5 lg:px-8 lg:py-8 rounded-lg bg-white order-1 sm:order-2 border-[#E2E8F0]">
        <h2 className="font-semibold  text-lg pb-4">Order Summary</h2>

        {/* Cart Items */}
        <div className="overflow-y-auto flex-grow max-h-64 bg-gray-50 rounded-md">
          {cartItems.length === 0 ? (
            <div className="text-center py-10">
              <span className="flex justify-center my-auto text-gray-500 font-semibold text-4xl">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M454.65 169.4A31.82 31.82 0 0 0 432 160h-64v-16a112 112 0 0 0-224 0v16H80a32 32 0 0 0-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0 0 50.48-20.55 69.48 69.48 0 0 0 21.52-50.2V192a31.75 31.75 0 0 0-9.35-22.6zM176 144a80 80 0 0 1 160 0v16H176zm192 96a112 112 0 0 1-224 0v-16a16 16 0 0 1 32 0v16a80 80 0 0 0 160 0v-16a16 16 0 0 1 32 0z"></path>
                </svg>
              </span>
              <h2 className="font-medium text-sm pt-2 text-gray-600">
                No Item Added Yet!
              </h2>
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
                        className="truncate max-w-[150px] text-sm font-medium text-gray-700 block"
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

        {/* Coupon Input */}
        <div className="flex items-center mt-4 py-4 text-sm w-full font-semibold">
          <form className="w-full flex gap-2">
            <CustomInput
              placeholder="Coupon Code"
              className="flex-grow h-10"
              icon={<FaTicketAlt className="text-gray-400" />}
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 w-32 h-10 px-4 py-2 text-white bg-teal-500 hover:bg-teal-600 rounded-sm text-sm font-medium"
            >
              Apply
            </button>
          </form>
        </div>

        {/* Cost Breakdown */}
        <div className="space-y-2 mt-4">
          <div className="flex items-center justify-between text-sm font-semibold text-gray-500">
            Subtotal{" "}
            <span className="text-gray-800 font-bold">
              ${cartSubtotal.toFixed(2)}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm font-semibold text-gray-500">
            Shipping Cost{" "}
            <span className="text-gray-800 font-bold">
              ${shippingCost.toFixed(2)}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm font-semibold text-orange-400">
            Discount <span className="font-bold">${discount.toFixed(2)}</span>
          </div>
        </div>

        {/* Total */}
        <div className="border-t mt-4 pt-5 border-[#E2E8F0]">
          <div className="flex items-center justify-between text-sm uppercase font-bold">
            TOTAL COST{" "}
            <span className="text-lg font-extrabold">
              ${totalCost.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
