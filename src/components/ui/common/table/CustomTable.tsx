// CustomTable.tsx
"use client";
import React from "react";

export interface Column<T> {
  key: keyof T | string;
  label: string;
  align?: "left" | "center" | "right";
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}

interface CustomTableProps<T> {
  columns: Column<T>[];
  data: T[];
}

const CustomTable = <T extends Record<string, unknown>>({
  columns,
  data,
}: CustomTableProps<T>) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key.toString()}
                className={`px-4 py-2 text-sm font-semibold text-gray-700 uppercase tracking-wide text-${
                  col.align || "left"
                }`}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50">
                {columns.map((col) => {
                  const value = row[col.key as keyof T];
                  return (
                    <td
                      key={col.key.toString()}
                      className={`px-4 py-2 text-sm text-gray-700 text-${
                        col.align || "left"
                      }`}
                    >
                      {col.render ? col.render(value, row) : value}
                    </td>
                  );
                })}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="px-4 py-4 text-center text-gray-500 text-sm"
              >
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
