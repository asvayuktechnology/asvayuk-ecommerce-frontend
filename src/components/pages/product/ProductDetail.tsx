"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import QuantityCounter from "@/components/products/quantityCounter/QuantityCounter";
import ProductCard from "@/components/products/productsInfo/ProductCard";
import { getProducts } from "@/services/productService";
import { useParams } from "next/navigation";
import AppImages from "@/config/constant/app.images";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/slice/cartSlice";
import ProductModalCard from "@/components/products/productsInfo/ProductModalCard";

// ✅ Define Product type
interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    description?: string;
    category: string;
    brand?: string;
    color?: string;
    rating: {
        rate: number;
        count: number;
    };
}

// ✅ Define InfoList type
interface InfoItem {
    text: string;
    icon: JSX.Element;
}

// ✅ Define Social button type
interface SocialButton {
    name: string;
    bg: string;
    svgPath: JSX.Element;
}

const infoList: InfoItem[] = [
    {
        text: "Free shipping applies to all orders over shipping €100",
        icon: (
            <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect x="1" y="3" width="15" height="13" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
        ),
    },
    {
        text: "Home Delivery within 1 Hour",
        icon: (
            <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        ),
    },
    {
        text: "Cash on Delivery Available",
        icon: (
            <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
            >
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
        ),
    },
    {
        text: "7 Days returns money back guarantee",
        icon: (
            <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
            >
                <polyline points="17 1 21 5 17 9" />
                <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                <polyline points="7 23 3 19 7 15" />
                <path d="M21 13v2a4 4 0 0 1-4 4H3" />
            </svg>
        ),
    },
    {
        text: "Warranty not available for this item",
        icon: (
            <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18" />
                <path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38" />
                <line x1="1" y1="1" x2="23" y2="23" />
            </svg>
        ),
    },
    {
        text: "Guaranteed 100% organic from natural products.",
        icon: (
            <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
        ),
    },
    {
        text: "Delivery from our pick point Boho One, Bridge Street West, Middlesbrough, North Yorkshire, TS2 1AE.",
        icon: (
            <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
            </svg>
        ),
    },
];

