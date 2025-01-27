import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HeroParallax from "./experiments/hero-parallax/HeroParallax";
import ScrollPinning from "./experiments/scroll-pinning/ScrollPinning";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/experiments/hero-parallax",
    element: <HeroParallax />,
  },
  {
    path: "/experiments/scroll-pinning",
    element: <ScrollPinning />,
  },
]);
