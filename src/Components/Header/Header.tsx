import { useContext, useEffect } from "react";
import Logo from '../../Assets/logotipo.png'
import { UserContext } from "../../Contexts/User/UserContext";
import HeaderLink from "../HeaderLink/HeaderLink"
import Hours from "../Hours/Hours";
import { FiLogOut } from 'react-icons/fi'
import Botao from "../Botao";
import { useLocation, useNavigate } from "react-router-dom";


function Header() {
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        const valueStorage = localStorage.getItem('userName');
        if (valueStorage) {
            setUser(valueStorage);
        }
    }, [setUser]);

    const navigate = useNavigate()
    const changePage = () => {
        navigate('/')
        localStorage.clear()
    }

    const location = useLocation();
    const locatioNote = location.pathname === '/cn/new' ? 'underline' : ''
    const locatioSupport = location.pathname === '/cn/suporte' ? 'underline' : ''

    return (
        <>
            <header className="w-full h-14 flex flex-col bg-zinc-900 border-b-2 border-slate-100">
            <ul className="flex justify-around font-bold text-slate-100">
                <li>
                    <img 
                        src={Logo} 
                        alt="Logotipo"
                        className="h-14 w-14" 
                    />
                </li>
                <li className={`pt-4 px-4 hover:underline underline-offset-4 ${locatioNote}`}>
                    <HeaderLink to={"new"} name={"Controle de Notas"}/>
                </li>
                <li className={`pt-4 px-4 hover:underline underline-offset-4 text-white ${locatioSupport}`}>
                    <HeaderLink to={"suporte"} name={"Suporte"} />
                </li>
                <li className="flex">
                    <p className="pt-4 mr-10">Olá, {user}!</p>
                    <Botao className="text-white"
                        onClick={changePage}
                    >
                        <FiLogOut />
                    </Botao>
                </li>
            </ul>
            </header>
        </>
        

    )
}
export default Header