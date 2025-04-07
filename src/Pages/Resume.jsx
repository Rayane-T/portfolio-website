import React from "react"
import Navbar from "../components/Navbar.jsx"
import resumepdf from "../image/resume.pdf"
import Contact from "../components/Contact.jsx"
import { TabTitle } from "../utils/genfun.js"

export default function Resume({ isDarkMode, toggleDarkMode }){
    TabTitle('Resume | Rayane Tayache')
    return(
        <div className={isDarkMode ? 'dark-mode-parent' : ''}>
        <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
            <div className="resume--container">
                <center>
                    <embed src={resumepdf} type="application/pdf" width="50%" height="88%"></embed>
                </center>
            </div>
            <Contact/>
        </div>
    )
}