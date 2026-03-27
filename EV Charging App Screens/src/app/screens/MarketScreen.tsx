import { useState } from "react";
import { BottomNav } from "../components/BottomNav";

const categories = ["Shop", "FnB", "Bengkel"];

const shopProducts = [
  {
    id: 1,
    name: "Type 2 Cable",
    price: "Rp 1.250.000",
    image: "https://images.unsplash.com/photo-1747992422276-ab5785d6ad18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0eXBlJTIwMiUyMGNoYXJnaW5nJTIwY2FibGUlMjBFVnxlbnwxfHx8fDE3NzMwNjUyNTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    name: "Portable EV Charger 3.5kW",
    price: "Rp 3.500.000",
    image: "https://images.unsplash.com/photo-1592515910019-9e685e1b9517?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0YWJsZSUyMEVWJTIwY2hhcmdlciUyMGJsYWNrfGVufDF8fHx8MTc3MzA2NTI1NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    name: "Type 1 to Type 2 Adaptor",
    price: "Rp 850.000",
    image: "https://images.unsplash.com/photo-1603899122911-27c0cb85824a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyZ2luZyUyMGFkYXB0b3IlMjBjb25uZWN0b3J8ZW58MXx8fHwxNzczMDY1MjU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    name: "CCS2 Charging Cable 5m",
    price: "Rp 1.750.000",
    image: "https://images.unsplash.com/photo-1747992422276-ab5785d6ad18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0eXBlJTIwMiUyMGNoYXJnaW5nJTIwY2FibGUlMjBFVnxlbnwxfHx8fDE3NzMwNjUyNTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 5,
    name: "Portable Charger 7.4kW",
    price: "Rp 5.200.000",
    image: "https://images.unsplash.com/photo-1592515910019-9e685e1b9517?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0YWJsZSUyMEVWJTIwY2hhcmdlciUyMGJsYWNrfGVufDF8fHx8MTc3MzA2NTI1NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 6,
    name: "CHAdeMO Adaptor",
    price: "Rp 2.100.000",
    image: "https://images.unsplash.com/photo-1603899122911-27c0cb85824a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyZ2luZyUyMGFkYXB0b3IlMjBjb25uZWN0b3J8ZW58MXx8fHwxNzczMDY1MjU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const fnbPartners = [
  {
    id: 1,
    name: "Alfamart",
    description: "Convenience store",
    image: "https://images.unsplash.com/photo-1769485016826-a7d5bfe50119?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb252ZW5pZW5jZSUyMHN0b3JlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzczMTM3MjgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    badge: "🏪",
    distance: "0.2 km"
  },
  {
    id: 2,
    name: "Indomaret",
    description: "Convenience store",
    image: "https://images.unsplash.com/photo-1769485016826-a7d5bfe50119?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb252ZW5pZW5jZSUyMHN0b3JlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzczMTM3MjgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    badge: "🏬",
    distance: "0.5 km"
  },
  {
    id: 3,
    name: "McDonald's",
    description: "Fast food restaurant",
    image: "https://images.unsplash.com/photo-1705433892650-314568e6447e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtY2RvbmFsZHMlMjByZXN0YXVyYW50fGVufDF8fHx8MTc3MzEzNzI3OHww&ixlib=rb-4.1.0&q=80&w=1080",
    badge: "🍔",
    distance: "0.8 km"
  },
  {
    id: 4,
    name: "Starbucks",
    description: "Coffee shop",
    image: "https://images.unsplash.com/photo-1693801874686-d4856b920a2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFyYnVja3MlMjBjb2ZmZWUlMjBzaG9wfGVufDF8fHx8MTc3MzEyNzc0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    badge: "☕",
    distance: "1.2 km"
  },
];

const bengkelServices = [
  {
    id: 1,
    name: "General Car Service",
    description: "Full vehicle inspection & maintenance",
    price: "Rp 350.000",
    image: "https://images.unsplash.com/photo-1618783129985-dd97dbe4ad99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3b3Jrc2hvcCUyMG1lY2hhbmljfGVufDF8fHx8MTc3MzEzNzI3OXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    name: "Tire Replacement",
    description: "Change & balance all tires",
    price: "Rp 200.000",
    image: "https://images.unsplash.com/photo-1763377278900-0ce8242c5005?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aXJlJTIwcmVwYWlyJTIwc2VydmljZXxlbnwxfHx8fDE3NzMxMzcyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    name: "Tire Puncture Repair",
    description: "Quick tire repair service",
    price: "Rp 50.000",
    image: "https://images.unsplash.com/photo-1763377278900-0ce8242c5005?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aXJlJTIwcmVwYWlyJTIwc2VydmljZXxlbnwxfHx8fDE3NzMxMzcyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    name: "Oil Change Service",
    description: "Engine oil & filter replacement",
    price: "Rp 250.000",
    image: "https://images.unsplash.com/photo-1618783129985-dd97dbe4ad99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3b3Jrc2hvcCUyMG1lY2hhbmljfGVufDF8fHx8MTc3MzEzNzI3OXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 5,
    name: "Brake System Check",
    description: "Complete brake inspection & repair",
    price: "Rp 400.000",
    image: "https://images.unsplash.com/photo-1618783129985-dd97dbe4ad99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3b3Jrc2hvcCUyMG1lY2hhbmljfGVufDF8fHx8MTc3MzEzNzI3OXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 6,
    name: "AC Maintenance",
    description: "AC cleaning & refrigerant refill",
    price: "Rp 300.000",
    image: "https://images.unsplash.com/photo-1618783129985-dd97dbe4ad99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3b3Jrc2hvcCUyMG1lY2hhbmljfGVufDF8fHx8MTc3MzEzNzI3OXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function MarketScreen() {
  const [selectedCategory, setSelectedCategory] = useState("Shop");

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-6 text-white shadow-lg">
          <h1 className="text-2xl font-semibold">Market</h1>
          <p className="text-sm text-blue-100 mt-1">Shop, Dine & Service while charging</p>
        </div>

        {/* Category Pills */}
        <div className="bg-white px-6 py-4 shadow-sm sticky top-0 z-10">
          <div className="flex gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex-1 px-4 py-3 rounded-2xl font-semibold transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/30"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Shop Category */}
        {selectedCategory === "Shop" && (
          <div className="px-6 py-6 grid grid-cols-2 gap-4">
            {shopProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-square bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">{product.price}</p>
                  <button className="w-full py-2.5 bg-gradient-to-r from-green-500 to-green-400 text-white rounded-xl hover:from-green-600 hover:to-green-500 transition-all shadow-sm">
                    Buy
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* FnB Category */}
        {selectedCategory === "FnB" && (
          <div className="px-6 py-6 space-y-4">
            {fnbPartners.map((partner) => (
              <div key={partner.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="flex gap-4 p-4">
                  <div className="w-24 h-24 bg-gray-100 rounded-2xl overflow-hidden flex-shrink-0">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{partner.badge}</span>
                          <h3 className="font-semibold text-gray-900">{partner.name}</h3>
                        </div>
                        <p className="text-sm text-gray-600">{partner.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-sm text-gray-500">📍 {partner.distance}</span>
                      <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:from-blue-700 hover:to-blue-600 transition-all shadow-sm text-sm font-semibold">
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bengkel Category */}
        {selectedCategory === "Bengkel" && (
          <div className="px-6 py-6 grid grid-cols-2 gap-4">
            {bengkelServices.map((service) => (
              <div key={service.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-square bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm line-clamp-2">
                    {service.name}
                  </h3>
                  <p className="text-xs text-gray-600 mb-2 line-clamp-1">{service.description}</p>
                  <p className="text-orange-600 font-semibold mb-3">{service.price}</p>
                  <button className="w-full py-2.5 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-xl hover:from-orange-600 hover:to-orange-500 transition-all shadow-sm">
                    Book
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
