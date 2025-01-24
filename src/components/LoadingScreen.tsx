import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const screenRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power2.inOut" },
    });

    // Animation sequence
    tl.fromTo(
      textRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    )
      .to(
        textRef.current,
        {
          y: -50,
          opacity: 0,
          duration: 0.8,
        },
        "+=1"
      )
      .to(screenRef.current, {
        y: "-100%",
        duration: 1.2,
        onComplete,
      });
  }, []);

  return (
    <div
      ref={screenRef}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
    >
      <div
        ref={textRef}
        className="text-white text-[clamp(2rem,8vw,4.5rem)] font-extralight tracking-[0.2em] text-center opacity-0"
      >
        Hello from the future
      </div>
    </div>
  );
};

export default LoadingScreen;
