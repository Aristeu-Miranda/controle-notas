import Botao from "../Botao/Botao";
import { CardNotaProps } from "./CardNota.types";
import { AiOutlineClose } from 'react-icons/ai'
import { FaBuilding } from "react-icons/fa";


function CardNota({ name, contract, service, portion, status, dateMaxSend, id, removeNotas}: CardNotaProps) {
    const statusClass = status === 'Pendente' ? 'text-red-500 font-bold' : 'text-green-500 font-bold';

    return (
        <div>
            <div className="bg-slate-100 mb-1 py-2 rounded-lg text-center w-60 h-72 border border-black relative">
                <div className="h-2/4 my-4"><FaBuilding className="mx-auto w-28 h-28 text-neutral-500" /></div>
                <div className="mb-2 font-semibold">Cliente: {name}</div>
                <div className="mb-3">Contrato n°: {contract}</div>
                <Botao className="text-lime-600 transition hover:font-bold hover:text-lime-900 hover:underline">Acessar</Botao>
                <Botao 
                className={"bg-black text-white p-1 rounded-md absolute -top-3 -right-3"}
                onClick={() => removeNotas(id)}
                ><AiOutlineClose /></Botao>
            </div>
                
        </div>
    )
}

export default CardNota