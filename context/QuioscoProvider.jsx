import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [categoriaActivo, setCategoriaActivo] = useState({});
  const [producto, setProducto] = useState({});
  const [modal, setModal] = useState(false);
  const [pedido, setPedido] = useState([]);
  const [paso, setPaso] = useState(1);
  const [nombre, setNombre] = useState("");
  const [total, setTotal] = useState(0);

  const obtenerCategorias = async () => {
    const { data } = await axios("/api/categorias");
    setCategorias(data);
  };

  const router = useRouter();

  useEffect(() => {
    obtenerCategorias();
  }, []);

  useEffect(() => {
    setCategoriaActivo(categorias[0]);
  }, [categorias]);

  const handleCategoria = (id) => {
    const categoria = categorias.filter((cat) => cat.id === id);
    setCategoriaActivo(categoria[0]);
    router.push("/");
  };

  const handleProducto = (producto) => {
    setProducto(producto);
  };

  const handleModal = () => {
    setModal(!modal);
  };

  const handleAgregarPedido = ({ categoriaId, ...producto }) => {
    if (pedido.some((productoState) => productoState.id === producto.id)) {
      //Actualizar cantidad
      const pedidoActualizado = pedido.map((productoState) =>
        productoState.id === producto.id ? producto : productoState
      );

      setPedido(pedidoActualizado);
      toast("Pedido Modificado Correctamente", { type: "success" });
    } else {
      setPedido([...pedido, producto]);
      toast("Producto agregado al pedido", { type: "success" });
    }
    setModal(false);
  };

  const handlePaso = (paso) => {
    setPaso(paso);
  };

  const handleCantidad = (id) => {
    const productoActualizar = pedido.filter((producto) => producto.id === id);
    setProducto(productoActualizar[0]);
    setModal(!modal);
  };

  const handleEliminarProducto = (id) => {
    const pedidoActualizado = pedido.filter((producto) => producto.id !== id);
    setPedido(pedidoActualizado);
  };

  const crearOrden = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/ordenes", {
        nombre,
        pedido,
        total,
        fecha: Date.now().toString(),
      });

      //Reiniciar App
      toast("Orden creada correctamente", { type: "success" });
      setCategoriaActivo(categorias[0]);
      setPedido([]);
      setPaso(1);
      setNombre("");
      setTotal(0);
      router.push("/");
    } catch (error) {
      console.log(error);
      toast("Error al crear la orden", { type: "error" });
    }
  };

  return (
    <QuioscoContext.Provider
      value={{
        categorias,
        categoriaActivo,
        producto,
        modal,
        pedido,
        paso,
        nombre,
        total,
        handleCategoria,
        handleProducto,
        handleModal,
        handleAgregarPedido,
        handlePaso,
        handleCantidad,
        handleEliminarProducto,
        setNombre,
        setTotal,
        crearOrden,
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export { QuioscoProvider };

export default QuioscoContext;
