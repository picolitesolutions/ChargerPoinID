import { Home, Map, ShoppingBag, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router";

export function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="max-w-md mx-auto flex justify-around items-center h-16">
        <button
          onClick={() => navigate("/home")}
          className={`flex flex-col items-center justify-center flex-1 ${
            isActive("/home") ? "text-blue-600" : "text-gray-400"
          }`}
        >
          <Home className="w-6 h-6" />
          <span className="text-xs mt-1">Home</span>
        </button>
        <button
          onClick={() => navigate("/map")}
          className={`flex flex-col items-center justify-center flex-1 ${
            isActive("/map") ? "text-blue-600" : "text-gray-400"
          }`}
        >
          <Map className="w-6 h-6" />
          <span className="text-xs mt-1">Map</span>
        </button>
        <button
          onClick={() => navigate("/market")}
          className={`flex flex-col items-center justify-center flex-1 ${
            isActive("/market") ? "text-blue-600" : "text-gray-400"
          }`}
        >
          <ShoppingBag className="w-6 h-6" />
          <span className="text-xs mt-1">Market</span>
        </button>
        <button
          onClick={() => navigate("/profile")}
          className={`flex flex-col items-center justify-center flex-1 ${
            isActive("/profile") ? "text-blue-600" : "text-gray-400"
          }`}
        >
          <User className="w-6 h-6" />
          <span className="text-xs mt-1">Profile</span>
        </button>
      </div>
    </div>
  );
}
