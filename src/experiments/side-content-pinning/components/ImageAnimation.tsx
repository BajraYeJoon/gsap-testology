import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ImageAnimation = () => {
  const pinImageRef = useRef<HTMLImageElement>(null);
  const imageSlideRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const imageAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: imageSlideRef.current,
        start: "top 30%",
        end: "bottom 80%",
        scrub: 1,
        markers: true,
      },
    });

    gsap.set(pinImageRef.current, {
      xPercent: 0,
      yPercent: 0,
      scale: 1,
      opacity: 1,
      transformStyle: "preserve-3d",
    });

    imageAnimation
      .to(pinImageRef.current, {
        xPercent: -160,
        yPercent: 80,
        scale: 1,
        skewY: -10,
        rotateY: 40,
        perspectiveX: "1800px",
        perspectiveOrigin: "-170%",
        // transformStyle: "preserve-3d",
        duration: 1,
        ease: "power2.inOut",
      })
      .to(pinImageRef.current, {
        xPercent: 20,
        yPercent: 180,
        scale: 1,
        duration: 1,
        skewY: 10,
        perspectiveOrigin: "-170%",
        rotateY: 40,
        perspectiveX: "1800px",
        ease: "power2.inOut",
      });
  });

  return (
    <div
      ref={imageSlideRef}
      className="bg-gradient-to-br from-emerald-600 to-teal-800 size-full *:h-[500px] grid z-30 grid-rows-3 gap-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      <img
        ref={pinImageRef}
        src="https://images.unsplash.com/photo-1736779580644-6b4268af4642?fm=jpg&q=60&w=3000"
        className="w-[400px] h-[500px] absolute z-20 object-cover right-[20%] top-4 will-change-transform rounded-3xl shadow-2xl"
        alt="Moving"
      />
      {/* First Row */}
      <div className="grid grid-cols-2 w-full h-full gap-4 z-10">
        <div className="border border-white/20 rounded-3xl bg-white/5 backdrop-blur-sm p-8 flex flex-col justify-center">
          <h3 className="text-white text-3xl font-bold mb-4">Design Process</h3>
          <p className="text-white/70 text-lg">
            Our creative journey starts with understanding the core essence of
            each project
          </p>
        </div>
        <div></div>
      </div>
      {/* Second Row */}
      <div className="grid grid-cols-2 w-full h-full gap-4 z-10">
        <div></div>
        <div className="border border-white/20 rounded-3xl bg-white/5 backdrop-blur-sm p-8 flex flex-col justify-center">
          <h3 className="text-white text-3xl font-bold mb-4">Implementation</h3>
          <p className="text-white/70 text-lg">
            Bringing ideas to life through careful attention to detail and
            precision
          </p>
        </div>
      </div>
      {/* Third Row */}
      <div className="grid grid-cols-2 w-full h-full gap-4 z-10">
        <div className="border border-white/20 rounded-3xl bg-white/5 backdrop-blur-sm p-8 flex flex-col justify-center">
          <h3 className="text-white text-3xl font-bold mb-4">Final Touch</h3>
          <p className="text-white/70 text-lg">
            Perfecting every aspect to deliver an exceptional end result
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ImageAnimation;