const socialButtons: SocialButton[] = [
    {
        name: "Facebook",
        bg: "#0965FE",
        svgPath: (
            <path
                d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2
        c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
                fill="white"
            />
        ),
    },
    {
        name: "Twitter",
        bg: "#00aced",
        svgPath: (
            <path
                d="M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6
        C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3
        c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1
        c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7
        c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"
                fill="white"
            />
        ),
    },
    {
        name: "Reddit",
        bg: "#FF5700",
        svgPath: (
            <path
                d="M32,12C20.4,12,11,21.4,11,33c0,5.6,2.5,10.7,6.4,14.2c-0.1,1.1-0.7,3.7-1.4,6.2
        c-0.2,0.7,0.6,1.3,1.2,0.9c2.3-1.4,4.6-2.9,5.5-3.5c2.7,1.1,5.6,1.7,8.7,1.7c11.6,0,21-9.4,21-21S43.6,12,32,12z
        M22,38.2c-1.8,0-3.2-1.5-3.2-3.2c0-1.8,1.5-3.2,3.2-3.2c1.8,0,3.2,1.5,3.2,3.2C25.3,36.8,23.8,38.2,22,38.2z
        M42,38.2c-1.8,0-3.2-1.5-3.2-3.2c0-1.8,1.5-3.2,3.2-3.2c1.8,0,3.2,1.5,3.2,3.2C45.3,36.8,43.8,38.2,42,38.2z
        M36.8,42.4c-2.6,1.5-6.9,1.4-9.4,0c-0.6-0.3-0.8-1-0.4-1.6c0.3-0.6,1-0.8,1.6-0.4c1.6,0.9,5,1,6.8,0c0.6-0.3,1.3-0.1,1.6,0.4
        C37.6,41.4,37.3,42.1,36.8,42.4z"
                fill="white"
            />
        ),
    },
    {
        name: "WhatsApp",
        bg: "#25D366",
        svgPath: (
            <path
                d="M32.1,11C20.7,11,11.4,20.3,11.4,31.7c0,4.3,1.3,8.3,3.5,11.7L13,53l9.9-2.6
        c3.2,2,7,3.1,11.1,3.1c11.4,0,20.7-9.3,20.7-20.7S43.5,11,32.1,11z M32.1,47.6c-3.4,0-6.5-1-9.1-2.7l-0.6-0.4l-5.9,1.6l1.6-5.7
        l-0.4-0.7c-1.8-2.5-2.8-5.5-2.8-8.7c0-8.6,7-15.6,15.6-15.6s15.6,7,15.6,15.6S40.7,47.6,32.1,47.6z M40.2,36.1
        c-0.5-0.2-2.9-1.4-3.3-1.5c-0.5-0.2-0.8-0.2-1.1,0.3c-0.3,0.5-1.2,1.5-1.5,1.8c-0.3,0.3-0.5,0.3-1,0.1c-2.6-1.2-4.3-3.1-5.3-5.5
        c-0.2-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8c0.2-0.3,0.3-0.5,0.5-0.9c0.1-0.3,0-0.6-0.1-0.9c-0.2-0.4-1.3-3.4-1.8-4.7
        c-0.4-1-0.8-0.9-1.1-0.9h-0.9c-0.3,0-0.8,0.1-1.2,0.5c-0.5,0.5-1.6,1.7-1.6,4.1c0,2.4,1.6,4.7,1.9,5c0.2,0.3,3.5,5.5,8.4,7.6
        c1.2,0.5,2.2,0.8,2.9,1c1.2,0.3,2.2,0.3,3,0.2c0.9-0.1,2.7-1.1,3.1-2.2c0.4-1.1,0.4-2.1,0.3-2.3C41.1,36.4,40.7,36.2,40.2,36.1z"
                fill="white"
            />
        ),
    },
    {
        name: "LinkedIn",
        bg: "#0077B5",
        svgPath: (
            <path
                d="M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1s1.4,3.1,3.1,3.1
        s3.1-1.4,3.1-3.1S24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6c0-2.3,0.4-4.5,3.2-4.5
        c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"
                fill="white"
            />
        ),
    },
];

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const [related, setRelated] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(
        null
    );
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        if (product) {
            dispatch(addToCart({ ...product, quantity }));
            setQuantity(1);
        }
    };

    const openProductModal = (product: Product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const products = await getProducts();
                const found = products.find((item) => String(item.id) === id);
                setProduct(found || null);
                setRelated(
                    products.filter((p) => p.id !== found?.id).slice(0, 10)
                );
            } catch (error) {
                console.error("Error fetching product:", error);
            } finally {
                setLoading(false);
            }
        };

        if (id) fetchProduct();
    }, [id]);

    if (loading)
        return (
            <p className="p-10 text-center text-gray-500">Loading product...</p>
        );
    if (!product)
        return (
            <p className="p-10 text-center text-red-500">Product not found</p>
        );

    return (
        <>
            <div className="bg-gray-50">
                <div className="px-0 py-10 lg:py-10">
                    <div className="mx-auto px-3 lg:px-10 max-w-screen-2xl">
                        {/* Breadcrumb */}
                        <div className="flex items-center pb-4">
                            <ol className="flex items-center w-full overflow-hidden font-serif">
                                <li className="text-sm pr-1 transition duration-200 ease-in cursor-pointer hover:text-emerald-500 font-semibold text-black">
                                    <Link href="/">Home</Link>
                                </li>
                                <li className="text-sm mt-[1px] ">
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
                                        <polyline points="9 18 15 12 9 6" />
                                    </svg>
                                </li>
                                <li className="text-sm pl-1 transition duration-200 ease-in cursor-pointer hover:text-emerald-500 font-semibold text-black">
                                    <Link href="/product">
                                        <button type="button">Product</button>
                                    </Link>
                                </li>
                                <li className="text-sm mt-[1px] text-black">
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
                                        <polyline points="9 18 15 12 9 6" />
                                    </svg>
                                </li>
                                <li className="text-sm px-1 transition duration-200 ease-in text-black">
                                    {product.title}
                                </li>
                            </ol>
                        </div>

                        {/* Product Section */}
                        <div className="w-full rounded-lg p-3 lg:p-12 bg-white">
                            <div className="flex flex-col md:flex-row">
                                <div className="flex-shrink-0 xl:pr-10 lg:block w-full mx-auto md:w-6/12 lg:w-5/12 xl:w-4/12 relative">
                                    <span className="absolute text-sm bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 left-0 top-4">
                                        8.56% Off
                                    </span>
                                    <Image
                                        alt={product.title}
                                        width={650}
                                        height={650}
                                        src={
                                            product.image ||
                                            AppImages.home2.products.product4
                                        }
                                        className="w-full h-auto"
                                    />
                                </div>
                                <div className="md:w-2/3 w-full md:pr-6">
                                    <div className="mb-6">
                                        <h1 className="leading-7 text-lg md:text-xl lg:text-2xl mb-1 font-semibold font-serif text-gray-800">
                                            {product.title}
                                        </h1>

                                        <div className="relative">
                                            <span className="bg-green-100 text-green-500 rounded-full inline-flex items-center justify-center px-2 py-0 text-xs font-semibold font-serif">
                                                Stock :
                                                <span className="text-orange-700 pl-1 font-bold">
                                                    {product.rating?.count}
                                                </span>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="font-serif font-bold text-2xl text-black">
                                        ${product.price}
                                        <del className="text-lg font-normal text-gray-400 ml-1">
                                            {`$${(
                                                product.price * 2 +
                                                5
                                            ).toFixed(2)}`}
                                        </del>
                                    </div>

                                    <p className="text-sm leading-6 text-gray-500 md:leading-7 mt-4">
                                        {product.description}
                                    </p>

                                    {/* Quantity & Add to Cart */}
                                    <div className="flex items-center mt-4">
                                        <div className="flex items-center justify-between w-full space-x-3 sm:space-x-4">
                                            <QuantityCounter />
                                            <button
                                                onClick={handleAddToCart}
                                                className="bg-gray-800 text-white text-sm leading-4 font-semibold px-4 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 w-full h-12 rounded-md hover:bg-gray-900 cursor-pointer"
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-col mt-4">
                                        <span className="font-serif font-semibold py-1 text-sm">
                                            <span className="text-gray-800">
                                                Category:
                                            </span>
                                            <Link href="/search?category=skin-care&_id=632ab2f04d87ff2494210ad0">
                                                <button className="text-gray-600 font-serif font-medium underline ml-2 hover:text-teal-600">
                                                    skin-care
                                                </button>
                                            </Link>
                                        </span>
                                        <div className="flex flex-row">
                                            <span className="bg-gray-50 mr-2 text-gray-600 rounded-full px-3 py-1 text-xs font-semibold font-serif mt-2">
                                                baby care
                                            </span>
                                            <span className="bg-gray-50 mr-2 text-gray-600 rounded-full px-3 py-1 text-xs font-semibold font-serif mt-2">
                                                baby accessories
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mt-8 text-xs sm:text-sm text-gray-700 font-medium">
                                        Call Us To Order By Mobile Number :
                                        <span className="text-emerald-700 font-semibold">
                                            {" "}
                                            +0044235234
                                        </span>
                                    </div>

                                    {/* Social */}
                                    <div className="mt-2">
                                        <h3 className="text-base font-semibold mb-1 font-serif text-black">
                                            Share your social network
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            For lots of traffic from social
                                            network, share this product
                                        </p>
                                        {/* Social Icons Placeholder */}
                                        <ul className="flex mt-4">
                                            {socialButtons.map(
                                                (item, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex items-center text-center border border-gray-100 rounded-full hover:bg-emerald-500 mr-2 transition ease-in-out duration-500"
                                                    >
                                                        <button
                                                            className="react-share__ShareButton"
                                                            style={{
                                                                backgroundColor:
                                                                    "transparent",
                                                                border: "none",
                                                                padding: 0,
                                                                font: "inherit",
                                                                color: "inherit",
                                                                cursor: "pointer",
                                                            }}
                                                            aria-label={`Share on ${item.name}`}
                                                        >
                                                            <svg
                                                                viewBox="0 0 64 64"
                                                                width="32"
                                                                height="32"
                                                            >
                                                                <circle
                                                                    cx="32"
                                                                    cy="32"
                                                                    r="32"
                                                                    fill={
                                                                        item.bg
                                                                    }
                                                                ></circle>
                                                                {item.svgPath}
                                                            </svg>
                                                        </button>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                                {/* Info box */}
                                <div className="w-full xl:w-5/12 lg:w-6/12 md:w-5/12">
                                    <div className="mt-6 md:mt-0 lg:mt-0 bg-gray-50 border border-gray-100 p-4 lg:p-8 rounded-lg">
                                        <ul className="my-0 space-y-3">
                                            {infoList.map((item, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-start space-x-4 py-2"
                                                >
                                                    <span className="text-gray-400 text-xl">
                                                        {item.icon}
                                                    </span>
                                                    <p className="text-sm text-gray-500 font-sans leading-5">
                                                        {item.text}
                                                    </p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>{" "}
                            </div>
                        </div>

                        {/* Related Products */}
                        <div className="pt-20">
                            <h3 className="text-lg font-semibold mb-3 text-black">
                                Related Products
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                                {related.map((item) => (
                                    <ProductCard
                                        key={item.id}
                                        title={item.title}
                                        price={item.price}
                                        stock={item.rating.count}
                                        imageUrl={item.image}
                                        onClick={() => openProductModal(item)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ProductModalCard
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                product={selectedProduct}
            />
        </>
    );
}
