import { Link } from "react-router-dom";

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
          <Link
            to="/experiments/hero-parallax"
            className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2">Hero Parallax</h2>
            <p className="text-gray-400">
              Smooth parallax scrolling effect with image scaling and text
              animations
            </p>
          </Link>

          <Link
            to="/experiments/scroll-pinning"
            className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2">
              ScrollTrigger Pinning
            </h2>
            <p className="text-gray-400">
              Advanced scroll pinning techniques with animations, timelines, and
              snap points
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default App;
