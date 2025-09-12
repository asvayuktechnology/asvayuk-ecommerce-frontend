import Image from "next/image";
import Link from "next/link";

type CategoryCardProps = {
  title: string;
  items: number;
  image: string;
  link: string;
};

export default function CategoryCard({
  title,
  items,
  image,
  link,
}: CategoryCardProps) {
  return (
    <Link href={link} className="relative h-[712px] group overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/0 transition-colors duration-300" />
      <div className="absolute bottom-6 left-6 text-white z-10">
        <h3 className="text-4xl font-bold">{title}</h3>
        <p className="text-sm">{items} items</p>
      </div>
    </Link>
  );
}
