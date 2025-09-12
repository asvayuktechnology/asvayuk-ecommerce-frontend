"use client";
import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "@/schemas/authSchemas/authSchemas";
import { LuUserRound } from "react-icons/lu";
import { RiLockPasswordLine } from "react-icons/ri";
import { TbMailBitcoin } from "react-icons/tb";
import CustomInput from "@/components/ui/common/inputs/CustomInput";

const Registerfrom = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(signupSchema),
    });

    const onSubmit = (data) => {
        console.log("Signup Data:", data);
        alert(JSON.stringify(data));
    };
    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col justify-center"
            >
                <div className="grid grid-cols-1 gap-5">
                    <div className="form-group">
                        <CustomInput
                            {...register("name")}
                            label="Name"
                            placeholder="Full Name"
                            icon={
                                <LuUserRound className="w-5 h-5 text-gray-500" />
                            }
                        />
                        {errors.name && (
                            <span className="text-red-400 text-sm mt-2">
                                {errors.name.message}
                            </span>
                        )}
                    </div>

                    <div className="form-group">
                        <CustomInput
                            {...register("email")}
                            label="Email"
                            placeholder="Email"
                            icon={
                                <TbMailBitcoin className="w-5 h-5 text-gray-500" />
                            }
                        />
                        {errors.email && (
                            <span className="text-red-400 text-sm mt-2">
                                {errors.email.message}
                            </span>
                        )}
                    </div>
                    <div className="form-group">
                        <CustomInput
                            {...register("password")}
                            label="Password"
                            placeholder="Password"
                            icon={
                                <RiLockPasswordLine className="w-5 h-5 text-gray-500" />
                            }
                        />
                        {errors.password && (
                            <span className="text-red-400 text-sm mt-2">
                                {errors.password.message}
                            </span>
                        )}
                    </div>
                    <div className="form-group">
                        <CustomInput
                            {...register("confirmPassword")}
                            label="Confirm Password"
                            placeholder="Confirm Password"
                            icon={
                                <RiLockPasswordLine className="w-5 h-5 text-gray-500" />
                            }
                        />
                        {errors.confirmPassword && (
                            <span className="text-red-400 text-sm mt-2">
                                {errors.confirmPassword.message}
                            </span>
                        )}
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex ms-auto">
                            <Link
                                className="text-black text-end text-sm text-heading ps-3 underline hover:no-underline focus:outline-none"
                                href="/auth/login"
                            >
                                Already have account?
                            </Link>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-emerald-500 text-white hover:bg-emerald-600 transition-all focus:outline-none my-1 cursor-pointer font-semibold"
                    >
                        Sign up
                    </button>
                </div>
            </form>
        </>
    );
};

export default Registerfrom;
