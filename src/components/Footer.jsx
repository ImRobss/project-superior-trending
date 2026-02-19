export default function Footer() {
  return (
    <footer className="w-full">
      <div
        className="
        bg-[#141414]
        text-white
        
        /* MOBILE (padrão) */
        flex flex-col items-center gap-4
        text-center px-6 py-6

        /* DESKTOP (igual ao seu atual) */
        md:flex-row md:justify-between md:items-center
        md:text-center md:px-80 md:py-4
        "
      >
        <img
          src="/images/logo.png"
          alt="Logo"
          className="w-28 md:w-30 h-auto brightness-0 invert"
        />

        <p className="text-sm md:text-base">
          &copy; 2026 Superior Trending. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
