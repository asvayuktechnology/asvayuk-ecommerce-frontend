'use client';
import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordSchema } from "@/schemas/authSchemas/authSchemas";
import CustomInput from "@/components/ui/common/inputs/CustomInput";
import { TbMailBitcoin } from "react-icons/tb";

const Recoverpassword = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(forgotPasswordSchema),
    });

    const onSubmit = (data) => {
        console.log("Recover Password Data:", data);
        alert(JSON.stringify(data));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center">
            <div className="grid grid-cols-1 gap-5">
                <div className="form-group">
                    <CustomInput
                        type="email"
                        {...register("email")}
                        label="Email"
                        placeholder="Email"
                        icon={<TbMailBitcoin className="w-5 h-5 text-gray-500" />}
                        autoComplete="email"
                    />
                    {errors.email && (
                        <span className="text-red-400 text-sm mt-2">
                            {errors.email.message}
                        </span>
                    )}
                </div>
                    
                {/* Login link for navigation */}
                <div className="flex items-center justify-between">
                    <div className="flex ms-auto">
                        <Link
                            href="/auth/login"
                            className="text-black text-end text-sm text-heading ps-3 underline hover:no-underline focus:outline-none"
                        >
                            You want Login?
                        </Link>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full text-center py-3 rounded bg-emerald-500 text-white hover:bg-emerald-600 transition-all focus:outline-none my-1 cursor-pointer font-semibold"
                >
                    Recover Password
                </button>
            </div>
        </form>
    );
};

export default Recoverpassword;
