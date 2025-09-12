import React from "react";
import Image from "next/image";
import AppImages from "@/config/constant/app.images";

// Type for a team member
type TeamMember = {
    name: string;
    role: string;
    img: string;
};

const team: TeamMember[] = [
    {
        name: "Niamh Shea",
        role: "Co-founder & Executive",
        img: AppImages.team.team1,
    },
    {
        name: "Orla Dwyer",
        role: "Orla Dwyer",
        img: AppImages.team.team2,
    },
    {
        name: "Danien James",
        role: "Co-founder, Chairman",
        img: AppImages.team.team3,
    },
    {
        name: "Dara Frazier",
        role: "Chief Strategy Officer",
        img: AppImages.team.team4,
    },
    {
        name: "Glenda Arvidson",
        role: "HR Officer",
        img: AppImages.team.team5,
    },
    {
        name: "Danien James",
        role: "Co-founder, Chairman",
        img: AppImages.team.team3,
    },
];
const AboutPage = () => {
    return (
        <>
            <div className="bannerbg flex justify-center py-10 lg:py-20 bg-indigo-100 w-full bg-cover bg-no-repeat bg-bottom">
                <div className="flex mx-auto w-full max-w-screen-2xl px-3 sm:px-10">
                    <div className="w-full flex justify-center flex-col relative">
                        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold  text-center text-black">
                            About Us
                        </h2>
                    </div>
                </div>
            </div>

            <div className="bg-white">
                <div className="max-w-screen-2xl mx-auto lg:py-20 py-10 px-4 sm:px-10">
                    <div className="grid grid-flow-row lg:grid-cols-2 gap-4 lg:gap-16 items-center">
                        <div>
                            <h3 className="text-xl lg:text-3xl mb-2  font-semibold text-black">
                                Welcome to our KachaBazar shop
                            </h3>
                            <div className="mt-3 text-base opacity-90 leading-7 text-black">
                                <p>
                                    Holisticly seize parallel metrics and
                                    functional ROI.Seamlessly revolutionize
                                    error-free internal or organic sources
                                    before effective scenarios. Progressively
                                    incentivize state of the art applications
                                    for efficient intellectual capital. Credibly
                                    leverage existing distinctive mindshare
                                    through cutting-edge schemas. Proactively
                                    procrastinate team building paradigms
                                    coordinate client-centric total transparent
                                    internal. Dynamically embrace diverse
                                    customer service and installed base
                                    paradigms. Credibly seize enterprise-wide
                                    experiences for end-to-end data.
                                    Professionally brand flexible alignments and
                                    cost effective architectures.
                                    Enthusiastically incentivize seamless
                                    communities with seamlessly facilitate
                                    revolutionary metrics with strategic theme
                                    areas.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-2 xl:gap-6 mt-8">
                                <div className="p-8 bg-indigo-50 shadow-sm rounded-lg">
                                    <span className="text-3xl block font-extrabold  mb-4 text-gray-800">
                                        8K
                                    </span>
                                    <h4 className="text-lg  font-bold mb-1 text-black">
                                        Lovely Customer
                                    </h4>
                                    <p className="mb-0 opacity-90 leading-7 text-black">
                                        Competently productize virtual models
                                        without performance.
                                    </p>
                                </div>
                                <div className="p-8 bg-indigo-50 shadow-sm rounded-lg">
                                    <span className="text-3xl block font-extrabold  mb-4 text-gray-800">
                                        10K
                                    </span>
                                    <h4 className="text-lg  font-bold mb-1 text-black">
                                        Listed Products
                                    </h4>
                                    <p className="mb-0 opacity-90 leading-7 text-black">
                                        Dynamically morph team driven
                                        partnerships after vertical.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 lg:mt-0">
                            <Image
                                width={920}
                                height={750}
                                src={AppImages.about.aboutTop}
                                alt="About Us Banner"
                                className="rounded-lg"
                            />
                        </div>
                    </div>

                    <div className="mt-10 lg:mt-16 text-base opacity-90 leading-7 space-y-6 text-black">
                        <p>
                            Holisticly seize parallel metrics and functional
                            ROI. Seamlessly revolutionize error-free internal or
                            organic sources before effective scenarios.
                            Progressively incentivize state of the art
                            applications for efficient intellectual capital.
                            Credibly leverage existing distinctive mindshare
                            through cutting-edge schemas. Proactively
                            procrastinate team building paradigms coordinate
                            client-centric total transparent internal.
                            Energistically reconceptualize global leadership for
                            high-quality networks. Credibly restore an expanded
                            array of systems rather than accurate results.
                            Collaboratively synergize backend bandwidth without
                            24/7 functionalities. Credibly utilize proactive
                            ideas whereas cross-media core competencies.
                            Uniquely maximize professional best practices
                            through resource maximizing services. Conveniently
                            architect cross-unit web services for e-business
                            imperatives.
                        </p>
                        <p>
                            Appropriately visualize market-driven data before
                            one-to-one scenarios. Collaboratively productize
                            multifunctional ROI through intuitive supply chains.
                            Enthusiastically seize revolutionary value and
                            process-centric services. Competently harness
                            intuitive information after interoperable markets.
                            Interactively revolutionize future-proof value
                            before granular sources. Dynamically embrace diverse
                            customer service and installed base paradigms.
                            Credibly seize enterprise-wide experiences for
                            end-to-end data. Professionally brand flexible
                            alignments and cost effective architectures.
                            Enthusiastically incentivize seamless communities
                            with seamlessly facilitate revolutionary metrics
                            with strategic theme areas.
                        </p>
                    </div>
                </div>

                <div className="bg-gray-50 lg:py-20 py-10">
                    <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
                        <div className="relative flex flex-col sm:flex-row sm:items-end justify-between mb-8">
                            <div className="max-w-2xl">
                                <h3 className="text-xl lg:text-3xl mb-2  font-semibold text-black">
                                    Our Team
                                </h3>
                                <p className="mt-2 md:mt-3 font-normal block text-base text-black">
                                    We’re impartial and independent, and every
                                    day we create distinctive, world-class
                                    reintermediate backend supply programmes.
                                </p>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-6 xl:gap-x-8">
                            {team.map((member, idx) => (
                                <div key={idx} className="max-w-sm">
                                    <Image
                                        src={member.img}
                                        alt={member.name}
                                        width={420}
                                        height={420}
                                        className="block rounded-lg"
                                    />
                                    <div className="py-4">
                                        <h5 className="text-lg font-semibold  text-black">
                                            {member.name}
                                        </h5>
                                        <span className="opacity-75 text-sm text-black">
                                            {member.role}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutPage;
