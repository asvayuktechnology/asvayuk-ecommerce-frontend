"use client";
import React, { SelectHTMLAttributes, ReactNode } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

interface CustomSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    className?: string;
    icon?: ReactNode; // optional left-side icon
    options: { value: string | number; label: string }[];
}

const CustomSelect: React.FC<CustomSelectProps> = ({
    label,
    className,
    icon,
    options,
    ...props
}) => {
    return (
        <div className="flex flex-col w-full">
            {label && (
                <label className="block text-gray-500 font-medium text-sm mb-2">
                    {label}
                </label>
            )}
            <div className="relative w-full">
                {icon && (
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        {icon}
                    </div>
                )}
                <select
                    {...props}
                    className={`text-black py-2 pl-3 pr-8 w-full border text-sm rounded-md bg-white border-gray-200 focus:outline-none focus:border-emerald-500 appearance-none ${
                        icon ? "pl-10" : "pl-3"
                    } ${className || ""}`}
                >
                    {options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
                {/* Down arrow */}
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                    <IoMdArrowDropdown />
                </div>
            </div>
        </div>
    );
};

export default CustomSelect;
