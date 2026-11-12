import { Link } from "react-router-dom";
import { User, UserRound } from "lucide-react";
import "./header.css"

function Header()
{
    return(
        <header>
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/productos">Producto</Link>
                <Link to="/preguntas">Preguntas</Link>
                <Link to='/login'><UserRound size={25}/></Link>
            </nav>
        </header>
    )
}

export default Header;