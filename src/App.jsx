import { useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Itens from "./components/Itens";
import Orders from "./components/Orders";
import Portifolio from "./components/Portifolio";

function App() {
  useEffect(() => {
    // Respeita preferência de acessibilidade
    const prefersReducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    )?.matches;

    if (prefersReducedMotion) return;

    let lenis = null;
    let rafId = null;
    let destroyed = false;

    import("lenis")
      .then((module) => {
        if (destroyed) return;

        const Lenis = module.default;
        lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        });

        function raf(time) {
          if (destroyed) return;
          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        }

        rafId = requestAnimationFrame(raf);
      })
      .catch(() => {
        // Fallback silencioso para scroll nativo
      });

    return () => {
      destroyed = true;
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis) lenis.destroy();
    };
  }, []);

  return (
    <main>
      <Hero />
      <Itens />
      <Portifolio />
      <Orders />
      <Footer />
    </main>
  );
}

export default App;
