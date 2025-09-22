"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import deliveryBoy from "../../../../public/images/delivery-boy.png";
import ProductModalCard from "@/components/products/productsInfo/ProductModalCard";
import ProductCard from "@/components/products/productsInfo/ProductCard";
import BannerCarousel from "@/components/ui/common/carousel/BannerCarousel";
import AppImages from "@/config/constant/app.images";
import { getProducts } from "@/services/productService";
import FeaturedCategories from "./FeaturedCategories";
import CouponCard from "@/components/products/couponCard/CouponCard";
import FullPageLoader from "@/components/ui/common/loader/FullPageLoader";

interface Product {
  id: number;
  title: string;
  price: number;
  description?: string;
  image: string;
}

interface Coupon {
  id: number;
  image: string;
  title: string;
  discount: string;
  couponCode: string;
  status: "Active" | "Inactive";
  deadline: Date;
}

interface Timer {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const COUPONS: Coupon[] = [
  {
    id: 1,
    image: AppImages.categories.ins1,
    title: "August Gift Voucher",
    discount: "50%",
    couponCode: "AUGUST24",
    status: "Active",
    deadline: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
  },
  {
    id: 2,
    image: AppImages.categories.ins1,
    title: "Monsoon Sale",
    discount: "30%",
    couponCode: "MONSOON30",
    status: "Active",
    deadline: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
  },
];

const Home: React.FC = () => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [timers, setTimers] = useState<Record<number, Timer>>({});
  const [statuses, setStatuses] = useState<
    Record<number, "Active" | "Inactive">
  >({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data: Product[] = await getProducts();
        setData(data);
        setLoading(true);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCopy = (idx: number, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedTimers: Record<number, Timer> = {};
      const updatedStatuses: Record<number, "Active" | "Inactive"> = {};

      COUPONS.forEach((coupon) => {
        const now = new Date();
        const diff = coupon.deadline.getTime() - now.getTime();

        if (diff <= 0) {
          updatedTimers[coupon.id] = {
            days: "00",
            hours: "00",
            minutes: "00",
            seconds: "00",
          };
          updatedStatuses[coupon.id] = "Inactive";
        } else {
          const d = Math.floor(diff / (1000 * 60 * 60 * 24));
          const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
          const m = Math.floor((diff / 1000 / 60) % 60);
          const s = Math.floor((diff / 1000) % 60);

          updatedTimers[coupon.id] = {
            days: String(d).padStart(2, "0"),
            hours: String(h).padStart(2, "0"),
            minutes: String(m).padStart(2, "0"),
            seconds: String(s).padStart(2, "0"),
          };
          updatedStatuses[coupon.id] = "Active";
        }
      });

      setTimers(updatedTimers);
      setStatuses(updatedStatuses);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="bannerwrapper bg-white">
        <div className="mx-auto py-5 max-w-screen-2xl px-3 sm:px-10">
          <div className="w-full lg:flex">
            <div className="flex-shrink-0 xl:pr-6 lg:block w-full lg:w-3/5 rounded-lg overflow-hidden">
              <BannerCarousel />
            </div>
            <div className="w-full group hidden lg:block">
              <div className="bg-gray-50 h-full border-2 border-orange-500 transition duration-150 ease-linear transform group-hover:border-emerald-500 rounded shadow">
                <div className="bg-orange-100 text-gray-900 px-6 py-2 rounded-t border-b flex items-center justify-center">
                  <h3 className="text-base  font-medium">
                    Latest Super Discount Active Coupon Code
                  </h3>
                </div>

                <div className="overflow-hidden">
                  {COUPONS.map((coupon, idx) => (
                    <CouponCard
                      key={idx}
                      image={coupon.image}
                      title={coupon.title}
                      discount={coupon.discount}
                      status={statuses[coupon.id] || coupon.status}
                      couponCode={coupon.couponCode}
                      copied={copiedIndex === idx}
                      timeLeft={
                        timers[coupon.id] || {
                          days: "00",
                          hours: "00",
                          minutes: "00",
                          seconds: "00",
                        }
                      }
                      minAmount={2000}
                      onCopy={() => handleCopy(idx, coupon.couponCode)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#FFEDD4] px-10 py-6 rounded-lg mt-6">
            <div className="lg:flex lg:justify-between lg:items-center">
              <div className="mb-4 lg:mb-0">
                <h1 className=" text-xl">
                  <span className="text-emerald-600 font-bold">
                    100% Natural Quality Organic Product
                  </span>{" "}
                </h1>
                <p className="text-gray-500">
                  See Our latest discounted products from here and get a special
                  discount product
                </p>
              </div>
              <Link
                className="text-sm font-medium px-6 py-2 bg-emerald-500 text-center rounded-full text-white hover:bg-emerald-700"
                href="/product"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>

        <FeaturedCategories />

        <ProductModalCard
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          product={selectedProduct}
        />

        <div className="bg-gray-50">
          <div className=" lg:py-16 py-10 mx-auto max-w-screen-2xl px-3 sm:px-10">
            <div className="mb-10 flex justify-center">
              <div className="text-center w-full lg:w-2/5">
                <h2 className="text-xl lg:text-2xl mb-2  font-semibold text-black">
                  Popular Products for Daily Shopping
                </h2>
                <p className="text-base font-sans text-gray-600 leading-6">
                  See all our popular products in this week. You can choose your
                  daily needs products from this list and get some special offer
                  with free shipping.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="w-full">
                {loading ? (
                  <FullPageLoader />
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                    {data.map((item) => (
                      <ProductCard
                        id={item.id}
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        stock={item.rating.count}
                        imageUrl={item.image}
                        onClick={() => openProductModal(item)}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 py-15">
          <div className=" block mx-auto max-w-screen-2xl">
            <div className="mx-auto max-w-screen-2xl px-4 sm:px-10">
              <div className="lg:p-16 p-6 bg-emerald-500 shadow-sm rounded-lg">
                <div className="w-full bg-white shadow-sm lg:px-10 lg:py-5 p-6 rounded-lg">
                  <div className="flex justify-between items-center">
                    {/* Text Section */}
                    <div className="lg:w-3/5">
                      <span className="text-base lg:text-lg text-black">
                        Organic Products and Food
                      </span>
                      <h2 className=" text-lg lg:text-2xl font-bold mb-1 text-black">
                        Quick Delivery to Your Home
                      </h2>
                      <p className="text-sm font-sans leading-6 text-black">
                        There are many products you will find in our shop.
                        Choose your daily necessary product from our KachaBazar
                        shop and get some special offers. See our latest
                        discounted products and enjoy a special discount.
                      </p>
                      <Link
                        href="/#"
                        className="lg:w-1/3 text-xs  font-medium inline-block mt-5 px-8 py-3 bg-emerald-500 text-center text-white rounded-full hover:text-white"
                      >
                        Download App
                      </Link>
                    </div>

                    {/* Image Section */}
                    <div className="w-1/5 flex-grow hidden md:flex lg:justify-end">
                      <Image
                        src={deliveryBoy}
                        alt="Quick Delivery to Your Home"
                        width={373}
                        height={250}
                        className="block w-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50">
          <div className=" lg:py-16 py-10 mx-auto max-w-screen-2xl px-3 sm:px-10">
            <div className="mb-10 flex justify-center">
              <div className="text-center w-full lg:w-2/5">
                <h2 className="text-xl lg:text-2xl mb-2  font-semibold text-black">
                  Popular Products for Daily Shopping
                </h2>
                <p className="text-base font-sans text-gray-600 leading-6">
                  See all our popular products in this week. You can choose your
                  daily needs products from this list and get some special offer
                  with free shipping.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="w-full">
                {loading ? (
                  <FullPageLoader />
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                    {data.map((item) => (
                      <ProductCard
                        id={item.id}
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        stock={item.rating.count}
                        imageUrl={item.image}
                        onClick={() => openProductModal(item)}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
