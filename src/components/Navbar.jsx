import React from "react"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';


export default function Navbar({ toggleDarkMode, isDarkMode}){

    return (
        <nav>
            <NavLink to="/" className="nav--leftside">RT</NavLink>
            <div className="nav--rightside">
                <NavLink to="/">About</NavLink>
                <NavLink to="/Projects">Projects</NavLink>
                <NavLink to="/Work">Experience</NavLink>
                <NavLink to="/Blog">Blog</NavLink>
                <NavLink to="/Travel">Travel</NavLink>
            <div className="icon-container" onClick={toggleDarkMode}>
                <FontAwesomeIcon
                icon={isDarkMode ? faSun : faMoon}
                className="icon"
                />
            </div>
            </div>
        </nav>
    )
}
