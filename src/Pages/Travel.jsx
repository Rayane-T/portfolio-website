import React from "react"
import Navbar from "../components/Navbar.jsx"
import Contact from "../components/Contact.jsx"

export default function Travel({ isDarkMode, toggleDarkMode }){
    return(
        <div>
        <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
            <div className="hero--work">
                Soon to be build...
            </div>
            <Contact/>
        </div>
    )
}