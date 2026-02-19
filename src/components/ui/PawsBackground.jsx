"use client";

import { useEffect, useRef } from "react";

export default function PawsBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";

    const TOTAL = 150;

    for (let i = 0; i < TOTAL; i++) {
      const paw = document.createElement("img");
      paw.src = "/images/pata.png";
      paw.alt = "";

      const size = 50 + Math.random() * 90;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const rotation = Math.random() * 360;
      const opacity = 0.05 + Math.random() * 0.18;

      paw.style.position = "absolute";
      paw.style.width = `${size}px`;
      paw.style.top = `${top}%`;
      paw.style.left = `${left}%`;
      paw.style.transform = `rotate(${rotation}deg)`;
      paw.style.opacity = `${opacity}`;
      paw.style.pointerEvents = "none";
      paw.style.userSelect = "none";

      container.appendChild(paw);
    }
  }, []);

  return <div ref={containerRef} className="absolute inset-0 z-0" />;
}
