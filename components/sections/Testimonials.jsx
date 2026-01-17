"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  // infinite effect
  const items = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by Teams Worldwide
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Hear what professionals say about using our platform.
          </p>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30,
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="min-w-[320px] max-w-[320px] bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition border border-purple-600"
              >
                {/* Avatar */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full border"
                  />

                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.role}</p>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-gray-800 mb-4 leading-relaxed">
                  “{item.quote}”
                </p>

                {/* Rating */}
                <div className="flex text-yellow-400">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
