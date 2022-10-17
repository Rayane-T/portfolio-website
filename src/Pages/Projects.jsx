import React from "react"
import Navbar from "../components/Navbar.js"
import CardProjects from "../components/cardProjects"
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