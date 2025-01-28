import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
 

gsap.registerPlugin(ScrollTrigger);

function ScrollPinning() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinSection1Ref = useRef<HTMLDivElement>(null);
  const pinSection2Ref = useRef<HTMLDivElement>(null);
  const pinSection3Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: pinSection1Ref.current,
      start: "top top",
      end: "+=100%",
      pin: true,
      pinSpacing: true,
      markers: true,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pinSection2Ref.current,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: 1,
        markers: true,
      },
    });

    tl.to(".animate-text", { scale: 2, duration: 1 })
      .to(".animate-text", { rotation: 360, duration: 1 })
      .to(".animate-text", { scale: 1, duration: 1 });

    const cards = gsap.utils.toArray<HTMLElement>(".snap-point");

    ScrollTrigger.create({
      trigger: pinSection3Ref.current,
      start: "top top",
      end: "+=1024",
      pin: true,
      pinSpacing: true,
      markers: true,
    });

    const snapPoints = gsap.timeline({
      scrollTrigger: {
        trigger: pinSection3Ref.current,
        start: "top top",
        end: "+=100%",
        endTrigger: pinSection3Ref.current,
        scrub: 1,
        markers: true,
      },
    });

    gsap.set(cards, {
      backgroundColor: (i) => ["red", "blue", "green"][i],
      yPercent: (i) => i * 100,
      opacity: 1,
    });

    cards.forEach((card, i) => {
      if (i === 0) return;
      snapPoints.to(card, {
        yPercent: 0,
        scale: 1,
        duration: 1,
      });
    });
  });

  return (
    <div ref={containerRef} className="bg-gray-900 text-white">
      {/* Introduction Section */}
      <section className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            ScrollTrigger Pinning Mastery
          </h1>
          <p className="text-xl text-gray-400">
            Scroll down to explore different pinning techniques with GSAP
            ScrollTrigger
          </p>
        </div>
      </section>

      {/* Basic Pin Example */}
      <section
        ref={pinSection1Ref}
        className="min-h-screen bg-purple-900 flex items-center justify-center p-8"
      >
        <div className="max-w-2xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Basic Pinning</h2>
          <p className="text-xl text-purple-200">
            This section is pinned to the viewport while you scroll through its
            duration. The pin-spacer ensures smooth content flow.
          </p>
        </div>
      </section>

      {/* Pin with Timeline Animation */}
      <section
        ref={pinSection2Ref}
        className="min-h-screen bg-blue-900 flex items-center justify-center p-8"
      >
        <div className="max-w-2xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-text">
            Animated Pin
          </h2>
          <p className="text-xl text-blue-200">
            This section combines pinning with a timeline animation. The text
            scales and rotates as you scroll.
          </p>
        </div>
      </section>

      {/* Pin with Snap Points */}
      <section
        ref={pinSection3Ref}
        className="h-[900px] bg-green-900 relative overflow-hidden"
      >
        <div className="min-h-screen flex flex-col items-center justify-center gap-12 p-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Snap Points
          </h2>
          <div className="snap-points-wrapper flex flex-col h-[600px] w-[800px] items-center justify-center gap-8 ">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className={`snap-point h-[600px] w-[800px] absolute p-8 
                } rounded-lg w-full transform-gpu `}
              >
                <h3 className="text-xl font-bold mb-2">Card {index}</h3>
                <p>Card {index} content</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ending Section */}
      <section className="min-h-screen flex items-center justify-center p-8 bg-gray-800">
        <div className="max-w-2xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            That's All Folks!
          </h2>
          <p className="text-xl text-gray-400">
            You've explored different pinning techniques with GSAP
            ScrollTrigger. Each technique offers unique ways to create engaging
            scroll experiences.
          </p>
        </div>
      </section>
    </div>
  );
}

export default ScrollPinning;
