"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Cookies from "js-cookie";
import { FaUserCircle } from "react-icons/fa";
import { TbShoppingCartHeart } from "react-icons/tb";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const loggedIn = Cookies.get("isLoggedIn");
    setIsLoggedIn(loggedIn === "true");
  }, []);

  const handleLogout = () => {
    Cookies.remove("isLoggedIn");
    setIsLoggedIn(false);
    router.push("/login");
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Items", href: "/items" },
    { name: "Support", href: "/support" },
  ];

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LEFT: Logo + Name */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-12 h-11 rounded-xl bg-linear-to-br from-pink-400 via-purple-500 to-indigo-600 flex items-center justify-center shadow-md">
            <TbShoppingCartHeart className="text-white text-2xl" />
          </div>
          <span className="text-xl font-extrabold text-gray-800">
            Item<span className="text-purple-600">Sphere</span>
          </span>
        </Link>

        {/* CENTER: Nav Links */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative pb-1 transition-colors font-medium ${
                  isActive
                    ? "text-indigo-600"
                    : "text-gray-700 hover:text-indigo-700"
                }`}
              >
                {link.name}

                {/* underline */}
                <span
                  className={`absolute left-0 -bottom-0.5 h-0.5 w-full rounded-full bg-indigo-600 transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0 hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* RIGHT: Auth Section */}
        <div className="flex items-center gap-4">
          {!isLoggedIn ? (
            <Link
              href="/login"
              className="px-5 py-2 rounded-lg bg-indigo-500 text-white font-semibold hover:bg-indigo-700 transition hover:scale-105"
            >
              Login
            </Link>
          ) : (
            <>
              <div className="flex items-center gap-2 text-gray-700 font-medium">
                <FaUserCircle size={22} />
                <span>Welcome, User</span>
              </div>

              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg text-white bg-red-500 hover:bg-red-700 transition hover:scale-105 font-semibold"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
