import Botao from "../Botao/Botao"
import { CardNotaProps } from "./CardNota.types"
import { AiOutlineClose } from 'react-icons/ai'

function CardNota({ name, contract, service, portion, status, dateMaxSend, id, removeNotas}: CardNotaProps) {
    const statusClass = status === 'Pendente' ? 'text-red-500 font-bold' : 'text-green-500 font-bold';

    return (
        <div>
            <div className="sm:flex sm:text-center sm:text-base bg-slate-100 mb-1 py-2 rounded-lg border border-black">
                <div className="lg:w-64 xl:w-72 2xl:w-80 mx-4">{name}</div>
                <div className="lg:w-64 xl:w-72 2xl:w-80 mx-4">{service}</div>
                <div className="lg:w-24 xl:w-32 2xl:w-44 mx-1">{contract}</div>
                <div className="lg:w-24 xl:w-32 2xl:w-44 mx-1">{portion}</div>
                <div className="lg:w-24 xl:w-32 2xl:w-44 mx-1">{dateMaxSend}</div>
                <div className={`lg:w-24 xl:w-32 2xl:w-44 mx-1 ${statusClass}`}>{status}</div>
            </div>
            <div><Botao 
                className={"bg-black text-white p-1 rounded-md relative -right-full lg:-right-[980px] xl:-right-[1175px] 2xl:-right-[1430px] -top-5"}
                onClick={() => removeNotas(id)}
                ><AiOutlineClose /></Botao></div>
        </div>
    )
}

export default CardNota