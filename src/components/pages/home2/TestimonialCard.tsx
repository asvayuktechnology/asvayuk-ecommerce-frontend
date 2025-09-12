import Image from "next/image";

type Testimonial = {
  name: string;
  role: string;
  company?: string;
  message: string;
  image: string;
  title: string;
};

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { name, role, company, message, image, title } = testimonial;

  return (
    <div className="bg-white rounded-md p-5 border border-gray-100 space-y-4 shadow-sm">
      {/* Stars */}
      <div className="flex gap-1 text-yellow-400 text-sm" aria-label="5 star rating">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>

      {/* Title */}
      <h4 className="font-semibold text-gray-700">{title}</h4>

      {/* Message */}
      <p className="text-sm text-gray-600 leading-relaxed">{message}</p>

      {/* Profile */}
      <div className="flex items-center gap-3 pt-2">
        <Image
          src={image}
          alt={`Photo of ${name}`}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-medium text-gray-800">{name}</p>
          <p className="text-xs text-gray-500">
            {role}
            {company ? `, ${company}` : ""}
          </p>
        </div>
      </div>
    </div>
  );
}
