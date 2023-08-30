import { CardNotaProps } from "./CardNota.types"
import { AiOutlineClose } from 'react-icons/ai'

function CardNota({ name, contract, service, portion, status, dateMaxSend}: CardNotaProps) {
    return (
        <ul className="flex w-[1300px] justify-evenly items-center text-xl bg-slate-100 mb-3 py-4 rounded-lg">
            <li>{name}</li>
            <li>{contract}</li>
            <li>{service}</li>
            <li>{portion}</li>
            <li>{status}</li>
            <li>{dateMaxSend}</li>
            <li><AiOutlineClose /></li>
        </ul>
    )
}

export default CardNota