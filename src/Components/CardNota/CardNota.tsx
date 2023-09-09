import Botao from "../Botao/Botao"
import { CardNotaProps } from "./CardNota.types"
import { AiOutlineClose } from 'react-icons/ai'

function CardNota({ name, contract, service, portion, status, dateMaxSend}: CardNotaProps) {
    return (
        <div>
            <div className="grid grid-cols-8 w-[1700px] text-center text-base bg-slate-100 mb-1 py-2 rounded-lg">
                <div className="col-span-2">{name}</div>
                <div className="col-span-2">{service}</div>
                <div>{contract}</div>
                <div>{portion}</div>
                <div>{dateMaxSend}</div>
                <div>{status}</div>
            </div>
            <Botao className={"relative left-[1690px] -top-5 text-slate-100 p-1 bg-black rounded-lg"}>
                <AiOutlineClose />
            </Botao>
        </div>
    )
}

export default CardNota