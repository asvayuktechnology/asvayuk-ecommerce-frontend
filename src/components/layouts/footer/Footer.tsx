"use client";
import Link from "next/link";
import Image from "next/image";
import FooterLinks from "./FooterLinks";
import FooterStore from "./FooterStore";
import { useSelector } from "react-redux";
import { JSX, useState } from "react";
import CategoryDrawer from "../../products/categoryDrawer/CategoryDrawer";
import AppImages from "@/config/constant/app.images";
import Cart from "@/components/pages/cart/Cart";
import { RootState } from "@reduxjs/toolkit/query";

interface Feature {
    icon: JSX.Element;
    text: string;
}

interface CompanyLink {
    label: string;
    href: string;
}

interface SocialLink {
    href: string;
    bg: string;
    icon: JSX.Element;
}

const Footer: React.FC = () => {
    const [isCartOpen, setCartOpen] = useState<boolean>(false);
    const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const features: Feature[] = [
        {
            icon: (
                <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 h-4 w-4 text-emerald-600"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect x="1" y="3" width="15" height="13" />
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
            ),
            text: "Free Shipping From €500.00",
        },
        {
            icon: (
                <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 h-4 w-4 text-emerald-600"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
            ),
            text: "Support 24/7 At Anytime",
        },
        {
            icon: (
                <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 h-4 w-4 text-emerald-600"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                    <line x1="1" y1="10" x2="23" y2="10" />
                </svg>
            ),
            text: "Secure Payment Totally Safe",
        },
        {
            icon: (
                <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 h-4 w-4 text-emerald-600"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <polyline points="20 12 20 22 4 22 4 12" />
                    <rect x="2" y="7" width="20" height="5" />
                    <line x1="12" y1="22" x2="12" y2="7" />
                    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                </svg>
            ),
            text: "Latest Offer Upto 20% Off",
        },
    ];

    const companyLinks: CompanyLink[] = [
        { label: "Offers", href: "/offer" },
        { label: "Product", href: "/product" },
        { label: "About Us", href: "/about-us" },
        { label: "Contact Us", href: "/contact-us" },
    ];

    const companyLinks2: CompanyLink[] = [
        { label: "Fish & Meat", href: "/fish-meat" },
        { label: "Soft Drink", href: "/soft-drink" },
        { label: "Milk & Dairy", href: "/milk-dairy" },
        { label: "Beauty & Health", href: "/beauty-health" },
    ];

    const companyLinks3: CompanyLink[] = [
        { label: "Dashboard", href: "/user/dashboard" },
        { label: "My Orders", href: "/user/my-orders" },
        { label: "Recent Orders", href: "/user/recent-orders" },
        { label: "Update Profile", href: "/user/update-profile" },
    ];

    const socialLinks: SocialLink[] = [
        {
            href: "https://www.facebook.com/",
            bg: "#0965FE",
            icon: (
                <path
                    d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
                    fill="white"
                />
            ),
        },
        {
            href: "https://twitter.com/",
            bg: "#00aced",
            icon: (
                <path
                    d="M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"
                    fill="white"
                />
            ),
        },
        {
            href: "https://www.pinterest.com/",
            bg: "#E60023",
            icon: (
                <path
                    d="M32,16c-8.8,0-16,7.2-16,16c0,6.6,3.9,12.2,9.6,14.7c0-1.1,0-2.5,0.3-3.7 c0.3-1.3,2.1-8.7,2.1-8.7s-0.5-1-0.5-2.5c0-2.4,1.4-4.1,3.1-4.1c1.5,0,2.2,1.1,2.2,2.4c0,1.5-0.9,3.7-1.4,5.7 c-0.4,1.7,0.9,3.1,2.5,3.1c3,0,5.1-3.9,5.1-8.5c0-3.5-2.4-6.1-6.7-6.1c-4.9,0-7.9,3.6-7.9,7.7c0,1.4,0.4,2.4,1.1,3.1 c0.3,0.3,0.3,0.5,0.2,0.9c-0.1,0.3-0.3,1-0.3,1.3c-0.1,0.4-0.4,0.6-0.8,0.4c-2.2-0.9-3.3-3.4-3.3-6.1c0-4.5,3.8-10,11.4-10 c6.1,0,10.1,4.4,10.1,9.2c0,6.3-3.5,11-8.6,11c-1.7,0-3.4-0.9-3.9-2c0,0-0.9,3.7-1.1,4.4c-0.3,1.2-1,2.5-1.6,3.4 c1.4,0.4,3,0.7,4.5,0.7c8.8,0,16-7.2,16-16C48,23.2,40.8,16,32,16z"
                    fill="white"
                />
            ),
        },
    ];

    return (
        <>
            <footer className="bg-white">
                <FooterStore />

                <div className="hidden lg:block relative mx-auto max-w-screen-2xl py-6 px-3 sm:px-10">
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 mx-auto">
                        {features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="border-r border-gray-200 py-1 flex items-center justify-center bg-white"
                            >
                                <div className="mr-3">{feature.icon}</div>
                                <div>
                                    <span className="block  text-sm font-medium leading-5 text-black">
                                        {feature.text}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <hr className="hr-line border-slate-200" />

                <div className="border-t border-gray-100 w-full">
                    <div className="pb-16 lg:pb-0 xl:pb-0 bg-white">
                        <div className="mx-auto max-w-screen-2xl px-4 sm:px-10">
                            <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 lg:py-16 justify-between">
                                <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
                                    <FooterLinks
                                        title="Company"
                                        links={companyLinks}
                                    />
                                </div>
                                <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
                                    <FooterLinks
                                        title="Latest News"
                                        links={companyLinks2}
                                    />
                                </div>
                                <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
                                    <FooterLinks
                                        title="Company"
                                        links={companyLinks3}
                                    />
                                </div>
                                <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
                                    <Link
                                        className="mr-3 lg:mr-12 xl:mr-12"
                                        rel="noreferrer"
                                        href="/"
                                    >
                                        <div className="relative w-32 h-10">
                                            {/* <Image
                        alt="logo"
                        loading="lazy"
                        width="0"
                        height="0"
                        decoding="async"
                        data-nimg="1"
                        className="w-full h-auto"
                        src="https://res.cloudinary.com/ahossain/image/upload/v1697688576/settings/logo-color_el4zmy.svg"
                        style="color: transparent;"
                      /> */}
                                            <h1 className="text-xl font-bold text-[#10b981]">
                                                Asvayuk Ecommerce
                                            </h1>
                                        </div>
                                    </Link>
                                    <p className="leading-7 font-sans text-sm text-gray-600 mt-3">
                                        987 Andre Plain Suite High Street 838,
                                        Lake Hestertown, USA
                                        <br />
                                        <Link href="tel:7854215478">
                                            {" "}
                                            Tel : 7854215478
                                        </Link>
                                        <br />
                                        <Link href="mailto: ccruidk@test.com">
                                            Email : ccruidk@test.com
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <hr className="hr-line border-slate-200" /> */}

                <div className="mx-auto max-w-screen-2xl px-4 sm:px-10 bg-gray-50 border border-gray-50 rounded-lg">
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-8 items-center justify-between">
                        <div className="col-span-1">
                            <div>
                                <span className="text-base leading-7 font-medium block mb-2 pb-0.5 text-black">
                                    Follow Us
                                </span>
                                <ul className="text-sm flex">
                                    {socialLinks.map((social, i) => (
                                        <li
                                            key={i}
                                            className="flex items-center mr-3 transition ease-in-out duration-500"
                                        >
                                            <Link
                                                target="_blank"
                                                className="block text-center mx-auto text-gray-500 hover:text-white"
                                                href={social.href}
                                            >
                                                <svg
                                                    viewBox="0 0 64 64"
                                                    width="34"
                                                    height="34"
                                                >
                                                    <circle
                                                        cx="32"
                                                        cy="32"
                                                        r="32"
                                                        fill={social.bg}
                                                    ></circle>
                                                    {social.icon}
                                                </svg>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="col-span-1 text-center hidden md:block lg:block">
                            <div>
                                <p className="text-base leading-7 font-medium block text-black">
                                    Call Us Today!
                                </p>
                                <h5 className="text-2xl font-bold text-emerald-500 leading-7">
                                    <Link href="tel:7854215478">
                                        +91 7854215478
                                    </Link>
                                </h5>
                            </div>
                        </div>

                        <div className="col-span-1 hidden md:block lg:block">
                            <ul className="lg:text-right">
                                <li className="px-1 mb-2 md:mb-0 transition hover:opacity-80 inline-flex">
                                    <Image
                                        alt="payment method"
                                        width="274"
                                        height="85"
                                        className="w-full"
                                        src={AppImages.footerImg.paymentLogo}
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mx-auto max-w-screen-2xl px-3 sm:px-10 flex justify-center py-4">
                    <p className="text-sm text-gray-500 leading-6">
                        Copyright 2024 @{" "}
                        <Link className="text-emerald-500" href="/">
                            Asvayuk Ecommerce
                        </Link>
                        , All rights reserved.
                    </p>
                </div>
            </footer>

            <footer className="lg:hidden fixed z-30 bottom-0 bg-emerald-500 flex items-center justify-between w-full h-16 px-3 sm:px-10">
                {/* Menu Icon Button */}
                <button
                    aria-label="Bar"
                    className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none cursor-pointer"
                    onClick={() => setDrawerOpen(true)}
                >
                    <span className="text-xl text-white">
                        <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-6 h-6 drop-shadow-xl"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line x1="17" y1="10" x2="3" y2="10" />
                            <line x1="21" y1="6" x2="3" y2="6" />
                            <line x1="21" y1="14" x2="3" y2="14" />
                            <line x1="17" y1="18" x2="3" y2="18" />
                        </svg>
                    </span>
                </button>

                {/* Home Link */}
                <Link href="/" aria-label="Home" className="text-xl text-white">
                    <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6 drop-shadow-xl"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                </Link>

                {/* Cart Button */}
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

                {/* User Link */}
                <button
                    aria-label="User"
                    type="button"
                    className="text-xl text-white indicator justify-center"
                >
                    <Link
                        href="/user/dashboard"
                        className="leading-none font-bold font-serif block"
                    >
                        J
                    </Link>
                </button>
            </footer>

            {/* Cart Drawer */}
            <Cart isOpen={isCartOpen} onClose={() => setCartOpen(false)} />

            {/* CategoryDrawer */}
            <CategoryDrawer
                open={isDrawerOpen}
                onClose={() => setDrawerOpen(false)}
            />
        </>
    );
};

export default Footer;
