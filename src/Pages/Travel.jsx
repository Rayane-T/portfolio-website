import React from "react"
import Navbar from "../components/Navbar.jsx"
import { TabTitle } from "../utils/genfun.js"
import Contact from "../components/Contact.jsx"

export default function Travel({ isDarkMode, toggleDarkMode }){
    TabTitle('Travel | Rayane Tayache')
    return(
        <div className={isDarkMode ? 'dark-mode' : ''}>
        <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
            <div className="hero--work">
                Soon to be build...
            </div>
            <Contact/>
        </div>
    )
}