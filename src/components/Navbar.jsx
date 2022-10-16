import { NavLink } from "react-router-dom"
import { HiOutlineMoon } from "react-icons/hi"

export default function Navbar(){
    return (
        <nav>
            <NavLink to="/" className="nav--leftside">Rayane.</NavLink>
            <div className="nav--rightside">
                <NavLink to="/Projects">Projects</NavLink>
                <NavLink to="/Work">Work</NavLink>
                <NavLink to="/Leadership">Leadership</NavLink>
                <HiOutlineMoon size="2em"/>
            </div>
        </nav>
    )
}