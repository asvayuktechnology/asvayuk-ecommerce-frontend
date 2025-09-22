"use client";

import Link from "next/link";
import { Drawer, DrawerHeader } from "flowbite-react";
import {
  MdArrowRightAlt,
  MdOutlineLocalOffer,
  MdOutlinePhoneCallback,
  MdOutlinePrivacyTip,
} from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";
import { FiFileMinus, FiUsers } from "react-icons/fi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { HiOutlineExclamationCircle } from "react-icons/hi2";
import Image from "next/image";
import AppImages from "@/config/constant/app.images";

interface Category {
  name: string;
  image: string;
  href: string;
}

interface Page {
  href: string;
  label: string;
  icons: JSX.Element;
}

interface CategoryDrawerProps {
  open: boolean;
  onClose: () => void;
}

const categories: Category[] = [
  { name: "Men Perfumes", image: AppImages.categories.manPerfume, href: "/" },
  { name: "Gocha", image: AppImages.categories.placeholder, href: "/" },
  { name: "Fish & Meat", image: AppImages.categories.cat, href: "/" },
  {
    name: "Fruits & Vegetable",
    image: AppImages.categories.cabbage,
    href: "/",
  },
  {
    name: "Cooking Essentials",
    image: AppImages.categories.flyingPan,
    href: "/",
  },
  { name: "Biscuits & Cakes", image: AppImages.categories.bagelMix, href: "/" },
  { name: "Household Tools", image: AppImages.categories.spray, href: "/" },
  { name: "Beauty & Healths", image: AppImages.categories.beauty, href: "/" },
  { name: "Jam & Jelly", image: AppImages.categories.strawberryJam, href: "/" },
  { name: "Milk & Dairy", image: AppImages.categories.milk, href: "/" },
  { name: "Drinks", image: AppImages.categories.juice, href: "/" },
  { name: "Breakfast", image: AppImages.categories.bagelMix, href: "/" },
];

const pages: Page[] = [
  { href: "/offer", label: "Offer Page", icons: <MdOutlineLocalOffer /> },
  { href: "/checkout", label: "Checkout", icons: <IoBagCheckOutline /> },
  { href: "/faq", label: "FAQ", icons: <AiOutlineQuestionCircle /> },
  { href: "/about-us", label: "About Us", icons: <FiUsers /> },
  {
    href: "/contact-us",
    label: "Contact Us",
    icons: <MdOutlinePhoneCallback />,
  },
  {
    href: "/privacy-policy",
    label: "Privacy Policy",
    icons: <MdOutlinePrivacyTip />,
  },
  {
    href: "/terms-and-conditions",
    label: "Terms & Conditions",
    icons: <FiFileMinus />,
  },
  {
    href: "/404",
    label: "404 Not Found",
    icons: <HiOutlineExclamationCircle />,
  },
];

export default function CategoryDrawer({ open, onClose }: CategoryDrawerProps) {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      position="left"
      className="lg:w-[450px] md:w-[350px] w-[100%] px-0 py-0"
    >
      <DrawerHeader
        title="Categories"
        className="px-3 bg-white pt-4 text-black"
      />

      <div className="overflow-y-auto bg-white">
        {/* Categories */}
        <div className="border-b px-4 py-2 font-semibold">All Categories</div>
        <div className="px-4 py-2 space-y-2">
          {categories.map((categorie, index) => (
            <Link
              key={index}
              href={categorie.href || "#"}
              className="flex items-center p-2 rounded-md hover:bg-gray-100 cursor-pointer"
            >
              <Image
                src={categorie.image}
                alt={categorie.name}
                width={20}
                height={20}
                className="rounded-sm"
              />
              <span className="ml-3 text-sm font-medium flex-1">
                {categorie.name}
              </span>
              <MdArrowRightAlt />
            </Link>
          ))}
        </div>

        {/* Pages */}
        <div className="border-b px-4 py-2 mt-4 font-semibold">Pages</div>
        <div className="px-4 py-2 space-y-2">
          {pages.map((page, index) => (
            <Link
              key={index}
              href={page.href}
              className="flex items-center gap-2 px-2 py-1 text-sm text-gray-700 rounded hover:bg-gray-100 hover:text-emerald-600"
            >
              <div>{page.icons}</div>
              <div>{page.label}</div>
            </Link>
          ))}
        </div>
      </div>
    </Drawer>
  );
}
