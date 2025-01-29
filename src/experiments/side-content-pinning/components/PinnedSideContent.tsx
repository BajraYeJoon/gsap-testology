import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

const PinnedSideContent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftSideRef = useRef<HTMLDivElement>(null);
  const rightSideRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const rightSideHeight =
      rightSideRef.current?.offsetHeight ?? window.innerHeight;

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: () => `+=${rightSideHeight - window.innerHeight}`,
      pin: leftSideRef.current,
      anticipatePin: 1,
    });
  });

  return (
    <div
      ref={containerRef}
      className="bg-gradient-to-br from-blue-600 to-purple-600 w-full min-h-screen overflow-hidden flex items-start justify-center gap-4"
    >
      {/* Pinned Left Side */}
      <div
        ref={leftSideRef}
        className="bg-white/10 backdrop-blur-md w-1/2 h-screen flex flex-col items-center justify-center gap-8 p-8"
      >
        <h1 className="text-white text-5xl font-bold text-center leading-tight">
          Discover Our Latest
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-orange-500">
            Design Collections
          </span>
        </h1>
        <p className="text-white/80 text-xl text-center max-w-lg">
          Explore our curated selection of stunning designs that blend
          creativity with functionality. Each piece tells a unique story.
        </p>
        <button className="mt-4 px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 border border-white/20">
          Explore More
        </button>
      </div>
      {/* Scrollable Right Side */}
      <div
        ref={rightSideRef}
        className="w-1/2 flex flex-col gap-8 items-center justify-start py-8"
      >
        {[...Array(3)].map((_, index) => (
          <div
            className="group bg-white/10 backdrop-blur-md h-[600px] w-4/5 rounded-3xl flex flex-col items-center justify-center text-white p-8 hover:bg-white/20 transition-all duration-300 cursor-pointer"
            key={index}
          >
            <div className="w-full h-2/3 rounded-2xl overflow-hidden mb-6">
              <img
                src={`https://picsum.photos/800/600?random=${index}`}
                alt={`Design ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-2xl font-bold mb-3">
              Design Collection {index + 1}
            </h3>
            <p className="text-white/70 text-center">
              Explore our unique design solutions that combine aesthetics with
              functionality
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PinnedSideContent;
