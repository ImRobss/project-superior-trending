import { PackageIcon, SealPercentIcon } from "@phosphor-icons/react";

export default function Orders() {
  return (
    <section className="/* NOTEBOOK */ relative overflow-hidden bg-white px-6 py-16 md:min-h-[900px] md:px-40 md:py-20 lg:px-24 lg:py-20">
      <div className="mb-6 flex items-center justify-center gap-4 md:mb-10">
        <PackageIcon
          weight="regular"
          className="rosa h-10 w-10 md:h-13 md:w-13"
        />
      </div>

      <div className="flex items-center justify-center">
        <h1 className="rosa mb-6 md:mb-4">Pedidos</h1>
      </div>

      <div className="grid grid-cols-1 items-start justify-center gap-10 px-0 pt-10 md:grid-cols-2 md:items-center md:gap-4 md:px-20 md:pt-20 lg:gap-10 lg:px-10 lg:pt-16">
        {/* Left card */}
        <div className="bg-rosa mx-auto flex h-[300px] w-full max-w-[500px] flex-col items-center justify-center rounded-lg px-8 py-6 shadow-2xl md:px-10 lg:h-[290px] lg:max-w-[460px]">
          <h3 className="mb-5 text-center text-white">
            monto mínimo de compra:
          </h3>
          <h1 className="mb-5 text-center text-white">₲ 1</h1>
          <h3 className="text-center text-white">
            Ofrecemos planes de pago de hasta 3 cuotas.
          </h3>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-6 px-0 py-0 md:gap-8 md:px-10 md:py-6 lg:items-start lg:px-0">
          <div className="border-rosa flex h-auto w-full max-w-[500px] items-start justify-center gap-4 rounded-lg border-3 px-5 py-6 md:h-[100px] md:items-center lg:max-w-[460px] lg:justify-start">
            <PackageIcon
              weight="regular"
              className="rosa h-10 w-10 shrink-0 md:h-15 md:w-15"
            />
            <h3 className="text-rosa">
              Para pedidos especiales o grandes volúmenes, contáctanos
            </h3>
          </div>

          <div className="flex h-auto w-full max-w-[530px] items-start justify-center gap-4 px-5 py-6 md:h-[100px] md:items-center lg:max-w-[460px] lg:justify-start">
            <SealPercentIcon
              weight="regular"
              className="rosa h-10 w-10 shrink-0 md:h-15 md:w-15"
            />
            <h3 className="text-rosa">
              ¡Consulta nuestros descuentos y ofertas especiales con nuestro
              equipo comercial!
            </h3>
          </div>

          <a
            href="https://wa.me/5491112345678"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-gradient-to-r from-[#F3AFA6] to-[#e89186] px-10 py-4 font-medium text-white uppercase transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 lg:self-start"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
}
