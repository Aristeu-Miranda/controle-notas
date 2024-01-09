import CardNota from "../../Components/CardNota/CardNota";
import { Cliente } from "./NewNota.type";
import Botao from "../../Components/Botao/Botao";
import { AiOutlineFileAdd } from "react-icons/ai";
import { useEffect, useState } from "react";
import ModalCadastrar from "../../Components/Modal/Modal";
import Form from "../../Components/Form/Form";
import Loader from "../../Components/Loader/Loarder";
import { fetchClients, fetchRemove } from "../../Service/fetchUtils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function NewNota() {
  const [modalOpen, setModalOpen] = useState(false);
  const [dados, setDados] = useState<Cliente[]>([]);
  const [loading, setLoading] = useState(true);

  function usingModal() {
    if (modalOpen) {
      setModalOpen(false);
    } else setModalOpen(true);
  }

  useEffect(() => {
    const urlApiClients = "https://controle-api-mhpv.onrender.com/notes";
    fetchClients(urlApiClients).then((data) => {
      setDados(data);
      setLoading(false);
    });
  }, []);

  const removeNotas = async (id: any) => {
    const urlApiClientsDelete = `https://controle-api-mhpv.onrender.com/notes/${id}`
      await fetchRemove(urlApiClientsDelete)
      .then(() => {
        setDados(dados.filter((dado) => dado._id !== id));
      });
      toast.success("Registro removido!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : dados.length === 0 ? (
        <div className="w-1/2 text-center mx-auto mt-10">
          <ToastContainer />
          <p className="text-2xl font-medium mb-20 mt-20">
            Você não possui registros de notas cadastradas... Comece agora!!!
          </p>
          <Botao
            className="p-4 rounded-full text-white bg-green-500 text-6xl hover:drop-shadow-2xl hover:-translate-y-3 transition hover:bg-green-700 duration-300"
            onClick={usingModal}
          >
            <AiOutlineFileAdd />
          </Botao>
          <ModalCadastrar
            openmodal={modalOpen}
            closemodal={usingModal}
            closeBtn={true}
          >
            <Form />
          </ModalCadastrar>
        </div>
      ) : (
        <div className="sm:flex sm:flex-col sm:justify-center sm:items-center sm:mt-4">
          <ToastContainer />
          <div className="w-2/6 text-center sm:text-2xl bg-zinc-900 text-slate-100 mb-10 py-1 rounded-lg">
            <h2>Consulte aqui suas notas a serem enviadas</h2>
          </div>
          <div className="flex flex-wrap gap-5 justify-start items-center max-w-7xl">
            {dados.map((cliente: Cliente) => (
              <CardNota
                key={cliente._id}
                name={cliente.name}
                contract={cliente.contract}
                service={cliente.service}
                portion={cliente.portion}
                status={cliente.status}
                dateMaxSend={cliente.date}
                removeNotas={removeNotas}
                id={cliente._id}
              />
            ))}
          </div>
          <Botao
            className="p-4 rounded-full text-white bg-green-500 text-6xl fixed bottom-24 right-36 hover:drop-shadow-2xl hover:-translate-y-3 transition hover:bg-green-700 duration-300"
            onClick={usingModal}
          >
            <AiOutlineFileAdd />
          </Botao>
          <ModalCadastrar
            openmodal={modalOpen}
            closemodal={usingModal}
            closeBtn={true}
          >
            <Form />
          </ModalCadastrar>
        </div>
      )}
    </>
  );
}

export default NewNota;

