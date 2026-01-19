import Link from "next/link";

export const dynamic = "force-dynamic";

async function getItems() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/items`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch items");
  }

  return res.json();
}

export default async function ItemsPage() {
  const items = await getItems();

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-14">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Explore Items
        </h1>
        <p className="text-gray-700 mt-2">
          Browse all available items from our collection
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
        {items.map((item) => (
          <Link
            key={item.id}
            href={`/items/${item.id}`}
            className="
              group
              rounded-2xl
              border
              border-gray-400
              bg-white
              overflow-hidden
              shadow-sm
              hover:shadow-xl
              transition
              hover:-translate-y-1
              block
            "
          >
            {/* Image */}
            <div className="h-48 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              />
            </div>

            {/* Content */}
            <div className="p-5 bg-pink-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {item.name}
              </h3>

              <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                {item.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-indigo-600 font-bold text-lg">
                  ${item.price}
                </span>

                <span className="text-sm font-medium text-indigo-600 group-hover:underline">
                  View Details →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
