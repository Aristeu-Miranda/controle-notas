import { Link } from "react-router-dom"
import Logo from "../../Assets/logotipo.png"
import Hours from "../Hours/Hours"

function Header() {
    return (
        <header className="w-full h-14 box-border flex justify-evenly bg-gray-400 border-b-2 border-black">
            <ul>
                <li><Hours /></li>
                <li><img 
                src={Logo} 
                alt="Logotipo"
                className="h-14 w-14" 
            /></li>
                
                <li><p className="pt-4 font-bold">Olá, seja bem-vindo!</p></li>
            </ul>
        </header>
    )
}

export default Header