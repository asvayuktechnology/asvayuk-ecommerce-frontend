"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomInput from "@/components/ui/common/inputs/CustomInput";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { changePasswordSchema } from "@/schemas/changePasswordSchemas/changePasswordSchemas";

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      email: "justin@gmail.com",
    },
  });

  const onSubmit = (data) => {
    console.log("Change Password Data:", data);
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-4 rounded-md">
      <div className="md:grid md:grid-cols-1">
        {/* Email (read-only) */}
        <div className="mb-4">
          <CustomInput
            label="Email Address"
            type="email"
            readOnly
            icon={<FaEnvelope className="text-gray-400" />}
            className="bg-gray-100 text-gray-500"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-red-400 text-sm">{errors.email.message}</span>
          )}
        </div>

        {/* Current Password */}
        <div className="mb-4">
          <CustomInput
            label="Current Password"
            type="password"
            placeholder="Enter Current Password"
            autoComplete="current-password"
            icon={<FaLock className="text-gray-400" />}
            {...register("currentPassword")}
          />
          {errors.currentPassword && (
            <span className="text-red-400 text-sm">
              {errors.currentPassword.message}
            </span>
          )}
        </div>

        {/* New Password */}
        <div className="mb-4">
          <CustomInput
            label="New Password"
            type="password"
            placeholder="Enter New Password"
            autoComplete="new-password"
            icon={<FaLock className="text-gray-400" />}
            {...register("newPassword")}
          />
          {errors.newPassword && (
            <span className="text-red-400 text-sm">
              {errors.newPassword.message}
            </span>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-5 text-right">
        <button
          type="submit"
          className="bg-emerald-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-emerald-600 transition cursor-pointer"
        >
          Change Password
        </button>
      </div>
    </form>
  );
};

export default ChangePassword;
