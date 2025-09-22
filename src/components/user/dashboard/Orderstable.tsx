"use client";

import React, { useState } from "react";
import Link from "next/link";
import CustomTable from "@/components/ui/common/table/CustomTable";
import Pagination from "@/components/ui/common/pagination/Pagination";

// Data
const orders = [
  {
    id: "bf97",
    orderTime: "June 19, 2025",
    method: "Cash",
    status: "Delivered",
    total: 118.03,
  },
  {
    id: "77b8",
    orderTime: "June 19, 2025",
    method: "Cash",
    status: "Delivered",
    total: 1423.86,
  },
  {
    id: "c3d4",
    orderTime: "June 20, 2025",
    method: "Credit Card",
    status: "Pending",
    total: 249.99,
  },
  {
    id: "a1f9",
    orderTime: "June 20, 2025",
    method: "UPI",
    status: "Processing",
    total: 89.5,
  },
  {
    id: "d2e8",
    orderTime: "June 21, 2025",
    method: "PayPal",
    status: "Cancelled",
    total: 560.0,
  },
  {
    id: "x7y2",
    orderTime: "June 21, 2025",
    method: "Debit Card",
    status: "Delivered",
    total: 302.75,
  },
  {
    id: "m8n3",
    orderTime: "June 22, 2025",
    method: "Cash",
    status: "Pending",
    total: 74.25,
  },
  {
    id: "z4p1",
    orderTime: "June 22, 2025",
    method: "Credit Card",
    status: "Delivered",
    total: 999.99,
  },
  {
    id: "q5w6",
    orderTime: "June 23, 2025",
    method: "UPI",
    status: "Processing",
    total: 215.4,
  },
  {
    id: "l0k9",
    orderTime: "June 23, 2025",
    method: "PayPal",
    status: "Delivered",
    total: 1530.0,
  },
];

// Table columns
const columns = [
  { key: "id", label: "ID" },
  { key: "orderTime", label: "Order Time", align: "center" },
  { key: "method", label: "Method", align: "center" },
  {
    key: "status",
    label: "Status",
    align: "center",
    render: (value: string) => (
      <span
        className={`text-sm font-medium ${
          value === "Delivered" ? "text-emerald-500" : "text-yellow-500"
        }`}
      >
        {value}
      </span>
    ),
  },
  {
    key: "total",
    label: "Total",
    align: "center",
    render: (value: number) => (
      <span className="text-sm font-bold">{value.toFixed(2)}</span>
    ),
  },
  {
    key: "action",
    label: "Action",
    align: "right",
    render: (_: any, row: (typeof orders)[number]) => (
      <Link
        className="px-3 py-1 bg-emerald-100 text-xs text-emerald-600 hover:bg-emerald-500 hover:text-white transition-all font-semibold rounded-full"
        href={`/order/${row.id}`}
      >
        Details
      </Link>
    ),
  },
];

const PAGE_SIZE = 5; // rows per page

const Orderstable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(orders.length / PAGE_SIZE);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const paginatedData = orders.slice(startIndex, startIndex + PAGE_SIZE);

  return (
    <div className="p-4 space-y-4">
      <CustomTable columns={columns} data={paginatedData} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default Orderstable;
