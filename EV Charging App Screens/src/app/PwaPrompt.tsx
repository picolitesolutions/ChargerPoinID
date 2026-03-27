import { useState, useEffect } from "react";

export default function PwaPrompt() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    // 1. Cek apakah user sudah meng-install aplikasinya (jangan ganggu kalau sudah)
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      ("standalone" in window.navigator &&
        (window.navigator as any).standalone);
    if (isStandalone) return;

    // 2. Deteksi apakah user pakai iPhone/iPad (iOS)
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isIosDevice);

    if (isIosDevice) {
      // Munculkan prompt untuk iOS setelah web dibuka 2 detik
      setTimeout(() => setShowPrompt(true), 2000);
    }

    // 3. Deteksi Android / Chrome (Menangkap sistem pop-up bawaan HP)
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true); // Tampilkan pop-up kita
    });
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setShowPrompt(false);
      }
      setDeferredPrompt(null);
    }
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 bg-white shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1)] rounded-t-2xl border-t border-gray-200">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold text-gray-900">
              Install ChargerPoin
            </h3>
            <p className="text-sm text-gray-600">
              Install aplikasi ini di HP kamu untuk pengalaman terbaik!
            </p>
          </div>
          <button
            onClick={() => setShowPrompt(false)}
            className="p-1 text-gray-400 hover:text-gray-600 text-xl"
          >
            ✕
          </button>
        </div>

        {isIOS ? (
          <div className="bg-gray-100 p-3 rounded-lg text-sm text-gray-700">
            Untuk install di iOS: ketuk ikon <strong>Share</strong> (kotak
            dengan panah ke atas) di menu bawah Safari, lalu gulir dan pilih{" "}
            <strong>"Add to Home Screen"</strong>.
          </div>
        ) : (
          <button
            onClick={handleInstallClick}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
          >
            Install Sekarang
          </button>
        )}
      </div>
    </div>
  );
}
