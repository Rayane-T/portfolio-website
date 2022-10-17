import React from "react"
import { NavLink } from "react-router-dom"
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi"

import sun from "../image/icons8-sun.svg"
import moon from "../image/moonsvg.svg"

export default function Navbar(){

    return (
        <nav>
            <NavLink to="/" className="nav--leftside">Rayane.</NavLink>
            <div className="nav--rightside">
                <NavLink to="/Projects">Projects</NavLink>
                <NavLink to="/Work">Work</NavLink>
                <NavLink to="/Leadership">Leadership</NavLink>
                <img src={moon} height="30px" id="dlicon"/>
            </div>
        </nav>
    )
}