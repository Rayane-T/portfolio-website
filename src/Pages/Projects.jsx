import React from "react"
import Navbar from "../components/Navbar.jsx"
import CardProjects from "../components/CardProjects"
import { TabTitle } from "../utils/genfun.js"

export default function Projects(){
    TabTitle('Projects | Rayane Tayache')
    return(
        <div>
            <Navbar/>
            <CardProjects/>
        </div>
    )
}