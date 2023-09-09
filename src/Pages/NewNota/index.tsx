import CardNota from "../../Components/CardNota/CardNota"

function NewNota() {
    return (
        <div>
            <ul className="flex w-full justify-evenly items-center text-xl bg-slate-100 mb-3 py-4 rounded-lg">
                <li>Nome</li>
                <li>N° do Contrato</li>
                <li>Serviço</li>
                <li>N° da Parcela</li>
                <li>Status</li>
                <li>Data maxima para envio</li>
            </ul>
            <div className="border border-black flex flex-col justify-center items-center">
                <CardNota name={"Conj. Res. Morada dos Clássicos"} contract={"4040-08/23-0"} service={"Reforma do CM e substituição das prumadas"} portion={"1/20"} status={false} dateMaxSend={"20/09/2020"} />
                <CardNota name={"Cond. Ed. Theo"} contract={"4040-08/23-0"} service={"Reforma do CM e substituição das prumadas"} portion={"1/20"} status={false} dateMaxSend={"20/09/2020"} />        
            </div>
        </div>
    )
}

export default NewNota