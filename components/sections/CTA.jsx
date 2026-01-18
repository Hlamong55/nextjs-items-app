"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section
      className="relative py-16 bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/CTA.png')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative max-w-6xl mx-auto px-5 flex justify-center">
        {/* Glassy Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            w-full 
            rounded-3xl 
            border border-white/20 
            backdrop-blur-xl 
            shadow-2xl 
            px-10 
            py-12 
            text-center 
            text-white
          "
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Launch Smarter. Manage Faster.
          </h2>

          {/* Description */}
          <p className="text-white/80 max-w-3xl mx-auto mb-10 font-semibold leading-relaxed">
            A modern full-stack application built with Next.js App Router,
            Google authentication, protected routes, and an Express.js backend —
            designed to be scalable, secure, and production-ready.
          </p>

          {/* Feature Highlights */}
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-12 text-left md:text-center">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🚀</span>
              <span className="font-medium">App Router Architecture</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">🔐</span>
              <span className="font-medium">Secure Google Login</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">⚡</span>
              <span className="font-medium">Real-time Item Management</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/login"
              className="
                inline-flex 
                items-center 
                justify-center 
                px-10 
                py-4 
                rounded-lg 
                bg-indigo-600 
                text-white 
                font-semibold 
                hover:bg-indigo-800 
                transition hover:scale-105 
                shadow-lg
              "
            >
              Login with Google
            </Link>

            <Link
              href="/items"
              className=" font-semibold hover:text-black
                inline-flex 
                items-center 
                justify-center 
                px-10 
                py-4 
                rounded-lg 
                border 
                border-white/40 
                text-white 
                hover:bg-white/70 
                transition hover:scale-105 
              "
            >
              Explore Items
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
