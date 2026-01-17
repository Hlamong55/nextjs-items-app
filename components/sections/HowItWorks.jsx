"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Sign In Securely",
    description:
      "Authenticate using Google OAuth powered by NextAuth to ensure a secure and seamless login experience.",
  },
  {
    step: "02",
    title: "Browse Products",
    description:
      "Explore a curated list of products fetched dynamically from a dedicated Express.js API.",
  },
  {
    step: "03",
    title: "View Product Details",
    description:
      "Access detailed product information through dynamic routes with smooth and intuitive navigation.",
  },
  {
    step: "04",
    title: "Manage Items",
    description:
      "Add new products from protected routes with confirmation dialogs and real-time UI feedback.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            A simple and intuitive workflow designed for a smooth user experience.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 -top-3 h-full w-1 bg-purple-300 -translate-x-1/2" />

          <div className="space-y-14">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Card */}
                <div className="md:w-1/2 px-5">
                  <div className="bg-white p-5 rounded-2xl shadow-md border border-purple-400">
                    <span className="text-sm font-semibold text-indigo-600">
                      STEP {item.step}
                    </span>
                    <h3 className="text-xl font-semibold mt-2 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Circle Indicator */}
                <div className="hidden md:flex w-10 h-10 bg-purple-700 rounded-full items-center justify-center text-white font-bold z-10">
                  {item.step}
                </div>

                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
