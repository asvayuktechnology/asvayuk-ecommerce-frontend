"use client";
import React, { InputHTMLAttributes, ReactNode } from "react";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    icon?: ReactNode;
    label?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
    className,
    icon,
    label,
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
                <input
                    {...props}
                    className={`text-black py-2 pl-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-1 ${
                        icon ? "pl-10" : "pl-3"
                    } ${className || ""}`}
                />
            </div>
        </div>
    );
};

export default CustomInput;
