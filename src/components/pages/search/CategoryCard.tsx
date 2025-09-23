"use client";
import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  name: string;
  image: string;
  alt?: string;
  urlCard: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  name,
  image,
  alt = "category",
  urlCard,
}) => {
  return (
    <Link href={urlCard}>
      <div className="text-center cursor-pointer p-3 bg-white rounded-lg hover:shadow-lg transition w-40">
        <div className="bg-white p-2 mx-auto text-center w-10 h-10 rounded-full shadow-md flex items-center justify-center">
          <Image
            src={image}
            alt={alt}
            width={40}
            height={40}
            className="object-fill"
            loading="lazy"
          />
        </div>
        <h3 className="text-xs text-gray-600 mt-2 group-hover:text-emerald-500">
          {name}
        </h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
