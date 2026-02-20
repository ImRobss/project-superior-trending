import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Itens from "./components/Itens";
import Orders from "./components/Orders";
import Portifolio from "./components/Portifolio";
import { useLenisScroll } from "./components/ui/useLenisScroll";

function App() {
  useLenisScroll();
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
