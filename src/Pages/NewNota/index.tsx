import Input from "../../Components/Input/Input"

function NewNota() {
    return (
        <form>
            <Input 
                name={"cliente"} 
                className={""}
                label="Nome do cliente" 
            />
            <Input 
                name={"contrato"} 
                className={""}
                label="Nº do Contrato" 
            />
            <Input 
                name={"parcela"} 
                className={""}
                label="Nº da parcela" 
            />
        </form>
    )
}

export default NewNota