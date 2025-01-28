import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const SideContentPinning = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftSideRef = useRef<HTMLDivElement>(null);
  const rightSideRef = useRef<HTMLDivElement>(null);
  const textScrollPinRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const horizontalCardContainer = useRef<HTMLDivElement>(null);
  const pinImageContainerRef = useRef<HTMLDivElement>(null);
  const pinImageRef = useRef<HTMLImageElement>(null);
  const secondRowTriggerRef = useRef<HTMLDivElement>(null);
  const thirdRowTriggerRef = useRef<HTMLDivElement>(null);
  const imageSlideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(
      secondRowTriggerRef.current?.getBoundingClientRect().left,
      "left"
    );
    console.log(
      thirdRowTriggerRef.current?.getBoundingClientRect().left,
      "right"
    );
  }, []);

  useGSAP(() => {
    const rightSideHeight =
      rightSideRef.current?.offsetHeight ?? window.innerHeight;

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: () => `+=${rightSideHeight - window.innerHeight}`,
      pin: leftSideRef.current,
      anticipatePin: 1,
      //   markers: true,
    });

    const textScrollAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: textScrollPinRef.current,
        start: "top 40%",
        end: () => `+=${textScrollPinRef.current?.offsetHeight}`,
        // pin: true  do this only when the heeight or color is white or any root color tha tmatches with design and if height is like h-screen which wont show the white space gaaping when pinning
        pinSpacing: true,
        scrub: 1,
        // markers: true,
      },
    });

    textScrollAnimation.set(".scroll-text-horizontal", {
      xPercent: 100,
    });

    textScrollAnimation.to(".scroll-text-horizontal", {
      xPercent: 20,
    });

    // Horizontal SHowcase

    const horizontalAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: horizontalRef?.current,
        start: "top top",
        end: () => `+=100%`,
        pin: true,
        anticipatePin: 1,
        pinSpacing: true,
        scrub: 1,
        markers: true,
      },
    });

    horizontalAnimation.set(".horizontal-cards-container", {
      xPercent: 40,
    });

    horizontalAnimation.to(".horizontal-card", {
      x: () =>
        -(
          horizontalCardContainer.current?.offsetWidth ?? 0 - window.innerWidth
        ) + 1300,
      ease: "none",
    });

    // Pin Image

    ScrollTrigger.create({
      trigger: imageSlideRef.current,
      start: "top top",
      end: "+=100%",
      pin: pinImageContainerRef.current,
      anticipatePin: 1,
      markers: true,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pinImageContainerRef.current,
        start: "top top",
        end: "+=1000",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        markers: true,
      },
    });

    const updateImagePosition = (
      targetRef: React.RefObject<HTMLDivElement>,
      offsetX = 0,
      offsetY = 0
    ) => {
      if (targetRef.current && pinImageContainerRef.current) {
        const targetRect = targetRef.current.getBoundingClientRect();
        const containerRect =
          pinImageContainerRef.current.getBoundingClientRect();

        return {
          x: targetRect.left - containerRect.left + offsetX,
          y: targetRect.top - containerRect.top + offsetY,
        };
      }
      return { x: 0, y: 0 };
    };

    if (secondRowTriggerRef.current && thirdRowTriggerRef.current) {
      tl.to(pinImageContainerRef.current, {
        ...updateImagePosition(secondRowTriggerRef, 0, 0),
        duration: 1,
      }).to(pinImageContainerRef.current, {
        ...updateImagePosition(thirdRowTriggerRef, 0, 0),
        duration: 0.4,
      });
    }

    ScrollTrigger.refresh();
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
      <div className="bg-red-400/35 w-full h-screen"></div>
      {/* Fifth Content */}
      <div
        ref={horizontalRef}
        className="bg-amber-600/80 w-full flex flex-col overflow-hidden items-center justify-center gap-5 py-36 h-screen"
      >
        <h4 className="text-white text-4xl font-bold">
          Horizontal Cards Showcases
        </h4>
        <div
          ref={horizontalCardContainer}
          className="horizontal-cards-container w-fit flex items-center gap-4"
        >
          {[...Array(10)].map((_, index) => (
            <div
              className="horizontal-card h-[400px] min-w-[600px] bg-gray-500 rounded-3xl flex items-center justify-center text-white text-2xl"
              key={index}
            >
              Card {index + 1}
            </div>
          ))}
        </div>
      </div>
      {/* Sixth Content */}
      <div
        ref={imageSlideRef}
        className="bg-green-400 w-full h-full *:h-[500px] grid grid-rows-3 gap-4 relative overflow-hidden"
      >
        {/* First Row */}
        <div className="grid grid-cols-2 w-full h-full gap-4">
          <div className="border-2 border-white">First Column</div>
          <div className="border-2 border-white relative flex items-center justify-center">
            <div
              ref={pinImageContainerRef}
              className="absolute z-10 will-change-transform"
            >
              <img
                ref={pinImageRef}
                src="https://images.unsplash.com/photo-1736779580644-6b4268af4642?fm=jpg&q=60&w=3000"
                className="h-96 w-80 object-cover rounded-3xl"
                alt="Pinned "
              />
            </div>
          </div>
        </div>
        {/* Second Row */}
        <div className="grid grid-cols-2 w-full h-full gap-4">
          <div
            className="border-2 border-white relative"
            ref={secondRowTriggerRef}
          >
            First Column
          </div>
          <div className="border-2 border-white">Second Column</div>
        </div>
        {/* Third Row */}
        <div className="grid grid-cols-2 w-full h-full gap-4">
          <div className="border-2 border-white">First Column</div>
          <div
            className="border-2 border-white relative"
            ref={thirdRowTriggerRef}
          >
            Second Column
          </div>
        </div>
        <div className="h-screen bg-red-400"></div>
      </div>
    </section>
  );
};

export default SideContentPinning;
