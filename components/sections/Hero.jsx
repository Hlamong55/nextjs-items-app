import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center"
        style={{
          backgroundImage: "url('/herobg.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 to-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Build & Manage Products <br className="hidden md:block" />
          With Confidence
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-8">
          A modern full-stack web application built using Next.js, Express,
          Google Authentication and professional UI patterns.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/items"
            className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Explore Items
          </Link>

          <Link
            href="/login"
            className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
