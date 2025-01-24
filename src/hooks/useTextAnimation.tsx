import { useRef } from "react";
import gsap from "gsap";

interface TextAnimationConfig {
  delay?: number;
  duration?: number;
  stagger?: number;
  y?: number;
  ease?: string;
}

export const useTextAnimation = (config: TextAnimationConfig = {}) => {
  const lettersRef = useRef<HTMLSpanElement[]>([]);

  const defaultConfig = {
    delay: 0.5,
    duration: 1.5,
    stagger: 0.02,
    y: 50,
    ease: "power2.out",
    ...config,
  };

  const animate = () => {
    gsap.fromTo(
      lettersRef.current,
      {
        y: defaultConfig.y,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: defaultConfig.duration,
        stagger: defaultConfig.stagger,
        ease: defaultConfig.ease,
        delay: defaultConfig.delay,
      }
    );
  };

  const createLetterSpans = (text: string) => {
    return text.split("").map((letter, index) => (
      <span
        key={index}
        ref={(el) => {
          if (el) lettersRef.current[index] = el;
        }}
        className="inline-block opacity-0"
      >
        {letter === " " ? "\u00A0" : letter}
      </span>
    ));
  };

  return {
    createLetterSpans,
    animate,
    lettersRef,
  };
};
