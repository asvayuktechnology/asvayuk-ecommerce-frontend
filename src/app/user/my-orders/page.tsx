import Orderstable from "@/components/user/dashboard/Orderstable";
import React from "react";

const page = () => {
  return (
    <>
      <h2 className="text-xl font-semibold mb-5 text-black">My Orders</h2>
      <Orderstable />
    </>
  );
};

export default page;
