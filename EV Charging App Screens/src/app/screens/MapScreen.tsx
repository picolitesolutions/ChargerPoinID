import { MapPin, Zap, ChevronLeft, ChevronRight, X, CreditCard, Wallet, Navigation } from "lucide-react";
import { useState } from "react";
import { BottomNav } from "../components/BottomNav";

const operators = [
  { 
    name: "PLN", 
    price: "Rp 2.466", 
    color: "from-blue-600 to-blue-500",
    textColor: "text-blue-600",
    chargerType: "CCS2 & CHAdeMO",
    facilities: ["toilet", "alfamart", "spbu"]
  },
  { 
    name: "Shell Recharge", 
    price: "Rp 3.500", 
    color: "from-yellow-500 to-yellow-400",
    textColor: "text-yellow-600",
    chargerType: "CCS2 Type 2",
    facilities: ["toilet", "indomaret", "mcdonalds", "spbu"]
  },
  { 
    name: "Voltron", 
    price: "Rp 2.800", 
    color: "from-purple-600 to-purple-500",
    textColor: "text-purple-600",
    chargerType: "Type 2 AC/DC",
    facilities: ["toilet", "starbucks", "bengkel"]
  },
  { 
    name: "Starvo", 
    price: "Rp 3.200", 
    color: "from-green-600 to-green-500",
    textColor: "text-green-600",
    chargerType: "CCS2 Ultra Fast",
    facilities: ["toilet", "alfamart", "mcdonalds", "tambalban"]
  },
  { 
    name: "Casion", 
    price: "Rp 2.950", 
    color: "from-red-600 to-red-500",
    textColor: "text-red-600",
    chargerType: "Universal Charger",
    facilities: ["toilet", "indomaret", "bengkel", "spbu"]
  },
];

const facilityIcons = {
  toilet: "🚻",
  alfamart: "🏪",
  indomaret: "🏬",
  mcdonalds: "🍔",
  starbucks: "☕",
  spbu: "⛽",
  bengkel: "🔧",
  tambalban: "🔩"
};

const facilityLabels = {
  toilet: "Toilet",
  alfamart: "Alfamart",
  indomaret: "Indomaret",
  mcdonalds: "McDonald's",
  starbucks: "Starbucks",
  spbu: "SPBU",
  bengkel: "Workshop",
  tambalban: "Tire Repair"
};

