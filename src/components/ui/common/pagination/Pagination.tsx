"use client";

import React from "react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange?: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    const getPageNumbers = () => {
        const pages: (number | "...")[] = [];
        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || Math.abs(i - currentPage) <= 2) {
                pages.push(i);
            } else if (
                pages[pages.length - 1] !== "..." &&
                (i < currentPage - 2 || i > currentPage + 2)
            ) {
                pages.push("...");
            }
        }
        return pages;
    };

    return (
        <div className="flex justify-center mt-4">
            <ul className="flex items-center space-x-2">
                {/* Previous */}
                {/* <li>
                  <button
                    onClick={() => currentPage > 1 && onPageChange?.(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-1 rounded-md border ${
                      currentPage === 1
                        ? "bg-gray-200 cursor-not-allowed"
                        : "bg-white hover:bg-gray-100"
                    }`}
                  >
                    Previous
                  </button>
                </li> */}

                {/* Page Numbers */}
                {getPageNumbers().map((page, idx) =>
                    page === "..." ? (
                        <li key={idx} className="px-3 py-1">
                            ...
                        </li>
                    ) : (
                        <li key={idx}>
                            <button
                                onClick={() => onPageChange?.(page as number)}
                                className={`px-3 py-1 rounded-md cursor-pointer ${
                                    page === currentPage
                                        ? "bg-green-500 text-white"
                                        : "bg-gray-100"
                                }`}
                            >
                                {page}
                            </button>
                        </li>
                    )
                )}

                {/* Next */}
                {/* <li>
                  <button
                    onClick={() =>
                      currentPage < totalPages && onPageChange?.(currentPage + 1)
                    }
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1 rounded-md border ${
                      currentPage === totalPages
                        ? "bg-gray-200 cursor-not-allowed"
                        : "bg-white hover:bg-gray-100"
                    }`}
                  >
                    Next
                  </button>
                </li> */}
            </ul>
        </div>
    );
};

export default Pagination;
