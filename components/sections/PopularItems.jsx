"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const popularItems = [
  {
    id: 1,
    name: "MacBook Pro M2",
    description: "Powerful laptop for developers and creators.",
    price: "$1499",
    image: "/laptop.webp",
  },
  {
    id: 5,
    name: "Gaming Headphones",
    description: "Immersive sound with premium build quality.",
    price: "$299",
    image: "/headphones.jpg",
  },
  {
    id: 4,
    name: "Samsung Galaxy S22",
    description: "Flagship smartphone with stunning camera.",
    price: "$999",
    image: "/phone.jpg",
  },
  {
    id: 6, 
    name: "Smart Watch Series X",
    description: "Track fitness, health, and notifications on the go.",
    price: "$399",
    image: "/watch.png",
  },
];

export default function PopularItems() {
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
            Popular Products
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Discover our most popular products trusted by professionals worldwide.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-4 gap-5">
          {popularItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition"
            >
              {/* Product Image */}
              <div className="relative h-56 w-full">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5 bg-purple-200">
                <h3 className="text-xl font-semibold mb-2">
                  {item.name}
                </h3>

                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-indigo-600 font-bold">
                    {item.price}
                  </span>

                  <Link
                     href={`/items/${item.id}`}
                    className="text-sm font-semibold text-indigo-600 hover:underline"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
