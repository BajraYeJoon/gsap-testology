import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import LoadingScreen from "../../components/LoadingScreen";
import { useTextAnimation } from "../../hooks/useTextAnimation";

gsap.registerPlugin(ScrollTrigger);

function HeroZoom() {
  const [loading, setLoading] = useState(true);
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const buttonRef = useRef(null);
  const hasAnimatedRef = useRef(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const titleAnimation = useTextAnimation();
  const subtitle1Animation = useTextAnimation();
  const subtitle2Animation = useTextAnimation();
  const section2TitleAnimation = useTextAnimation({ delay: 0 });

  useEffect(() => {
    if (!loading && !shouldAnimate) {
      setShouldAnimate(true);
    }
  }, [loading]);

  useGSAP(
    () => {
      if (shouldAnimate && !hasAnimatedRef.current) {
        hasAnimatedRef.current = true;

        gsap.set(imageRef.current, {
          scale: 1.3,
          opacity: 1,
          padding: "2rem",
          borderRadius: "2rem",
        });

        const tl = gsap.timeline();

        titleAnimation.animate();
        subtitle1Animation.animate();
        subtitle2Animation.animate();

        tl.fromTo(
          buttonRef.current,
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          }
        );

        const initialAnimation = gsap.to(imageRef.current, {
          scale: 1,
          duration: 2.1,
          ease: "power2.out",
        });

        initialAnimation.then(() => {
          ScrollTrigger.create({
            trigger: heroRef.current,
            start: "top top",
            end: "+=30%",
            scrub: true,
            pin: true,
            pinSpacing: true,
            animation: gsap.fromTo(
              imageRef.current,
              {
                scale: 1,
                padding: "2rem",
                borderRadius: "2rem",
              },
              {
                scale: 1.1,
                padding: 0,
                borderRadius: 0,
              }
            ),
          });
        });
      }
    },
    {
      dependencies: [shouldAnimate],
    }
  );

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {loading && (
        <LoadingScreen
          onComplete={() => setLoading(false)}
          onBeforeComplete={() => setShouldAnimate(true)}
        />
      )}

      {/* First Section with padding and rounded corners */}
      <section ref={heroRef} className="relative h-screen">
        <div className="h-full transform-gpu">
          <div className="h-full overflow-hidden relative">
            {/* Background Image Container */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <div ref={imageRef} className="relative w-full h-full">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                  alt="Hero Background"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-white">
              <div className="overflow-hidden">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wider mb-6 text-center">
                  {titleAnimation.createLetterSpans("We develop")}
                </h1>
              </div>
              <div className="overflow-hidden">
                <p className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide text-center max-w-3xl mx-auto leading-relaxed">
                  {subtitle1Animation.createLetterSpans(
                    "e-business environments"
                  )}
                </p>
              </div>
              <div className="overflow-hidden mt-2">
                <p className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide text-center max-w-3xl mx-auto leading-relaxed">
                  {subtitle2Animation.createLetterSpans("with love!")}
                </p>
              </div>
              <div className="overflow-hidden mt-12">
                <button
                  ref={buttonRef}
                  className="px-8 py-3 border border-white/30 rounded-full 
                  text-lg tracking-wide hover:bg-white/10 transition-colors duration-300 opacity-0"
                >
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section without padding */}
      <section className="relative h-screen bg-black w-full">
        <div className="relative h-full flex flex-col items-center justify-center px-4">
          <div className="overflow-hidden">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wider mb-6 text-center text-white">
              {section2TitleAnimation.createLetterSpans("Our Services")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Add your service cards or content here */}
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl text-white mb-4">Web Development</h3>
              <p className="text-gray-300">
                Modern and responsive web applications built with the latest
                technologies.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl text-white mb-4">Mobile Apps</h3>
              <p className="text-gray-300">
                Native and cross-platform mobile applications for iOS and
                Android.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl text-white mb-4">Cloud Solutions</h3>
              <p className="text-gray-300">
                Scalable and secure cloud infrastructure for your business
                needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HeroZoom;
