import CardNota from "../../Components/CardNota/CardNota"

function NewNota() {
    return (
        <div className="border border-black flex flex-col justify-center items-center">
            <CardNota name={"Conj. Res. Morada dos Clássicos"} contract={"4040-08/23-0"} service={"Reforma do CM e substituição das prumadas"} portion={"1/20"} status={false} dateMaxSend={"20/09/2020"} />
            <CardNota name={"Cond. Ed. Theo"} contract={"4040-08/23-0"} service={"Reforma do CM e substituição das prumadas"} portion={"1/20"} status={false} dateMaxSend={"20/09/2020"} />        
        </div>
    )
}

export default NewNota