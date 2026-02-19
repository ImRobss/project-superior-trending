export default function Card({ title, description }) {
  return (
    <div
      className="
        w-full max-w-[500px]
        min-h-[320px] md:min-h-[365px]
        bg-white p-5 md:p-4
        rounded-lg shadow-lg

        /* NOTEBOOK (lg): melhora o “look” nessa faixa */
        lg:max-w-[440px] lg:min-h-[350px] lg:p-5 lg:rounded-xl
        lg:shadow-[0_18px_40px_rgba(0,0,0,0.10)]

        /* DESKTOP (xl): volta exatamente pro que você já tinha */
        xl:max-w-[500px] xl:min-h-[365px] xl:p-4 xl:rounded-lg xl:shadow-lg
      "
    >
      <img
        src="/images/logo.png"
        alt={title}
        className="
          w-full h-auto object-contain mb-4

          /* NOTEBOOK (lg): logo menor e mais “harmônico” */
          lg:max-w-[260px] lg:mx-auto lg:mb-3

          /* DESKTOP (xl): volta ao normal */
          xl:max-w-none xl:mx-0 xl:mb-4
        "
      />

      <div
        className="
          text-center px-2 md:px-5

          /* NOTEBOOK (lg): dá um pouco mais de respiro lateral */
          lg:px-4

          /* DESKTOP (xl): volta */
          xl:px-5
        "
      >
        <h2
          className="
            mb-2 text-lg md:text-base font-semibold

            /* NOTEBOOK (lg): deixa o título mais “presente” */
            lg:text-lg lg:leading-snug

            /* DESKTOP (xl): volta */
            xl:text-base
          "
        >
          {title}
        </h2>

        <p
          className="
            text-gray-600 text-sm md:text-base leading-relaxed

            /* NOTEBOOK (lg): reduz um pouco pra não ficar “puxado” */
            lg:text-sm lg:leading-relaxed

            /* DESKTOP (xl): volta */
            xl:text-base
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}
