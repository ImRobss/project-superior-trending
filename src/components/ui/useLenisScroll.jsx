import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export function useLenisScroll() {
  useEffect(() => {
    // Respeita usuários com "reduzir movimento"
    const prefersReducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    )?.matches;

    // Em mobile/touch, o smooth pode gerar "grude" e travadas
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    // Return early: não ativa lenis se não for bom
    if (prefersReducedMotion || isTouch) return;

    const lenis = new Lenis({
      duration: 1.0,
      smoothWheel: true,
      smoothTouch: false,
      syncTouch: false,
      // evita picos em alguns devices
      wheelMultiplier: 1,
      touchMultiplier: 1,
    });

    let rafId = 0;
    let lastTime = 0;

    const raf = (time) => {
      const delta = time - lastTime;
      lastTime = time;

      // passar delta melhora estabilidade em alguns navegadores
      lenis.raf(time, delta);

      rafId = requestAnimationFrame(raf);
    };

    const start = () => {
      if (rafId) return;
      lastTime = performance.now();
      rafId = requestAnimationFrame(raf);
    };

    const stop = () => {
      if (!rafId) return;
      cancelAnimationFrame(rafId);
      rafId = 0;
    };

    // Para quando a aba fica oculta (economia + evita travadinhas ao voltar)
    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    document.addEventListener("visibilitychange", onVisibility);

    start();

    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
      lenis.destroy();
    };
  }, []);
}
