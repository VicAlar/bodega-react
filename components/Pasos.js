import { useRouter } from "next/router";
import useQuiosco from "../hooks/useQuiosco";

const pasos = [
  { id: 1, nombre: "Menú", url: "/" },
  { id: 2, nombre: "Resumen del Pedido", url: "/resumen" },
  { id: 3, nombre: "Datos y Total", url: "/total" },
];

const Pasos = () => {
  const { handlePaso } = useQuiosco();
  const router = useRouter();

  const calcularPorcentaje = () => {
    let valor;
    if (router.pathname === "/") {
      valor = 15;
    } else if (router.pathname === "/resumen") {
      valor = 50;
    } else {
      valor = 100;
    }
    return valor;
  };

  return (
    <>
      <div className="flex justify-around mb-5">
        {pasos.map((paso) => (
          <button
            className="text-2xl font-bold"
            key={paso.id}
            onClick={() => {
              router.push(paso.url);
              handlePaso(paso.id);
            }}
          >
            {paso.nombre}
          </button>
        ))}
      </div>
      <div className="bg-gray-200 mb-10">
        <div
          className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center"
          style={{ width: `${calcularPorcentaje()}%` }}
        ></div>
      </div>
    </>
  );
};

export default Pasos;
