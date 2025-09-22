import Image from "next/image";
import React from "react";

interface ReviewProps {
  name: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
  images?: string[];
}

const ReviewCard: React.FC<ReviewProps> = ({
  name = "Anonymous",
  avatar = "",
  rating = 0,
  date = "N/A",
  comment = "No comment",
  images = [],
}) => {
  return (
    <div className="flex space-x-4 text-sm text-gray-500 border-b border-[#E5E7EB] py-6">
      <div className="flex-none">
        <Image
          src={avatar}
          alt={name}
          width={42}
          height={42}
          className="rounded-full bg-gray-100 h-12 w-12 p-1"
        />
      </div>

      <div className="w-full">
        <h3 className="font-medium mb-1 text-gray-900">{name}</h3>

        <div className="flex items-center space-x-1 mb-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-3 h-3 ${
                i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
              }`}
              viewBox="0 0 24 24"
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 
                                18.18 21.02 12 17.77 5.82 21.02 
                                7 14.14 2 9.27 8.91 8.26 12 2"
              />
            </svg>
          ))}
        </div>

        <span className="text-xs text-gray-400">{date}</span>
        <p className="text-sm text-gray-700 mt-2">{comment}</p>

        {images.length > 0 && (
          <div className="flex gap-2 flex-wrap mt-3">
            {images.map((img, index) => (
              <div key={index} className="relative w-16 h-16 cursor-pointer">
                <Image
                  src={img}
                  alt={`review image ${index + 1}`}
                  fill
                  className="rounded-md border object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewCard;
