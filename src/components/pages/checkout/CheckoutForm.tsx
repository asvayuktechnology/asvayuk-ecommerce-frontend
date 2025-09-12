'use client'
import React, { useState } from "react";
import ShippingForm from "./ShippingForm";
import BillingForm from "./BillingForm";
import PaymentMethod from "./PaymentMethod";
import OrderSummary from "./OrderSummary";

const CheckoutForm = () => {
  const [shipping, setShipping] = useState({
    fullName: "",
    address: "",
    city: "",
    zip: "",
    country: "",
  });

  const [billing, setBilling] = useState({
    email: "",
    phone: "",
  });

  const [payment, setPayment] = useState("card");

  const items = [
    { name: "T-shirt", price: 25, quantity: 2 },
    { name: "Shoes", price: 50, quantity: 1 },
  ];

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShipping({ ...shipping, [e.target.name]: e.target.value });
  };

  const handleBillingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBilling({ ...billing, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayment(e.target.value);
  };

  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
  };

  return (
    <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-6">
      <div>
        <ShippingForm data={shipping} onChange={handleShippingChange} />
        <BillingForm data={billing} onChange={handleBillingChange} />
        <PaymentMethod selected={payment} onChange={handlePaymentChange} />
      </div>
      <div>
        <OrderSummary items={items} />
        <button
          onClick={handlePlaceOrder}
          className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutForm;
