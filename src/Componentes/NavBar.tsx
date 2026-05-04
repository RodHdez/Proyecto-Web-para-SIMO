import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "../assets/Logo_SIMO.png";

export default function Navbar(){
    return(
        <nav className="navbar">
            <div className="navbar-lado-logo">
                <NavLink to ="/">
            <img src={logo} alt="logo" className="navbar-logo" />
                </NavLink>
            </div>
            <svg className="navbar-diagonal" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon points="0,0 0,100 35,100" fill="white"/>
            </svg>
            <div className="navbar-lado-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Conocenos">Conocenos</NavLink>
            <NavLink to="/Socios">Socios</NavLink>
            <NavLink to="/Corporativa">Corporativa</NavLink>
            <NavLink to="/Contacto">Contacto</NavLink>
            </div>
        </nav>
    )
}