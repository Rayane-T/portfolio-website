import React from "react"
import Navbar from "../components/Navbar.jsx"
import CardWork from "../components/CardWork"

export default function Work(){
    return(
        <div>
            <Navbar/>
            <div className="hero--work">
                <h2>Internship Experience !</h2>
                <h3>Here you can see all the places I've worked at so far, as well as what I did there.</h3>
                <h4>- Each section outlines the company, the role, my tenure and a brief description of what my job entailed</h4>
            </div>
            <CardWork/>
        </div>
    )
}
/*
                <div>
                    <button>LinkedIn</button>
                    <button>Resume</button>
                </div> 
*/