import Orderstable from "@/components/user/dashboard/Orderstable";
import Pagination from "@/components/ui/common/pagination/Pagination";
import React from "react";

const page = () => {
  return (
    <>
      <h2 className="text-xl  font-semibold mb-5">My Orders</h2>
      <Orderstable />
      <Pagination />
    </>
  );
};

export default page;
