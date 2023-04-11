import React from 'react'
import Navbar from "../components/Navbar.jsx"
import CardProjects from "../components/CardProjects"
import { TabTitle } from "../utils/genfun.js"

export default function Projects({ isDarkMode, toggleDarkMode }){
    TabTitle('Projects | Rayane Tayache')

    return(
        <div className={isDarkMode ? 'dark-mode-parent' : ''}>
            <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
            <div className="hero--work">
                <h1>Personal Projects 📦</h1>
                <p className="p1">Here you can see a bunch of projects I've worked on in the past couple of years.</p>
                <p className="p2"> --Hover over the projects below to view more details, some even have demos</p>
            </div>
            <CardProjects/>
        </div>
    )
}
