"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ItemDetailsPage() {
  const params = useParams();   // ✅ correct way in Next 16
  const id = params.id;

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:5000/items/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Item not found");
        }
        return res.json();
      })
      .then((data) => {
        setItem(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load item");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold">{item.name}</h2>
      <p>{item.description}</p>
      <p className="text-green-600 font-semibold">${item.price}</p>
    </div>
  );
}
