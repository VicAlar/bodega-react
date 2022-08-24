import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Pasos from "../components/Pasos";
import Modal from "react-modal";
import ModalProducto from "../components/ModalProducto";
import { ToastContainer } from "react-toastify";
import { customStyles } from "../helpers";
import useQuiosco from "../hooks/useQuiosco";
import "react-toastify/dist/ReactToastify.css";
Modal.setAppElement("#__next");

export default function Layout({ children, pagina }) {
  const { modal } = useQuiosco();

  return (
    <>
      <Head>
        <title>{pagina}</title>
        <meta name="description" content="Quiosco Cafetería" />
      </Head>

      <div className="md:flex">
        <aside className="sm:w-full md:w-4/12 xl:w-1/4 2xl:w-1/5 md:h-screen md:overflow-y-scroll">
          <Sidebar />
        </aside>
        <main className="sm:w-full md:8/12 xl:w-3/4 2xl:w-4/5 md:h-screen md:overflow-y-scroll p-4">
          <Pasos />
          {children}
        </main>
      </div>
      {modal ? (
        <Modal isOpen={modal} style={customStyles}>
          <ModalProducto />
        </Modal>
      ) : null}

      <ToastContainer autoClose={3000} newestOnTop />
    </>
  );
}
