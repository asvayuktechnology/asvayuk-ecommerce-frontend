import { Carousel } from "flowbite-react";
import React from "react";
import Image from "next/image";
import AppImages from "@/config/constant/app.images";

const BannerCarousel = () => {
  const banners: string[] = [
    AppImages.banner.banner1,
    AppImages.banner.banner2,
    AppImages.banner.banner3,
  ];

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 bannercarouselwrapper">
      <Carousel leftControl=" " rightControl=" ">
        {banners.map((img, index) => (
          <div key={index} className="relative w-full h-full">
            <Image
              src={img}
              alt={`Banner image ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BannerCarousel;
