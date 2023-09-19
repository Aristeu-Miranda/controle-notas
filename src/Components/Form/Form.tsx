import Botao from "../Botao/Botao"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import {object, string} from "yup"
import { FormProps } from "./Form.type"


const schema = object({
    name: string().required("Campo obrigatório").min(5, "Insira um nome válido").max(35, "Excesso de caracteres"),
    service: string().required("Campo obrigatório").min(5, "Insira um serviço válido").max(35, "Excesso de caracteres"),
    contract: string().required("Campo obrigatório").min(5, "N° de contrato inválido").max(13, "Excesso de caracteres"),
    portion: string().required("Campo obrigatório").min(3, "parcela inválida").max(5, "Excesso de caracteres"),
    date: string().required("Campo obrigatório"),
    status: string()
})

function Form({ options }: FormProps) {

    const onSubmit = async (data: any) => {
        const randomId = Math.floor(Math.random() * 1000);
        const clientData = { ...data, id: randomId };

        try {
            const response = await fetch('http://localhost:5000/clientes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(clientData),
            });
            if (response.ok) {
                console.log('Dados enviados com sucesso!');
            } else {
                console.error('Erro ao enviar os dados para a API');
            }
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
                        {options.map((option: any) => (
                            <option value={option.name} key={option.id}>{option.name}</option>
                        ))}
                    </select>
                </div>
                <Botao type="submit" className="text-white p-2 mt-10 bg-green-500 rounded-lg transition hover:bg-green-700 duration-300">Cadastrar nota fiscal</Botao>
            </form>
        </>
    )
}

export default Form
