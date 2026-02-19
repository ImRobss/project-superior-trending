export default function Card({ title, description }) {
  return (
    <div className="h-[365px] w-[500px] bg-white p-4 rounded-lg shadow-lg">
      <img
        src="/images/logo.png"
        alt={title}
        className="w-full h-auto object-cover mb-4"
      />
      <div className="text-center px-5">
        <h2 className=" mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
