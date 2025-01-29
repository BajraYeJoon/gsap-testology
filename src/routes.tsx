import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ScrollPinning from "./experiments/scroll-pinning/ScrollPinning";
import SideContentPinning from "./experiments/side-content-pinning/SideContentPinning";
import HeroZoom from "./experiments/hero-zoom/HeroParallax";
import Parallax from "./experiments/parallax/Parallax";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/experiments/hero-zoom",
    element: <HeroZoom />,
  },
  {
    path: "/experiments/scroll-pinning",
    element: <ScrollPinning />,
  },
  {
    path: "/experiments/side-content-pinning",
    element: <SideContentPinning />,
  },
  {
    path: "/experiments/parallax",
    element: <Parallax />,
  },
]);
