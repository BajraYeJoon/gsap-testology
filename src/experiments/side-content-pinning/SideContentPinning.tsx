import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const SideContentPinning = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftSideRef = useRef<HTMLDivElement>(null);
  const rightSideRef = useRef<HTMLDivElement>(null);
  const textScrollPinRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const rightSideHeight =
      rightSideRef.current?.offsetHeight ?? window.innerHeight;

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: () => `+=${rightSideHeight - window.innerHeight}`,
      pin: leftSideRef.current,
      anticipatePin: 1,
      markers: true,
    });

    console.log(textScrollPinRef.current?.offsetWidth, "offsetWidth");
    console.log(window.innerWidth, "innerWidth");

    const textScrollAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: textScrollPinRef.current,
        start: "top 40%",
        end: () => `+=${textScrollPinRef.current?.offsetHeight}`,
        // pin: true  do this only when the heeight or color is white or any root color tha tmatches with design and if height is like h-screen which wont show the white space gaaping when pinning
        pinSpacing: true,
        scrub: 1,
        markers: true,
      },
    });

    textScrollAnimation.set(".scroll-text-horizontal", {
      xPercent: 100,
    });

    textScrollAnimation.to(".scroll-text-horizontal", {
      xPercent: 20,
    });
  });

  return (
    <section className="flex flex-col items-center justify-center">
      {/* Intro */}
      <div className="bg-purple-400 w-full h-screen flex flex-col items-center justify-center gap-8">
        <h1 className="text-white text-4xl font-bold">Side Content Pinning</h1>
        <p className="text-white text-xl">
          This section will have all the ways a screen can be pinned to the side
          of the screen
        </p>
      </div>
      {/* First Content */}
      <div
        ref={containerRef}
        className="bg-blue-400 w-full min-h-screen overflow-hidden flex items-start justify-center gap-4"
      >
        {/* Pinned Left Side */}
        <div
          ref={leftSideRef}
          className="bg-gray-500 w-1/2 h-screen flex items-center justify-center"
        >
          <h1 className="text-white text-4xl font-bold text-center">
            This section stays pinned while you scroll the right side
          </h1>
        </div>
        {/* Scrollable Right Side */}
        <div
          ref={rightSideRef}
          className="bg-green-400 w-1/2 flex flex-col gap-8 items-center justify-start py-8"
        >
          {[...Array(10)].map((_, index) => (
            <div
              className="bg-gray-500 h-[800px] w-4/5 rounded-3xl flex items-center justify-center text-white text-2xl"
              key={index}
            >
              Card {index + 1}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-amber-600/30 w-full h-screen"></div>
      <div
        ref={textScrollPinRef}
        className="bg-purple-800 w-full h-[500px] flex items-center justify-center overflow-hidden relative"
      >
        <h4 className="text-white scroll-text-horizontal will-change-transform text-8xl font-bold text-nowrap absolute">
          TEXT TO MOVE HALFWAY
        </h4>
      </div>
      {/* Fourth Content */}
      <div className="bg-red-400 w-full h-screen"></div>
      {/* Fifth Content */}
      <div className="bg-blue-400 w-full h-screen"></div>
      {/* Sixth Content */}
      <div className="bg-green-400 w-full h-screen"></div>
    </section>
  );
};

export default SideContentPinning;
