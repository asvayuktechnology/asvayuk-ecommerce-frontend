'use client';
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Loginform from "@/components/forms/loginform/Loginform";
import Registerfrom from "@/components/forms/registerform/Registerfrom";
import Recoverpassword from "@/components/forms/forgotpassword/Recoverpassword";

const Authlayout = () => {
    const pathname = usePathname();

    // Determine which page to render
    let currentPage = "login";
    if (pathname.includes("/register")) {
        currentPage = "register";
    } else if (pathname.includes("/reset")) {
        currentPage = "reset";
    }

    // Titles and descriptions for each page
    const pageTitles: Record<string, string> = {
        login: "Login",
        register: "Register",
        reset: "Forgot Password",
    };

    const pageDescriptions: Record<string, string> = {
        login: "Login with your email and password",
        register: "Create an account by signing up with provider or email/password",
        reset: "Enter your email to reset your password",
    };

    // Forms for each page
    const pageForms: Record<string, React.ReactNode> = {
        login: <Loginform />,
        register: <Registerfrom />,
        reset: <Recoverpassword />,
    };

    return (
        <div className="bg-gray-50">
            <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
                <div className="py-4 flex flex-col lg:flex-row w-full">
                    <div className="w-full sm:p-5 lg:p-8">
                        <div className="mx-auto text-left justify-center w-full max-w-lg px-4 py-8 sm:p-10 overflow-hidden align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <div className="overflow-hidden mx-auto">
                                {/* Page Header */}
                                <div className="text-center mb-6">
                                    <h2 className="text-3xl font-bold text-black">
                                        {pageTitles[currentPage]}
                                    </h2>
                                    <p className="text-sm md:text-base text-gray-500 mt-2 mb-8 sm:mb-10">
                                        {pageDescriptions[currentPage]}
                                    </p>
                                </div>

                                {/* Page Form */}
                                {pageForms[currentPage]}

                                {/* Sign Up link only on login page */}
                                {currentPage === "login" && (
                                    <div className="text-center text-sm text-gray-900 mt-4">
                                        <div className="text-gray-500 mt-2.5">
                                            Don&#39;t have an account?
                                            <Link
                                                href="/auth/register"
                                                className="text-gray-800 hover:text-green-500 font-bold mx-2"
                                            >
                                                <span className="capitalize">Sign Up</span>
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Authlayout;
