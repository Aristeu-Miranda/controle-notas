import CardNota from "../../Components/CardNota/CardNota"

function NewNota() {
    return (
        <div className="flex flex-col justify-center items-center mt-4">
            <ul className="grid grid-cols-8 w-[1700px] p-2 text-center text-base bg-zinc-900 text-slate-100 mb-5 py-1 rounded-lg">
                <li className="col-span-2">Nome</li>
                <li className="col-span-2">Serviço</li>
                <li>N° do Contrato</li>
                <li>N° da Parcela</li>
                <li>Data maxima para envio</li>
                <li>Status</li>
            </ul>
            <div className="flex flex-col justify-center items-center">
                <CardNota name={"Conj. Res. Morada dos Clássicos"} contract={"4040-08/23-0"} service={"Reforma do CM e substituição das prumadas"} portion={"1/20"} status={false} dateMaxSend={"20/09/2020"} />
                <CardNota name={"Cond. Ed. Theo"} contract={"4040-08/23-0"} service={"Reforma do CM e substituição das prumadas"} portion={"1/20"} status={false} dateMaxSend={"20/09/2020"} />
                <CardNota name={"Cond. Ed. Theo"} contract={"4040-08/23-0"} service={"Reforma do CM e substituição das prumadas"} portion={"1/20"} status={false} dateMaxSend={"20/09/2020"} />
                <CardNota name={"Cond. Ed. Theo"} contract={"4040-08/23-0"} service={"Reforma do CM e substituição das prumadas"} portion={"1/20"} status={false} dateMaxSend={"20/09/2020"} />
                <CardNota name={"Cond. Ed. Theo"} contract={"4040-08/23-0"} service={"Reforma do CM e substituição das prumadas"} portion={"1/20"} status={false} dateMaxSend={"20/09/2020"} />
                <CardNota name={"Cond. Ed. Theo"} contract={"4040-08/23-0"} service={"Reforma do CM e substituição das prumadas"} portion={"1/20"} status={false} dateMaxSend={"20/09/2020"} />        
            </div>
        </div>
    )
}

export default NewNota