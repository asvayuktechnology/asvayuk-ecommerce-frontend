"use client";
import CouponCard from "@/components/products/couponCard/CouponCard";
import AppImages from "@/config/constant/app.images";
import React, { useEffect, useState } from "react";

// ✅ Define a type for a single coupon
interface Coupon {
    id: number;
    image: string;
    title: string;
    discount: string;
    couponCode: string;
    status: string;
    deadline: Date;
}

// ✅ Define a type for timers
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
    // repeated coupons...
];

const OfferPage: React.FC = () => {
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
    const [timers, setTimers] = useState<Record<number, Timer>>({});

    const handleCopy = (idx: number, code: string) => {
        navigator.clipboard.writeText(code);
        setCopiedIndex(idx);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const updatedTimers: Record<number, Timer> = {};

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
                }
            });

            setTimers(updatedTimers);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="bannerbg flex justify-center py-10 lg:py-20 bg-indigo-100 w-full bg-cover bg-no-repeat bg-bottom">
                <div className="flex mx-auto w-full max-w-screen-2xl px-3 sm:px-10">
                    <div className="w-full flex justify-center flex-col relative">
                        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-center text-black">
                            Mega Offer
                        </h2>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-screen-2xl px-4 py-10 lg:py-20 sm:px-10">
                <div className="grid gap-6 grid-cols-1 xl:grid-cols-2">
                    {COUPONS.map((coupon, idx) => (
                        <CouponCard
                            key={idx}
                            image={coupon.image}
                            title={coupon.title}
                            discount={coupon.discount}
                            status={coupon.status}
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
                            onCopy={() => handleCopy(idx, coupon.couponCode)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default OfferPage;
