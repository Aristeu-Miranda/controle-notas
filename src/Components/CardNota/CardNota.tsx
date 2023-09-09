import { CardNotaProps } from "./CardNota.types"
import { AiOutlineClose } from 'react-icons/ai'

function CardNota({ name, contract, service, portion, status, dateMaxSend}: CardNotaProps) {
    return (
        <div className="grid grid-cols-10 text-center text-base bg-slate-100 mb-3 py-4 rounded-lg">
            <div className="col-span-2">{name}</div>
            <div>{contract}</div>
            <div className="col-span-2">{service}</div>
            <div>{portion}</div>
            <div>{status}</div>
            <div className="col-span-2">{dateMaxSend}</div>
            <div><AiOutlineClose /></div>
        </div>
    )
}

export default CardNota