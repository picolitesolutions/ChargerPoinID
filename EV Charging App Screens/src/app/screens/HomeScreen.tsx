import { Bell, ChevronLeft, ChevronRight, MapPin, Calendar, Zap, X } from "lucide-react";
import { useState } from "react";
import { BottomNav } from "../components/BottomNav";

export function HomeScreen() {
  const [currentCarIndex, setCurrentCarIndex] = useState(0);
  const [showActivityDetail, setShowActivityDetail] = useState(false);

  const cars = [
    {
      name: "Hyundai Ioniq 5",
      plate: "B 1234 ABC",
      battery: 65,
      range: 210,
      image: "https://images.unsplash.com/photo-1770287872508-0462bb007850?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoeXVuZGFpJTIwaW9uaXElMjA1JTIwd2hpdGUlMjBlbGVjdHJpYyUyMGNhcnxlbnwxfHx8fDE3NzMwNjUyNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const activityDetails = [
    { date: "Mar 10, 2026", location: "PLN UID Jaya", kwh: 15.2, cost: "Rp 37,475" },
    { date: "Mar 8, 2026", location: "Shell Recharge", kwh: 12.8, cost: "Rp 44,800" },
    { date: "Mar 6, 2026", location: "Voltron Station", kwh: 14.1, cost: "Rp 39,480" },
    { date: "Mar 4, 2026", location: "PLN UID Jaya", kwh: 13.5, cost: "Rp 33,291" },
    { date: "Mar 2, 2026", location: "Starvo Hub", kwh: 16.3, cost: "Rp 52,160" },
    { date: "Feb 28, 2026", location: "PLN UID Jaya", kwh: 11.9, cost: "Rp 29,345" },
    { date: "Feb 26, 2026", location: "Casion Point", kwh: 13.7, cost: "Rp 40,415" },
    { date: "Feb 24, 2026", location: "Shell Recharge", kwh: 14.8, cost: "Rp 51,800" },
    { date: "Feb 22, 2026", location: "Voltron Station", kwh: 12.3, cost: "Rp 34,440" },
    { date: "Feb 20, 2026", location: "PLN UID Jaya", kwh: 15.6, cost: "Rp 38,470" },
    { date: "Feb 18, 2026", location: "Starvo Hub", kwh: 10.2, cost: "Rp 32,640" },
    { date: "Feb 16, 2026", location: "Casion Point", kwh: 6.4, cost: "Rp 18,880" },
  ];

  const currentCar = cars[currentCarIndex];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="max-w-md mx-auto bg-gray-50">
        {/* Header */}
        <div className="bg-white px-6 py-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1762522926157-bcc04bf0b10a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwcm9maWxlJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzczMDY1MjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Profile"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                Premium
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500">Welcome back,</p>
              <p className="font-semibold text-gray-900">Adi Surya</p>
            </div>
          </div>
          <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center relative">
            <Bell className="w-5 h-5 text-gray-700" />
            <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></div>
          </button>
        </div>

        {/* Car Carousel */}
        <div className="px-6 py-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() =>
                  setCurrentCarIndex((prev) => (prev > 0 ? prev - 1 : cars.length - 1))
                }
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
              >
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </button>
              <h2 className="text-lg font-semibold text-gray-900">{currentCar.name}</h2>
              <button
                onClick={() =>
                  setCurrentCarIndex((prev) => (prev < cars.length - 1 ? prev + 1 : 0))
                }
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
              >
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            <img
              src={currentCar.image}
              alt={currentCar.name}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />

            <div className="text-center mb-4">
              <p className="text-gray-600 text-sm">{currentCar.plate}</p>
            </div>

            {/* Battery Progress */}
            <div className="mb-2">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Battery Level</span>
                <span className="text-lg font-semibold text-blue-600">{currentCar.battery}%</span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 rounded-full transition-all"
                  style={{ width: `${currentCar.battery}%` }}
                ></div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-2">
              <span className="text-sm text-gray-600">Estimated Range</span>
              <span className="font-semibold text-gray-900">{currentCar.range} km</span>
            </div>
          </div>
        </div>

        {/* Active Reservation Banner */}
        <div className="px-6 mb-6">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-5 text-white shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm opacity-90">Active Reservation</p>
                  <p className="font-semibold">PLN UID Jaya - 14:00</p>
                </div>
              </div>
              <button className="text-sm underline">Details</button>
            </div>
          </div>
        </div>

        {/* Map Widget */}
        <div className="px-6 mb-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Nearby Chargers</h3>
          <div className="bg-white rounded-2xl h-48 relative overflow-hidden shadow-sm border border-gray-100">
            {/* Simulated Map with Grid Pattern */}
            <div className="absolute inset-0">
              {/* Map Grid Background */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="#f9fafb"/>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
              
              {/* Roads */}
              <div className="absolute top-1/3 left-0 right-0 h-2 bg-gray-300"></div>
              <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-gray-300"></div>
              
              {/* Mock charging station pins with better positioning */}
              <div className="absolute top-12 left-16">
                <div className="relative group cursor-pointer">
                  <div className="w-10 h-10 bg-green-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
                    <Zap className="w-5 h-5 text-white fill-white" />
                  </div>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Available
                  </div>
                </div>
              </div>
              <div className="absolute top-24 right-20">
                <div className="relative group cursor-pointer">
                  <div className="w-10 h-10 bg-red-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
                    <Zap className="w-5 h-5 text-white fill-white" />
                  </div>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    In Use
                  </div>
                </div>
              </div>
              <div className="absolute bottom-16 left-24">
                <div className="relative group cursor-pointer">
                  <div className="w-10 h-10 bg-green-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
                    <Zap className="w-5 h-5 text-white fill-white" />
                  </div>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Available
                  </div>
                </div>
              </div>
              <div className="absolute bottom-12 right-16">
                <div className="relative group cursor-pointer">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
                    <Zap className="w-5 h-5 text-white fill-white" />
                  </div>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Reserved
                  </div>
                </div>
              </div>
              <div className="absolute top-20 left-1/2">
                <div className="relative group cursor-pointer">
                  <div className="w-10 h-10 bg-green-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
                    <Zap className="w-5 h-5 text-white fill-white" />
                  </div>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Available
                  </div>
                </div>
              </div>
              
              {/* Current Location Pin */}
              <div className="absolute top-1/2 left-1/3">
                <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Summary */}
        <div className="px-6 mb-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Activity Summary</h3>
          <button 
            onClick={() => setShowActivityDetail(true)}
            className="w-full bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-gray-600">March 2026</p>
                <p className="text-2xl font-semibold text-gray-900 mt-1">156.8 kWh</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Total Sessions</p>
                <p className="text-2xl font-semibold text-blue-600 mt-1">12</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
              <div>
                <p className="text-xs text-gray-600">Avg. per session</p>
                <p className="text-lg font-semibold text-gray-900 mt-1">13.1 kWh</p>
              </div>
              <div>
                <p className="text-xs text-gray-600">Total spent</p>
                <p className="text-lg font-semibold text-gray-900 mt-1">Rp 386,700</p>
              </div>
            </div>
            <div className="mt-3 text-sm text-blue-600 text-center">
              Tap to view details →
            </div>
          </button>
        </div>
      </div>

      <BottomNav />

      {/* Activity Detail Modal */}
      {showActivityDetail && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-end justify-center z-50">
          <div className="bg-white rounded-t-3xl max-w-md w-full max-h-[85vh] shadow-2xl animate-in slide-in-from-bottom">
            <div className="sticky top-0 bg-white rounded-t-3xl px-6 py-5 border-b border-gray-100 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-900">March Activity Details</h3>
              <button 
                onClick={() => setShowActivityDetail(false)}
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            
            <div className="px-6 py-4 overflow-y-auto" style={{ maxHeight: "calc(85vh - 80px)" }}>
              {/* Summary Cards */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4">
                  <p className="text-sm text-blue-600 mb-1">Total Energy</p>
                  <p className="text-2xl font-semibold text-blue-900">156.8 kWh</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-4">
                  <p className="text-sm text-green-600 mb-1">Total Spent</p>
                  <p className="text-2xl font-semibold text-green-900">Rp 386,700</p>
                </div>
              </div>

              {/* Activity List */}
              <div className="space-y-3">
                {activityDetails.map((activity, index) => (
                  <div key={index} className="bg-gray-50 rounded-2xl p-4 hover:bg-gray-100 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-semibold text-gray-900">{activity.location}</p>
                        <p className="text-sm text-gray-500">{activity.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">{activity.cost}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-white rounded-lg px-3 py-2">
                        <p className="text-xs text-gray-600">Energy</p>
                        <p className="text-sm font-semibold text-blue-600">{activity.kwh} kWh</p>
                      </div>
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Zap className="w-4 h-4 text-blue-600" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}