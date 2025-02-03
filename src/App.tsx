import { Link } from "react-router-dom";

const experiments = [
  {
    id: "hero-zoom",
    title: "Hero Zoom",
    description: "Hero Section with Preloading and Zooming",
  },
  {
    id: "scroll-pinning",
    title: "ScrollTrigger Pinning",
    description:
      "Advanced scroll pinning techniques with animations, timelines, and snap points",
  },
  {
    id: "side-content-pinning",
    title: "Side Content Pinning",
    description: "Pinning content to the side of the screen with GSAP",
  },
  {
    id: "parallax",
    title: "Parallax",
    description: "Parallax scrolling effect with GSAP",
  },
  {
    id: "svgmorph",
    title: "Motion SVG Morph",
    description: "Motion SVG Morph with Framer Motion",
  },
  // {
  //   id: "scroll-morph",
  //   title: "Scroll Morph",
  //   description: "Scroll Morph with Framer Motion",
  // },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <header className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">GSAP Animation Lab</h1>
        <p className="text-gray-400 mb-8">
          A collection of GSAP animation experiments and examples
        </p>
      </header>

      <main className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiments.map((experiment) => (
            <Link
              key={experiment.id}
              to={`/experiments/${experiment.id}`}
              className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <h2 className="text-xl font-semibold mb-2">{experiment.title}</h2>
              <p className="text-gray-400">{experiment.description}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
