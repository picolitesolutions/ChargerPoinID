import { Car, CreditCard, History, Calendar, Settings, LogOut, ChevronRight, X, Plus, Bluetooth, Phone, Mail, Lock, Globe } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { BottomNav } from "../components/BottomNav";

export function ProfileScreen() {
  const navigate = useNavigate();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showVehicleModal, setShowVehicleModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [selectedPaymentType, setSelectedPaymentType] = useState("");
  const [connectingBluetooth, setConnectingBluetooth] = useState(false);

  const handleLogout = () => {
    navigate("/");
  };

  const handleBluetoothConnect = () => {
    setConnectingBluetooth(true);
    setTimeout(() => {
      setConnectingBluetooth(false);
      alert("Vehicle connected via Bluetooth!");
    }, 2000);
  };

  const menuItems = [
    { 
      icon: Car, 
      label: "My Vehicles", 
      color: "text-blue-600", 
      bg: "bg-blue-50",
      onClick: () => setShowVehicleModal(true)
    },
    { icon: History, label: "Transaction History", color: "text-green-600", bg: "bg-green-50" },
    { icon: Calendar, label: "Active Bookings", color: "text-purple-600", bg: "bg-purple-50" },
    { 
      icon: Settings, 
      label: "Settings", 
      color: "text-gray-600", 
      bg: "bg-gray-50",
      onClick: () => setShowSettingsModal(true)
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="max-w-md mx-auto">
        {/* Header with Profile */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-500 px-6 py-8 text-white">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 mb-4 relative">
              <img
                src="https://images.unsplash.com/photo-1762522926157-bcc04bf0b10a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwcm9maWxlJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzczMDY1MjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Profile"
                className="w-full h-full rounded-full object-cover border-4 border-white/30 shadow-lg"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">Adi Surya</h2>
            <div className="px-4 py-1.5 bg-yellow-500 text-white rounded-full text-sm font-semibold mb-4 shadow-lg">
              Premium Member
            </div>
            
            {/* Contact Info */}
            <div className="w-full max-w-sm space-y-2">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2">
                <Phone className="w-4 h-4 text-white/80" />
                <span className="text-sm text-white/90">+62 812 3456 7890</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2">
                <Mail className="w-4 h-4 text-white/80" />
                <span className="text-sm text-white/90">adi.surya@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods Section */}
        <div className="px-6 py-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Payment Methods</h3>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <button 
              onClick={() => setShowPaymentModal(true)}
              className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Manage Payment Methods</p>
                  <p className="text-sm text-gray-500">3 methods linked</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Main Menu */}
        <div className="px-6 py-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Main Menu</h3>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={item.onClick}
                className={`w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors ${
                  index !== menuItems.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <p className="font-semibold text-gray-900">{item.label}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            ))}
          </div>
        </div>

        {/* Logout Button */}
        <div className="px-6 py-4">
          <button
            onClick={handleLogout}
            className="w-full px-5 py-4 bg-white border-2 border-red-500 text-red-500 rounded-2xl flex items-center justify-center gap-3 hover:bg-red-50 transition-colors shadow-sm"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-semibold">Logout</span>
          </button>
        </div>
      </div>

      <BottomNav />

      {/* Payment Methods Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-6">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Payment Methods</h3>
              <button 
                onClick={() => {
                  setShowPaymentModal(false);
                  setSelectedPaymentType("");
                }}
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Add New Payment */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-700 mb-3">Add New Payment Method</p>
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => setSelectedPaymentType("card")}
                  className="p-4 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-colors"
                >
                  <CreditCard className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-xs font-semibold text-gray-900">Credit Card</p>
                </button>
                <button
                  onClick={() => setSelectedPaymentType("bank")}
                  className="p-4 bg-green-50 rounded-2xl hover:bg-green-100 transition-colors"
                >
                  <div className="w-6 h-6 mx-auto mb-2 text-xl">🏦</div>
                  <p className="text-xs font-semibold text-gray-900">Bank</p>
                </button>
                <button
                  onClick={() => setSelectedPaymentType("ewallet")}
                  className="p-4 bg-purple-50 rounded-2xl hover:bg-purple-100 transition-colors"
                >
                  <div className="w-6 h-6 mx-auto mb-2 text-xl">💳</div>
                  <p className="text-xs font-semibold text-gray-900">E-Wallet</p>
                </button>
              </div>
            </div>

            {/* Conditional Form Based on Selection */}
            {selectedPaymentType === "card" && (
              <div className="space-y-4 mb-6 p-4 bg-blue-50 rounded-2xl">
                <h4 className="font-semibold text-gray-900">Add Credit/Debit Card</h4>
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-semibold">
                  Add Card
                </button>
              </div>
            )}

            {selectedPaymentType === "bank" && (
              <div className="space-y-4 mb-6 p-4 bg-green-50 rounded-2xl">
                <h4 className="font-semibold text-gray-900">Link Bank Account</h4>
                <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600">
                  <option>Select Bank</option>
                  <option>BCA</option>
                  <option>Mandiri</option>
                  <option>BNI</option>
                  <option>BRI</option>
                </select>
                <input
                  type="text"
                  placeholder="Account Number"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600"
                />
                <button className="w-full py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl font-semibold">
                  Link Bank
                </button>
              </div>
            )}

            {selectedPaymentType === "ewallet" && (
              <div className="space-y-4 mb-6 p-4 bg-purple-50 rounded-2xl">
                <h4 className="font-semibold text-gray-900">Link E-Wallet</h4>
                <div className="space-y-3">
                  <button className="w-full p-4 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-600 transition-all flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                      G
                    </div>
                    <span className="font-semibold text-gray-900">GoPay</span>
                  </button>
                  <button className="w-full p-4 bg-white border-2 border-gray-200 rounded-xl hover:border-purple-600 transition-all flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      O
                    </div>
                    <span className="font-semibold text-gray-900">OVO</span>
                  </button>
                  <button className="w-full p-4 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-600 transition-all flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      D
                    </div>
                    <span className="font-semibold text-gray-900">DANA</span>
                  </button>
                </div>
              </div>
            )}

            {/* Existing Payment Methods */}
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3">Saved Methods</p>
              <div className="space-y-3">
                <div className="p-4 bg-gray-50 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="font-semibold text-gray-900">•••• 1234</p>
                      <p className="text-xs text-gray-500">Visa</p>
                    </div>
                  </div>
                  <button className="text-sm text-red-600 hover:text-red-700">Remove</button>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-xl">💳</div>
                    <div>
                      <p className="font-semibold text-gray-900">GoPay</p>
                      <p className="text-xs text-gray-500">Linked</p>
                    </div>
                  </div>
                  <button className="text-sm text-red-600 hover:text-red-700">Remove</button>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-xl">🏦</div>
                    <div>
                      <p className="font-semibold text-gray-900">BCA ••3456</p>
                      <p className="text-xs text-gray-500">Bank Account</p>
                    </div>
                  </div>
                  <button className="text-sm text-red-600 hover:text-red-700">Remove</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Vehicle Modal */}
      {showVehicleModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-6">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">My Vehicles</h3>
              <button 
                onClick={() => setShowVehicleModal(false)}
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Add New Vehicle Form */}
            <div className="mb-6 p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Plus className="w-5 h-5 text-blue-600" />
                Add New Vehicle
              </h4>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Brand & Model (e.g., Hyundai Ioniq 5)"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="text"
                  placeholder="License Plate (e.g., B 1234 ABC)"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600">
                  <option>Select Charger Type</option>
                  <option>CCS2</option>
                  <option>CHAdeMO</option>
                  <option>Type 2 AC</option>
                  <option>Type 1</option>
                </select>
                <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600">
                  <option>Select Battery Type</option>
                  <option>Lithium-ion</option>
                  <option>LFP (LiFePO4)</option>
                  <option>NMC</option>
                  <option>Solid State</option>
                </select>
                
                {/* Bluetooth Connect */}
                <button 
                  onClick={handleBluetoothConnect}
                  disabled={connectingBluetooth}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-blue-700 hover:to-blue-600 transition-all disabled:opacity-50"
                >
                  <Bluetooth className={`w-5 h-5 ${connectingBluetooth ? 'animate-pulse' : ''}`} />
                  {connectingBluetooth ? "Connecting..." : "Connect via Bluetooth"}
                </button>
                
                <button className="w-full py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl font-semibold hover:from-green-700 hover:to-green-600 transition-all">
                  Add Vehicle
                </button>
              </div>
            </div>

            {/* Existing Vehicles */}
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3">Registered Vehicles</p>
              <div className="space-y-3">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-semibold text-gray-900">Hyundai Ioniq 5</p>
                      <p className="text-sm text-gray-600">B 1234 ABC</p>
                    </div>
                    <div className="px-2 py-1 bg-green-500 text-white text-xs rounded-full flex items-center gap-1">
                      <Bluetooth className="w-3 h-3" />
                      Connected
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white rounded-lg p-2">
                      <p className="text-xs text-gray-600">Charger</p>
                      <p className="text-sm font-semibold text-gray-900">CCS2</p>
                    </div>
                    <div className="bg-white rounded-lg p-2">
                      <p className="text-xs text-gray-600">Battery</p>
                      <p className="text-sm font-semibold text-gray-900">NMC</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {showSettingsModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-6">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Settings</h3>
              <button 
                onClick={() => setShowSettingsModal(false)}
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="space-y-3">
              {/* Change Password */}
              <button className="w-full p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl hover:from-blue-100 hover:to-blue-200 transition-all flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <div className="text-left flex-1">
                  <p className="font-semibold text-gray-900">Change Password</p>
                  <p className="text-sm text-gray-600">Update your security</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>

              {/* Language Settings */}
              <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left flex-1">
                    <p className="font-semibold text-gray-900">Language</p>
                    <p className="text-sm text-gray-600">Choose your preference</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <button className="w-full p-3 bg-white border-2 border-green-600 rounded-xl font-semibold text-gray-900 hover:bg-green-50 transition-colors">
                    🇮🇩 Bahasa Indonesia
                  </button>
                  <button className="w-full p-3 bg-white border border-gray-200 rounded-xl font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
                    🇬🇧 English
                  </button>
                  <button className="w-full p-3 bg-white border border-gray-200 rounded-xl font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
                    🇨🇳 中文 (Chinese)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
