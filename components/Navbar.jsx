"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <Link href="/" className="font-bold">
        NextJS Items App
      </Link>

      <div className="space-x-4">
        <Link href="/items">Items</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}
