"use client";

import { useRef, useEffect } from "react";
import Card from "./ui/Card";
import PawsBackground from "./ui/PawsBackground";

export default function Itens() {
  const sectionRef = useRef(null);
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("itens-reveal--show");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.4,
      },
    );

    const cards = section.querySelectorAll("[data-itens-card]");
    cards.forEach((card, index) => {
      card.classList.add("itens-reveal");
      card.style.transitionDelay = `${index * 120}ms`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-roxo relative min-h-screen overflow-hidden px-6 py-16 md:px-40 md:py-25"
    >
      <PawsBackground />

      <div className="relative z-10">
        <div className="mb-10 flex justify-center">
          <h1 data-itens-title className="text-white">
            Trabajamos con
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          <div data-itens-card>
            <Card
              title="Alimentos Premium"
              description="Alta aceptación inmediata en perros y gatos. Producto confiable, rotación rápida y reposición constante para que tu tienda nunca pierda una venta."
            />
          </div>

          <div data-itens-card>
            <Card
              title="Snacks y Húmedos"
              description="Galletas, bifinhos y alimentos húmedos de compra impulsiva. El cliente entra por la ración… pero la ganancia real está en el snack que lleva junto."
            />
          </div>

          <div data-itens-card>
            <Card
              title="Higiene y Sanitarios"
              description="Arenas, tapetes y granulados que generan recompra continua. Un producto que no depende de promociones: el cliente siempre vuelve a buscarlo."
            />
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-center gap-6 md:mt-8 md:flex-row md:items-stretch md:gap-8">
          <div data-itens-card className="w-full md:w-auto">
            <Card
              title="Accesorios"
              description="Comederos, bandejas, palitas y contenedores prácticos para el día a día. Productos de alta rotación que complementan cada venta de alimento."
            />
          </div>

          <div data-itens-card className="w-full md:w-auto">
            <Card
              title="Juguetes"
              description="Juguetes duraderos y atractivos que convierten una compra básica en una compra emocional. Ideal para impulsar ventas rápidas y mejorar tu margen."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
