import { CardNotaProps } from "./CardNota.types"
import { AiOutlineClose } from 'react-icons/ai'

function CardNota({ name, contract, service, portion, status, dateMaxSend}: CardNotaProps) {
    return (
        <ul className="flex bg-slate-100">
            <li className="flex">{name}</li>
            <li className="flex">{contract}</li>
            <li className="flex">{service}</li>
            <li className="flex">{portion}</li>
            <li className="flex">{status}</li>
            <li className="flex">{dateMaxSend}</li>
            <li className="flex"><AiOutlineClose /></li>
        </ul>
    )
}

export default CardNota