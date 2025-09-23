"use client";

import CustomInput from "@/components/ui/common/inputs/CustomInput";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaTicketAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { CartItem } from "@/store/slice/cartSlice";
import { RootState } from "@/store/store";

export default function CheckoutOrderSummary() {
  const cartItems = useSelector(
    (state: RootState) => state.cart.items
  ) as CartItem[];
  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [coupon, setCoupon] = useState("");

  // Calculate subtotal whenever cart items change
  useEffect(() => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setSubtotal(total);
  }, [cartItems]);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    // Example: apply 5% discount if coupon is "SAVE5"
    if (coupon.trim().toUpperCase() === "SAVE5") {
      setDiscount(subtotal * 0.05);
    } else {
      setDiscount(0);
    }
  };

  const totalCost = subtotal - discount;

  return (
    <>
      <div className="sticky top-44 bg-white rounded-lg">
        <div className="p-8">
          <h2 className="font-semibold text-lg">Order Summary</h2>

          <div className="mt-3 text-sm text-slate-500 dark:text-gray-400 divide-y divide-[#E2E8F0]">
            <div className="flex justify-between py-3">
              <span className="font-semibold text-gray-600">Subtotal</span>
              <span className="font-semibold text-gray-900">
                {subtotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between py-3">
              <span className="font-semibold text-gray-600">Discount</span>
              <span className="font-semibold text-orange-400">
                {discount.toFixed(2)}
              </span>
            </div>

            {/* Coupon Input */}
            <form
              className="w-full mt-8 flex gap-2"
              onSubmit={handleApplyCoupon}
            >
              <CustomInput
                placeholder="Coupon Code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
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
        </div>

        {/* Total */}
        <div className="bg-neutral-100 p-8 rounded-b-md">
          <p className="flex justify-between font-semibold text-slate-900">
            <span>
              <span className="text-sm">TOTAL COST</span>
              <span className="block text-sm text-slate-500 font-normal">
                Shipping and taxes calculated at checkout.
              </span>
            </span>
            <span className="font-bold text-gray-900">
              {totalCost.toFixed(2)}
            </span>
          </p>

          {/* Actions */}
          <div className="flex space-x-3 items-center mt-8">
            <Link
              href="/product"
              className="relative h-auto inline-flex items-center justify-center rounded-md transition-colors text-xs sm:text-base font-medium py-2 px-3 bg-white text-slate-700 hover:bg-gray-100 flex-1 border border-slate-200"
            >
              Continue Shopping
            </Link>
            <Link
              href="/checkout"
              className="relative h-auto inline-flex items-center justify-center rounded-md w-full transition-colors text-xs sm:text-base font-medium py-2 px-3 bg-emerald-500 hover:bg-emerald-600 border border-emerald-500 text-white flex-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
