"use client";

import { Drawer, DrawerHeader, DrawerItems } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "@/store/slice/cartSlice";
import QuantityCounter from "@/components/products/quantityCounter/QuantityCounter";
import Image from "next/image";
import Link from "next/link";
import { RootState } from "@reduxjs/toolkit/query";

interface CartItem {
    id: number | string;
    title: string;
    image: string;
    price: number;
    quantity: number;
}

interface CartProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Cart({ isOpen, onClose }: CartProps) {
    const dispatch = useDispatch();
    const cartItems = useSelector(
        (state: RootState) => state.cart.items
    ) as CartItem[];

    const cartTotal = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const handleRemove = (id: number | string) => {
        dispatch(removeFromCart(id));
    };

    return (
        <Drawer
            open={isOpen}
            onClose={onClose}
            position="right"
            className="lg:w-[450px] md:w-[350px] w-[100%] px-0 py-0"
        >
            <DrawerHeader
                title="Shopping Cart"
                className="px-3 bg-white pt-4 text-black"
            />
            <DrawerItems>
                <div className="flex flex-col h-[95vh] justify-between bg-white">
                    <div className="flex-grow px-5 py-6 overflow-y-auto">
                        {cartItems.length === 0 ? (
                            <div className="flex flex-col justify-center items-center text-center mt-10">
                                <div className="w-20 h-20 flex items-center justify-center bg-emerald-100 rounded-full mb-4">
                                    <svg
                                        stroke="currentColor"
                                        fill="#10B981"
                                        strokeWidth="0"
                                        viewBox="0 0 512 512"
                                        height="2em"
                                        width="2em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M454.65 169.4A31.82 31.82 0 00432 160h-64v-16a112 112 0 00-224 0v16H80a32 32 0 00-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0050.48-20.55 69.48 69.48 0 0021.52-50.2V192a31.75 31.75 0 00-9.35-22.6zM176 144a80 80 0 01160 0v16H176zm192 96a112 112 0 01-224 0v-16a16 16 0 0132 0v16a80 80 0 00160 0v-16a16 16 0 0132 0z"></path>
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-gray-700 text-lg">
                                    Your cart is empty
                                </h3>
                                <p className="text-sm text-gray-500 mt-2">
                                    No items added to your cart. Please add some
                                    products.
                                </p>
                            </div>
                        ) : (
                            <ul className="divide-y divide-gray-200">
                                {cartItems.map((item) => (
                                    <li
                                        key={item.id}
                                        className="group w-full h-auto flex justify-start items-center bg-white py-3 px-4 border-b hover:bg-gray-50 transition-all border-gray-100 relative last:border-b-0"
                                    >
                                        {/* Product Image */}
                                        <div className="relative flex rounded-full border border-gray-100 shadow-sm overflow-hidden flex-shrink-0 cursor-pointer mr-4">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                width={40}
                                                height={40}
                                                className="object-contain transition duration-150 ease-linear transform group-hover:scale-105 p-2"
                                                style={{ objectFit: "contain" }}
                                            />
                                        </div>

                                        {/* Product Info */}
                                        <div className="flex flex-col w-full overflow-hidden">
                                            <Link
                                                className="truncate text-sm font-medium text-gray-700 text-heading line-clamp-1"
                                                href={`/product/${item.id}`}
                                            >
                                                {item.title}
                                            </Link>
                                            <span className="text-xs text-gray-400 mb-1">
                                                Item Price ${item.price}
                                            </span>

                                            {/* Bottom row: total price, quantity counter, remove */}
                                            <div className="flex items-center justify-between">
                                                <div className="font-bold text-sm md:text-base text-heading leading-5">
                                                    $
                                                    {(
                                                        item.price *
                                                        item.quantity
                                                    ).toFixed(2)}
                                                </div>

                                                {/* Quantity Counter */}
                                                <QuantityCounter />

                                                {/* Remove Button */}
                                                <button
                                                    className="hover:text-red-600 text-red-400 text-lg cursor-pointer"
                                                    onClick={() =>
                                                        handleRemove(item.id)
                                                    }
                                                    title="Remove"
                                                >
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="none"
                                                        strokeWidth="2"
                                                        viewBox="0 0 24 24"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        height="1em"
                                                        width="1em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <polyline points="3 6 5 6 21 6" />
                                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                        <line
                                                            x1="10"
                                                            y1="11"
                                                            x2="10"
                                                            y2="17"
                                                        />
                                                        <line
                                                            x1="14"
                                                            y1="11"
                                                            x2="14"
                                                            y2="17"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className="px-3 py-5">
                        <button className="w-full py-3 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-medium flex justify-between items-center">
                            <span>Proceed To Checkout</span>
                            <span className="bg-white text-emerald-600 px-3 py-2 rounded-lg font-bold">
                                ${cartTotal.toFixed(2)}
                            </span>
                        </button>
                    </div>
                </div>
            </DrawerItems>
        </Drawer>
    );
}
