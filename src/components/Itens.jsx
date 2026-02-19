import Card from "./ui/Card";

export default function Itens() {
  return (
    <main className="bg-roxo min-h-screen px-40 py-20 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-20 bg-[url('/images/pata.png')] bg-repeat bg-[length:100px]"></div>
      <div className="relative z-10">
        <div className="flex justify-center mb-10 ">
          <h1 className="text-white uppercase">Itens</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          <Card
            title="Alimentos Premium"
            description="Raciones super premium para perros y gatos con alta aceptación del cliente final. Más calidad, más confianza y reposición constante para que nunca pierdas una venta por falta de stock."
          />
          <Card
            title="Snacks y Húmedos"
            description="Galletas, bifinhos y alimentos húmedos de compra impulsiva. El cliente entra por la ración… pero la ganancia real está en el snack que lleva junto."
          />
          <Card
            title="Higiene y Sanitarios"
            description="Arenas, tapetes y granulados que generan recompra continua. Un producto que no depende de promociones: el cliente siempre vuelve a buscarlo."
          />
        </div>
        <div className="flex justify-center gap-8 mt-8 ">
          <Card
            title="Accesorios"
            description="Comederos, bandejas, palitas y contenedores prácticos para el día a día. Productos de alta rotación que complementan cada venta de alimento."
          />
          <Card
            title="Juguetes"
            description="Juguetes duraderos y atractivos que convierten una compra básica en una compra emocional. Ideal para impulsar ventas rápidas y mejorar tu margen."
          />
        </div>
      </div>
    </main>
  );
}
