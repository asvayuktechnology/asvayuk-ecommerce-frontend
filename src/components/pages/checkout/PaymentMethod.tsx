import React from "react";

interface PaymentMethodProps {
  selected: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({ selected, onChange }) => {
  return (
    <div className="p-4 border rounded-md mb-4">
      <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
      <div className="flex flex-col gap-2">
        <label>
          <input
            type="radio"
            name="payment"
            value="card"
            checked={selected === "card"}
            onChange={onChange}
            className="mr-2"
          />
          Credit / Debit Card
        </label>
        <label>
          <input
            type="radio"
            name="payment"
            value="paypal"
            checked={selected === "paypal"}
            onChange={onChange}
            className="mr-2"
          />
          PayPal
        </label>
        <label>
          <input
            type="radio"
            name="payment"
            value="cod"
            checked={selected === "cod"}
            onChange={onChange}
            className="mr-2"
          />
          Cash on Delivery
        </label>
      </div>
    </div>
  );
};

export default PaymentMethod;
