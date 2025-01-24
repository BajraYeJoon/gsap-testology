import { ReactLenis, useLenis } from "lenis/react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

interface LenisWrapperProps {
  children: React.ReactNode;
}

export default function LenisWrapper({ children }: LenisWrapperProps) {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    // Sync scroll with ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Set up GSAP ticker for smooth animation
    gsap.ticker.lagSmoothing(0);
    const animate = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(animate);

    // Clean up
    return () => {
      gsap.ticker.remove(animate);
      lenis.destroy();
    };
  }, [lenis]);

  return (
    <ReactLenis
      root
      options={{
        duration: 1.8, // Animation duration (seconds)
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing function
        smoothWheel: true,
        wheelMultiplier: 0.8,
        syncTouch: true,
        syncTouchLerp: 0.08,
        touchMultiplier: 1.5,

        infinite: false,
        orientation: "vertical",
        gestureOrientation: "vertical",
      }}
    >
      {children}
    </ReactLenis>
  );
}
