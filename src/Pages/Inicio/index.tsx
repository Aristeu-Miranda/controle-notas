import { useNavigate } from "react-router-dom";
import Logo from "../../Assets/logotipo.png"
import Botao from "../../Components/Botao";
import { useContext } from "react";
import { UserContext } from "../../Contexts/User/UserContext";
import Input from "../../Components/Input";


function Inicio() {
    const navigate = useNavigate();
    const PageEntrar = () => {
        navigate('/cn/home');
    }
    const { setUser } = useContext(UserContext);
    const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value);
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="max-w-2xl text-center py-10">
                <img className="w-40 h-40 mx-auto" src={Logo} alt="Logotipo da marca"/>
                <h1 className="font-bold text-3xl">Controle de Notas</h1>
                <p className="font-semibold mt-4">Seja bem-vindo! Quem está trabalhando hoje?</p>
                <Input
                className="w-[336px] mt-5 py-1 rounded-md px-2" 
                name={"user-name"} 
                placeholder={"Digite seu nome"}
                onChange={changeName}
                />
                <Botao 
                    className={"bg-slate-800 p-2 mt-4 rounded-md text-slate-100 hover:font-bold hover:bg-slate-600"}
                    type="button"
                    onClick={PageEntrar}
                >
                    Entrar
                </Botao>
            </div>
        </div>
    )
}

export default Inicio