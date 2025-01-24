import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const textRefs = {
    title: useRef(null),
    subtitle1: useRef(null),
    subtitle2: useRef(null),
    button: useRef(null),
  };
  const hasAnimatedRef = useRef(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useGSAP(
    () => {
      if (shouldAnimate && !hasAnimatedRef.current) {
        hasAnimatedRef.current = true;

        gsap.set(imageRef.current, {
          scale: 1.5,
        });
        gsap.to(imageRef.current, {
          opacity: 1,
          duration: 0.01,
        });

        // Animate text elements with stagger
        gsap.fromTo(
          [
            textRefs.title.current,
            textRefs.subtitle1.current,
            textRefs.subtitle2.current,
            textRefs.button.current,
          ],
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            delay: 0.5,
            duration: 1,
            stagger: 0.11,
            ease: "power1.out",
          }
        );

        // Start scale down animation
        gsap.to(imageRef.current, {
          scale: 1,
          duration: 1.8,
          ease: "power3.inOut",
        });
      }
    },
    {
      dependencies: [shouldAnimate],
      scope: heroRef,
    }
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      {loading && (
        <LoadingScreen
          onComplete={() => setLoading(false)}
          onBeforeComplete={() => setShouldAnimate(true)}
        />
      )}

      <section ref={heroRef} className="relative h-screen w-full">
        {/* Background Image Container */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div ref={imageRef} className="relative w-full h-full opacity-0">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
              alt="Hero Background"
              className="w-full h-full object-cover brightness-[0.6]"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20" />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-white">
          <div className="overflow-hidden">
            <h1
              ref={textRefs.title}
              className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wider mb-6 text-center opacity-0"
            >
              We develop
            </h1>
          </div>
          <div className="overflow-hidden">
            <p
              ref={textRefs.subtitle1}
              className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide text-center max-w-3xl mx-auto leading-relaxed opacity-0"
            >
              e-business environments,
            </p>
          </div>
          <div className="overflow-hidden mt-2">
            <p
              ref={textRefs.subtitle2}
              className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide text-center max-w-3xl mx-auto leading-relaxed opacity-0"
            >
              with love!
            </p>
          </div>
          <div className="overflow-hidden mt-12">
            <button
              ref={textRefs.button}
              className="px-8 py-3 border border-white/30 rounded-full 
              text-lg tracking-wide hover:bg-white/10 transition-colors duration-300 opacity-0"
            >
              Explore More
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
