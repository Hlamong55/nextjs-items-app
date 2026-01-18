export const dynamic = "force-dynamic";

async function getItem(id) {
  try {
    const res = await fetch(`http://localhost:5000/items/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export default async function ItemDetails({ params }) {
  const { id } = await params;
  const item = await getItem(id);

  if (!item) {
    return (
      <section className="py-32 text-center">
        <h1 className="text-3xl font-bold">Item Not Found</h1>
      </section>
    );
  }

  return (
    <section className="bg-linear-to-b from-indigo-50 via-white to-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* ===== HERO / OVERVIEW ===== */}
        <div className="grid lg:grid-cols-2 gap-16 mb-28">
          <div className="relative">
            <div className="absolute -inset-4 bg-linear-to-br from-pink-400 via-purple-500 to-indigo-600 rounded-3xl blur-2xl opacity-20" />
            <img
              src={item.image}
              alt={item.name}
              className="relative rounded-3xl shadow-xl h-[500px]"
            />
          </div>

          <div>
            <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-indigo-100 text-indigo-700 font-semibold">
              Premium Product
            </span>

            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {item.name}
            </h1>

            <p className="text-lg text-gray-600 mb-6">{item.description}</p>

            <p className="text-4xl font-extrabold text-indigo-600 mb-8">
              ${item.price}
            </p>

            <div className="flex gap-4 mb-10">
              <button className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold shadow hover:bg-indigo-700 transition">
                Buy Now
              </button>
              <button className="px-8 py-4 bg-white border border-indigo-200 text-indigo-600 rounded-xl font-semibold hover:bg-indigo-50 transition">
                Add to Wishlist
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4  text-gray-700">
              <div className="flex items-center gap-2">🚚 Free Delivery</div>
              <div className="flex items-center gap-2">
                🔄 7-Day Replacement
              </div>
              <div className="flex items-center gap-2">🎯 1-Year Warranty</div>
              <div className="flex items-center gap-2">🔒 Secure Payment</div>
            </div>
          </div>
        </div>

        {/* ===== HIGHLIGHTS ===== */}
        <div className="mb-24">
          <h2 className="text-3xl font-extrabold mb-8 text-center">
            Why Choose This Product
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "High Performance",
                text: "Optimized hardware and software working together seamlessly.",
              },
              {
                title: "Premium Design",
                text: "Minimal, modern aesthetics with durable build quality.",
              },
              {
                title: "Built for Professionals",
                text: "Designed to support productivity and heavy workloads.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="bg-pink-100 rounded-2xl p-8 shadow hover:shadow-lg transition"
              >
                <h3 className="font-bold text-lg mb-3">{f.title}</h3>
                <p className="text-gray-700 text-sm">{f.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== SPECS ===== */}
        <div className="mb-24">
          <h2 className="text-3xl text-center font-extrabold mb-8">
            Specifications
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Category: Electronics",
              "Condition: Brand New",
              "Warranty: 1 Year",
              "Delivery: Nationwide",
              "Support: 24/7",
              `SKU: ITM-${item.id}-2026`,
            ].map((spec, i) => (
              <div
                key={i}
                className="bg-gray-100 rounded-xl p-6 text-gray-700 text-center font-semibold border border-gray-400"
              >
                {spec}
              </div>
            ))}
          </div>
        </div>

        {/* ===== SUPPORT CTA ===== */}
        <div className="relative overflow-hidden rounded-3xl p-12 bg-linear-to-br from-indigo-500 via-purple-700 to-pink-400 text-white">
          <h2 className="text-4xl font-bold mb-4">Worry-Free Ownership 💬</h2>
          <p className="max-w-4xl text-white/90 text-lg leading-relaxed">
            Our after-sales service is designed to give you complete peace of
            mind long after your purchase. From responsive customer support and
            transparent warranty coverage to hassle-free replacements and guided
            assistance, we make sure your experience remains smooth and
            reliable. Our dedicated support team is always ready to help,
            ensuring long-term value, trust, and satisfaction with every product
            you choose from us.
          </p>
        </div>
      </div>
    </section>
  );
}
