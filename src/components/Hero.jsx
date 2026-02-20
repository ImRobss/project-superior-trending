import PawPrint from "./ui/PawPrint";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 py-14">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="paws"
            x="0"
            y="0"
            width="180"
            height="180"
            patternUnits="userSpaceOnUse"
          >
            {/* Main pad */}
            <ellipse cx="45" cy="55" rx="12" ry="14" fill="currentColor" />
            {/* Toe pads */}
            <circle cx="30" cy="35" r="6" fill="currentColor" />
            <circle cx="45" cy="28" r="6" fill="currentColor" />
            <circle cx="60" cy="35" r="6" fill="currentColor" />
            <circle cx="68" cy="48" r="5" fill="currentColor" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#paws)"
          className="text-primary"
        />
      </svg>
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="mb-6 h-auto w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[700px]"
            />

            <h2 className="mb-3 text-black">
              Todo lo que tu cliente busca para su mascota,{" "}
              <span className="text-[#0D8B8B]">en un solo proveedor.</span>
            </h2>

            <div className="mb-3 flex items-center gap-2">
              <div className="h-0.5 w-15 rounded-full bg-[#0D8B8B]/30" />
              <PawPrint className="h-4 w-4 text-[#0D8B8B]" />
              <div className="h-0.5 w-15 rounded-full bg-[#0D8B8B]/30" />
            </div>
            <p className="text-sm leading-relaxed text-black sm:text-base">
              Alimentos premium, juguetes, higiene y accesorios importados,
              disponibles para{" "}
              <span className="text-[#0D8B8B]"> entrega rápida. </span>{" "}
              <br className="hidden sm:block" />
              Con base en Paraguay, ayudamos a petshops y veterinarias a vender
              más con<span className="text-[#0D8B8B]"> mejores precios</span> y
              reposición constante.
            </p>
          </div>
          <div className="flex items-center justify-center lg:justify-end">
            <div className="h-[220px] w-full max-w-[520px] rounded-2xl bg-black sm:h-[280px] lg:h-[350px]" />
          </div>
        </div>
      </div>

      <img
        src="/images/dog.png"
        alt="Hero Image"
        className="pointer-events-none absolute right-1/2 -bottom-24 z-0 w-[720px] translate-x-1/2 opacity-5 sm:w-[900px] lg:-right-20 lg:w-[1400px] lg:translate-x-1/3"
      />
      <img
        src="/images/cat.png"
        alt="Hero Image"
        className="pointer-events-none absolute -bottom-24 left-1/2 z-0 w-[720px] translate-x-1/2 opacity-5 sm:w-[900px] lg:-left-120 lg:w-[1000px] lg:translate-x-1/3"
      />
    </section>
  );
}
