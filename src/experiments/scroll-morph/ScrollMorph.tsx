import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { useFlubber } from "./useFlubber";

// SVG paths for different shapes
const paths = [
  "M 50 50 L 150 50 L 150 150 L 50 150 Z", // Square
  "M 100 50 L 150 150 L 50 150 Z", // Triangle
  "M 100,50 C 150,50 150,150 100,150 C 50,150 50,50 100,50", // Circle
  "M 50,100 Q 100,50 150,100 Q 100,150 50,100", // Heart-like shape
];

const cards = [
  { title: "Shape 1", description: "Morphing into a square" },
  { title: "Shape 2", description: "Transforming to triangle" },
  { title: "Shape 3", description: "Becoming a circle" },
  { title: "Shape 4", description: "Final heart shape" },
];

interface CardProps {
  title: string;
  description: string;
  scrollYProgress: MotionValue<number>;
  index: number;
}

function Card({ title, description, scrollYProgress, index }: CardProps) {
  const opacity = useTransform(
    scrollYProgress,
    [
      index * 0.25,
      index * 0.25 + 0.1,
      (index + 1) * 0.25,
      (index + 1) * 0.25 + 0.1,
    ],
    [0, 1, 1, 0]
  );

  return (
    <motion.div
      className="bg-white/10 backdrop-blur-md p-6 rounded-lg"
      initial={{ opacity: 0, x: -100 }}
      style={{ opacity }}
    >
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}

export default function ScrollMorph() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progress = useTransform(scrollYProgress, [0, 1], [0, paths.length - 1]);
  const path = useFlubber(progress, paths);

  return (
    <div ref={containerRef} className="relative min-h-[400vh]">
      <div className="sticky top-0 flex min-h-screen items-center justify-center">
        <div className="grid grid-cols-2 gap-8 p-8 w-full max-w-7xl">
          <div className="space-y-8">
            {cards.map((card, index) => (
              <Card
                key={index}
                {...card}
                scrollYProgress={scrollYProgress}
                index={index}
              />
            ))}
          </div>
          <div className="flex items-center justify-center">
            <svg width="300" height="300" viewBox="0 0 200 200">
              <motion.path
                d={path}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
