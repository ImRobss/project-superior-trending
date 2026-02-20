import "./App.css";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Itens from "./components/Itens";
import Orders from "./components/Orders";
import Portifolio from "./components/Portifolio";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
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
