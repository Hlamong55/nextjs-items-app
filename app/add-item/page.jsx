"use client";
import { useState } from "react";
import { sweetToast } from "@/lib/sweetToast";

export default function AddItemPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description, price }),
      });

      if (!res.ok) throw new Error("Failed");

      sweetToast.fire({
        icon: "success",
        title: "Item added successfully",
      });

      setName("");
      setDescription("");
      setPrice("");
    } catch (err) {
      sweetToast.fire({
        icon: "error",
        title: "Failed to add item",
      });
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Add New Item</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item Name"
          className="w-full border p-2"
        />

        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full border p-2"
        />

        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          placeholder="Price"
          className="w-full border p-2"
        />

        <button className="w-full bg-blue-600 text-white p-2 rounded">
          Add Item
        </button>
      </form>
    </div>
  );
}
