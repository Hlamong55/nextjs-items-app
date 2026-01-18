"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { signIn } from "next-auth/react";
import { motion } from "framer-motion";
import { MOCK_USER } from "@/lib/auth";
import Image from "next/image";
import { TbShoppingCartHeart } from "react-icons/tb";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleMockLogin = (e) => {
    e.preventDefault();

    if (email === MOCK_USER.email && password === MOCK_USER.password) {
      Cookies.set("isLoggedIn", "true", { expires: 1 });
      router.push("/items");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-50 via-purple-50 to-indigo-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md rounded-2xl bg-white shadow-xl px-8"
      >
        {/* Logo + Name */}
        <div className="text-center mb-5">
          <div className="mx-auto w-12 h-12 mt-5 flex items-center justify-center rounded-xl bg-linear-to-br from-pink-400 via-purple-500 to-indigo-600 shadow-md">
            <TbShoppingCartHeart className="text-white text-2xl" />
          </div>

          <h1 className="mt-3 text-3xl font-extrabold text-gray-800">
            Item<span className="text-purple-600">Sphere
          </span></h1>

          <p className="text-gray-500 mt-1">
            Manage & explore items effortlessly
          </p>
        </div>

        {/* Mock Login */}
        <form onSubmit={handleMockLogin} className="space-y-4">
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition transform hover:scale-[1.02]"
          >
            Login with Email
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-xs text-gray-400">OR</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        {/* Google Login */}
        <button
          onClick={() => signIn("google", { callbackUrl: "/items" })}
          className="w-full flex items-center justify-center gap-3 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition transform hover:scale-[1.02] font-semibold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="w-5 h-5"
          >
            <path
              fill="#EA4335"
              d="M24 9.5c3.14 0 5.73 1.08 7.85 3.18l5.86-5.86C34.01 3.29 29.41 1 24 1 14.86 1 7.15 6.8 4.46 14.18l6.94 5.39C13.05 13.02 18.06 9.5 24 9.5z"
            />
            <path
              fill="#4285F4"
              d="M46.5 24.5c0-1.57-.14-2.76-.43-4H24v7.58h12.82c-.26 2.05-1.66 5.14-4.77 7.21l7.32 5.66C43.61 36.46 46.5 30.97 46.5 24.5z"
            />
            <path
              fill="#FBBC05"
              d="M11.4 28.57c-.46-1.36-.72-2.8-.72-4.27s.26-2.91.71-4.27l-6.94-5.39C2.84 17.63 2 20.71 2 24.3c0 3.59.84 6.67 2.45 9.66l6.95-5.39z"
            />
            <path
              fill="#34A853"
              d="M24 47c5.41 0 10.01-1.79 13.34-4.86l-7.32-5.66c-1.96 1.36-4.59 2.3-6.02 2.3-5.94 0-10.95-3.52-12.6-8.49l-6.95 5.39C7.15 41.2 14.86 47 24 47z"
            />
          </svg>
          Continue with Google
        </button>

        {/* Demo Info */}
        <p className="text-xs text-gray-700 text-center my-6">
          Demo credentials: <br />
          <span className="font-medium">admin@itemsphere.com / 123456</span>
        </p>
      </motion.div>
    </section>
  );
}
