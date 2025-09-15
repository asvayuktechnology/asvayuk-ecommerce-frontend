"use client";

import Link from "next/link";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";
import CustomInput from "@/components/ui/common/inputs/CustomInput";
import {
  CheckoutFormValues,
  checkoutSchema,
} from "@/schemas/checkoutSchemas/checkoutSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import CustomSelect from "@/components/ui/common/inputs/CustomSelect";
import { useState } from "react";
import { City, Country, State } from "country-state-city";

export default function CheckoutForm() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      address: "",
      zipCode: "",
      country: "",
      state: "",
      city: "",
      paymentMethod: undefined,
    },
  });

  const onSubmit = (data: CheckoutFormValues) => {
    console.log("Checkout Form Data:", data);
    alert(JSON.stringify(data));
  };

  const countryOptions = Country.getAllCountries().map((c) => ({
    label: c.name,
    value: c.isoCode,
  }));

  const stateOptions = selectedCountry
    ? State.getStatesOfCountry(selectedCountry).map((s) => ({
        label: s.name,
        value: s.isoCode,
      }))
    : [];

  const cityOptions =
    selectedCountry && selectedState
      ? City.getCitiesOfState(selectedCountry, selectedState).map((c) => ({
          label: c.name,
          value: c.name,
        }))
      : [];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Personal Details */}
      <div className="mb-8">
        <h2 className="font-semibold text-base text-gray-700 pb-3">
          01. Personal Details
        </h2>
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <CustomInput
              label="First Name"
              placeholder="John"
              icon={<FaUser className="text-gray-400" />}
              error={errors.firstName?.message}
              {...register("firstName")}
            />
            {errors.firstName && (
              <span className="text-red-400 text-sm mt-2">
                {errors.firstName.message}
              </span>
            )}
          </div>
          <div className="col-span-6 sm:col-span-3">
            <CustomInput
              label="Last Name"
              placeholder="Doe"
              icon={<FaUser className="text-gray-400" />}
              error={errors.lastName?.message}
              {...register("lastName")}
            />
            {errors.lastName && (
              <span className="text-red-400 text-sm mt-2">
                {errors.lastName.message}
              </span>
            )}
          </div>
          <div className="col-span-6 sm:col-span-3">
            <CustomInput
              label="Email Address"
              placeholder="youremail@gmail.com"
              type="email"
              icon={<FaEnvelope className="text-gray-400" />}
              error={errors.email?.message}
              {...register("email")}
            />
            {errors.email && (
              <span className="text-red-400 text-sm mt-2">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="col-span-6 sm:col-span-3">
            <CustomInput
              label="Phone Number"
              placeholder="+062-6532956"
              type="tel"
              icon={<FaPhone className="text-gray-400" />}
              error={errors.contact?.message}
              {...register("contact")}
            />
            {errors.contact && (
              <span className="text-red-400 text-sm mt-2">
                {errors.contact.message}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Shipping Details */}
      <div className="mb-8">
        <h2 className="font-semibold text-base text-gray-700 pb-3">
          02. Shipping Details
        </h2>
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <CustomSelect
                  label="Country"
                  value={field.value}
                  options={countryOptions}
                  onChange={(e) => {
                    const val = e.target.value;
                    field.onChange(val);
                    setSelectedCountry(val);
                    setSelectedState("");
                  }}
                />
              )}
            />
            {errors.country && (
              <span className="text-red-400 text-sm mt-2">
                {errors.country.message}
              </span>
            )}
          </div>

          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            <Controller
              name="state"
              control={control}
              render={({ field }) => (
                <CustomSelect
                  label="State"
                  value={field.value}
                  options={stateOptions}
                  onChange={(e) => {
                    const val = e.target.value;
                    field.onChange(val);
                    setSelectedState(val);
                  }}
                />
              )}
            />
            {errors.state && (
              <span className="text-red-400 text-sm mt-2">
                {errors.state.message}
              </span>
            )}
          </div>

          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <CustomSelect
                  label="City"
                  value={field.value}
                  options={cityOptions}
                  onChange={(e) => field.onChange(e.target.value)} // ✅ directly sync
                />
              )}
            />
            {errors.city && (
              <span className="text-red-400 text-sm mt-2">
                {errors.city.message}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <div className="mb-8">
        <h2 className="font-semibold text-base text-gray-700 pb-3">
          03. Payment Method
        </h2>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
          {["Cash", "Card", "RazorPay"].map((method) => (
            <label
              key={method}
              className={`flex items-center justify-between border rounded-md p-4 cursor-pointer ${
                errors.paymentMethod ? "border-red-500" : "border-gray-200"
              }`}
            >
              <div className="flex items-center gap-2 text-gray-600">
                <h6 className="font-medium text-sm">{method}</h6>
              </div>
              <input
                type="radio"
                value={method}
                {...register("paymentMethod")}
              />
            </label>
          ))}
        </div>
        {errors.paymentMethod && (
          <p className="text-red-500 text-sm mt-1">
            {errors.paymentMethod.message}
          </p>
        )}
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-6 gap-4 lg:gap-6 mt-10">
        <div className="col-span-6 sm:col-span-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 w-full h-10 px-4 py-2 text-white bg-indigo-500 hover:bg-indigo-600 rounded-sm text-sm font-medium cursor-pointer"
          >
            Continue Shopping
          </Link>
        </div>
        <div className="col-span-6 sm:col-span-3">
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 w-full h-10 px-4 py-2 text-white bg-[#00BBA7] hover:bg-teal-600 rounded-sm text-sm font-medium cursor-pointer"
          >
            Confirm Order
          </button>
        </div>
      </div>
    </form>
  );
}
