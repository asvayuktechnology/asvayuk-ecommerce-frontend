import Image from "next/image";
import React from "react";

interface CouponCardProps {
  image: string;
  title: string;
  discount: string | number;
  status: string;
  couponCode: string;
  copied: boolean;
  timeLeft: Record<string, string | number>; // e.g. { days: 1, hours: 2 }
  onCopy: () => void;
}

const CouponCard: React.FC<CouponCardProps> = ({
  image,
  title,
  discount,
  status,
  couponCode,
  copied,
  timeLeft,
  onCopy,
}) => {
  return (
    <div className="coupon block md:flex justify-between items-center bg-white rounded-md shadow-sm">
      {/* Left Section */}
      <div className="p-6 flex items-center">
        <figure>
          <Image
            src={image}
            alt={title}
            width={120}
            height={120}
            className="rounded-lg"
            loading="lazy"
          />
        </figure>
        <div className="ml-5">
          {/* Countdown Timer */}
          <div className="mb-2 flex items-center font-semibold">
            {Object.values(timeLeft).map((unit, idx) => (
              <span
                key={idx}
                className="flex items-center justify-center bg-red-100 text-sm font-serif font-semibold px-2 py-1 rounded mx-1"
              >
                {unit}
              </span>
            ))}
          </div>

          <h2 className="font-serif text-lg leading-6 font-medium mb-3">
            {title}
          </h2>
          <h2 className="text-base font-medium text-gray-600">
            <span className="text-lg text-red-500 font-bold">{discount}</span>{" "}
            Off
          </h2>
        </div>
      </div>

      {/* Right Section */}
      <div className="border-l-2 border-dashed md:w-1/3 px-6">
        <div className="my-6">
          <div className="font-serif font-medium flex items-center mb-1">
            <span>Coupon</span>
            <span className="ml-2 text-red-600">{status}</span>
          </div>

          <div className="border border-dashed bg-emerald-50 py-2 border-emerald-300 rounded-lg text-center">
            <button onClick={onCopy} className="w-full focus:outline-none">
              <span className="uppercase font-serif font-semibold text-base leading-7 text-emerald-600">
                {copied ? "Copied!" : couponCode}
              </span>
            </button>
          </div>

          <p className="text-xs leading-5 text-gray-500 mt-2">
            * This coupon applies when you shop for more than{" "}
            <span className="font-bold text-gray-700">$2000</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CouponCard;