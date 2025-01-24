import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    if (!loading) {
      const tl = gsap.timeline({
        defaults: { ease: "power3.inOut" },
      });

      gsap.set(imageRef.current, {
        scale: 1.5,
        opacity: 0,
      });
      gsap.set(textRef.current, {
        opacity: 0,
      });

      tl.to(imageRef.current, {
        opacity: 1,
        duration: 0.8,
      })
        .to(imageRef.current, {
          scale: 1,
          duration: 1.8,
        })
        .fromTo(
          textRef.current,
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          },
          "-=1.2"
        );
    }
  }, [loading]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

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
        <div
          ref={textRef}
          className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-white"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wider mb-6 text-center">
            We develop
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide text-center max-w-3xl mx-auto leading-relaxed">
            e-business environments,
            <span className="block mt-2">with love!</span>
          </p>
          <button
            className="mt-12 px-8 py-3 border border-white/30 rounded-full 
            text-lg tracking-wide hover:bg-white/10 transition-colors duration-300"
          >
            Explore More
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
