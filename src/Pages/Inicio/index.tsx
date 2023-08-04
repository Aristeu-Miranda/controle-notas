import { useNavigate } from "react-router-dom";
import Botao from "../../Components/Botao/Botao"
import Input from "../../Components/Input/Input"

function Inicio() {
    const navigate = useNavigate();
    const handlePageEntrar = () => {
        navigate('/home');
    }

    return (
        <header className="flex items-center justify-center h-screen">
            <div className="max-w-2xl text-center py-10">
                <h1 className="font-bold text-3xl">CN - Controle de Notas</h1>
                <p className="font-semibold mt-4">Seja bem-vindo! Quem está trabalhando hoje?</p>
                <Input
                className="w-[336px] mt-5 py-1 rounded-md px-2" 
                name={"user-name"} 
                placeholder={"Digite seu nome"}
                />
                <Botao 
                    className={"bg-slate-800 p-2 mt-4 rounded-md text-slate-100 hover:font-bold hover:bg-slate-600"} 
                    type={"button"}
                    onClick={handlePageEntrar}    
                >
                    Entrar
                </Botao>
            </div>
        </header>
    )
}

export default Inicio