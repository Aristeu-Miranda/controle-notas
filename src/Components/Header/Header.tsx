import Logo from "../../Assets/logotipo.png"
import HeaderLink from "../HeaderLink/HeaderLink"

const Header = () => {

    return (
        <>
            <header className="w-full h-14 box-border flex flex-col bg-zinc-900 border-b-2 border-slate-100">
            <ul className="flex justify-around">
                <li><img 
                src={Logo} 
                alt="Logotipo"
                className="h-14 w-14" 
            />
                </li>
                <li><p className="pt-4 font-bold text-slate-100">Olá, seja bem-vindo</p></li>
            </ul>
            </header>
            <nav>
                <ul className="flex justify-evenly text-slate-100 font-semibold">
                    <HeaderLink to={"home"} name={"Home"} />
                    <HeaderLink to={"new"} name={"Controle de Notas"} />
                    <HeaderLink to={"contato"} name={"Contato"} />
                </ul>
            </nav>
        </>
        

    )
}
export default Header