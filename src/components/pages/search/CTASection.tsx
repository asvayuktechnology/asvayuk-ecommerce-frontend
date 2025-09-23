"use client";

import Link from "next/link";
import Image from "next/image";

interface CTASectionProps {
  href?: string;
  imageSrc: string;
  alt?: string;
  title: string;
  subtitle?: string;
  buttonText?: string;
  ImgWidth?: number;
  ImgHeight?: number;
}

const CTASection: React.FC<CTASectionProps> = ({
  href = "#",
  imageSrc,
  alt = "CTA Image",
  ImgWidth = 500, // default width
  ImgHeight = 204, // default height
  title,
  subtitle,
  buttonText,
}) => {
  return (
    <Link href={href}>
      <div className="relative w-full h-60 sm:h-64 md:h-64 lg:h-64 overflow-hidden cursor-pointer">
        {/* Background Image */}
        <Image
          src={imageSrc}
          alt={alt}
          width={ImgWidth}
          height={ImgHeight}
          className="object-cover w-full h-full"
        />

        {/* Overlay Content */}
        <div className="absolute top-0 left-0 z-10 flex flex-col justify-center items-center w-full h-full text-center p-4">
          <h2 className="text-base sm:text-lg md:text-lg lg:text-lg font-semibold text-gray-100">
            {title} <br />
            {subtitle && (
              <span className="text-lg sm:text-2xl md:text-2xl lg:text-2xl font-bold text-white">
                {subtitle}
              </span>
            )}
          </h2>

          {subtitle && (
            <p
              className="text-sm font-sans text-gray-50 mt-1"
              style={{ color: "#fff" }}
            >
              {subtitle}
            </p>
          )}

          {buttonText && (
            <button className="hidden sm:block lg:block mt-4 px-4 py-1 text-xs font-medium leading-6 text-white bg-emerald-500 rounded-full hover:bg-emerald-600 cursor-pointer">
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CTASection;