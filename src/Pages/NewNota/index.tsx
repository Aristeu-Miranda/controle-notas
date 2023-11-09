import CardNota from "../../Components/CardNota/CardNota";
import { Cliente } from "./NewNota.type"
import Botao from "../../Components/Botao/Botao";
import { AiOutlineFileAdd } from 'react-icons/ai'
import { useEffect, useState } from "react";
import ModalCadastrar from "../../Components/Modal/Modal";
import Form from "../../Components/Form/Form";
import { fetchClients, fetchStatus } from "../../Service/fetchUtils";

function NewNota() {
    const [modalOpen, setModalOpen] = useState(false);
    function usingModal() {
        if (modalOpen) {
            setModalOpen(false)
        } else setModalOpen(true)
    }

    const [status, setStatus] = useState([])
    useEffect(() => {
        const urlApiStatus = 'http://localhost:5000/status';
        fetchStatus(urlApiStatus, setStatus)
    }, [])
    
    const [dados, setDados] = useState<Cliente[]>([])
    useEffect(() => {
        const urlApiClients = 'http://localhost:5000/clientes';
        fetchClients(urlApiClients)
        .then(data => {
            setDados(data)
        })
    }, [])

    const removeNotas = (id: number) => {
        fetch(`http://localhost:5000/clientes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then(() => {
            setDados(dados.filter((dado) => dado.id !== id))
        })
        
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
                                key={cliente.id}
                                name={cliente.name}
                                contract={cliente.contract}
                                service={cliente.service}
                                portion={cliente.portion}
                                status={cliente.status}
                                dateMaxSend={cliente.date}
                                removeNotas={removeNotas} 
                                id={cliente.id}/>))}
                </div>
                <Botao 
                    className="p-4 rounded-full text-white bg-green-500 text-6xl fixed bottom-24 right-36 hover:drop-shadow-2xl hover:-translate-y-3 transition hover:bg-green-700 duration-300"
                    onClick={usingModal}
                >
                    <AiOutlineFileAdd />
                </Botao>
                <ModalCadastrar openmodal={modalOpen} closemodal={usingModal}>
                    <Form options={status} />
                </ModalCadastrar>
            </div>
            ) : (
                <div className="w-1/2 text-center mx-auto mt-10">
                    <p className="text-2xl font-medium mb-20 mt-20">Você não possui notas cadastradas... Comece agora!!!</p>
                    <Botao 
                    className="p-4 rounded-full text-white bg-green-500 text-6xl hover:drop-shadow-2xl hover:-translate-y-3 transition hover:bg-green-700 duration-300"
                    onClick={usingModal}
                >
                    <AiOutlineFileAdd />
                </Botao>
                <ModalCadastrar openmodal={modalOpen} closemodal={usingModal}>
                    <Form options={status} />
                </ModalCadastrar>
                </div>
            )}
        </>
    )
}

export default NewNota