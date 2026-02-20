export default function Card({ title, description }) {
  return (
    <div className="group relative w-full max-w-[500px]">
      <div className="pointer-events-none absolute inset-0 scale-95 rounded-2xl opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100" />

      <article className="relative min-h-[320px] rounded-2xl bg-white p-5 shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-all duration-500 ease-out will-change-transform group-hover:-translate-y-1 group-hover:scale-[1.035] group-hover:shadow-[0_25px_60px_rgba(243,175,166,0.25)]">
        <img
          src="/images/logo.png"
          alt={title}
          className="mb-4 h-auto w-full object-contain"
        />

        <div className="px-2 text-center">
          <h2 className="mb-2 text-lg font-semibold">{title}</h2>

          <p className="text-sm leading-relaxed text-gray-600">{description}</p>
        </div>
      </article>
    </div>
  );
}
