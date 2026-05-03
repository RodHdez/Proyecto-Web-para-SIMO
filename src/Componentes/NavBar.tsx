import { NavLink } from "react-router-dom";

export default function Navbar(){
    return(
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Conocenos">Conocenos</NavLink>
            <NavLink to="/Socios">Socios</NavLink>
            <NavLink to="/Corporativa">Corporativa</NavLink>
            <NavLink to="/Contacto">Contacto</NavLink>
        </nav>
    )
}