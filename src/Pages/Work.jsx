import React from "react"
import Navbar from "../components/Navbar.jsx"
import CardWork from "../components/CardWork"
import { TabTitle } from "../utils/genfun.js"
import Contact from "../components/Contact.jsx"

export default function Work({ isDarkMode, toggleDarkMode }){
    TabTitle('Work | Rayane Tayache')
    return(
        <div className={isDarkMode ? 'dark-mode' : ''}>
        <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
            <div className="hero--work">
                <h1>Internship Experience 👔</h1>
                <p className="p1">Here you can see all the places I've worked at so far, as well as what I did there.</p>
                <p className="p2">- Each section outlines the company, the role, my tenure and a brief description of what my job entailed</p>
            </div>
            <CardWork isDarkMode={isDarkMode}/>
            <Contact/>
        </div>
    )
}