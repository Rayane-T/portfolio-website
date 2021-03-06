import React from "react"
import { NavLink } from "react-router-dom"

export default function Navbar(){
    return (
        <nav>
            <NavLink to="/" className="nav--leftside">RT</NavLink>
            <div className="nav--rightside">
                <NavLink to="/Projects">Projects</NavLink>
                <NavLink to="/Work">Work</NavLink>
                <NavLink to="/Resume">Resume</NavLink>
            </div>
        </nav>
    )
}