import React from "react";

interface BillingFormProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  data: {
    email: string;
    phone: string;
  };
}

const BillingForm: React.FC<BillingFormProps> = ({ onChange, data }) => {
  return (
    <div className="p-4 border rounded-md mb-4">
      <h2 className="text-lg font-semibold mb-4">Billing Information</h2>
      <div className="grid gap-4">
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={data.email}
          onChange={onChange}
          className="border p-2 rounded w-full"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={data.phone}
          onChange={onChange}
          className="border p-2 rounded w-full"
        />
      </div>
    </div>
  );
};

export default BillingForm;
