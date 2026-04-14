import React from "react"
import Navbar from "../components/Navbar.jsx"
import CardWork from "../components/CardWork.jsx"
import Contact from "../components/Contact.jsx"
import CardLeadership from "../components/cardLeadership"

export default function Work({ isDarkMode, toggleDarkMode }){
    return(
        <div>
        <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
            <div className="hero--work">
                <h1>Internship Experience 👔</h1>
                <p className="p1">Here you can see all the places I've worked at so far, as well as what I did there.</p>
                <p className="p2">- Each section outlines the company, the role, my tenure and a brief description of what my job entailed</p>
            </div>
            <CardWork/>
            <div className="hero--work">
                <h1>Leadership Experience 💭</h1>
                <p className="p1">Here you can see all of my extracurricular and leadership roles</p>
                <p className="p2">- Each section outlines the organization, my role, time spent and a brief description of what I did</p>
            </div>
            <CardLeadership/>
            <section className="certifications-section" aria-label="Certifications">
                <h2>Certifications</h2>
                <ul className="certifications-list">
                    <li className="certification-item">
                        <div className="certification-main">
                            <span className="certification-name">TOEIC (ETS)</span>
                            <span className="certification-level">C1 level equivalent</span>
                        </div>
                        <span className="certification-score">955/990</span>
                    </li>
                </ul>
            </section>
            <Contact/>
        </div>
    )
}