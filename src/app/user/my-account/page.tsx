import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="overflow-hidden">
        <div className="grid gap-4 mb-8 sm:grid-cols-2 grid-cols-1">
          <div className="flex h-full relative">
            <div className="flex items-center border border-gray-200 w-full rounded-lg p-4 relative">
              <Link
                className="absolute top-2 right-2 bg-cyan-600 text-white px-3 py-1 rounded hover:bg-cyan-700"
                href="/user/update-profile"
              >
                Edit
              </Link>
              <div className="flex items-center justify-center rounded-full text-xl text-center mr-4 bg-gray-200">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-200 text-xl font-bold text-center mr-4">
                  J
                </div>
              </div>
              <div>
                <h5 className="leading-none mb-2 text-base font-medium text-gray-700">
                  Justin J. Ruiz
                </h5>
                <p className="text-sm text-gray-500">justin@gmail.com</p>
                <p className="text-sm text-gray-500">212-512-2888</p>
              </div>
            </div>
          </div>
          <div className="flex h-full relative">
            <div className="flex items-center border border-gray-200 w-full rounded-lg p-4 relative">
              <Link
                className="absolute top-2 right-2 bg-cyan-600 text-white px-3 py-1 rounded hover:bg-cyan-700"
                href="/user/add-shipping-address?id=6439713c1d8869133e8881e9"
              >
                Edit
              </Link>
              <div className="flex-grow">
                <h5 className="leading-none mb-2 text-base font-medium text-gray-700">
                  pnm infotech{" "}
                  <span className="text-xs text-gray-500">
                    (Default Shipping Address)
                  </span>
                </h5>
                <p className="text-sm text-gray-500">7865656789 </p>
                <p className="text-sm text-gray-500">pune maharashtra </p>
                <p className="text-sm text-gray-500">india, chakan, -12345</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
