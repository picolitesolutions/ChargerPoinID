import { Zap } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

export function LoginScreen() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showGoogleLogin, setShowGoogleLogin] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home");
  };

  const handleGoogleLogin = () => {
    // Simulate Google login
    setTimeout(() => {
      setShowGoogleLogin(false);
      navigate("/home");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-blue-500/30">
            <Zap className="w-10 h-10 text-white fill-white" />
          </div>
          <h1 className="text-2xl font-semibold text-gray-900">ChargerPoin ID</h1>
          <p className="text-sm text-gray-500 mt-1">Smart EV Charging Network</p>
        </div>

        {/* Phone Input Section */}
        <div className="mb-6">
          <label className="block text-sm text-gray-600 mb-2">Phone Number</label>
          <div className="flex gap-3">
            <div className="w-20 px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl flex items-center justify-center">
              <span className="text-gray-900">+62</span>
            </div>
            <input
              type="tel"
              placeholder="812 3456 7890"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl mb-4 hover:from-blue-700 hover:to-blue-600 transition-all shadow-lg shadow-blue-500/30"
        >
          Login
        </button>

        {/* Google Login Button */}
        <button
          onClick={() => setShowGoogleLogin(true)}
          className="w-full py-4 bg-white border border-gray-200 text-gray-900 rounded-2xl flex items-center justify-center gap-3 mb-6 hover:bg-gray-50 transition-colors"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Login with Google
        </button>

        {/* Forgot Password Link */}
        <div className="text-center">
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Forgot Password?
          </a>
        </div>
      </div>

      {/* Google Login Modal */}
      {showGoogleLogin && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-6">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Sign in with Google</h3>
            <div className="space-y-4">
              <button
                onClick={handleGoogleLogin}
                className="w-full p-4 border-2 border-gray-200 rounded-2xl hover:border-blue-600 hover:bg-blue-50 transition-all flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                  AS
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Adi Surya</p>
                  <p className="text-sm text-gray-500">adi.surya@gmail.com</p>
                </div>
              </button>
              <button
                className="w-full p-4 border-2 border-gray-200 rounded-2xl hover:border-blue-600 hover:bg-blue-50 transition-all flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Use another account</p>
                </div>
              </button>
            </div>
            <button
              onClick={() => setShowGoogleLogin(false)}
              className="w-full mt-6 py-3 text-gray-600 hover:text-gray-900 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}