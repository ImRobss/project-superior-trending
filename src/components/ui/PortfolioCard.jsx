export default function PortfolioCard({ src, alt }) {
  if (!src) return null;

  return (
    <article className="group hover:ring-rosa/70 relative mt-10 h-[340px] w-full overflow-hidden rounded-2xl bg-white/90 p-4 ring-1 ring-black/5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-sm hover:ring-2 hover:shadow-[#F3AFA6]">
      <div className="via-rosa/45 pointer-events-none absolute top-0 left-0 h-[10px] w-full bg-gradient-to-r from-transparent to-transparent opacity-60 blur-[0.5px] transition-opacity duration-300 group-hover:opacity-100" />

      <div className="bg-rosa/25 pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex h-full items-center justify-center rounded-xl bg-white">
        <div className="flex h-[340px] w-[320px] items-center justify-center">
          <img
            src={src}
            alt={alt || ""}
            className="h-full w-full object-contain transition-transform duration-300 ease-out group-hover:scale-[1.05]"
            loading="lazy"
            draggable="false"
          />
        </div>
      </div>
    </article>
  );
}
