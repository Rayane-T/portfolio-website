import React from "react"
import Navbar from "../components/Navbar"
import resumepdf from "../image/resume.pdf"

export default function Resume(){
    return(
        <>
            <Navbar/>
            <embed src={resumepdf} type="application/pdf" width="100%" height="100%"></embed>
        </>
    )
}