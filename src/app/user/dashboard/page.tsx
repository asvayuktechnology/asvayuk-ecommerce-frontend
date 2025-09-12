import React from "react";
import Orderstable from "@/components/user/dashboard/Orderstable";
// import OrderCard from "@/components/user/dashboard/OrderCard";
import Pagination from "@/components/ui/common/pagination/Pagination";

const page = () => {
  return (
    <div className="overflow-hidden">
      <h2 className="text-xl font-semibold mb-5">Dashboard</h2>
      <div className="grid gap-4 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <div className="flex h-full">
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
            </div>
            <div>
              <h5 className="leading-none mb-2 text-base font-medium  text-gray-700">
                Total Orders
              </h5>
              <p className="text-xl font-bold  leading-none text-gray-800">
                929
              </p>
            </div>
          </div>
          {/* <OrderCard icon titile=" Total Orders " value=" 929" /> */}
        </div>
        <div className="flex h-full">
          <div className="flex items-center border border-gray-200 w-full rounded-lg p-4">
            <div className="flex items-center justify-center p-3 rounded-full h-12 w-12 text-xl text-center mr-4 text-orange-600 bg-orange-200">
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
                <polyline points="23 4 23 10 17 10" />
                <polyline points="1 20 1 14 7 14" />
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
              </svg>
            </div>
            <div>
              <h5 className="leading-none mb-2 text-base font-medium  text-gray-700">
                Pending Orders
              </h5>
              <p className="text-xl font-bold  leading-none text-gray-800">
                287
              </p>
            </div>
          </div>
        </div>
        <div className="flex h-full">
          <div className="flex items-center border border-gray-200 w-full rounded-lg p-4">
            <div className="flex items-center justify-center p-3 rounded-full h-12 w-12 text-xl text-center mr-4 text-indigo-600 bg-indigo-200">
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
                <rect x={1} y={3} width={15} height={13} />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </div>
            <div>
              <h5 className="leading-none mb-2 text-base font-medium  text-gray-700">
                Processing Order
              </h5>
              <p className="text-xl font-bold  leading-none text-gray-800">
                127
              </p>
            </div>
          </div>
        </div>
        <div className="flex h-full">
          <div className="flex items-center border border-gray-200 w-full rounded-lg p-4">
            <div className="flex items-center justify-center p-3 rounded-full h-12 w-12 text-xl text-center mr-4 text-emerald-600 bg-emerald-200">
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div>
              <h5 className="leading-none mb-2 text-base font-medium  text-gray-700">
                Complete Orders
              </h5>
              <p className="text-xl font-bold  leading-none text-gray-800">
                416
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto">
        <div className="rounded-md ">
          <div className="flex flex-col">
            <h3 className="text-lg  font-medium mb-5">Recent Orders</h3>
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="align-middle inline-block border border-gray-100 rounded-md min-w-full pb-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden border-b last:border-b-0 border-gray-100 rounded-md">
                  <Orderstable />
                  <Pagination />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
