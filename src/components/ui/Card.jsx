export default function Card({ title, description }) {
  return (
    <article className="/* NOTEBOOK (lg): melhora o “look” nessa faixa */ /* DESKTOP (xl): volta exatamente pro que você já tinha */ min-h-[320px] w-full max-w-[500px] rounded-lg bg-white p-5 shadow-lg md:min-h-[365px] md:p-4 lg:min-h-[350px] lg:max-w-[440px] lg:rounded-xl lg:p-5 lg:shadow-[0_18px_40px_rgba(0,0,0,0.10)] xl:min-h-[365px] xl:max-w-[500px] xl:rounded-lg xl:p-4 xl:shadow-lg">
      <img
        src="/images/logo.png"
        alt={title}
        className="/* NOTEBOOK (lg): logo menor e mais “harmônico” */ /* DESKTOP (xl): volta ao normal */ mb-4 h-auto w-full object-contain lg:mx-auto lg:mb-3 lg:max-w-[260px] xl:mx-0 xl:mb-4 xl:max-w-none"
      />

      <div className="/* NOTEBOOK (lg): dá um pouco mais de respiro lateral */ /* DESKTOP (xl): volta */ px-2 text-center md:px-5 lg:px-4 xl:px-5">
        <h2 className="/* NOTEBOOK (lg): deixa o título mais “presente” */ /* DESKTOP (xl): volta */ mb-2 text-lg font-semibold md:text-base lg:text-lg lg:leading-snug xl:text-base">
          {title}
        </h2>

        <p className="/* NOTEBOOK (lg): reduz um pouco pra não ficar “puxado” */ /* DESKTOP (xl): volta */ text-sm leading-relaxed text-gray-600 md:text-base lg:text-sm lg:leading-relaxed xl:text-base">
          {description}
        </p>
      </div>
    </article>
  );
}
