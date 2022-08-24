import Image from "next/image";
import { formatearPrecio } from "../helpers";
import Pencil from "./Pencil";
import Delete from "./Delete";
import useQuiosco from "../hooks/useQuiosco";

const ResumenProducto = ({ producto }) => {
  const { handleCantidad, handleEliminarProducto } = useQuiosco();

  return (
    <div className="shadow p-5 mb-3 md:flex gap-10 items-center">
      <div className="md:w-1/6">
        <Image
          width={200}
          height={300}
          alt={`Imagen del producto ${producto.nombre}`}
          src={`/assets/img/${producto.imagen}.jpg`}
        />
      </div>
      <div className="md:w-4/6">
        <p className="text-2xl font-bold">{producto.nombre}</p>
        <p className="text-xl font-bold mt-2">Cantidad: {producto.cantidad}</p>
        <p className="text-xl font-bold mt-2 text-amber-500">
          Precio: {formatearPrecio(producto.precio)}
        </p>
        <p className="text-sm font-bold mt-2">
          Total: {formatearPrecio(producto.precio * producto.cantidad)}
        </p>
      </div>
      <div>
        <button
          onClick={() => handleEliminarProducto(producto.id)}
          className="flex justify-center gap-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow-md w-full mt-4 md:mt-0"
        >
          <Delete />
          Eliminar
        </button>
        <button
          className="flex justify-center gap-2 bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded shadow-md w-full mt-4"
          onClick={() => handleCantidad(producto.id)}
        >
          <Pencil />
          Editar
        </button>
      </div>
    </div>
  );
};

export default ResumenProducto;
