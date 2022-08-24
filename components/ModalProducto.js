import { useState, useEffect } from "react";
import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";
import { formatearPrecio } from "../helpers";
import IconoCerrar from "./IconoCerrar";
import Editar from "./Editar";

const ModalProducto = () => {
  const [cantidad, setCantidad] = useState(1);
  const [editar, setEditar] = useState(false);

  const { producto, handleModal, handleAgregarPedido, pedido } = useQuiosco();

  useEffect(() => {
    //Comprobar si el producto está en el pedido actual
    if (pedido.some((productoState) => productoState.id === producto.id)) {
      const productoEnPedido = pedido.find(
        (productoState) => productoState.id === producto.id
      );
      setEditar(true);
      setCantidad(productoEnPedido ? productoEnPedido.cantidad : 1);
    }
  }, [pedido, producto]);

  return (
    <div className="overflow-scroll h-50 md:flex gap-10">
      <div className="md:w-1/3">
        <Image
          width={400}
          height={500}
          alt={`Imagen ${producto.nombre}`}
          src={`/assets/img/${producto.imagen}.jpg`}
          layout="intrinsic"
        />
      </div>
      <div className="md:w-2/3">
        <div className="flex justify-end">
          <IconoCerrar cerrar={handleModal} />
        </div>
        <h1 className="text-3xl font-bold mt-5">{producto.nombre}</h1>
        <p className="mt-5 font-black text-5xl text-amber-500">
          {formatearPrecio(producto.precio)}
        </p>
        <Editar setCantidad={setCantidad} cantidad={cantidad} />
        <button
          className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold rounded"
          onClick={() => handleAgregarPedido({ ...producto, cantidad })}
        >
          {editar ? "Guardar Cambios" : "Añadir al Pedido"}
        </button>
      </div>
    </div>
  );
};

export default ModalProducto;
