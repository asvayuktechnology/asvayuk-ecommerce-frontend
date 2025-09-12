import React from "react";

interface Item {
  name: string;
  price: number;
  quantity: number;
}

interface OrderSummaryProps {
  items: Item[];
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ items }) => {
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-4 border rounded-md mb-4">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
      <ul className="divide-y">
        {items.map((item, idx) => (
          <li key={idx} className="py-2 flex justify-between">
            <span>{item.name} x{item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-between font-bold">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default OrderSummary;
