import Botao from "../Botao/Botao"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import {object, string} from "yup"

const schema = object({
    client: string().required("Campo obrigatório").min(5, "Insira um nome válido").max(35, "Excesso de caracteres"),
    service: string().required("Campo obrigatório").min(5, "Insira um serviço válido"),
    contract: string().required("Campo obrigatório").min(5, "N° de contrato inválido"),
    portion: string().required("Campo obrigatório").min(3, "parcela inválida"),
    date: string().required("Campo obrigatório"),
    status: string()
})

function Form() {
    const onSubmit = (data: any) => console.log(data)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema)
    })
    
    return (
        <>
            <div className="mb-10">
                <h2 className='text-2xl font-medium'>Cadastrar nova nota</h2>
                <p className='text-base'>Insira os dados abaixo para cadastrar uma nova nota fiscal para controle!</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="my-4 px-11">
                    <label className="my-auto mr-20 text-start" htmlFor="client">Cliente</label>
                    <input  
                        className='p-2 rounded-lg w-80' 
                        type='text'
                        placeholder='Ex.: Cond / Empresa'
                        {...register("client")}
                    />
                    <span className="block my-1 text-red-700">{errors?.client?.message}</span>
                </div>
                <div className="my-4 px-11">
                    <label className="my-auto mr-20 text-start" htmlFor="service">Serviço</label>
                    <input 
                        className='p-2 rounded-lg w-80' 
                        type='text'
                        placeholder='Descreva o tipo de serviço prestado'
                        {...register("service")}
                    />
                    <span className="block my-1 text-red-700">{errors?.service?.message}</span>
                </div>
                <div className="my-4 px-11">
                    <label className="my-auto mr-5 text-start" htmlFor="contract">Nº do contrato</label>
                    <input
                        {...register("contract")}
                        className='p-2 rounded-lg w-80' 
                        type='text'
                        placeholder='Ex.: XXXX-XX/YY-X'
                    />
                    <span className="block my-1 text-red-700">{errors?.contract?.message}</span>
                </div>
                <div className="my-4 px-11">
                    <label className="my-auto mr-7 text-start" htmlFor="portion">Nº da parcela</label>
                    <input 
                        {...register("portion")} 
                        className='p-2 rounded-lg w-80' 
                        type='text'
                        placeholder='Ex.: 1/10'
                    />
                    <span className="block my-1 text-red-700">{errors?.portion?.message}</span>
                </div>
                <div className="my-4 px-11">
                    <label className="my-auto mr-5 text-start" htmlFor="client">Dia para envio</label>
                    <input 
                        {...register("date")}
                        className='p-2 rounded-lg w-80' 
                        type='text'
                        placeholder='Ex.: 10'
                    />
                    <span className="block my-1 text-red-700">{errors?.date?.message}</span>
                </div>
                <div className="my-4 px-11">
                    <label className="my-auto mr-5 text-center" htmlFor='status'>Status da nota fiscal</label>
                    <select {...register("status")} className="p-2 rounded-lg">
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