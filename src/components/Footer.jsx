import React from "react";

export default function Footer() {
  return (
    <footer className="w-full h-auto">
      <div className="bg-[#141414] flex justify-between items-center text-white text-center px-80 py-4">
        <img
          src="/images/logo.png"
          alt="Logo"
          className="w-30 h-auto brightness-0 invert"
        />
        <p>&copy; 2026 Superior Trending. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
