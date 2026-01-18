"use client";

import { useState } from "react";
import Swal from "sweetalert2";

export default function SupportPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    issue: "Product Issue",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Request Submitted 🎉",
      text: "Our support team will contact you within 24 hours.",
      icon: "success",
      confirmButtonColor: "#6366f1",
    });

    setFormData({
      name: "",
      email: "",
      issue: "Product Issue",
      message: "",
    });
  };

  const faqs = [
    {
      q: "How can I contact support?",
      a: "Submit the form below and our team will respond within 24 hours.",
    },
    {
      q: "What details should I include?",
      a: "Order ID, product name, and screenshots help us resolve faster.",
    },
    {
      q: "Do you provide warranty and replacements?",
      a: "Yes, all products include warranty and a replacement policy.",
    },
    {
      q: "Can I update my request later?",
      a: "Yes, simply reply to the confirmation email.",
    },
    {
      q: "What is your support response time?",
      a: "Most requests are answered within one business day.",
    },
  ];

  return (
    <section className="bg-linear-to-b from-indigo-50 via-purple-50 to-white">
      <div className="max-w-6xl mx-auto px-6 py-24">

        {/* INTRO */}
        <div className="mb-20 max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-4 text-gray-800">
            Support & Help Center
          </h1>
          <p className="text-gray-600 text-lg">
            Need help with products, orders, or account-related questions?
            Our support team is here to assist you every step of the way.
          </p>
        </div>

        {/* FAQ */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border rounded-xl transition"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full text-left px-6 py-4 font-semibold flex justify-between items-center text-gray-800"
                >
                  {faq.q}
                  <span className="text-indigo-500 text-xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="px-6 py-4 text-gray-700 bg-pink-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* FORM + INFO */}
        <div className="grid lg:grid-cols-3 gap-10 items-center">

          {/* FORM */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-8">
              Submit a Support Request
            </h2>

            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-xl border-t-8 border-indigo-500 space-y-6"
            >
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Issue Type
                </label>
                <select
                  name="issue"
                  value={formData.issue}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-3"
                >
                  <option>Product Issue</option>
                  <option>Order & Delivery</option>
                  <option>Account Support</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg font-semibold text-white bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-90 transition"
              >
                Submit Request
              </button>
            </form>
          </div>

          {/* RIGHT INFO */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border-l-8 border-indigo-500 shadow">
              <h4 className="font-bold mb-2">⏱ Response Time</h4>
              <p className="text-gray-700 text-sm">
                Most requests are answered within 24 business hours.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-l-8 border-purple-500 shadow">
              <h4 className="font-bold mb-2">📄 Helpful Tip</h4>
              <p className="text-gray-700 text-sm">
                Including screenshots and order ID helps faster resolution.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-l-8 border-pink-500 shadow">
              <h4 className="font-bold mb-2">🛠 Support Hours</h4>
              <p className="text-gray-700 text-sm">
                Sunday – Thursday, 10 AM – 6 PM (GMT+6)
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
