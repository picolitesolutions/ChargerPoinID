import { RouterProvider } from "react-router";
import { router } from "./routes"; // <-- Perhatikan, titiknya sekarang cuma satu
import PwaPrompt from "./PwaPrompt";

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <PwaPrompt />
    </>
  );
}
