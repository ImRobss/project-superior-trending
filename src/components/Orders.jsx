import { PackageIcon, SealPercentIcon } from "@phosphor-icons/react";

export default function Orders() {
  return (
    <main
      className="
        bg-white relative overflow-hidden
        py-16 px-6
        md:min-h-[900px] md:px-40 md:py-20

        /* NOTEBOOK */
        lg:px-24 lg:py-20
      "
    >
      <div className="flex items-center justify-center mb-6 md:mb-10 gap-4">
        <PackageIcon
          weight="regular"
          className="rosa w-10 h-10 md:w-13 md:h-13"
        />
      </div>

      <div className="flex items-center justify-center">
        <h1 className="rosa mb-6 md:mb-4">Pedidos</h1>
      </div>

      <div
        className="
          grid grid-cols-1 md:grid-cols-2
          gap-10 md:gap-4
          items-start md:items-center
          justify-center
          pt-10 md:pt-20
          px-0 md:px-20

          /* NOTEBOOK */
          lg:gap-10 lg:px-10 lg:pt-16
        "
      >
        {/* Left card */}
        <div
          className="
            w-full max-w-[500px] mx-auto
            h-[300px]
            bg-rosa rounded-lg
            px-8 md:px-10 py-6
            flex flex-col items-center justify-center
            shadow-2xl

            /* NOTEBOOK */
            lg:max-w-[460px] lg:h-[290px]
          "
        >
          <h3 className="text-white text-center mb-5">
            monto mínimo de compra:
          </h3>
          <h1 className="text-white text-center mb-5">₲ 1</h1>
          <h3 className="text-white text-center">
            Ofrecemos planes de pago de hasta 3 cuotas.
          </h3>
        </div>

        {/* Right column */}
        <div
          className="
            w-full flex flex-col items-center justify-center
            gap-6 md:gap-8
            px-0 md:px-10
            py-0 md:py-6

            /* NOTEBOOK */
            lg:px-0 lg:items-start
          "
        >
          <div
            className="
              w-full max-w-[500px]
              h-auto md:h-[100px]
              border-3 border-rosa rounded-lg
              px-5 py-6
              flex items-start md:items-center justify-center gap-4

              /* NOTEBOOK */
              lg:max-w-[460px] lg:justify-start
            "
          >
            <PackageIcon
              weight="regular"
              className="rosa w-10 h-10 md:w-15 md:h-15 shrink-0"
            />
            <h3 className="text-rosa">
              Para pedidos especiales o grandes volúmenes, contáctanos
            </h3>
          </div>

          <div
            className="
              w-full max-w-[530px]
              h-auto md:h-[100px]
              px-5 py-6
              flex items-start md:items-center justify-center gap-4

              /* NOTEBOOK */
              lg:max-w-[460px] lg:justify-start
            "
          >
            <SealPercentIcon
              weight="regular"
              className="rosa w-10 h-10 md:w-15 md:h-15 shrink-0"
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

              /* NOTEBOOK */
              lg:self-start
            "
          >
            Contáctanos
          </a>
        </div>
      </div>
    </main>
  );
}
