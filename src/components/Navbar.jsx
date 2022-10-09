import { NavLink } from "react-router-dom"

export default function Navbar(){
    return (
        <nav>
            <NavLink to="/" className="nav--leftside">Rayane.</NavLink>
            <div className="nav--rightside">
                <NavLink to="/Projects">Projects</NavLink>
                <NavLink to="/Work">Work</NavLink>
                <NavLink to="/Leadership">Leadership</NavLink>
            </div>
        </nav>
    )
}