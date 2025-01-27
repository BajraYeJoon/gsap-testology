import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function ScrollPinning() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinSection1Ref = useRef<HTMLDivElement>(null);
  const pinSection2Ref = useRef<HTMLDivElement>(null);
  const pinSection3Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Basic Pin Example
    ScrollTrigger.create({
      trigger: pinSection1Ref.current,
      start: "top top",
      end: "+=20%",
      pin: true,
      pinSpacing: true,
      markers: true,
    });

    // Pin with Timeline Animation
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

    // Pin with Snap Points
    ScrollTrigger.create({
      trigger: pinSection3Ref.current,
      start: "top top",
      end: "+=300%",
      pin: true,
      pinSpacing: true,
      markers: true,
      snap: {
        snapTo: [0, 0.5, 1], // Snap to start, middle, and end
        duration: { min: 0.2, max: 0.8 },
        delay: 0,
        ease: "power1.inOut",
      },
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
        className="min-h-screen bg-green-900 flex items-center justify-center p-8"
      >
        <div className="max-w-2xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Snap Points</h2>
          <p className="text-xl text-green-200">
            This section demonstrates snapping behavior. Scroll will snap to
            specific points during the pin duration.
          </p>
          <div className="mt-12 space-y-8">
            <div className="p-6 bg-green-800 rounded-lg">Snap Point 1</div>
            <div className="p-6 bg-green-800 rounded-lg">Snap Point 2</div>
            <div className="p-6 bg-green-800 rounded-lg">Snap Point 3</div>
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
