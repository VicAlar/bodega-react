import Layout from "../layout/Layout";
import useQuiosco from "../hooks/useQuiosco";
import Producto from "../components/Producto";

export default function Home() {
  const { categoriaActivo } = useQuiosco();

  return (
    <Layout pagina={`Menú ${categoriaActivo?.nombre}`}>
      <h1 className="text-4xl font-black mt-2">{categoriaActivo?.nombre}</h1>
      <p className="text-2xl my-4">Elige y personaliza tu pedido</p>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 xs:grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4">
        {categoriaActivo?.productos?.map((producto) => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </div>
    </Layout>
  );
}
