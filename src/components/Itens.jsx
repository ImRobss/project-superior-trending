"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "./ui/Card";
import PawsBackground from "./ui/PawsBackground";

gsap.registerPlugin(ScrollTrigger);

export default function Itens() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const title = el.querySelector("[data-itens-title]");
      const cards = el.querySelectorAll("[data-itens-card]");

      gsap.set(title, { autoAlpha: 0, y: 16 });
      gsap.set(cards, { autoAlpha: 0, y: 22, scale: 0.985 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: el,
            start: "top 70%",
            once: true,
          },
        })
        .to(title, {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        })
        .to(
          cards,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            ease: "power3.out",
            stagger: 0.12,
          },
          "-=0.15",
        );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={sectionRef}
      className="
        bg-roxo min-h-screen relative overflow-hidden
        px-6 py-16
        md:px-40 md:py-20
      "
    >
      <PawsBackground />

      <div className="relative z-10">
        <div className="flex justify-center mb-10">
          <h1 data-itens-title className="text-white">
            Trabajamos con
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div data-itens-card>
            <Card
              title="Alimentos Premium"
              description="Raciones super premium para perros y gatos con alta aceptación del cliente final. Más calidad, más confianza y reposición constante para que nunca pierdas una venta por falta de stock."
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

        <div
          className="
            flex justify-center gap-6 mt-6
            flex-col items-center
            md:flex-row md:items-stretch md:gap-8 md:mt-8
          "
        >
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
    </main>
  );
}
