import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import {object, string} from "yup"
import Botao from '../../Components/Botao/Botao'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  

function Contato() {
    

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');
    
    const schema = object({
        nameForm: string().required("Campo obrigatório").min(2, "Insira um nome válido").max(35, "Excesso de caracteres"),
        emailForm: string().required("Campo obrigatório").min(10, "Insira um e-mail válido").max(35, "Excesso de caracteres"),
        subjectForm: string(),
        descriptionForm: string().required("Campo obrigatório"),
    })
       
    async function onSubmit()  {
        const templateParams = {
            from_name: name,
            message: description,
            email: email,
            subject: subject
        }

        try{
            emailjs.send("service_jjz1dnd", "template_b54mhii", templateParams, "Ydu06VXHriYnuMwzy")
            toast.success("E-mail enviado com sucesso!", {
                icon: "😎",
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })   
            reset()
        } catch (error) {
            throw new Error(`Fetch error: Network failed`)
        }
        
    }

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
        <div className='mx-auto flex justify-center w-3/4 mt-5 h-full'>
            <div className='w-1/2 pl-36 pt-5'>
                <h3 className='text-3xl font-medium underline-offset-8 decoration-2 underline'>Dúvidas | Sugestões</h3>
                <p className='my-10 text-lg'>Essa aplicação foi desenvolvida apenas como objeto de estudos.</p>
                <p className='my-10 text-lg'>Mande sua dúvida ou sugestão de melhoria preenchendo o formulário ao lado que terei o prazer em ler e responder!</p>
                <ul>
                    <li className='text-3xl font-medium underline-offset-8 decoration-2 underline'>Contatos</li>
                    <li className='my-10 flex'><a className='text-xl font-medium flex items-center' href="https://github.com/Aristeu-Miranda" target="blank"><BsGithub className='w-9 h-9 mr-7' />GitHub</a></li>
                    <li className='my-10 flex'><a className='text-xl font-medium flex items-center' href="https://www.linkedin.com/in/aristeu-miranda/" target="blank"><BsLinkedin className='w-9 h-9 mr-7' />LinkedIn</a></li>
                </ul>
            </div>
            <div className='w-1/2 flex justify-center pt-5'>
                <form className='w-1/2 font-medium' onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-5'>
                        <label className='block text-left' htmlFor="name">Nome</label>
                        <input
                            className='w-full mt-1 py-2 rounded-md px-2 border border-black'
                            type="text"
                            {...register("nameForm")}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <span className="block my-1 text-red-700">{errors?.nameForm?.message}</span>
                    </div>
                    <div className='mb-7'>
                        <label className='block text-left' htmlFor="email">E-mail</label>
                        <input
                            className='w-full mt-1 py-2 rounded-md px-2 border border-black' 
                            type="text"
                            {...register("emailForm")}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <span className="block my-1 text-red-700">{errors?.emailForm?.message}</span>
                    </div>
                    <div className='mb-5'>
                        <label className='text-left mr-5' htmlFor="subject">Assunto</label>
                        <select className='p-2 rounded-md' {...register("subjectForm")} onChange={(e) => setSubject(e.target.value)}>
                            <option  value="">Selecione</option>
                            <option  value="duvida">Dúvida</option>
                            <option  value="sugestao">Sugestão</option>
                        </select>
                    </div>
                    <div>
                        <label className='block text-left mb-2' htmlFor="description">Mensagem</label>
                        <textarea {...register("descriptionForm")} className='w-full h-44 rounded-md border border-black' minLength={5} maxLength={300} onChange={(e) => setDescription(e.target.value)}></textarea>
                        <span className="block my-1 text-red-700">{errors?.descriptionForm?.message}</span>
                    </div>
                    <div>
                        <ToastContainer/>
                        <Botao type='submit' className='bg-red-700 p-2 mt-3 mx-auto rounded-md text-slate-100 transition hover:font-bold hover:bg-red-600 flex justify-evenly items-center w-32'>
                            Enviar
                            <BsFillArrowRightCircleFill />
                        </Botao>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default Contato