"use client";
import Link from "next/link";
import React, { useState } from "react";
import AppImages from "@/config/constant/app.images";
import { useDispatch, useSelector } from "react-redux";
import DropdownMenus from "./DropdownMenus";
import Search from "../../ui/common/inputs/Search";
import Cart from "@/components/pages/cart/Cart";
import { RootState } from "@reduxjs/toolkit/query";
import CustomInput from "@/components/ui/common/inputs/CustomInput";

interface Category {
  title: string;
  icon: string;
}
const Header: React.FC = () => {
  const [isCartOpen, setCartOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const categories: Category[] = [
    {
      title: "Fruits & Vegetable",
      icon: AppImages.categories.bagelMix,
    },
    {
      title: "Cooking Essentials",
      icon: AppImages.categories.cookie,
    },
    {
      title: "Household Tools",
      icon: AppImages.categories.spray,
    },
    {
      title: "Pet Care",
      icon: AppImages.categories.cat,
    },
    {
      title: "Beauty & Healths",
      icon: AppImages.categories.beauty,
    },
    {
      title: "Jam & Jelly",
      icon: AppImages.categories.strawberryJam,
    },
    {
      title: "Milk & Dairy",
      icon: AppImages.categories.milk,
    },
    {
      title: "Drinks",
      icon: AppImages.categories.juice,
    },
    {
      title: "Breakfast",
      icon: AppImages.categories.bagelMix,
    },
  ];

  return (
    <>
      <div className="headertop hidden lg:block bg-gray-100">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
          <div className="text-gray-700 py-2 font-sans text-xs font-medium  flex justify-between items-center">
            <span className="flex items-center">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              We are available 24/7, Need help?
              <Link
                href="tel:+965 505 31291"
                className="font-bold text-emerald-500 ml-1"
              >
                +123 456 789
              </Link>
            </span>
            <div className="lg:text-right flex items-center navBar">
              <div>
                <Link
                  className="font-medium hover:text-emerald-600"
                  href="/about-us"
                >
                  About Us
                </Link>
                <span className="mx-2">|</span>
              </div>
              <div>
                <Link
                  className="font-medium hover:text-emerald-600"
                  href="/contact-us"
                >
                  Contact Us
                </Link>
                <span className="mx-2">|</span>
              </div>
              <Link
                className="font-medium hover:text-emerald-600"
                href="/user/my-account"
              >
                My Account
              </Link>
              <span className="mx-2">|</span>
              <button className="flex items-center font-medium hover:text-emerald-600 cursor-pointer">
                <span className="mr-1">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                      d="M336 112a80 80 0 00-160 0v96"
                    ></path>
                    <rect
                      width="320"
                      height="272"
                      x="96"
                      y="208"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                      rx="48"
                      ry="48"
                    ></rect>
                  </svg>
                </span>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-emerald-500 sticky top-0 z-20">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
          <div className="top-bar h-16 lg:h-auto flex items-center justify-between py-4 mx-auto">
            <Link
              className="mr-3 lg:mr-12 xl:mr-12 hidden md:hidden lg:block"
              href="/"
            >
              <div className="relative w-32 h-10">
                <div className="flex flex-col gap-0 text-white">
                  <span className="font-bold text-xl mb-0 leading-4.5">
                    Asvayuk
                  </span>
                  <span className="font-bold text-xl mb-0 leading-6">
                    Ecommerce
                  </span>
                </div>
              </div>
            </Link>
            <div className="w-full transition-all duration-200 ease-in-out lg:flex lg:max-w-[520px] xl:max-w-[750px] 2xl:max-w-[1000px] md:mx-12 lg:mx-4 xl:mx-0">
              <div className="w-full flex flex-col justify-center flex-shrink-0 relative z-30">
                <div className="flex flex-col mx-auto w-full">
                  <form className="relative pr-12 md:pr-14 bg-white overflow-hidden shadow-sm rounded-md w-full">
                    <label className="flex items-center py-0.5">
                      <CustomInput
                        placeholder="Search for products (e.g. fish, apple, oil)"
                        className="form-input w-full pl-5 text-slate-800 appearance-none transition ease-in-out border text-input text-sm font-sans rounded-md min-h-10 h-10 duration-200 bg-white focus:ring-0 outline-none border-none focus:outline-none placeholder-gray-500 placeholder-opacity-75"
                      />
                    </label>
                    <button
                      aria-label="Search"
                      type="submit"
                      className="outline-none text-xl text-gray-400 absolute top-0 right-0 end-0 w-12 md:w-14 h-full flex items-center justify-center transition duration-200 ease-in-out hover:text-heading focus:outline-none"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="none"
                          strokeMiterlimit="10"
                          strokeWidth="32"
                          d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                        ></path>
                        <path
                          fill="none"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="32"
                          d="M338.29 338.29L448 448"
                        ></path>
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="hidden md:hidden md:items-center lg:flex xl:block absolute inset-y-0 right-0 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                className="pr-5 text-white text-2xl font-bold"
                aria-label="Alert"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 drop-shadow-xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </button>
              <button
                aria-label="Total"
                className="relative px-5 text-white text-2xl font-bold cursor-pointer"
                onClick={() => setCartOpen(true)}
              >
                <span className="absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-medium leading-none text-red-100 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                  {cartItems.length ? cartItems.length : 0}
                </span>
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 drop-shadow-xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </button>
              <button
                className="pl-5 text-white text-2xl font-bold"
                aria-label="Login"
              >
                <Link
                  className="leading-none font-bold  block"
                  href="/auth/login"
                >
                  J
                </Link>
              </button>
            </div>
          </div>
        </div>

        <div className="hidden lg:block xl:block bg-white border-b border-slate-200">
          <div className="max-w-screen-2xl mx-auto px-3 sm:px-10 h-12 flex justify-between items-center">
            <div className="inline-flex">
              <div className="relative" data-headlessui-state="">
                <div className="max-w-7xl mx-auto">
                  <div className="flex justify-between items-center md:justify-start md:space-x-10">
                    <nav className="md:flex space-x-10 items-center">
                      <div className="relative " data-headlessui-state="">
                        <DropdownMenus
                          categories={categories}
                          menuTitle="Categories"
                        />
                      </div>
                      <Link
                        className=" py-2 text-sm font-medium hover:text-emerald-600 text-black"
                        href="/about-us"
                      >
                        About Us
                      </Link>
                      <Link
                        className=" py-2 text-sm font-medium hover:text-emerald-600  text-black"
                        href="/contact-us"
                      >
                        Contact Us
                      </Link>
                      <Link
                        className="relative inline-flex items-center  bg-red-100  ml-4 py-0 px-2 rounded text-sm font-medium text-red-500 hover:text-emerald-600"
                        href="/offer"
                      >
                        Offers
                        <div className="absolute flex w-2 h-2 left-auto -right-1 -top-1">
                          <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-red-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </div>
                      </Link>
                    </nav>
                    {/* <div hidden="" style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px; display: none;"></div> */}
                  </div>
                </div>
              </div>
              {/* <div hidden="" style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px; display: none;"></div> */}
            </div>
            <div className="flex">
              <Link
                className="mx-4 py-2 text-sm font-medium hover:text-emerald-600 text-black"
                href="/privacy-policy"
              >
                Privacy Policy
              </Link>
              <Link
                className="mx-4 py-2 text-sm font-medium hover:text-emerald-600 text-black"
                href="/terms-and-conditions"
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
