import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import iss from "../../../public/iss.png";
import earth from "../../../public/earth.png";
import astro from "../../../public/astro.png";

gsap.registerPlugin(ScrollTrigger);

const Parallax = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const earthRef = useRef<HTMLDivElement>(null);
  const issRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  const astroRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "top 20%",
      scrub: 1,
      pin: true,
    });

    gsap.to(starsRef.current, {
      scale: 1.5,
      opacity: 0.8,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 4,
      },
    });

    gsap.to(earthRef.current, {
      yPercent: 30,
      xPercent: 10,
      rotation: 15,
      scale: 0.2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.to(astroRef.current, {
      yPercent: 20,
      xPercent: -30,
      rotation: 10,
      scale: 0.2,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.8,
      },
    });

    gsap.to(issRef.current, {
      yPercent: 20,
      xPercent: -30,
      rotation: 10,
      scale: 0.8,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
  });

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <div
        ref={starsRef}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover "
      ></div>

      <div ref={earthRef} className="absolute top-80 inset-0 ">
        <img src={earth} alt="Earth" className="w-full h-full   object-cover" />
      </div>

      <div
        ref={issRef}
        className="absolute size-[800px] top-44 right-12 transition-transform"
      >
        <img
          src={iss}
          className="size-full object-scale-down"
          alt="International Space Station"
        />
      </div>

      <div ref={astroRef} className="absolute top-72 right-24 w-full h-full">
        <img
          src={astro}
          alt="Astro"
          className="w-full h-full object-scale-down"
        />
      </div>

      <div className="relative min-h-[200vh]">
        <div
          ref={textRef}
          className="sticky top-0 h-screen flex flex-col justify-start p-12"
        >
          <div className="text-white mix-blend-difference space-y-8">
            <h1 className="text-8xl font-bold mb-4 transform ">
              EXPLORE SPACE
            </h1>
            <h2 className="text-8xl font-bold mb-4 transform ">
              LIKE YOU NEVER
            </h2>
            <h2 className="text-8xl font-bold transform ">HAVE BEFORE</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parallax;
