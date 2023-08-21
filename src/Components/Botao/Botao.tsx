import { BotaoProps } from "./Botao.types"


function Botao({ className, type, children }: BotaoProps) {
    return (
        <button className={className} type={type}>
            {children}
        </button>
    )
}


export default Botao