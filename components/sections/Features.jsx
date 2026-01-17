"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Google Authentication",
    description:
      "Secure and fast authentication using Google OAuth with NextAuth.",
    icon: "🔐",
  },
  {
    title: "Protected Routes",
    description:
      "Sensitive pages are protected using middleware and session-based auth.",
    icon: "🛡️",
  },
  {
    title: "Real-time API",
    description:
      "Products are fetched and managed via a dedicated Express.js API.",
    icon: "⚡",
  },
  {
    title: "Modern UI",
    description:
      "Clean, responsive, and accessible interface built with Tailwind CSS.",
    icon: "🎨",
  },
  {
    title: "SweetAlert UX",
    description:
      "User-friendly confirmations and alerts using SweetAlert2.",
    icon: "💬",
  },
  {
    title: "Scalable Architecture",
    description:
      "Component-based structure following real-world best practices.",
    icon: "🧱",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Features
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Everything you need to build, manage, and scale a modern web
            application.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-purple-300 rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>

              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
