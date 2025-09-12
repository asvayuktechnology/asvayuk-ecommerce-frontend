import Image from "next/image";
import React from "react";
interface Category {
    title: string;
    image: string;
    sub: string[];
}

const categories: Category[] = [
    {
        title: "aaa",
        image: "https://res.cloudinary.com/ahossain/image/upload/v1750245697/category/2021102290-qnwxtn2zeocoel3zuxag7m7ayt44xg5kh8t181n6w0.jpg",
        sub: ["Fish", "Meat"],
    },
    {
        title: "Fruits & Vegetable",
        image: "https://res.cloudinary.com/ahossain/image/upload/v1658340704/category%20icon/cabbage_n59uv3.png",
        sub: ["Baby Food", "Fresh Fruits", "Dry Fruits"],
    },
    {
        title: "Cooking Essentials",
        image: "https://res.cloudinary.com/ahossain/image/upload/v1658340704/category%20icon/frying-pan_vglm5c.png",
        sub: ["Flour", "Oil"],
    },
    {
        title: "aaa",
        image: "https://res.cloudinary.com/ahossain/image/upload/v1750245697/category/2021102290-qnwxtn2zeocoel3zuxag7m7ayt44xg5kh8t181n6w0.jpg",
        sub: ["Fish", "Meat"],
    },
    {
        title: "Fruits & Vegetable",
        image: "https://res.cloudinary.com/ahossain/image/upload/v1658340704/category%20icon/cabbage_n59uv3.png",
        sub: ["Baby Food", "Fresh Fruits", "Dry Fruits"],
    },
    {
        title: "Cooking Essentials",
        image: "https://res.cloudinary.com/ahossain/image/upload/v1658340704/category%20icon/frying-pan_vglm5c.png",
        sub: ["Flour", "Oil"],
    },
    {
        title: "aaa",
        image: "https://res.cloudinary.com/ahossain/image/upload/v1750245697/category/2021102290-qnwxtn2zeocoel3zuxag7m7ayt44xg5kh8t181n6w0.jpg",
        sub: ["Fish", "Meat"],
    },
    {
        title: "Fruits & Vegetable",
        image: "https://res.cloudinary.com/ahossain/image/upload/v1658340704/category%20icon/cabbage_n59uv3.png",
        sub: ["Baby Food", "Fresh Fruits", "Dry Fruits"],
    },
    {
        title: "Cooking Essentials",
        image: "https://res.cloudinary.com/ahossain/image/upload/v1658340704/category%20icon/frying-pan_vglm5c.png",
        sub: ["Flour", "Oil"],
    },
    {
        title: "aaa",
        image: "https://res.cloudinary.com/ahossain/image/upload/v1750245697/category/2021102290-qnwxtn2zeocoel3zuxag7m7ayt44xg5kh8t181n6w0.jpg",
        sub: ["Fish", "Meat"],
    },
    {
        title: "Fruits & Vegetable",
        image: "https://res.cloudinary.com/ahossain/image/upload/v1658340704/category%20icon/cabbage_n59uv3.png",
        sub: ["Baby Food", "Fresh Fruits", "Dry Fruits"],
    },
];

const FeaturedCategories = () => {
    return (
        <div className="bg-gray-100 py-10 lg:py-16">
            <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
                <div className="mb-10 flex justify-center">
                    <div className="w-full lg:w-2/5 text-center">
                        <h2 className="text-xl lg:text-2xl  font-semibold mb-2 text-black">
                            Featured Categories
                        </h2>
                        <p className="text-base text-gray-600 leading-6 font-sans">
                            Choose your necessary products from this feature
                            categories.
                        </p>
                    </div>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6">
                    {categories.map((cat, index) => (
                        <li key={index} className="group">
                            <div className="bg-white border border-gray-100 shadow-sm p-4 cursor-pointer transition-transform transform group-hover:shadow-lg flex items-center h-full">
                                <Image
                                    src={cat.image}
                                    alt={cat.title}
                                    width="35"
                                    height="35"
                                    className="shrink-0"
                                />
                                <div className="pl-4">
                                    <h3 className="text-sm font-medium text-gray-600 leading-tight group-hover:text-orange-500">
                                        {cat.title}
                                    </h3>
                                    <ul className="mt-1 pt-1">
                                        {cat.sub.map((item, subIndex) => (
                                            <li
                                                key={subIndex}
                                                className="text-xs text-gray-400  flex items-center transition-all duration-150 hover:ml-2"
                                            >
                                                <span className="text-xs mr-1">
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="none"
                                                        strokeWidth="2"
                                                        viewBox="0 0 512 512"
                                                        height="1em"
                                                        width="1em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fill="none"
                                                            strokeLinecap="square"
                                                            strokeMiterlimit="10"
                                                            strokeWidth="48"
                                                            d="M184 112l144 144-144 144"
                                                        ></path>
                                                    </svg>
                                                </span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FeaturedCategories;
