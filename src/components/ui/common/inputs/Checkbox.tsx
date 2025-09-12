"use client";
import React, { InputHTMLAttributes, ReactNode } from "react";

interface CheckboxProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    label?: string | ReactNode; // Optional: can pass string, JSX, or nothing
}

const Checkbox: React.FC<CheckboxProps> = ({ label, className, ...props }) => {
    return (
        <label className="flex items-center gap-2 cursor-pointer">
            <input
                type="checkbox"
                {...props}
                className={`w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500 ${
                    className || ""
                }`}
            />
            {label && <span className="text-gray-700 text-sm">{label}</span>}
        </label>
    );
};

export default Checkbox;
