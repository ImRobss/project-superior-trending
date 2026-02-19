export default function Hero() {
  return (
    <main className="min-h-screen px-40 flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[1100px] h-[1800px]">
        <div className="absolute -top-20 right-0 w-[220px] h-[100%] bg-gradient-to-br from-[#4a6a9a] to-[#3D5481] origin-top-left rotate-[30deg] translate-x-[80px] shadow-[-8px_0px_20px_rgba(0,0,0,0.3)]"></div>
        <div className="absolute -top-20 right-0 w-[220px] h-[100%] bg-gradient-to-br from-[#f8c4bc] to-[#F3AFA6] origin-top-left rotate-[30deg] translate-x-[300px] shadow-[-8px_0px_20px_rgba(0,0,0,0.25)]"></div>
        <div className="absolute -top-20 right-0 w-[320px] h-[100%] bg-roxo origin-top-left rotate-[30deg] translate-x-[620px] shadow-[-8px_0px_20px_rgba(0,0,0,0.35)]"></div>
      </div>

      <div className="grid grid-cols-2 relative z-10">
        <div className="items-center justify-center">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-[600px] h-auto mb-4"
          />
          <h2 className="text-black mb-2">
            Todo lo que tu cliente busca para su mascota, en un solo proveedor.
          </h2>
          <p className="text-black">
            Alimentos premium, juguetes, higiene y accesorios importados,
            disponibles para entrega rápida. <br /> Con base en Paraguay,
            ayudamos a petshops y veterinarias a vender más con mejores precios
            y reposición constante.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-black h-[300px] w-[500px] rounded-2xl"></div>
        </div>
      </div>
      <img
        src="/images/dog.png"
        alt="Hero Image"
        className="absolute w-[1200px] h-auto opacity-5 md:-right-20 z-0"
      />
    </main>
  );
}
