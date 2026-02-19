import "./App.css";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Itens from "./components/Itens";
import Orders from "./components/Orders";

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
    <>
      <Hero />
      <Itens />
      <Orders />
      <Footer />
    </>
  );
}

export default App;
