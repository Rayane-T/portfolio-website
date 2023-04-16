import React from "react"
import Navbar from "../components/Navbar.jsx"
import CardLeadership from "../components/cardLeadership"
import { TabTitle } from "../utils/genfun.js"

export default function Leadership({ isDarkMode, toggleDarkMode }){
    TabTitle('Leadership | Rayane Tayache')
    return(
        <div className={isDarkMode ? 'dark-mode' : ''}>
            <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
            <div className="hero--work">
                <h1>Leadership Experience 💭</h1>
                <p className="p1">Here you can see all of my extracurricular and leadership roles</p>
                <p className="p2">- Each section outlines the organization, my role, time spent and a brief description of what I did</p>
            </div>
            <CardLeadership/>
        </div>
    )
}