export function MapScreen() {
  const [currentOperatorIndex, setCurrentOperatorIndex] = useState(0);
  const [showReservation, setShowReservation] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("");

  const currentOperator = operators[currentOperatorIndex];

  const handleReservation = () => {
    if (selectedPayment) {
      alert(`Booking confirmed with ${selectedPayment}!`);
      setShowReservation(false);
      setSelectedPayment("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="max-w-md mx-auto">
        {/* SECTION 1: MAP AREA - Top Section */}
        <div className="relative h-64 bg-white border-b-2 border-gray-200">
          {/* Map Grid */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="mapgrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="#f9fafb"/>
            <rect width="100%" height="100%" fill="url(#mapgrid)" />
          </svg>
          
          {/* Roads */}
          <div className="absolute top-1/3 left-0 right-0 h-3 bg-gray-300"></div>
          <div className="absolute left-1/2 top-0 bottom-0 w-3 bg-gray-300"></div>
          
          {/* Mock charging station pins */}
          <div className="absolute top-12 left-12">
            <div className="w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-white fill-white" />
            </div>
          </div>
          <div className="absolute top-32 right-16">
            <div className="w-8 h-8 bg-red-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-white fill-white" />
            </div>
          </div>
          <div className="absolute top-48 left-20">
            <div className="w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-white fill-white" />
            </div>
          </div>
          <div className="absolute top-20 right-20">
            <div className="w-8 h-8 bg-yellow-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-white fill-white" />
            </div>
          </div>
          <div className="absolute bottom-16 left-1/3">
            <div className="w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-white fill-white" />
            </div>
          </div>
          <div className="absolute bottom-12 right-12">
            <div className="w-8 h-8 bg-gray-400 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-white fill-white" />
            </div>
          </div>
          
          {/* Current Location Pin */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-600/20 rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Map Controls */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <button className="w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
              <Navigation className="w-5 h-5 text-blue-600" />
            </button>
          </div>

          {/* Map Title */}
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
            <p className="text-sm font-semibold text-gray-900">Find Charging Stations</p>
            <p className="text-xs text-gray-600">6 stations nearby</p>
          </div>
        </div>

        {/* SECTION 2: STATION INFO & RESERVE - Middle Section */}
        <div className="bg-white border-b-2 border-gray-200 p-4">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 border-2 border-blue-200">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-semibold text-gray-900">PLN UID Jaya</h3>
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-1"></div>
                </div>
                <p className="text-sm text-gray-700">Jl. Sudirman No. 123</p>
                <p className="text-xs text-gray-600">0.8 km away</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-3">
              <div className="bg-white rounded-xl p-2.5 text-center">
                <p className="text-xs text-gray-600">Type</p>
                <p className="text-sm font-semibold text-gray-900 mt-0.5">Ultra-Fast</p>
              </div>
              <div className="bg-white rounded-xl p-2.5 text-center">
                <p className="text-xs text-gray-600">Power</p>
                <p className="text-sm font-semibold text-gray-900 mt-0.5">50 kW</p>
              </div>
              <div className="bg-white rounded-xl p-2.5 text-center">
                <p className="text-xs text-gray-600">Price</p>
                <p className="text-sm font-semibold text-blue-600 mt-0.5">Rp 2.466</p>
              </div>
            </div>

            <button 
              onClick={() => setShowReservation(true)}
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:from-blue-700 hover:to-blue-600 transition-all shadow-lg shadow-blue-500/30 font-semibold"
            >
              Reserve Now
            </button>
          </div>
        </div>

        {/* SECTION 3: PRICE LIST CAROUSEL - Bottom Section */}
        <div className="bg-white pb-4">
          <div className="px-4 pt-4 pb-3">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="font-semibold text-gray-900">Operator Pricing</h3>
                <p className="text-xs text-gray-600">March 2026</p>
              </div>
              <div className="flex gap-1">
                {operators.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentOperatorIndex(index)}
                    className={`h-1 rounded-full transition-all ${
                      index === currentOperatorIndex ? 'bg-blue-600 w-6' : 'bg-gray-300 w-1'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Carousel Container */}
            <div className="relative px-8">
              {/* Carousel Card */}
              <div className={`bg-gradient-to-br ${currentOperator.color} rounded-2xl p-4 text-white shadow-xl`}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-xl font-bold mb-0.5">{currentOperator.name}</h4>
                    <p className="text-white/80 text-xs">{currentOperator.chargerType}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-white/80">Per kWh</p>
                    <p className="text-xl font-bold">{currentOperator.price}</p>
                  </div>
                </div>

                {/* Facilities */}
                <div className="mb-3">
                  <p className="text-xs text-white/80 mb-1.5">Facilities:</p>
                  <div className="flex gap-1.5 flex-wrap">
                    {currentOperator.facilities.map((facility) => (
                      <div 
                        key={facility}
                        className="bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1.5"
                      >
                        <span className="text-base">{facilityIcons[facility as keyof typeof facilityIcons]}</span>
                        <span className="text-xs font-medium">{facilityLabels[facility as keyof typeof facilityLabels]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stations Count */}
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-2 text-center">
                  <p className="text-xs text-white/80">Available Stations</p>
                  <p className="text-lg font-bold">{Math.floor(Math.random() * 20) + 5} nearby</p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => setCurrentOperatorIndex(prev => prev > 0 ? prev - 1 : operators.length - 1)}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button
                onClick={() => setCurrentOperatorIndex(prev => prev < operators.length - 1 ? prev + 1 : 0)}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />

      {/* Reservation Modal */}
      {showReservation && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-6">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Confirm Reservation</h3>
              <button 
                onClick={() => {
                  setShowReservation(false);
                  setSelectedPayment("");
                }}
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Location Info */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 mb-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">PLN UID Jaya</h4>
                  <p className="text-sm text-gray-600">Jl. Sudirman No. 123</p>
                  <p className="text-xs text-gray-500 mt-1">0.8 km away • Ultra-Fast 50kW</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white rounded-lg p-2">
                  <p className="text-xs text-gray-600">Estimated Time</p>
                  <p className="text-sm font-semibold text-gray-900">30-45 min</p>
                </div>
                <div className="bg-white rounded-lg p-2">
                  <p className="text-xs text-gray-600">Estimated Cost</p>
                  <p className="text-sm font-semibold text-blue-600">Rp 37,500</p>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Select Payment Method</h4>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedPayment("Credit Card")}
                  className={`w-full p-4 rounded-2xl border-2 transition-all flex items-center gap-3 ${
                    selectedPayment === "Credit Card" 
                      ? "border-blue-600 bg-blue-50" 
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    selectedPayment === "Credit Card" ? "bg-blue-600" : "bg-gray-100"
                  }`}>
                    <CreditCard className={`w-5 h-5 ${
                      selectedPayment === "Credit Card" ? "text-white" : "text-gray-600"
                    }`} />
                  </div>
                  <div className="text-left flex-1">
                    <p className="font-semibold text-gray-900">Credit Card</p>
                    <p className="text-sm text-gray-500">**** 1234</p>
                  </div>
                  {selectedPayment === "Credit Card" && (
                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  )}
                </button>

                <button
                  onClick={() => setSelectedPayment("GoPay")}
                  className={`w-full p-4 rounded-2xl border-2 transition-all flex items-center gap-3 ${
                    selectedPayment === "GoPay" 
                      ? "border-blue-600 bg-blue-50" 
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    selectedPayment === "GoPay" ? "bg-blue-600" : "bg-gray-100"
                  }`}>
                    <Wallet className={`w-5 h-5 ${
                      selectedPayment === "GoPay" ? "text-white" : "text-gray-600"
                    }`} />
                  </div>
                  <div className="text-left flex-1">
                    <p className="font-semibold text-gray-900">GoPay</p>
                    <p className="text-sm text-gray-500">Balance: Rp 150,000</p>
                  </div>
                  {selectedPayment === "GoPay" && (
                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  )}
                </button>

                <button
                  onClick={() => setSelectedPayment("OVO")}
                  className={`w-full p-4 rounded-2xl border-2 transition-all flex items-center gap-3 ${
                    selectedPayment === "OVO" 
                      ? "border-blue-600 bg-blue-50" 
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    selectedPayment === "OVO" ? "bg-blue-600" : "bg-gray-100"
                  }`}>
                    <Wallet className={`w-5 h-5 ${
                      selectedPayment === "OVO" ? "text-white" : "text-gray-600"
                    }`} />
                  </div>
                  <div className="text-left flex-1">
                    <p className="font-semibold text-gray-900">OVO</p>
                    <p className="text-sm text-gray-500">Balance: Rp 200,000</p>
                  </div>
                  {selectedPayment === "OVO" && (
                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  )}
                </button>

                <button
                  onClick={() => setSelectedPayment("DANA")}
                  className={`w-full p-4 rounded-2xl border-2 transition-all flex items-center gap-3 ${
                    selectedPayment === "DANA" 
                      ? "border-blue-600 bg-blue-50" 
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    selectedPayment === "DANA" ? "bg-blue-600" : "bg-gray-100"
                  }`}>
                    <Wallet className={`w-5 h-5 ${
                      selectedPayment === "DANA" ? "text-white" : "text-gray-600"
                    }`} />
                  </div>
                  <div className="text-left flex-1">
                    <p className="font-semibold text-gray-900">DANA</p>
                    <p className="text-sm text-gray-500">Balance: Rp 180,000</p>
                  </div>
                  {selectedPayment === "DANA" && (
                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  )}
                </button>
              </div>
            </div>

            {/* Booking Button */}
            <button
              onClick={handleReservation}
              disabled={!selectedPayment}
              className={`w-full py-4 rounded-2xl font-semibold transition-all ${
                selectedPayment
                  ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 shadow-lg shadow-blue-500/30"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              Confirm Booking
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
