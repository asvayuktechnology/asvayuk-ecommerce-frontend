import React from "react";

interface ShippingFormProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  data: {
    fullName: string;
    address: string;
    city: string;
    zip: string;
    country: string;
  };
}

const ShippingForm: React.FC<ShippingFormProps> = ({ onChange, data }) => {
  return (
    <div className="p-4 border rounded-md mb-4">
      <h2 className="text-lg font-semibold mb-4">Shipping Information</h2>
      <div className="grid gap-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={data.fullName}
          onChange={onChange}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={data.address}
          onChange={onChange}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={data.city}
          onChange={onChange}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          name="zip"
          placeholder="ZIP Code"
          value={data.zip}
          onChange={onChange}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={data.country}
          onChange={onChange}
          className="border p-2 rounded w-full"
        />
      </div>
    </div>
  );
};

export default ShippingForm;
