import { BotaoProps } from "./Botao.types"


function Botao({ className, type, children, onClick }: BotaoProps) {
    return (
        <button className={className} type={type} onClick={onClick}>
            {children}
        </button>
    )
}


export default Botao