import { motion } from "motion/react";

const ellipseVariants = {
  start: {
    d: "M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50Z",
    fill: "#5C63FE",
  },
  end: {
    d: "M85.5 34C85.5 45.5 83 51 63 73.5C43 96 17 70.5 4 46C-9 21.5 12 -8.49999 41.5 2.5C71 13.5 85.5 22.5 85.5 34Z",
    fill: "#FF6B6B",
  },
};

// const strokeVariants = {
//   start: {
//     d: "M0 47.4999C37 34.4736 59.4139 34.4848 100 47.4999",
//   },
//   end: {
//     d: "M0 47.5C38.2824 64.7982 60.1466 63.8411 100 47.5",
//   },
// };

function MorphSVG() {
  return (
    <div className="flex flex-col h-screen gap-10 items-center justify-center">
      <p className="text-2xl">Hover to see effect</p>
      <motion.svg
        initial="start"
        width="400"
        height="400"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        whileHover="end"
      >
        <motion.path
          variants={ellipseVariants}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
      {/* <p>Doesn't work with strokes. Stroke width can't be adjusted.</p> */}
      {/* <motion.svg
        initial="start"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        whileHover="end"
      >
        <g clip-path="url(#clip0)">
          <motion.path
            stroke="#6F67FE"
            stroke-width="50px"
            variants={strokeVariants}
            transition={{
              duration: 2,
              yoyo: Infinity,
              repeat: Infinity,
            }}
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="100" height="100" fill="white" />
          </clipPath>
        </defs>
      </motion.svg> */}
    </div>
  );
}

export default MorphSVG;
