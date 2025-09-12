import Link from "next/link";
import React from "react";

const Usersidebar: React.FC = () => {
  return (
    <div className="bg-white p-4 sm:p-5 lg:p-8 rounded-md sticky top-32">
      <span className="p-2 my-2 flex  items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600">
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth={2}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="flex-shrink-0 h-4 w-4"
          aria-hidden="true"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x={3} y={3} width={7} height={7} />
          <rect x={14} y={3} width={7} height={7} />
          <rect x={14} y={14} width={7} height={7} />
          <rect x={3} y={14} width={7} height={7} />
        </svg>
        <Link
          className="inline-flex items-center justify-between ml-2 text-sm font-medium w-full hover:text-emerald-600"
          href="/user/dashboard"
        >
          Dashboard
        </Link>
      </span>
      <span className="p-2 my-2 flex  items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600">
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth={2}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="flex-shrink-0 h-4 w-4"
          aria-hidden="true"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1={8} y1={6} x2={21} y2={6} />
          <line x1={8} y1={12} x2={21} y2={12} />
          <line x1={8} y1={18} x2={21} y2={18} />
          <line x1={3} y1={6} x2="3.01" y2={6} />
          <line x1={3} y1={12} x2="3.01" y2={12} />
          <line x1={3} y1={18} x2="3.01" y2={18} />
        </svg>
        <Link
          className="inline-flex items-center justify-between ml-2 text-sm font-medium w-full hover:text-emerald-600"
          href="/user/my-orders"
        >
          My Orders
        </Link>
      </span>
      <span className="p-2 my-2 flex  items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600">
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth={2}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="flex-shrink-0 h-4 w-4"
          aria-hidden="true"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx={12} cy={7} r={4} />
        </svg>
        <Link
          className="inline-flex items-center justify-between ml-2 text-sm font-medium w-full hover:text-emerald-600"
          href="/user/my-account"
        >
          My Account
        </Link>
      </span>
      <span className="p-2 my-2 flex  items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600">
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth={2}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="flex-shrink-0 h-4 w-4"
          aria-hidden="true"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx={12} cy={12} r={3} />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
        <Link
          className="inline-flex items-center justify-between ml-2 text-sm font-medium w-full hover:text-emerald-600"
          href="/user/update-profile"
        >
          Update Profile
        </Link>
      </span>
      <span className="p-2 my-2 flex  items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600">
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth={2}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="flex-shrink-0 h-4 w-4"
          aria-hidden="true"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1={16} y1={13} x2={8} y2={13} />
          <line x1={16} y1={17} x2={8} y2={17} />
          <polyline points="10 9 9 9 8 9" />
        </svg>
        <Link
          className="inline-flex items-center justify-between ml-2 text-sm font-medium w-full hover:text-emerald-600"
          href="/user/change-password"
        >
          Change Password
        </Link>
      </span>
      <span className="p-2 flex  items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600">
        <span className="mr-2">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={32}
              d="M336 112a80 80 0 00-160 0v96"
            />
            <rect
              width={320}
              height={272}
              x={96}
              y={208}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={32}
              rx={48}
              ry={48}
            />
          </svg>
        </span>{" "}
        <button className="inline-flex items-center justify-between text-sm font-medium w-full hover:text-emerald-600">
          Logout
        </button>
      </span>
    </div>
  );
};

export default Usersidebar;
