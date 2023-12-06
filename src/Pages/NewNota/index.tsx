import CardNota from "../../Components/CardNota/CardNota";
import { Cliente } from "./NewNota.type"
import Botao from "../../Components/Botao/Botao";
import { AiOutlineFileAdd } from 'react-icons/ai'
import { useEffect, useState } from "react";
import ModalCadastrar from "../../Components/Modal/Modal";
import Form from "../../Components/Form/Form";
import { fetchClients } from "../../Service/fetchUtils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function NewNota() {
    const [modalOpen, setModalOpen] = useState(false);
    function usingModal() {
        if (modalOpen) {
            setModalOpen(false)
        } else setModalOpen(true)
    }
    
    const [dados, setDados] = useState<Cliente[]>([])
    useEffect(() => {
        const urlApiClients = 'https://controle-api-mhpv.onrender.com/notes';
        fetchClients(urlApiClients)
        .then(data => {
            setDados(data)
        })
    }, [])

    const removeNotas = (id: any) => {
        fetch(`https://controle-api-mhpv.onrender.com/notes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then(() => {
            setDados(dados.filter((dado) => dado._id !== id))
        })
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
    }

    return (
        <>
            {dados.length > 0 ? (
                <div className="sm:flex sm:flex-col sm:justify-center sm:items-center sm:mt-4">
                <ul className="sm:grid sm:grid-cols-8 sm:gap-x-14 sm:p-2 sm:text-center sm:text-base bg-zinc-900 text-slate-100 mb-5 py-1 rounded-lg">
                    <li className="sm:col-span-2">Nome</li>
                    <li className="sm:col-span-2">Serviço</li>
                    <li>N° do Contrato</li>
                    <li>N° da Parcela</li>
                    <li>Data para envio</li>
                    <li>Status</li>
                </ul>
                <div className="flex flex-col justify-center items-center">
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
                                id={cliente._id}/>))}
                </div>
                <Botao 
                    className="p-4 rounded-full text-white bg-green-500 text-6xl fixed bottom-24 right-36 hover:drop-shadow-2xl hover:-translate-y-3 transition hover:bg-green-700 duration-300"
                    onClick={usingModal}
                >
                    <AiOutlineFileAdd />
                </Botao>
                <ModalCadastrar openmodal={modalOpen} closemodal={usingModal}>
                    <Form />
                </ModalCadastrar>
            </div>
            ) : (
                <div className="w-1/2 text-center mx-auto mt-10">
                    <ToastContainer />
                    <p className="text-2xl font-medium mb-20 mt-20">Você não possui notas cadastradas... Comece agora!!!</p>
                    <Botao 
                    className="p-4 rounded-full text-white bg-green-500 text-6xl hover:drop-shadow-2xl hover:-translate-y-3 transition hover:bg-green-700 duration-300"
                    onClick={usingModal}
                >
                    <AiOutlineFileAdd />
                </Botao>
                <ModalCadastrar openmodal={modalOpen} closemodal={usingModal}>
                    <Form />
                </ModalCadastrar>
                </div>
            )}
        </>
    )
}

export default NewNota