import React from "react"
import Navbar from "../components/Navbar"
import resumepdf from "../image/resume.pdf"
import Contact from "../components/Contact"
import { TabTitle } from "../utils/genfun.js"

export default function Resume({ isDarkMode, toggleDarkMode }){
    TabTitle('Resume | Rayane Tayache')
    return(
        <div className={isDarkMode ? 'dark-mode' : ''}>
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