import React, { ReactNode } from "react";

interface OrderCardProps {
  icon?: ReactNode;   // any React element/icon
  titile: string;     // kept your original spelling "titile"
  value: string | number;
}

const OrderCard: React.FC<OrderCardProps> = ({ icon, titile, value }) => {
  return (
    <>
      <div className="flex items-center border border-gray-200 w-full rounded-lg p-4">
        <div className="flex items-center justify-center p-3 rounded-full h-12 w-12 text-xl text-center mr-4 text-red-600  bg-red-200">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth={2}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx={9} cy={21} r={1} />
            <circle cx={20} cy={21} r={1} />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          {icon}
        </div>
        <div>
          <h5 className="leading-none mb-2 text-base font-medium  text-gray-700">
            {titile}
          </h5>
          <p className="text-xl font-bold  leading-none text-gray-800">
            {value}
          </p>
        </div>
      </div>
    </>
  );
};

export default OrderCard;
