import IconoMenos from "./IconoMenos";
import IconoMas from "./IconoMas";

const Editar = ({ setCantidad, cantidad }) => {
  return (
    <div className="flex gap-4 mt-5">
      <IconoMenos setCantidad={setCantidad} cantidad={cantidad} />
      <p className="text-xl">{cantidad}</p>
      <IconoMas setCantidad={setCantidad} cantidad={cantidad} />
    </div>
  );
};

export default Editar;
