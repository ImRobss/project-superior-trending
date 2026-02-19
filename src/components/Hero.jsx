export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 py-14">
      <div className="pointer-events-none absolute top-0 right-0 hidden h-[1800px] w-[1100px] lg:block">
        <div className="absolute -top-20 right-0 h-full w-[220px] origin-top-left translate-x-[80px] rotate-[30deg] bg-gradient-to-br from-[#4a6a9a] to-[#3D5481] shadow-[-8px_0px_20px_rgba(0,0,0,0.3)]" />
        <div className="absolute -top-20 right-0 h-full w-[220px] origin-top-left translate-x-[300px] rotate-[30deg] bg-gradient-to-br from-[#f8c4bc] to-[#F3AFA6] shadow-[-8px_0px_20px_rgba(0,0,0,0.25)]" />
        <div className="bg-roxo absolute -top-20 right-0 h-full w-[320px] origin-top-left translate-x-[620px] rotate-[30deg] shadow-[-8px_0px_20px_rgba(0,0,0,0.35)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="mb-6 h-auto w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[600px]"
            />

            <h2 className="mb-3 text-black">
              Todo lo que tu cliente busca para su mascota, en un solo
              proveedor.
            </h2>

            <p className="text-sm leading-relaxed text-black sm:text-base">
              Alimentos premium, juguetes, higiene y accesorios importados,
              disponibles para entrega rápida.{" "}
              <br className="hidden sm:block" />
              Con base en Paraguay, ayudamos a petshops y veterinarias a vender
              más con mejores precios y reposición constante.
            </p>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <div className="h-[220px] w-full max-w-[520px] rounded-2xl bg-black sm:h-[280px] lg:h-[300px]" />
          </div>
        </div>
      </div>

      <img
        src="/images/dog.png"
        alt="Hero Image"
        className="pointer-events-none absolute right-1/2 -bottom-24 z-0 w-[720px] translate-x-1/2 opacity-5 sm:w-[900px] lg:-right-20 lg:w-[1200px] lg:translate-x-0"
      />
    </section>
  );
}
