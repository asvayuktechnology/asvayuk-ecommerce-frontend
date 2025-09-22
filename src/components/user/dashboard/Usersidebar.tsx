"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  FiHome,
  FiShoppingCart,
  // FiStar,
  FiUser,
  FiEdit,
  FiLock,
  FiLogOut,
} from "react-icons/fi";

const Usersidebar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/user/dashboard", label: "Dashboard", icon: FiHome },
    { href: "/user/my-orders", label: "My Orders", icon: FiShoppingCart },
    // { href: "/user/my-reviews", label: "My Review", icon: FiStar },
    { href: "/user/my-account", label: "My Account", icon: FiUser },
    { href: "/user/update-profile", label: "Update Profile", icon: FiEdit },
    { href: "/user/change-password", label: "Change Password", icon: FiLock },
  ];

  return (
    <div className="flex flex-col lg:flex-row w-full">
      {/* Mobile toggle button */}
      <div className="lg:hidden mt-6 mx-3">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center justify-between w-full p-3 bg-gray-50 rounded-md transition-all"
        >
          <div className="flex items-center">
            <div className="relative w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center bg-gray-100 overflow-hidden">
              <Image
                src="https://res.cloudinary.com/ahossain/image/upload/v1754928399/uhqj0mqfh8if6gsrusqq.jpg"
                alt="avatar"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full bg-gray-50"
              />
            </div>
            <div className="ml-3">
              <h5 className="text-md font-semibold text-gray-800">rock</h5>
              <p className="text-sm text-gray-500">justin@gmail.com</p>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 9l6 6 6-6"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar menu */}
      <div
        className={`flex-shrink-0 w-full lg:w-80 lg:pr-6 ${
          mobileOpen ? "block" : "hidden lg:block"
        }`}
      >
        <div className="rounded-md sticky top-32 space-y-4 bg-white p-4 sm:p-5 lg:p-8">
          {/* User profile */}
          <div className="flex items-center mb-6">
            <div className="relative w-16 h-16">
              <div className="relative w-16 h-16 rounded-full border-2 border-gray-200 flex items-center justify-center bg-gray-100 overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/ahossain/image/upload/v1754928399/uhqj0mqfh8if6gsrusqq.jpg"
                  alt="avatar"
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-full bg-gray-50"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
            </div>
            <div className="ml-3">
              <h5 className="text-lg font-semibold text-gray-800">rock</h5>
              <p className="text-sm text-gray-500">justin@gmail.com</p>
            </div>
          </div>

          {/* Sidebar links */}
          {links.map((link) => (
            <SidebarLink
              key={link.href}
              href={link.href}
              label={link.label}
              Icon={link.icon}
              active={pathname === link.href}
            />
          ))}

          {/* Logout */}
          <Link
            href="/"
            className="cursor-pointer flex items-center w-full p-2 rounded-md hover:bg-gray-50 text-gray-600 text-sm font-medium mt-2"
          >
            <FiLogOut className="w-4 h-4 mr-2" />
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

interface SidebarLinkProps {
  href: string;
  label: string;
  Icon: React.ElementType;
  active?: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({
  href,
  label,
  Icon,
  active,
}) => {
  return (
    <Link
      href={href}
      className={`inline-flex items-center rounded-md py-3 px-4 text-sm font-medium w-full mb-1 transition-colors ${
        active
          ? "text-emerald-600 bg-emerald-100"
          : "text-gray-600 hover:bg-gray-100 hover:text-emerald-600"
      }`}
    >
      <Icon className="w-5 h-5 mr-3" />
      {label}
    </Link>
  );
};

export default Usersidebar;
