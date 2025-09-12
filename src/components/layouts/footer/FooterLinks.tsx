import Link from "next/link";
import React from "react";

interface LinkItem {
    label: string;
    href: string;
}

interface FooterLinksProps {
    title: string;
    links: LinkItem[];
}

const FooterLinks: React.FC<FooterLinksProps> = ({ title, links }) => {
    return (
        <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
            <h3 className="text-md lg:leading-7 font-bold mb-4 sm:mb-5 lg:mb-6 pb-0.5 text-black">
                {title}
            </h3>
            <ul className="text-sm flex flex-col space-y-3">
                {links.map((link, index) => (
                    <li key={index} className="flex items-baseline">
                        <Link
                            href={link.href}
                            className="text-gray-600 inline-block w-full hover:text-emerald-500"
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterLinks;
