import React from "react"
import { projectCards } from "../data/cards"

 export default function Contact(){
    const topProjects = projectCards.slice(0, 5)

     return (
         <>
             <div className="contact--footbar">
                    <div className="footer-item_l" >
                        <div className="footer-title">Top Projects</div>
                        {topProjects.map((project) => (
                            <a href={project.href} target="_blank" rel="noreferrer" key={project.title}>
                                {project.title}
                            </a>
                        ))}
                    </div>
                    <div className="footer-item_r" >
                        <div className="footer-title">Connect /w me</div>
                        <a href="https://calendly.com/rayane-tayache/30min" target="_blank" rel="noreferrer">Schedule a chat</a>
                        <a href="https://github.com/Rayane-T" target="_blank" rel="noreferrer">Github</a>
                        <a href="https://www.linkedin.com/in/rayanetayache/" target="_blank" rel="noreferrer">Linkedin</a>
                        <a href="https://medium.com/@rayane.tayache" target="_blank" rel="noreferrer">Medium</a>
                        <a href="mailto:rayane.tayache@etu.unistra.fr" target="_blank" rel="noreferrer">Email</a>
                    </div>
                </div>
             <div className="mention">Developed and designed by Rayane Tayache, © 2026</div>
         </>
     )
 }