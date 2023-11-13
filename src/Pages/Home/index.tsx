import { useNavigate } from "react-router-dom";
import Logo from '../../Assets/logotipo.png'
import Botao from "../../Components/Botao/Botao";
import { useContext } from "react";
import { UserContext } from "../../Contexts/User/UserContext";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import {object, string} from "yup"

const schema = object({
    username: string().required("Campo obrigatório").min(5, "Insira um nome válido").max(35, "Excesso de caracteres"),
    userpass: string()})


function Login() {

    const navigate = useNavigate();
    const onSubmit = () => {
        navigate('/cn/new');
        reset();
        console.log(schema)
    }
    const { setUser } = useContext(UserContext);
    const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value);
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
        <div className="flex items-center justify-center h-screen">
        <div className="max-w-2xl text-center py-10">
            <h1 className="mx-auto">CN</h1>
            <h1 className="font-bold text-3xl">Controle de Notas</h1>
            <p className="font-semibold mt-4">Quem está trabalhando hoje?</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="my-4 px-11">
                    <input
                    className="w-[336px] mt-5 py-1 rounded-md px-2" 
                    placeholder={"Digite seu nome"}
                    {...register("username")}
                    onChange={changeName}
                    />
                    <span className="block my-1 text-red-700">{errors?.username?.message}</span>
                </div>
                <Botao 
                    className={"bg-slate-800 p-2 mt-4 rounded-md text-slate-100 hover:font-bold hover:bg-slate-600"}
                    type="submit"
                >
                    Entrar
                </Botao>
            </form>
        </div>
    </div>
    )
}

export default Login