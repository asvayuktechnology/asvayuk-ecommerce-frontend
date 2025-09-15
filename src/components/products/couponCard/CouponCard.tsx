import Image from "next/image";
import React from "react";

interface CouponCardProps {
  image: string;
  title: string;
  discount: string | number;
  status: "Active" | "Inactive";
  couponCode: string;
  copied?: boolean;
  timeLeft?: Record<string, string | number>; // e.g. {days: '00', hours: '00'}
  minAmount?: number | string;
  onCopy?: () => void;
}

const CouponCard: React.FC<CouponCardProps> = ({
  image,
  title,
  discount,
  status,
  couponCode,
  copied,
  timeLeft,
  minAmount,
  onCopy,
}) => {
  const isActive = status === "Active";
  const statusColor = isActive
    ? "text-green-600 bg-emerald-100"
    : "text-red-600 bg-red-100";
  const timerBg = isActive
    ? "bg-emerald-100 text-white"
    : "bg-red-100 text-white";

  return (
    <div className="coupon coupon-home mx-4 my-5 block md:flex lg:flex md:justify-between lg:justify-between items-center bg-white rounded-md shadow">
      {/* Left Section */}
      <div className="tengah py-2 px-3 flex items-center justify-items-start">
        <figure>
          <Image
            src={image}
            alt={title}
            width={100}
            height={100}
            className="rounded-lg"
            loading="lazy"
          />
        </figure>

        <div className="ml-3">
          <div className="flex items-center">
            <h6 className="pl-1 text-base font-medium text-gray-600">
              <span className="text-lg md:text-xl lg:text-xl text-red-500 font-bold">
                {discount}
              </span>{" "}
              Off
            </h6>
            <div className="ml-2">
              <span
                className={`inline-block px-4 py-1 rounded-full font-medium text-xs ${statusColor}`}
              >
                {status}
              </span>
            </div>
          </div>

          <h2 className="pl-1 text-base text-gray-700 leading-6 font-semibold mb-2">
            {title}
          </h2>

          {/* Timer */}
          {timeLeft && (
            <div className="inline-block mb-2">
              <div className="flex items-center font-semibold">
                {Object.values(timeLeft).map((unit, idx) => (
                  <span
                    key={idx} 
                    className={`${timerBg} flex items-center justify-center dark:text-zinc-900  text-sm  font-semibold px-2 py-1 rounded mx-1`}
                  >
                    {unit}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right Section */}
      <div className="md:border-l-2 lg:border-l-2 border-dashed border-gray-300 lg:w-1/3 md:w-1/3 relative px-4 py-3">
        <div className="info flex items-center">
          <div className="w-full">
            <div className="block">
              <div className="border border-dashed bg-emerald-50 py-1 border-emerald-300 rounded-lg text-center block">
                <button
                  className="block w-full cursor-pointer"
                  onClick={onCopy}
                  disabled={!isActive}
                >
                  <span className="uppercase font-semibold text-sm leading-7 text-emerald-600">
                    {copied ? "Copied!" : couponCode}
                  </span>
                </button>
              </div>
            </div>

            {/* Paragraph for minimum shopping */}
            {minAmount && (
              <p
                className="leading-5 dark:text-gray-300 text-gray-500 mt-2"
                style={{ fontSize: "12px" }}
              >
                * This coupon apply when shopping more than{" "}
                <span className="font-bold">${minAmount}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponCard;
