"use client";

import Link from "next/link";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { TbShoppingCartHeart } from "react-icons/tb";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-12 md:grid-cols-4">

        {/* BRAND */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-pink-400 via-purple-500 to-indigo-600 flex items-center justify-center shadow-md">
              <TbShoppingCartHeart className="text-white text-xl" />
            </div>
            <span className="text-xl font-bold text-gray-800">
              Item<span className="text-purple-600">Sphere</span>
            </span>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            ItemSphere is a modern item management platform built with
            Next.js, Express, and secure authentication workflows.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-indigo-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/items" className="hover:text-indigo-600 transition">
                Items
              </Link>
            </li>
            <li>
              <Link href="/support" className="hover:text-indigo-600 transition">
                Support
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-indigo-600 transition">
                Login
              </Link>
            </li>
            
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">
            Contact Info
          </h3>

          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-indigo-500" />
              <span>bijoymarma55@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-indigo-500" />
              <span>+880 1818-470577</span>
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-indigo-500" />
              <span>Chattogram, Bangladesh</span>
            </li>
          </ul>
        </div>

        {/* TECH STACK */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">
            Built With
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Next.js (App Router)</li>
            <li>Express.js API</li>
            <li>Tailwind CSS</li>
            <li>NextAuth & Cookies</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-400">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-700">
          <p>
            © {new Date().getFullYear()} ItemSphere. All rights reserved.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-2 rounded-full border border-gray-500 hover:bg-indigo-500 hover:text-white transition"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full border border-gray-500 hover:bg-indigo-500 hover:text-white transition"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full border border-gray-500 hover:bg-indigo-500 hover:text-white transition"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full border border-gray-500 hover:bg-indigo-500 hover:text-white transition"
            >
              <FaTwitter size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
