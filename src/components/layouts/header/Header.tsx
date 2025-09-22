"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { FiGrid, FiList, FiLock, FiUser } from "react-icons/fi";

import AppImages from "@/config/constant/app.images";
import DropdownMenus from "./DropdownMenus";
import Cart from "@/components/pages/cart/Cart";
import CustomInput from "@/components/ui/common/inputs/CustomInput";
import { RootState } from "@reduxjs/toolkit/query";

interface Category {
  title: string;
  icon: string;
}

const notifications = [
  {
    id: 1,
    message: "Your order #1234 has been shipped",
    link: "/user/my-orders",
  },
  { id: 2, message: "New offer: Get 20% off on groceries", link: "/offer" },
  {
    id: 3,
    message: "Profile updated successfully",
    link: "/user/update-profile",
  },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isCartOpen, setCartOpen] = useState<boolean>(false);
  const [isNotifOpen, setNotifOpen] = useState<boolean>(false);
  // const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const categories: Category[] = [
    { title: "Fruits & Vegetable", icon: AppImages.categories.bagelMix },
    { title: "Cooking Essentials", icon: AppImages.categories.cookie },
    { title: "Household Tools", icon: AppImages.categories.spray },
    { title: "Pet Care", icon: AppImages.categories.cat },
    { title: "Beauty & Healths", icon: AppImages.categories.beauty },
    { title: "Jam & Jelly", icon: AppImages.categories.strawberryJam },
    { title: "Milk & Dairy", icon: AppImages.categories.milk },
    { title: "Drinks", icon: AppImages.categories.juice },
    { title: "Breakfast", icon: AppImages.categories.bagelMix },
  ];

  return (
    <>
      {/* ===== Top Header ===== */}
      <div className="headertop hidden lg:block bg-gray-100">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
          <div className="flex justify-between items-center py-2 text-xs font-medium text-gray-700 font-sans">
            {/* Contact Info */}
            <span className="flex items-center">
              <svg
                className="mr-2"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                width="1em"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              We are available 24/7, Need help?
              <Link
                href="tel:+96550531291"
                className="font-bold text-emerald-500 ml-1"
              >
                +123 456 789
              </Link>
            </span>

            {/* Navbar Links */}
            <div className="flex items-center">
              <Link
                className="font-medium hover:text-emerald-600"
                href="/about-us"
              >
                About Us
              </Link>
              <span className="mx-2">|</span>

              <Link
                className="font-medium hover:text-emerald-600"
                href="/contact-us"
              >
                Contact Us
              </Link>
              <span className="mx-2">|</span>

              <Link
                className="font-medium hover:text-emerald-600"
                href="/user/my-account"
              >
                My Account
              </Link>
              <span className="mx-2">|</span>

              <button className="flex items-center font-medium hover:text-emerald-600">
                <span className="mr-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    width="1em"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="32"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M336 112a80 80 0 00-160 0v96"
                    />
                    <rect
                      width="320"
                      height="272"
                      x="96"
                      y="208"
                      rx="48"
                      ry="48"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="32"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Main Header ===== */}
      <div className="bg-emerald-500 sticky top-0 z-20">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
          <div className="flex items-center justify-between py-4 h-16 lg:h-auto">
            {/* Logo */}
            <Link href="/" className="mr-3 hidden lg:block lg:mr-12 xl:mr-12">
              <div className="flex flex-col text-white">
                <span className="font-bold text-xl leading-tight">Asvayuk</span>
                <span className="font-bold text-xl leading-tight">
                  Ecommerce
                </span>
              </div>
            </Link>

            {/* Search */}
            <div className="w-full lg:max-w-[520px] xl:max-w-[750px] 2xl:max-w-[1000px] transition-all md:mx-12 lg:mx-4 xl:mx-0">
              <form className="relative bg-white rounded-md shadow-sm pr-12 md:pr-14">
                <CustomInput
                  placeholder="Search for products (e.g. fish, apple, oil)"
                  className="form-input w-full pl-5 text-sm text-slate-800 rounded-md h-10 focus:outline-none placeholder-gray-500 border-0"
                />
                <button
                  aria-label="Search"
                  type="submit"
                  className="absolute right-0 top-0 flex h-full w-12 md:w-14 items-center justify-center text-xl text-gray-400 hover:text-heading"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    width="1em"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="32"
                      strokeMiterlimit="10"
                      d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                    />
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="32"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      d="M338.29 338.29L448 448"
                    />
                  </svg>
                </button>
              </form>
            </div>

            {/* Cart, Notifications, User */}
            <div className="hidden sm:flex items-center lg:relative lg:z-10">
              {/* Cart Button */}
              <button
                type="button"
                aria-label={`Cart with ${cartItems.length} items`}
                onClick={() => setCartOpen(true)}
                className="relative p-1 mx-2 text-gray-200 rounded-full hover:text-white cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 
                      1.087.835l.383 1.437M7.5 14.25a3 3 0 0 
                      0-3 3h15.75m-12.75-3h11.218c1.121-2.3 
                      2.1-4.684 2.924-7.138a60.114 60.114 
                      0 0 0-16.536-1.84M7.5 14.25 
                      5.106 5.272M6 20.25a.75.75 0 1 
                      1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 
                      0a.75.75 0 1 1-1.5 0 .75.75 
                      0 0 1 1.5 0Z"
                  />
                </svg>
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
                  {cartItems.length}
                </span>
              </button>

              {/* Notification Button */}
              <div className="relative">
                <button
                  type="button"
                  aria-label="Notification"
                  className="relative p-1 mx-2 text-gray-200 rounded-full hover:text-white cursor-pointer"
                  onClick={() => setNotifOpen(!isNotifOpen)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    width="1em"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                    />
                  </svg>
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
                    {notifications.length}
                  </span>
                </button>

                {isNotifOpen && (
                  <div className="absolute right-0 mt-2 w-72 rounded-md bg-white shadow-lg z-20 p-2">
                    <div className="p-3 border-b border-[#F9FAFB] font-semibold text-gray-700">
                      Notifications
                    </div>
                    <ul className="max-h-60 overflow-y-auto">
                      {notifications.map((notif) => (
                        <li key={notif.id}>
                          <Link
                            href={notif.link}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
                          >
                            {notif.message}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="p-2 text-center border-t border-[#F9FAFB]">
                      <Link
                        href="/"
                        className="text-sm text-emerald-600 hover:underline"
                      >
                        View all
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Divider */}
              <span className="mx-4 h-6 w-px bg-gray-200 lg:mx-6" />

              {/* Login Icon */}
              <Link
                href="/auth/login"
                className="-m-1.5 flex items-center p-1.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  width="1em"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-white"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </Link>

              {/* User Avatar Dropdown */}
              <div className="relative ml-4">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="-m-1.5 flex items-center p-1.5"
                  aria-haspopup="menu"
                  aria-expanded={isOpen}
                >
                  <Image
                    src="https://res.cloudinary.com/ahossain/image/upload/v1754928399/uhqj0mqfh8if6gsrusqq.jpg"
                    alt="User Avatar"
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded-full bg-gray-50 cursor-pointer"
                  />
                </button>

                {isOpen && (
                  <div
                    className="absolute right-0 z-10 mt-2.5 w-60 origin-top-right rounded-md bg-white py-2 shadow-lg"
                    role="menu"
                  >
                    {[
                      {
                        href: "/user/dashboard",
                        label: "Dashboard",
                        icon: FiGrid,
                      },
                      {
                        href: "/user/my-orders",
                        label: "My Orders",
                        icon: FiList,
                      },
                      {
                        href: "/user/update-profile",
                        label: "Update Profile",
                        icon: FiUser,
                      },
                      {
                        href: "/user/change-password",
                        label: "Change Password",
                        icon: FiLock,
                      },
                    ].map(({ href, label, icon: Icon }) => (
                      <Link
                        key={href}
                        href={href}
                        className="w-full flex items-center px-6 py-2 hover:bg-gray-50 hover:text-teal-600"
                      >
                        <Icon className="text-[1rem] mr-3" />
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ===== Sub Nav ===== */}
        <div className="hidden lg:block bg-white border-b border-slate-200">
          <div className="max-w-screen-2xl mx-auto px-3 sm:px-10 flex h-12 items-center justify-between">
            <nav className="flex items-center space-x-10">
              <DropdownMenus categories={categories} menuTitle="Categories" />
              <Link
                href="/about-us"
                className="py-2 text-sm font-medium text-black hover:text-emerald-600"
              >
                About Us
              </Link>
              <Link
                href="/contact-us"
                className="py-2 text-sm font-medium text-black hover:text-emerald-600"
              >
                Contact Us
              </Link>
              <Link
                href="/offer"
                className="relative ml-4 inline-flex items-center rounded bg-red-100 px-2 py-0 text-sm font-medium text-red-500 hover:text-emerald-600"
              >
                Offers
                <span className="absolute -top-1 -right-1 flex h-2 w-2">
                  <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
                </span>
              </Link>
            </nav>
            <div className="flex">
              <Link
                href="/privacy-policy"
                className="mx-4 py-2 text-sm font-medium text-black hover:text-emerald-600"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="mx-4 py-2 text-sm font-medium text-black hover:text-emerald-600"
              >
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Cart isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Header;
