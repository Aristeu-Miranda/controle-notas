import Botao from "../Botao/Botao"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import {object, string} from "yup"
import { fetchCreate } from "../../Service/fetchUtils"


const schema = object({
    name: string().required("Campo obrigatório").min(5, "Insira um nome válido").max(35, "Excesso de caracteres"),
    service: string().required("Campo obrigatório").min(5, "Insira um serviço válido").max(55, "Excesso de caracteres"),
    contract: string().required("Campo obrigatório").min(5, "N° de contrato inválido").max(13, "Excesso de caracteres"),
    portion: string().required("Campo obrigatório").max(5, "Excesso de caracteres"),
    date: string().required("Campo obrigatório"),
    status: string().required("Campo obrigatório")
})

function Form() {

    const onSubmit = async (data: any) => {
        const urlApiClientsCreate = 'https://controle-api-mhpv.onrender.com/notes'
        try {
            await fetchCreate(urlApiClientsCreate, data)
            reset();
            window.location.reload()
        } catch (error) {
            console.error('Ocorreu um erro ao enviar os dados:', error);
        }
    };

    const {
        register,
        handleSubmit,
        reset,
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
                <div className="my-4 mx-auto w-1/2 flex flex-col">
                    <div className="flex">
                    <label className="w-1/3 text-start my-auto" htmlFor="name">Cliente</label>
                    <input  
                        className='p-2 rounded-lg w-2/3' 
                        type='text'
                        placeholder='Ex.: Cond / Empresa'
                        {...register("name")}
                    />
                    </div>
                    <span className="my-1 text-red-700">{errors?.name?.message}</span>
                </div>
                <div className="my-4 mx-auto w-1/2 flex flex-col">
                    <div className="flex">
                    <label className="my-auto w-1/3 text-start" htmlFor="service">Serviço</label>
                    <input 
                        className='p-2 rounded-lg w-2/3' 
                        type='text'
                        placeholder='Descreva o tipo de serviço prestado'
                        {...register("service")}
                    />
                    </div>
                    <span className="my-1 text-red-700">{errors?.service?.message}</span>
                </div>
                <div className="my-4 mx-auto w-1/2 flex flex-col">
                    <div className="flex">
                    <label className="my-auto w-1/3 text-start" htmlFor="contract">Nº do contrato</label>
                    <input
                        {...register("contract")}
                        className='p-2 rounded-lg w-2/3' 
                        type='text'
                        placeholder='Ex.: XXXX-XX/YY-X'
                    />
                    </div>
                    <span className="my-1 text-red-700">{errors?.contract?.message}</span>
                </div>
                <div className="my-4 mx-auto w-1/2 flex flex-col">
                    <div className="flex">
                    <label className="my-auto w-1/3 text-start" htmlFor="portion">Nº de parcelas</label>
                    <input 
                        {...register("portion")} 
                        className='p-2 rounded-lg w-2/3' 
                        type='text'
                        placeholder='Ex.: 10'
                    />
                    </div>
                    <span className="my-1 text-red-700">{errors?.portion?.message}</span>
                </div>
                <div className="my-4 mx-auto w-1/2 flex flex-col">
                    <div className="flex">
                    <label className="my-auto w-1/3 text-start" htmlFor="client">Dia para envio</label>
                    <input 
                        {...register("date")}
                        className='p-2 rounded-lg w-2/3' 
                        type='text'
                        placeholder='Ex.: 25'
                    />
                    </div>
                    <span className="my-1 text-red-700">{errors?.date?.message}</span>
                </div>
                <div className="my-4 mx-auto w-1/2 flex flex-col">
                    <div className="flex">
                    <label className="top w-1/3 text-start" htmlFor='status'>Descrição</label>
                    <textarea {...register("status")} className="p-4 rounded-lg w-2/3 h-48" />
                    </div>
                    <span className="my-1 text-red-700">{errors?.status?.message}</span>
                </div>
                <Botao type="submit" className="text-white p-2 mt-50 bg-green-500 rounded-lg transition hover:bg-green-700 duration-300">Cadastrar registro</Botao>
            </form>
        </>
    )
}

export default Form
