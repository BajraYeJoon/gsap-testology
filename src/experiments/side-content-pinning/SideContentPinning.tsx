import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import PinnedSideContent from "./components/PinnedSideContent";
import ScrollingText from "./components/ScrollingText";
import HorizontalCards from "./components/HorizontalCards";
import ImageAnimation from "./components/ImageAnimation";

gsap.registerPlugin(ScrollTrigger);

const SideContentPinning = () => {
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

      {/* First Content - Pinned Side Content */}
      <PinnedSideContent />

      {/* Spacer */}
      <div className="bg-amber-600/30 w-full h-screen"></div>

      {/* Second Content - Scrolling Text */}
      <ScrollingText />

      {/* Fourth Content - Spacer */}
      <div className="bg-red-400/35 w-full h-screen"></div>

      {/* Fifth Content - Horizontal Cards */}
      <HorizontalCards />

      {/* Sixth Content - Image Animation */}
      <ImageAnimation />

      {/* Final Spacer */}
      <div className="w-full h-screen bg-red-400"></div>
    </section>
  );
};

export default SideContentPinning;
