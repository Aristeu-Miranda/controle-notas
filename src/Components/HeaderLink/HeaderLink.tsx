import { Link } from "react-router-dom"
import { HeaderLinkProps } from "./HeaderLink.types"

function HeaderLink ({ to, name }: HeaderLinkProps) {
    return (
        <Link 
            to={to}
            className="py-2 px-5 hover:underline"
        >
            {name}
        </Link>
    )
}

export default HeaderLink