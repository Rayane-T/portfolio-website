import React from "react"
import Navbar from "../components/Navbar"
import resumepdf from "../image/resume.pdf"
import { TabTitle } from "../utils/genfun.js"

export default function Resume(){
    TabTitle('Resume | Rayane Tayache')
    return(
        <>
            <Navbar/>
            <div className="resume--container">
                <center>
                    <embed src={resumepdf} type="application/pdf" width="50%" height="88%"></embed>
                </center>
            </div>
        </>
    )
}