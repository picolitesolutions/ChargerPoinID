import { createBrowserRouter } from "react-router";
import { LoginScreen } from "./screens/LoginScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { MapScreen } from "./screens/MapScreen";
import { MarketScreen } from "./screens/MarketScreen";
import { ProfileScreen } from "./screens/ProfileScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LoginScreen,
  },
  {
    path: "/home",
    Component: HomeScreen,
  },
  {
    path: "/map",
    Component: MapScreen,
  },
  {
    path: "/market",
    Component: MarketScreen,
  },
  {
    path: "/profile",
    Component: ProfileScreen,
  },
]);
