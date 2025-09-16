"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0] || "");

  // Update selected image if images prop changes
  useEffect(() => {
    setSelectedImage(images[0] || "");
  }, [images]);

  return (
    <>
      <div className="overflow-hidden w-full mx-auto">
        <Image
          src={selectedImage}
          alt="product"
          width={500}
          height={500}
          className="aspect-square w-full rounded-lg bg-gray-100 object-cover"
        />
      </div>

      <div className="flex flex-row flex-wrap mt-4 gap-2">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(img)}
            className={`border rounded-md overflow-hidden p-1 transition 
              ${selectedImage === img ? "border-black" : "border-gray-300 hover:border-black"}`}
          >
            <Image
              src={img}
              alt="product thumbnail"
              width={100}
              height={100}
              className="w-20 h-20 object-cover"
            />
          </button>
        ))}
      </div>
    </>
  );
}
