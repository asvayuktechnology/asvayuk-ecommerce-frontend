"use client";
import React from "react";
import OrderSummary from "./OrderSummary";
import CheckoutForm from "./CheckoutForm";

export default function CheckoutPage() {
  return (
    <>
      <div className="bg-gray-50 z-10">
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
          <div className="py-10 lg:py-12 flex flex-col md:flex-row w-full">
            {/* Left Column: Form */}
            <div className="md:w-full lg:w-3/5 flex flex-col order-2 sm:order-1 lg:order-1">
              <div className="mt-5 md:mt-0">
                <CheckoutForm />
              </div>
            </div>

            {/* Right Column: Order Summary */}
            <div className="md:w-full lg:w-2/5 lg:ml-10 xl:ml-14 md:ml-6 flex flex-col h-full md:sticky lg:sticky top-44 md:order-2 lg:order-2">
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
