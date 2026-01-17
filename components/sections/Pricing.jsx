"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for exploring the platform",
    features: [
      "Browse products",
      "View product details",
      "Public access",
      "Explore basic structure",
    ],
    cta: "Get Started",
    href: "/items",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$9/month",
    description: "Best for active users",
    features: [
      "All Free features",
      "Google authentication",
      "Add new items",
      "Protected routes",
    ],
    cta: "Login with Google",
    href: "/login",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For teams & businesses",
    features: [
      "All Pro features",
      "Admin dashboard (future)",
      "API access (future)",
      "Priority support",
    ],
    cta: "Contact Us",
    href: "#",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple Pricing
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Choose a plan that fits your needs. Upgrade anytime.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl p-8 shadow transition-all ${
                plan.highlight
                  ? "bg-white border-2 border-indigo-600 scale-105"
                  : "bg-white hover:border-2 hover:border-indigo-600 hover:scale-105"
              }`}
            >
              {/* Most Popular Badge */}
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-2">{plan.description}</p>

              <p className="text-3xl font-bold mb-6">{plan.price}</p>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-gray-700">
                    ✔ {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={`block text-center px-6 py-3 rounded-lg font-semibold ${
                  plan.highlight
                    ? "bg-indigo-500 text-white hover:bg-indigo-700"
                    : "bg-indigo-500 hover:bg-indigo-700 hover:text-white"
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
