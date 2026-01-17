"use client";

export default function AddItemPage() {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Add New Item</h2>

      <form className="space-y-3">
        <input
          type="text"
          placeholder="Item Name"
          className="w-full border p-2"
        />

        <input
          type="text"
          placeholder="Description"
          className="w-full border p-2"
        />

        <input
          type="number"
          placeholder="Price"
          className="w-full border p-2"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}
