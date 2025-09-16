import Image from "next/image";
import Link from "next/link";
import notFound from "../../public/images/notfound.gif";

export default function NotFound() {
  return (
    <section className="py-10 bg-white font-serif">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full md:w-10/12 lg:w-8/12 text-center">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold">404</h1>
            <div className="flex justify-center items-center">
              <Image
                src={notFound}
                alt="not found"
                width={600}
                height={400}
                className="img-fluid"
              />
            </div>

            {/* Content */}
            <div className="">
              <h3 className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
                Looks like you&#39;re lost
              </h3>
              <p className="text-base sm:text-lg mb-5 sm:mb-6">
                The page you are looking for is not available!
              </p>

              <Link href="/">
                <button className="inline text-center px-6 py-3 rounded bg-emerald-500 text-white hover:bg-emerald-600 transition-all focus:outline-none my-1 cursor-pointer font-semibold">
                  Go to Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
