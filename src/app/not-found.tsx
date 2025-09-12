import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-6xl font-bold text-green-600">404</h1>
        <p className="mt-4 text-lg">Sorry, we couldn’t find this page.</p>
        <Link
          href="/"
          className="mt-6 px-4 py-2 bg-green-600 text-white rounded-lg hover:green-blue-700"
        >
          Return Home
        </Link>
      </div>
    </>
  );
}
