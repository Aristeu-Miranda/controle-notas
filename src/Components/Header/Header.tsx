import { useContext } from "react";
import Logo from "../../Assets/logotipo.png"
import { UserContext } from "../../Contexts/User/UserContext";
import HeaderLink from "../HeaderLink/HeaderLink"
import Hours from "../Hours/Hours";


function Header() {
    const { user } = useContext(UserContext);

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
                <li>
                    <p className="pt-4 font-bold text-slate-100">Olá, {user}!</p>
                </li>
            </ul>
            </header>
            <nav>
                <ul className="flex justify-evenly text-neutral-950 text-xs font-bold min-[354px]:text-sm min-[396px]:text-base">
                    <HeaderLink to={"home"} name={"Home"} />
                    <HeaderLink to={"new"} name={"Controle de Notas"} />
                    <HeaderLink to={"contato"} name={"Contato"} />
                </ul>
            </nav>
        </>
        

    )
}
export default Header