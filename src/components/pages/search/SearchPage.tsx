import Image from "next/image";
import Link from "next/link";
import React from "react";

const SearchPage = () => {
  return (
    <>
      <div className="w-full">
        <div className="w-full grid grid-col gap-4 grid-cols-1 2xl:gap-6 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2">
          <div className="mx-auto w-full relative rounded-lg overflow-hidden transition ease-out duration-400 delay-150 transform hover:shadow-xl">
            <Link href="">
              <div className="relative w-full h-60 sm:h-64 md:h-64 lg:h-64 overflow-hidden">
                {/* Background Image */}
                <Image
                  src="/cta/cta-bg-1.jpg"
                  alt="Taste of"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Overlay Content */}
                <div className="absolute top-0 left-0 z-10 flex flex-col justify-center items-center w-full h-full text-center p-4">
                  <h2 className="text-base sm:text-lg md:text-lg lg:text-lg font-semibold text-gray-100">
                    Taste of <br />
                    <span className="text-lg sm:text-2xl md:text-2xl lg:text-2xl font-bold text-white">
                      Fresh &amp; Natural
                    </span>
                  </h2>
                  <p className="text-sm font-sans text-gray-50 mt-1">
                    Weekend discount offer
                  </p>
                  <button className="hidden sm:block lg:block mt-4 px-4 py-1 text-xs font-medium leading-6 text-white bg-emerald-500 rounded-full hover:bg-emerald-600">
                    Shop Now
                  </button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
