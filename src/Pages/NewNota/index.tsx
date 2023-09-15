import CardNota from "../../Components/CardNota/CardNota"
import { Cliente } from "./NewNota.type"
import Dados from '../../db.json'
import Botao from "../../Components/Botao/Botao";
import { AiOutlineFileAdd } from 'react-icons/ai'
import { useState } from "react";
import ModalCadastrar from "../../Components/Modal/Modal";
import Form from "../../Components/Form/Form";

function NewNota() {
    const clientes: Cliente[] = Dados.clientes;

    const [modalOpen, setModalOpen] = useState(false);

    function openModal() {
        setModalOpen(true)
    }
    function closeModal() {
        setModalOpen(false);
    }

    return (
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
                  {clientes.map((cliente: Cliente) => (
                    <CardNota key={cliente.id} name={cliente.name} contract={cliente.contract} service={cliente.service} portion={cliente.portion} status={cliente.status} dateMaxSend={cliente.date} />
                  ))}
            </div>
            <Botao 
                className="p-4 rounded-full text-white bg-green-500 text-6xl fixed bottom-24 right-36 hover:drop-shadow-2xl hover:-translate-y-3 transition hover:bg-green-700 duration-300"
                onClick={openModal}
            >
                <AiOutlineFileAdd />
            </Botao>
            <ModalCadastrar openmodal={modalOpen} closemodal={closeModal}>
                <Form />
            </ModalCadastrar>
        </div>
    )
}

export default NewNota