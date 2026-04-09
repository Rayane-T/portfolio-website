import React from "react"
import Navbar from "../components/Navbar.jsx"
import Contact from "../components/Contact.jsx"
import { RESUME_URL, RESUME_EMBED_URL } from "../config/links"

export default function Resume({ isDarkMode, toggleDarkMode }){
    return(
        <div>
        <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
            <div className="resume--container">
                <center>
                    <h2>Resume</h2>
                    <p style={{ marginTop: "12px" }}>Open the latest version hosted on Google Drive.</p>
                    {RESUME_EMBED_URL ? (
                        <div className="resume-preview-wrapper">
                            <iframe
                                title="Resume Preview"
                                src={RESUME_EMBED_URL}
                                className="resume-preview"
                                allow="autoplay"
                            />
                        </div>
                    ) : (
                        <p style={{ marginTop: "12px" }}>
                            Add your Google Drive file id in src/config/links.js to enable preview.
                        </p>
                    )}
                    <a
                        href={RESUME_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="download-button"
                        style={{ marginTop: "16px" }}
                    >
                        Open Resume
                    </a>
                </center>
            </div>
            <Contact/>
        </div>
    )
}