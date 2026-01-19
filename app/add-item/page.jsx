"use client";

import { useState } from "react";
import { sweetToast } from "@/lib/sweetToast";

export default function AddItemPage() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/items`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        price: Number(formData.price),
      }),
    }
  );

  if (!res.ok) {
    throw new Error("Failed to add item");
  }

      sweetToast.fire({
        icon: "success",
        title: "Item added successfully",
      });

      setFormData({
        name: "",
        description: "",
        price: "",
        category: "",
        image: "",
      });
    } catch {
      sweetToast.fire({
        icon: "error",
        title: "Failed to add item",
      });
    }
  };

  return (
    <section className="min-h-screen bg-linear-to-br from-indigo-50 via-purple-50 to-indigo-100 py-24 px-6">
      <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border-2 border-purple-400">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
            Add New Item
          </h1>
          <p className="text-gray-500 text-lg">
            Fill in the details to publish a new product
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Item Name"
            required
            className="input"
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Item Description"
            rows={4}
            required
            className="input resize-none"
          />

          <div className="grid md:grid-cols-2 gap-5">
            <input
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              placeholder="Price"
              required
              className="input"
            />

            <input
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Category"
              required
              className="input"
            />
          </div>

          <input
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
            required
            className="input"
          />

          <button
            type="submit"
            className="w-full mt-6 bg-linear-to-r from-pink-500 via-purple-600 to-indigo-600 hover:opacity-90 text-white font-semibold py-4 rounded-xl transition transform hover:scale-[1.02]"
          >
            Add Item
          </button>
        </form>
      </div>

      {/* Local input styling */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 14px 16px;
          border-radius: 12px;
          border: 1px solid #d1d5db;
          outline: none;
          font-size: 15px;
        }
        .input:focus {
          border-color: #6366f1;
          box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.3);
        }
      `}</style>
    </section>
  );
}
