import Botao from "../Botao/Botao"
import Input from "../Input"

function Form() {
    const sendForm = (e: any) => {
        e.preventDefault()
        console.log('Estou sendo enviado')
    }

    return (
        <>
            <div className="mb-10">
                <h2 className='text-2xl font-medium'>Cadastrar nova nota</h2>
                <p className='text-base'>Insira os dados abaixo para cadastrar uma nova nota fiscal para controle!</p>
            </div>
            <form onSubmit={sendForm}>
                <div className="my-4 flex justify-center">
                    <label className="my-auto mr-20 text-start" htmlFor="client">Cliente</label>
                    <Input 
                        name='client' 
                        className='p-2 rounded-lg w-80' 
                        type='text'
                        placeholder='Ex.: Cond / Empresa'
                    />
                </div>
                <div className="my-4 flex justify-center text-center">
                    <label className="my-auto mr-20 text-start" htmlFor="client">Serviço</label>
                    <Input 
                        name='service' 
                        className='p-2 rounded-lg w-80' 
                        type='text'
                        placeholder='Descreva o tipo de serviço prestado'
                        
                        />
                </div>
                <div className="my-4 flex justify-center text-center">
                    <label className="my-auto mr-5 text-start" htmlFor="client">Nº do contrato</label>
                    <Input 
                        name='contract' 
                        className='p-2 rounded-lg w-80' 
                        type='text'
                        placeholder='Ex.: XXXX-XX/YY-X'
                        
                        />
                </div>
                <div className="my-4 flex justify-center text-center">
                    <label className="my-auto mr-7 text-start" htmlFor="client">Nº da parcela</label>
                    <Input 
                        name='portion' 
                        className='p-2 rounded-lg w-80' 
                        type='text'
                        placeholder='Ex.: 1/10'
                        
                        />
                </div>
                <div className="my-4 flex justify-center text-center">
                    <label className="my-auto mr-5 text-start" htmlFor="client">Dia para envio</label>
                    <Input 
                        name='date' 
                        className='p-2 rounded-lg w-80' 
                        type='text'
                        placeholder='Ex.: 10'
                    />
                </div>
                <div className="my-4 flex justify-center text-center">
                    <label className="my-auto mr-5 text-center" htmlFor='status'>Status da nota fiscal</label>
                    <select className="p-2 rounded-lg" name="status">
                        <option value="pendente">Pendente</option>
                        <option value="enviado">Enviado</option>
                    </select>
                </div>
                <Botao type="submit" className="text-white p-2 mt-10 bg-green-500 rounded-lg transition hover:bg-green-700 duration-300">Cadastrar nota fiscal</Botao>
            </form>
        </>
    )
}

export default Form