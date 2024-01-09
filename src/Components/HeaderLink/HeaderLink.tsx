import { Link } from "react-router-dom"
import { HeaderLinkProps } from "./HeaderLink.types"

function HeaderLink ({ to, name, className }: HeaderLinkProps) {
    return (
        <Link 
            to={to}
            className={className}
        >
            {name}
        </Link>
    )
}

export default HeaderLink