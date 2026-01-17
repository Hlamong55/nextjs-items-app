"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ItemsPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then(res => {
        if (!res.ok) throw new Error("Failed");
        return res.json();
      })
      .then(data => {
        setItems(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load items");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map(item => (
        <Link
          key={item.id}
          href={`/items/${item.id}`}
          className="bg-white p-4 rounded shadow hover:shadow-lg"
        >
          <h3 className="font-bold">{item.name}</h3>
          <p className="text-sm">{item.description}</p>
          <p className="text-green-600 font-semibold">${item.price}</p>
        </Link>
      ))}
    </div>
  );
}
