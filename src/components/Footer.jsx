export default function Footer() {
  return (
    <footer className="w-full">
      <div className="flex flex-col items-center gap-4 bg-[#141414] px-6 py-6 text-center text-white md:flex-row md:items-center md:justify-between md:px-80 md:py-4 md:text-center">
        <img
          src="/images/logo.png"
          alt="Logo"
          className="h-auto w-28 brightness-0 invert md:w-30"
        />

        <p className="text-sm md:text-base">
          &copy; 2026 Superior Trending. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
