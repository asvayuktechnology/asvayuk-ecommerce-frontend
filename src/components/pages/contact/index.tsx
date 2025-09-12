"use client";
import Link from "next/link";
import Image from "next/image";
import { FiMail, FiUser, FiMapPin } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { LuUserRound } from "react-icons/lu";
import { TbMailBitcoin } from "react-icons/tb";
import { MdSubject } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import { zodResolver } from "@hookform/resolvers/zod";
import contactImg from "../../../../public/images/contact-us.png";
import CustomInput from "@/components/ui/common/inputs/CustomInput";
import { contactSchema } from "@/schemas/contactSchemas/contactSchemas";

const ContactPage: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = (data) => {
        console.log("Contact Data:", data);
        alert(JSON.stringify(data));
    };
    return (
        <>
            <div className="bannerbg flex justify-center py-10 lg:py-20 bg-indigo-100 w-full bg-cover bg-no-repeat bg-bottom">
                <div className="flex mx-auto w-full max-w-screen-2xl px-3 sm:px-10">
                    <div className="w-full flex justify-center flex-col relative">
                        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold  text-center text-black">
                            Contact Us
                        </h2>
                    </div>
                </div>
            </div>

            <div className="bg-white">
                <div className="max-w-screen-2xl mx-auto lg:py-20 py-10 px-4 sm:px-10">
                    <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3 xl:gap-8 ">
                        <div className="border p-10 rounded-lg text-center">
                            <span className="flex justify-center text-4xl text-emerald-500 mb-4">
                                <FiMail />
                            </span>
                            <h5 className="text-xl mb-2 font-bold text-black">
                                Email Us
                            </h5>
                            <p className="mb-0 text-base opacity-90 leading-7  text-black">
                                <Link
                                    href="mailto:info@kachabazar.com"
                                    className="text-emerald-500"
                                >
                                    info@kachabazar.com
                                </Link>{" "}
                                Interactively grow empowered for process-centric
                                total linkage.
                            </p>
                        </div>

                        <div className="border p-10 rounded-lg text-center">
                            <span className="flex justify-center text-4xl text-emerald-500 mb-4">
                                <FiUser />
                            </span>
                            <h5 className="text-xl mb-2 font-bold  text-black">
                                Call Us
                            </h5>
                            <p className="mb-0 text-base opacity-90 leading-7  text-black">
                                <Link
                                    href="tel:029-00124667"
                                    className="text-emerald-500"
                                >
                                    029-00124667
                                </Link>{" "}
                                Distinctively disseminate focused solutions
                                clicks-and-mortar ministate.
                            </p>
                        </div>

                        <div className="border p-10 rounded-lg text-center">
                            <span className="flex justify-center text-4xl text-emerald-500 mb-4">
                                <FiMapPin />
                            </span>
                            <h5 className="text-xl mb-2 font-bold  text-black">
                                Location
                            </h5>
                            <p className="mb-0 text-base opacity-90 leading-7  text-black">
                                <span>
                                    Boho One, Bridge Street West, Middlesbrough,
                                    North Yorkshire, TS2 1AE.
                                </span>
                                <br />
                                561-4535 Nulla LA <br />
                                United States 96522.
                            </p>
                        </div>
                    </div>

                    <div className="px-0 pt-24 mx-auto items-center flex flex-col md:flex-row w-full justify-between">
                        <div className="hidden md:w-full lg:w-5/12 lg:flex flex-col h-full">
                            <Image
                                alt="Contact Illustration"
                                src={contactImg}
                                width={874}
                                height={874}
                                className="block w-auto"
                                priority
                            />
                        </div>

                        <div className="px-0 pb-2 lg:w-5/12 flex flex-col md:flex-row">
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="w-full mx-auto flex flex-col justify-center"
                            >
                                <div className="mb-12">
                                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold  mb-3 text-black">
                                        For any support just send your query
                                    </h3>
                                    <p className="text-base opacity-90 leading-7  text-black">
                                        Collaboratively promote client-focused
                                        convergence vis-a-vis customer-directed
                                        alignments via strategic users and
                                        standardized infrastructures.
                                    </p>
                                </div>

                                <div className="flex flex-col space-y-5">
                                    <div className="flex flex-col md:flex-row space-y-5 md:space-y-0">
                                        <div className="w-full md:w-1/2">
                                            <CustomInput
                                                {...register("name")}
                                                label="Your Name"
                                                placeholder="Enter Your Full Name"
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
                                        <div className="w-full md:w-1/2 md:ml-2.5 lg:ml-5">
                                            <CustomInput
                                                {...register("email")}
                                                label="Your Email ID"
                                                placeholder="Enter Your Email ID"
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
                                    </div>

                                    <div>
                                        <CustomInput
                                            {...register("subject")}
                                            label="Subject"
                                            placeholder="Enter Your Subject"
                                            icon={
                                                <MdSubject className="w-5 h-5 text-gray-500" />
                                            }
                                        />
                                        {errors.subject && (
                                            <span className="text-red-400 text-sm mt-2">
                                                {errors.subject.message}
                                            </span>
                                        )}
                                    </div>

                                    <div className="mb-4">
                                        <CustomInput
                                            {...register("message")}
                                            label="Message"
                                            placeholder="Write your message here"
                                            icon={
                                                <FaRegMessage className="w-5 h-5 text-gray-500" />
                                            }
                                            className="h-[500px]"
                                        />
                                        {errors.message && (
                                            <span className="text-red-400 text-sm mt-2">
                                                {errors.message.message}
                                            </span>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full text-center py-3 rounded bg-emerald-500 text-white hover:bg-emerald-600 transition-all focus:outline-none my-1 cursor-pointer font-semibold"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactPage;
