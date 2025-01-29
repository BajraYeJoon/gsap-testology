import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ScrollingText = () => {
  const textScrollPinRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const textScrollAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: textScrollPinRef.current,
        start: "top 40%",
        end: () => `+=${textScrollPinRef.current?.offsetHeight}`,
        pinSpacing: true,
        scrub: 1,
      },
    });

    textScrollAnimation.set(".scroll-text-horizontal", {
      xPercent: 100,
    });

    textScrollAnimation.to(".scroll-text-horizontal", {
      xPercent: 0,
    });
  });

  return (
    <div
      ref={textScrollPinRef}
      className="bg-gradient-to-r from-indigo-800 to-purple-900 w-full h-[500px] flex items-center justify-center overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      <h4 className="text-white scroll-text-horizontal will-change-transform text-8xl font-bold text-nowrap absolute mix-blend-overlay">
        CREATIVE • INNOVATIVE • DYNAMIC
      </h4>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm tracking-wider">
        Scroll to Experience
      </div>
    </div>
  );
};

export default ScrollingText;
