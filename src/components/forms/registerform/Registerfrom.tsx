"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "@/schemas/authSchemas/authSchemas";
import { LuUserRound } from "react-icons/lu";
import { RiEyeLine, RiEyeOffLine, RiLockPasswordLine } from "react-icons/ri";
import { TbMailBitcoin } from "react-icons/tb";
import CustomInput from "@/components/ui/common/inputs/CustomInput";
import z from "zod";

type SignupSchemaData = z.infer<typeof signupSchema>;

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupSchemaData>({
    resolver: zodResolver(signupSchema),
  });

  const passwordValue = watch("password", "");

  const onSubmit = (data: SignupSchemaData) => {
    console.log("Signup Data:", data);
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center">
      <div className="grid grid-cols-1 gap-5">
        {/* Name */}
        <div className="form-group">
          <CustomInput
            {...register("name")}
            label="Name"
            placeholder="Full Name"
            icon={<LuUserRound className="w-5 h-5 text-gray-500" />}
          />
          {errors.name && (
            <span className="text-red-400 text-sm mt-2">{errors.name.message}</span>
          )}
        </div>

        {/* Email */}
        <div className="form-group">
          <CustomInput
            {...register("email")}
            label="Email"
            placeholder="Email"
            icon={<TbMailBitcoin className="w-5 h-5 text-gray-500" />}
          />
          {errors.email && (
            <span className="text-red-400 text-sm mt-2">{errors.email.message}</span>
          )}
        </div>

        {/* Password */}
        <div className="form-group relative">
          <CustomInput
            {...register("password")}
            label="Password"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            icon={<RiLockPasswordLine className="w-5 h-5 text-gray-500" />}
          />
          <button
            type="button"
            className="absolute right-3 top-[45px] text-gray-500 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <RiEyeOffLine className="w-4 h-4" /> : <RiEyeLine className="w-4 h-4" />}
          </button>
          {errors.password && (
            <span className="text-red-400 text-sm mt-2">{errors.password.message}</span>
          )}
        </div>

        {/* Confirm Password */}
        <div className="form-group relative">
          <CustomInput
            {...register("confirmPassword", {
              validate: (value) => value === passwordValue || "Passwords do not match",
            })}
            label="Confirm Password"
            placeholder="Confirm Password"
            type={showPassword ? "text" : "password"}
            icon={<RiLockPasswordLine className="w-5 h-5 text-gray-500" />}
          />
          <button
            type="button"
            className="absolute right-3 top-[45px] text-gray-500 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <RiEyeOffLine className="w-4 h-4" /> : <RiEyeLine className="w-4 h-4" />}
          </button>
          {errors.confirmPassword && (
            <span className="text-red-400 text-sm mt-2">{errors.confirmPassword.message}</span>
          )}
        </div>

        {/* Login Link */}
        <div className="flex items-center justify-between">
          <div className="flex ms-auto">
            <Link
              className="text-black text-end text-sm text-heading ps-3 underline hover:no-underline focus:outline-none"
              href="/auth/login"
            >
              Already have an account?
            </Link>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full text-center py-3 rounded bg-emerald-500 text-white hover:bg-emerald-600 transition-all focus:outline-none my-1 cursor-pointer font-semibold"
        >
          Sign up
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;