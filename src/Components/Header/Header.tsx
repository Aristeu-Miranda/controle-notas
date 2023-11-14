import { useContext, useEffect } from "react";
import Logo from '../../Assets/logotipo.png'
import { UserContext } from "../../Contexts/User/UserContext";
import HeaderLink from "../HeaderLink/HeaderLink"
import Hours from "../Hours/Hours";
import { FiLogOut } from 'react-icons/fi'
import Botao from "../Botao";
import { useNavigate } from "react-router-dom";


function Header() {
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        const valueStorage = localStorage.getItem('userName');
        if (valueStorage) {
            setUser(valueStorage);
        }
    }, []);

    const navigate = useNavigate()
    const changePage = () => {
        localStorage.clear()
        navigate('/')
    }

    return (
        <>
            <header className="w-full h-14 flex flex-col bg-zinc-900 border-b-2 border-slate-100">
            <ul className="flex justify-around">
                <li className="hidden sm:block">
                    <Hours />
                </li>
                <li>
                    <img 
                        src={Logo} 
                        alt="Logotipo"
                        className="h-14 w-14" 
                    />
                </li>
                <li className="flex">
                    <p className="pt-4 font-bold text-slate-100 mr-10">Olá, {user}!</p>
                    <Botao className="text-white"
                        onClick={changePage}
                    >
                        <FiLogOut />
                    </Botao>
                </li>
            </ul>
            </header>
            <nav>
                <ul className="flex justify-evenly text-neutral-950 text-xs font-bold min-[354px]:text-sm min-[396px]:text-base">
                    <HeaderLink to={"new"} name={"Controle de Notas"} />
                    <HeaderLink to={"suporte"} name={"Suporte"} />
                </ul>
            </nav>
        </>
        

    )
}
export default Header