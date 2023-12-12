import Botao from "../Botao/Botao"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import {object, string} from "yup"


const schema = object({
    name: string().required("Campo obrigatório").min(5, "Insira um nome válido").max(35, "Excesso de caracteres"),
    service: string().required("Campo obrigatório").min(5, "Insira um serviço válido").max(55, "Excesso de caracteres"),
    contract: string().required("Campo obrigatório").min(5, "N° de contrato inválido").max(13, "Excesso de caracteres"),
    portion: string().required("Campo obrigatório").max(5, "Excesso de caracteres"),
    date: string().required("Campo obrigatório"),
    status: string()
})

function Form() {

    const onSubmit = async (data: any) => {
        const clientData = { ...data };

        try {
            const response = await fetch('https://controle-api-mhpv.onrender.com/notes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(clientData),
            });
        } catch (error) {
            console.error('Ocorreu um erro ao enviar os dados:', error);
        }
        reset();
        window.location.reload()
    };

    const {
        register,
        handleSubmit,
        watch,
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
                <div className="my-4 px-11">
                    <label className="my-auto mr-20 text-start" htmlFor="name">Cliente</label>
                    <input  
                        className='p-2 rounded-lg w-80' 
                        type='text'
                        placeholder='Ex.: Cond / Empresa'
                        {...register("name")}
                    />
                    <span className="block my-1 text-red-700">{errors?.name?.message}</span>
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
                <div className="my-4 text-start pl-[218px]">
                    <label className="my-auto mr-7 text-start" htmlFor="portion">Quantidade de parcelas</label>
                    <input 
                        {...register("portion")} 
                        className='p-2 rounded-lg w-80' 
                        type='text'
                        placeholder='Ex.: 10'
                    />
                    <span className="block my-1 text-red-700">{errors?.portion?.message}</span>
                </div>
                <div className="my-4 px-11">
                    <label className="my-auto mr-5 text-start" htmlFor="client">Dia para envio</label>
                    <input 
                        {...register("date")}
                        className='p-2 rounded-lg w-80' 
                        type='text'
                        placeholder='Ex.: 25'
                    />
                    <span className="block my-1 text-red-700">{errors?.date?.message}</span>
                </div>
                <div className="my-4 pl-[130px] relative">
                    <label className="my-auto mr-12 absolute top left-80" htmlFor='status'>Descrição</label>
                    <textarea {...register("status")} className="p-4 rounded-lg w-80 h-48">
                    </textarea>
                </div>
                <Botao type="submit" className="text-white p-2 mt-50 bg-green-500 rounded-lg transition hover:bg-green-700 duration-300">Cadastrar nota fiscal</Botao>
            </form>
        </>
    )
}

export default Form
