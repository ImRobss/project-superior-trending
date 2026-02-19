export default function Hero() {
  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-14 lg:px-40 lg:py-0 flex items-center">
      <div className="pointer-events-none absolute top-0 right-0 hidden lg:block w-[1100px] h-[1800px]">
        <div className="absolute -top-20 right-0 h-full w-[220px] bg-gradient-to-br from-[#4a6a9a] to-[#3D5481] origin-top-left rotate-[30deg] translate-x-[80px] shadow-[-8px_0px_20px_rgba(0,0,0,0.3)]" />
        <div className="absolute -top-20 right-0 h-full w-[220px] bg-gradient-to-br from-[#f8c4bc] to-[#F3AFA6] origin-top-left rotate-[30deg] translate-x-[300px] shadow-[-8px_0px_20px_rgba(0,0,0,0.25)]" />
        <div className="absolute -top-20 right-0 h-full w-[320px] bg-roxo origin-top-left rotate-[30deg] translate-x-[620px] shadow-[-8px_0px_20px_rgba(0,0,0,0.35)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[600px] h-auto mb-6"
            />

            <h2 className="text-black mb-3 text-lg sm:text-xl lg:text-base">
              Todo lo que tu cliente busca para su mascota, en un solo
              proveedor.
            </h2>

            <p className="text-black text-sm sm:text-base leading-relaxed">
              Alimentos premium, juguetes, higiene y accesorios importados,
              disponibles para entrega rápida.{" "}
              <br className="hidden sm:block" />
              Con base en Paraguay, ayudamos a petshops y veterinarias a vender
              más con mejores precios y reposición constante.
            </p>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <div className="bg-black w-full max-w-[520px] h-[220px] sm:h-[280px] lg:h-[300px] rounded-2xl" />
          </div>
        </div>
      </div>

      <img
        src="/images/dog.png"
        alt="Hero Image"
        className="pointer-events-none absolute -bottom-24 right-1/2 translate-x-1/2 w-[720px] sm:w-[900px] lg:w-[1200px] opacity-5 z-0 lg:-right-20 lg:translate-x-0"
      />
    </main>
  );
}
