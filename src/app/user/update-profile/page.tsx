"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchemas } from "@/schemas/userSchemas/userSchemas";
import CustomInput from "@/components/ui/common/inputs/CustomInput";
import z from "zod";

type UserFormData = z.infer<typeof userSchemas>;

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchemas),
  });

  const onSubmit = (data: UserFormData) => {
    console.log("Signup Data:", data);
    alert(JSON.stringify(data));
  };
  return (
    <div className="max-w-screen-2xl">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h2 className="text-xl  font-semibold mb-5 text-black">
              Update Profile
            </h2>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <div className="bg-white space-y-6">
            <div>
              <label className="block text-gray-500 font-medium text-sm leading-none mb-2">
                Photo
              </label>
              <div className="mt-1 flex items-center">
                <div className="w-full text-center">
                  <label
                    htmlFor="image"
                    className="px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer relative block"
                  >
                    <span className="mx-auto flex justify-center">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-3xl text-emerald-500"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="16 16 12 12 8 16" />
                        <line x1={12} y1={12} x2={12} y2={21} />
                        <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
                        <polyline points="16 16 12 12 8 16" />
                      </svg>
                    </span>
                    <p className="text-sm mt-2">Drag your image here</p>
                    <em className="text-xs text-gray-400">
                      (Only *.jpeg and *.png images will be accepted)
                    </em>
                  </label>

                  {/* hidden input */}
                  <CustomInput
                    id="image"
                    type="file"
                    accept="image/jpeg,.jpeg,image/png,.png"
                    {...register("image")}
                    className="hidden"
                  />

                  {errors.image?.message && (
                    <span className="text-red-400 text-sm">
                      {String(errors.image.message)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 sm:mt-0">
            <div className="md:grid-cols-6 md:gap-6">
              <div className="mt-5 md:mt-0 md:col-span-2">
                <div className="lg:mt-6 mt-4 bg-white">
                  <div className="grid grid-cols-6 gap-6">
                    {/* Full Name */}
                    <div className="col-span-6 sm:col-span-3">
                      <CustomInput
                        {...register("name")}
                        placeholder="Full Name"
                        label="Full Name"
                      />
                      {errors.name && (
                        <span className="text-red-400 text-sm">
                          {errors.name.message}
                        </span>
                      )}
                    </div>

                    {/* Address */}
                    <div className="col-span-6 sm:col-span-3">
                      <CustomInput
                        {...register("address")}
                        placeholder="Address"
                        label="Address"
                      />
                      {errors.address && (
                        <span className="text-red-400 text-sm">
                          {errors.address.message}
                        </span>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="col-span-6 sm:col-span-3">
                      <CustomInput
                        type="tel"
                        {...register("phone")}
                        placeholder="Phone/Mobile"
                        label="Phone/Mobile"
                      />
                      {errors.phone && (
                        <span className="text-red-400 text-sm">
                          {errors.phone.message}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="col-span-6 sm:col-span-3">
                      <CustomInput
                        type="email"
                        {...register("email")}
                        placeholder="Email Address"
                        label="Email Address"
                      />
                      {errors.email && (
                        <span className="text-red-400 text-sm">
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="col-span-6 sm:col-span-3 mt-5 text-right">
                    <button
                      type="submit"
                      className="md:text-sm leading-5 inline-flex items-centertransition ease-in-out duration-300 text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-emerald-500 text-white px-5 md:px-6 lg:px-8 py-2 md:py-3 lg:py-3 hover:text-white hover:bg-emerald-600 h-12 mt-1 text-sm lg:text-sm w-full sm:w-auto cursor-pointer font-semibold"
                    >
                      Update Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Page;
