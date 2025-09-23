import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/schemas/authSchemas/authSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomInput from "@/components/ui/common/inputs/CustomInput";
import { TbMailBitcoin } from "react-icons/tb";
import { RiEyeLine, RiEyeOffLine, RiLockPasswordLine } from "react-icons/ri";
import z from "zod";
type loginSchemaData = z.infer<typeof loginSchema>;

const Loginform = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginSchemaData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: loginSchemaData) => {
    console.log("Login Data:", data);
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
              {...register("email")}
              label="Email"
              placeholder="Email"
              icon={<TbMailBitcoin className="w-5 h-5 text-gray-500" />}
            />
            {errors.email && (
              <span className="text-red-400 text-sm mt-2">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="form-group relative">
            <CustomInput
              {...register("password", { required: "Password is required" })}
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
              {showPassword ? (
                <RiEyeOffLine className="w-4 h-4" />
              ) : (
                <RiEyeLine className="w-4 h-4" />
              )}
            </button>

            {errors.password && (
              <span className="text-red-400 text-sm mt-2">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex ms-auto">
              <Link
                className="text-black text-end text-sm text-heading ps-3 underline hover:no-underline focus:outline-none"
                href="/auth/reset"
              >
                Forgot password?
              </Link>
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-emerald-500 text-white hover:bg-emerald-600 transition-all focus:outline-none my-1 cursor-pointer font-semibold"
          >
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default Loginform;
