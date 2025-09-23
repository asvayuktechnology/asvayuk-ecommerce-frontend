"use client";
import { useState, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingBag,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { FaRegMoneyBillAlt, FaShippingFast } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa6";
import AppImages from "@/config/constant/app.images";
import CategoryCard from "./CategoryCard";
import ProductCardHome2 from "./ProductCardHome2";
import TestimonialCard from "./TestimonialCard";

// ------------------ Types ------------------
interface Suggestion {
  title: string;
  price: string;
  image: string;
  oldPrice?: string;
}

interface Testimonial {
  name: string;
  role: string;
  title: string;
  message: string;
  image: string;
}

interface Category {
  title: string;
  items: number;
  image: string;
  link: string;
}

interface SupportItem {
  icon: ReactNode;
  title: string;
  subtitle: string;
}

interface Product {
  id: number;
  imageUrl: string;
  title: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  colors?: string[];
  handle: string; // <-- add this
}

// ------------------ Data ------------------
const suggestions: Suggestion[] = [
  {
    title: "Party Dress",
    price: "$250.00",
    image: AppImages.home2.categories.partyDress,
  },
  {
    title: "Linen Top",
    price: "$60.00",
    image: AppImages.home2.categories.linen,
  },
  {
    title: "Men's Shirt",
    price: "$120.00",
    image: AppImages.home2.categories.menShirts,
  },
  {
    title: "Tote Bags",
    price: "$220.00",
    image: AppImages.home2.categories.bags,
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Jackie Sanders",
    role: "Microsoft Corporation",
    title: "Flexibility",
    message:
      "I am using Balik Theme... The Speed is Amazing, loads really fast which helps in conversion.",
    image: AppImages.home2.customers.women1,
  },
  {
    name: "Cory Zamora",
    role: "Marketing Specialist",
    title: "Design Quality",
    message:
      "Very nice theme, very complete and what I’ve loved is the customer care, they’re fast and solved all my problems.",
    image: AppImages.home2.customers.women2,
  },
  {
    name: "Alexander Harvard",
    role: "Sales Specialist",
    title: "Customer Support",
    message:
      "This is the best Shopify theme I’ve ever used. Thank you for making this theme and catering to my needs.",
    image: AppImages.home2.customers.menBanner,
  },
  {
    name: "Cories Ambady",
    role: "Sales Manager",
    title: "Customer Support",
    message:
      "I love this theme. Looks great and easy to configure. Customer Service is top-notch.",
    image: AppImages.home2.customers.miniDress,
  },
  {
    name: "Herman Miller",
    role: "Graphic Designer",
    title: "Customizability",
    message:
      "The theme is absolutely wonderful, feature-rich, customizable and it looks fantastic.",
    image: AppImages.home2.customers.newBags,
  },
  {
    name: "Jackie Sanders",
    role: "Microsoft Corporation",
    title: "Feature Availability",
    message: "Fantastic theme and next level support. 10/10 support.",
    image: AppImages.home2.customers.boxWoman,
  },
  {
    name: "Herman Miller",
    role: "Graphic Designer",
    title: "Design & CODE Quality",
    message: "The theme has so many features, loads fast, and AMAZING.",
    image: AppImages.home2.customers.women4,
  },
  {
    name: "Cory Zamora",
    role: "Marketing Specialist",
    title: "Design Quality",
    message:
      "The developers response time was very quick and they made tweaks for me when needed.",
    image: AppImages.home2.customers.menB,
  },
];

const categories: Category[] = [
  {
    title: "Party and Events",
    items: 36,
    image: AppImages.home2.categories.partyDress,
    link: "/collections/women",
  },
  {
    title: "Linen Collection",
    items: 30,
    image: AppImages.home2.categories.linen,
    link: "/collections/linen",
  },
  {
    title: "Men Shirts",
    items: 23,
    image: AppImages.home2.categories.menShirts,
    link: "/collections/men-shirts",
  },
  {
    title: "Bags Collection",
    items: 36,
    image: AppImages.home2.categories.bags,
    link: "/collections/women",
  },
  {
    title: "Summer Collection",
    items: 30,
    image: AppImages.home2.categories.summer,
    link: "/collections/summer",
  },
  {
    title: "Accessories",
    items: 23,
    image: AppImages.home2.categories.acces,
    link: "/collections/accessories",
  },
];

const supportData: SupportItem[] = [
  {
    icon: <FaShippingFast />,
    title: "Free Shipping & Return",
    subtitle: "Free shipping on all US orders",
  },
  {
    icon: <FaRegMoneyBillAlt />,
    title: "Money Guarantee",
    subtitle: "30 days money back guarantee",
  },
  {
    icon: <BiSupport />,
    title: "Online Support",
    subtitle: "We support online 24/7 every day",
  },
  {
    icon: <RiSecurePaymentFill />,
    title: "Secure Payments",
    subtitle: "All payments are secured and trusted.",
  },
];

const products: Product[] = [
  {
    id: 1,
    imageUrl: AppImages.home2.products.product1,
    title: "Top with Surplice Neckline",
    price: 5000,
    oldPrice: 7000,
    discount: 28,
    handle: "top-with-surplice-neckline",
  },
  {
    id: 2,
    imageUrl: AppImages.home2.products.product2,
    title: "Cropped Top",
    price: 50000,
    colors: ["#f8c2c0", "#d6a6a0", "#e4b49a"],
    handle: "top-with-surplice-neckline",
  },
  {
    id: 3,
    imageUrl: AppImages.home2.products.product3,
    title: "Epicurean iPad Case",
    price: 30000,
    handle: "top-with-surplice-neckline",
  },
  {
    id: 4,
    imageUrl: AppImages.home2.products.product4,
    title: "Slip-On Walking Shoes",
    price: 3000,
    oldPrice: 4000,
    discount: 25,
    handle: "top-with-surplice-neckline",
  },
  {
    id: 5,
    imageUrl: AppImages.home2.products.product5,
    title: "Miya Necklace",
    price: 14800,
    handle: "top-with-surplice-neckline",
  },
  {
    id: 6,
    imageUrl: AppImages.home2.products.product6,
    title: "Rio Cardigan",
    price: 27880,
    handle: "top-with-surplice-neckline",
  },
  {
    id: 7,
    imageUrl: AppImages.home2.products.product7,
    title: "Tenda Bag",
    price: 114800,
    handle: "top-with-surplice-neckline",
  },
  {
    id: 8,
    imageUrl: AppImages.home2.products.product8,
    title: "Aqualina Sandal",
    price: 35800,
    handle: "top-with-surplice-neckline",
  },
];

// ------------------ Component ------------------
const Home2 = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);

  return (
    <>
      <header className="w-full border-b relative">
        <nav className="flex items-center justify-between px-4 sm:px-6 py-4 max-w-screen-2xl mx-auto bg-white">
          <div className="hidden lg:flex items-center gap-6">
            {["Home", "Shop", "Product", "Pages", "Blog"].map((item, i) => (
              <Link key={i} href="/" className="text-sm hover:text-black">
                {item}
              </Link>
            ))}
          </div>

          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <FiX className="text-2xl" />
              ) : (
                <FiMenu className="text-2xl" />
              )}
            </button>
          </div>

          <div className="flex-shrink-0">
            <Link href="#" className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-wide">Asvayuk</span>
            </Link>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <FiSearch
              className="text-xl cursor-pointer"
              onClick={() => setSearchOpen(true)}
            />
            <FiUser className="text-xl cursor-pointer" />
            <FiHeart className="text-xl cursor-pointer" />
            <div className="relative">
              <FiShoppingBag className="text-xl cursor-pointer" />
              <span className="absolute -top-2 -right-2 text-[10px] bg-black text-white w-4 h-4 flex items-center justify-center rounded-full">
                0
              </span>
            </div>
          </div>
        </nav>

        {menuOpen && (
          <div className="lg:hidden bg-white border-t shadow-md">
            <div className="flex flex-col p-4 space-y-3">
              {["Home", "Shop", "Product", "Pages", "Blog"].map((item, i) => (
                <Link
                  key={i}
                  href="/"
                  className="text-sm text-gray-800 hover:text-black"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Search Overlay */}
        {searchOpen && (
          <div className="fixed inset-0 bg-white z-50 p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <p className="text-xl font-bold">What are you looking for?</p>
              <button onClick={() => setSearchOpen(false)}>
                <FiX className="text-xl" />
              </button>
            </div>

            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search for items"
                className="w-full border px-4 py-2 text-sm outline-0"
              />
              <FiSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400" />
            </div>

            <div className="mb-4">
              <p className="font-semibold mb-2 text-sm">Quick Search:</p>
              <div className="flex flex-wrap gap-4 text-sm text-black">
                {["Dress", "Top", "Shorts", "Accessories"].map((item, i) => (
                  <Link key={i} href="#" className="underline">
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold mb-4 text-sm">You may also like</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {suggestions.map((item, idx) => (
                  <div key={idx} className="text-sm">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto object-cover mb-2"
                      height={200}
                      width={200}
                    />
                    <p className="text-xs text-gray-600 line-through">
                      {item.oldPrice || ""}
                    </p>
                    <p className="font-medium text-gray-800">{item.title}</p>
                    <p className="text-gray-700">{item.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Promo Bar */}
        <div className="bg-[#161616] text-center text-sm text-white py-2 px-2">
          <span className="block sm:inline">
            SPECIAL OFFER: ENJOY 3 MONTHS OF SHOPIFY FOR $1/MONTH
          </span>
        </div>
      </header>

      <section className="relative w-full h-[80vh] sm:h-[85vh] md:h-[75vh] overflow-hidden">
        {/* Background Image */}
        <Image
          src={AppImages.home2.products.topBanner}
          alt="New Collection"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 z-10" />

        {/* Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center sm:justify-end md:justify-end bottom-12 text-center text-white px-4">
          <p className="text-xs sm:text-sm md:text-base font-medium mb-2">
            BEST SELLER SINCE 2010
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
            New Collection
          </h1>
          <Link
            href="/shop"
            className="px-5 py-2.5 md:px-6 md:py-3 border border-white hover:bg-white hover:text-black transition text-sm md:text-base font-semibold"
          >
            SHOP NOW
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-1 py-1">
        {categories.map((cat, i) => (
          <CategoryCard key={i} {...cat} />
        ))}
      </section>

      <section className="px-4 py-16 max-w-screen-xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-xl font-semibold">Explore New Arrivals</h2>
          <p className="text-gray-500 text-sm">
            Discover iconic styles just added to the store
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCardHome2 key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="py-20 testimonialSection">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-semibold text-gray-800 mb-10">
            Happy Customers
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {testimonials.map((testimonial, i) => (
              <TestimonialCard key={i} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCardHome2 key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto py-10 px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center bg-white">
          {supportData.map((item, idx) => (
            <div key={idx} className="space-y-2 text-center">
              <div className="text-4xl inline-flex justify-center items-center bg-gray-100 p-3 rounded-full">
                {item.icon}
              </div>
              <h4 className="font-semibold">{item.title}</h4>
              <p className="text-sm text-gray-500">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative bg-gray-100">
        <div className="relative w-full">
          <Image
            src={AppImages.home2.products.bottomBanner}
            alt="Promo"
            className="object-cover"
            fill
          />
          <div className="max-w-screen-xl mx-auto absolute inset-0 flex items-center justify-start px-10">
            <div>
              <h3 className="text-2xl md:text-4xl font-bold text-red-600">
                Flat 30% OFF
              </h3>
              <p className="text-lg md:text-3xl font-bold text-gray-800">
                Hurry Up! Sale will end soon
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white text-sm pt-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 pb-10">
            {/* Info */}
            <div>
              <h5 className="font-semibold mb-4">Informations</h5>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="hover:underline">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:underline">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:underline">
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:underline">
                    Terms & condition
                  </Link>
                </li>
                <li>
                  <Link href="/account" className="hover:underline">
                    My Account
                  </Link>
                </li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h5 className="font-semibold mb-4">Customer Service</h5>
              <ul className="space-y-2">
                <li>
                  <Link href="/request-data" className="hover:underline">
                    Request Personal Data
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:underline">
                    FAQ’s
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/orders" className="hover:underline">
                    Orders and Returns
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="hover:underline">
                    Support Center
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h5 className="font-semibold mb-4">Contact Us</h5>
              <p>55 Gallaxy Enque, 2568 street, 23568 NY</p>
              <p className="py-1">
                Phone : <Link href="tel:+91 7854785432">+91 7854785432</Link>
              </p>
              <p className="py-1">
                Email :{" "}
                <Link href="mailto: sales@yousite.com">sales@yousite.com</Link>
              </p>
              <h5 className="font-semibold mb-4 pt-4">Stay Connected</h5>
              <div className="flex space-x-4 mt-4 text-lg">
                <Link
                  href="#"
                  aria-label="Facebook"
                  className="hover:text-gray-300 transition"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href="#"
                  aria-label="Instagram"
                  className="hover:text-gray-300 transition"
                >
                  <FaInstagram />
                </Link>
                <Link
                  href="#"
                  aria-label="Pinterest"
                  className="hover:text-gray-300 transition"
                >
                  <FaPinterestP />
                </Link>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h5 className="font-semibold mb-4">Newsletter</h5>
              <p className="mb-4">
                Enter your email to receive daily news and get 20% off coupon.
                NO spam, we promise.
              </p>
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-2 mb-3 text-black bg-white outline-0"
              />
              <button className="w-full bg-rose-400 hover:bg-rose-500 text-white py-2">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 text-center py-4 text-xs">
          © 2025 <strong>Asvayuk</strong>. All Rights Reserved
        </div>
      </footer>
    </>
  );
};

export default Home2;
