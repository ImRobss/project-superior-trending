import { PackageIcon, SealPercentIcon } from "@phosphor-icons/react";

export default function Orders() {
  return (
    <main className="bg-white  md:min-h-[900px] px-40 py-20 relative overflow-hidden">
      <div className="flex items-center justify-center mb-10 gap-4">
        <PackageIcon weight="regular" className="rosa w-13 h-13" />
      </div>
      <div className="flex items-center justify-center">
        <h1 className="rosa mb-4">Pedidos</h1>
      </div>
      <div className="grid grid-cols-2 gap-4 items-center justify-center pt-20 px-20">
        <div className="h-[300px] w-[500px] bg-rosa rounded-lg px-10 py-6 flex flex-col items-center justify-center shadow-2xl">
          <h3 className="text-white text-center mb-5">
            monto mínimo de compra:
          </h3>
          <h1 className="text-white text-center mb-5">₲ 1</h1>
          <h3 className="text-white text-center">
            Ofrecemos planes de pago de hasta 3 cuotas.
          </h3>
        </div>
        <div className="rounded-lg px-10 py-6 flex flex-col items-center justify-center gap-8">
          <div className="h-[100px] w-[500px] border-3 border-rosa rounded-lg px-5 py-6 flex items-center justify-center gap-4">
            <PackageIcon weight="regular" className="rosa w-15 h-15" />
            <h3 className="text-rosa justify-center">
              Para pedidos especiales o grandes volúmenes, contáctanos
            </h3>
          </div>
          <div className="h-[100px] w-[530px] px-5 py-6 flex items-center justify-center gap-4">
            <SealPercentIcon weight="regular" className="rosa w-15 h-15" />
            <h3 className="text-rosa justify-center">
              ¡Consulta nuestros descuentos y ofertas especiales con nuestro
              equipo comercial!
            </h3>
          </div>
          <a
            href="https://wa.me/5491112345678"
            target="_blank"
            rel="noopener noreferrer"
            className="
                uppercase
                px-10
                py-4
                rounded-2xl
                text-white
                font-medium
                transition-all
                duration-300
                bg-gradient-to-r
                from-[#F3AFA6]
                to-[#e89186]
                hover:scale-105
                hover:shadow-lg
                active:scale-95
            "
          >
            Contáctanos
          </a>
        </div>
      </div>
    </main>
  );
}
