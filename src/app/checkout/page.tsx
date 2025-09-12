import CheckoutForm from "@/components/pages/checkout/CheckoutForm";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Checkout</h1>
      <CheckoutForm />
    </div>
  );
};

export default page;
