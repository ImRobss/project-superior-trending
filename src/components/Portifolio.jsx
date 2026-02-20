import PortfolioCarousel from "./ui/PortfolioCarousel";
import { portfolioItems } from "../data/portfolio";

export default function Portfolio() {
  return (
    <section className="min-h-screen px-6 py-16 lg:px-30 lg:py-20">
      <div className="items-center justify-center">
        <header className="mb-10">
          <h1 className="rosa mb-6 text-center text-3xl font-bold">
            Marcas que el mercado <br /> ya conoce y confía
          </h1>

          <p className="text-center text-gray-600">
            Trabajamos solo con marcas premium que generan demanda real y
            fidelizan al consumidor final.
          </p>
        </header>
        <div className="min-h-160">
          <PortfolioCarousel items={portfolioItems} />
        </div>
      </div>
    </section>
  );
}
