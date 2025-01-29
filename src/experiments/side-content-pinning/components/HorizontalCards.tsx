import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HorizontalCards = () => {
  const horizontalRef = useRef<HTMLDivElement>(null);
  const horizontalCardContainer = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const horizontalAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: horizontalRef?.current,
        start: "top top",
        end: `+=100%`,
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

    horizontalAnimation.to(".horizontal-cards-container", {
      x: () =>
        -(
          horizontalCardContainer.current?.offsetWidth ?? 0 - window.innerWidth
        ) + 900,
      ease: "none",
    });
  });

  return (
    <div
      ref={horizontalRef}
      className="bg-gradient-to-br from-amber-500 to-orange-600 w-full flex flex-col overflow-hidden items-center justify-center gap-8 py-36 h-screen relative"
    >
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      <div className="flex flex-col items-center gap-4 z-10">
        <h4 className="text-white text-6xl font-bold">Featured Projects</h4>
        <p className="text-white/80 text-xl max-w-2xl text-center">
          Scroll horizontally to explore our latest work and creative endeavors
        </p>
      </div>
      <div
        ref={horizontalCardContainer}
        className="horizontal-cards-container w-fit flex items-center gap-8 z-10"
      >
        {[...Array(5)].map((_, index) => (
          <div
            className="horizontal-card h-[500px] min-w-[400px] bg-white/10 backdrop-blur-sm rounded-3xl flex flex-col items-start justify-between p-8 hover:bg-white/20 transition-all duration-300 group"
            key={index}
          >
            <div className="w-full h-2/3 rounded-2xl overflow-hidden mb-6">
              <img
                src={`https://picsum.photos/600/800?random=${index + 10}`}
                alt={`Project ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <span className="text-white/60 text-sm tracking-wider">
                Project {index + 1}
              </span>
              <h3 className="text-white text-2xl font-bold mt-2">
                Creative Design Solutions
              </h3>
              <p className="text-white/70 mt-2">
                Exploring new boundaries in design and innovation
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCards;
