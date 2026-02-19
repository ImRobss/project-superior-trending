export default function Card({ title, description }) {
  return (
    <div
      className="
        w-full max-w-[500px]
        min-h-[320px] md:min-h-[365px]
        bg-white p-5 md:p-4
        rounded-lg shadow-lg
      "
    >
      <img
        src="/images/logo.png"
        alt={title}
        className="w-full h-auto object-contain mb-4"
      />

      <div className="text-center px-2 md:px-5">
        <h2 className="mb-2 text-lg md:text-base font-semibold">{title}</h2>

        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
