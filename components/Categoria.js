import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";

const Categoria = ({ categoria }) => {
  const { nombre, icono, id } = categoria;
  const { handleCategoria, categoriaActivo } = useQuiosco();

  return (
    <div
      className={`flex items-center gap-4 w-full border p-5 hover:bg-amber-400 hover:cursor-pointer ${
        categoriaActivo?.id === id ? "bg-amber-400" : null
      }`}
      onClick={() => handleCategoria(id)}
    >
      <Image
        src={`/assets/img/icono_${icono}.svg`}
        width={70}
        height={70}
        alt="Icono Categoría"
      />
      <button type="button" className="text-xl font-bold">
        {nombre}
      </button>
    </div>
  );
};

export default Categoria;
