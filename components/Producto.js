import Image from "next/image";
import { formatearPrecio } from "../helpers";
import useQuiosco from "../hooks/useQuiosco";

const Producto = ({ producto }) => {
  const { imagen, nombre, precio } = producto;
  const { handleProducto, handleModal } = useQuiosco();

  return (
    <div className="border p-3">
      <Image
        src={`/assets/img/${imagen}.jpg`}
        alt={`Imagen plato ${nombre}`}
        width={350}
        height={400}
      />
      <div className="p-5 flex-col">
        <h3 className="font-bold">{nombre}</h3>
        <p className="mt-5 font-black text-2xl text-amber-500">
          {formatearPrecio(precio)}
        </p>
        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
          onClick={() => {
            handleProducto(producto);
            handleModal();
          }}
        >
          Agregar
        </button>
      </div>
    </div>
  );
};

export default Producto;
