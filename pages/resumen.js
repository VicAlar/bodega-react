import Layout from "../layout/Layout";
import useQuiosco from "../hooks/useQuiosco";
import ResumenProducto from "../components/ResumenProducto";

export default function Resumen() {
  const { pedido } = useQuiosco();

  return (
    <Layout pagina="Resumen del ResumenProducto">
      <h1 className="text-4xl font-black mb-8">Resumen del Pedido</h1>

      {pedido.length === 0 ? (
        <p className="text-2xl text-center">No hay productos en el pedido</p>
      ) : (
        pedido.map((producto) => (
          <ResumenProducto key={producto.id} producto={producto} />
        ))
      )}
    </Layout>
  );
}
