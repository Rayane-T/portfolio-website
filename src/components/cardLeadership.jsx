import React from "react"
import ghdays from "../image/ghdays1.png"
import eye from "../image/eye.jpg"
import { NavLink } from "react-router-dom"
import Contact from "./Contact"
import { AiOutlineFile, AiFillLinkedin } from "react-icons/ai"

export default function CardLeadership() {
    return (
        <section>
            <div className="container">
                <div className="cards">
                <div className="a-btn-gh-b">
                    <a href="https://www.linkedin.com/in/rayanetayache/" target="_blank">
                        <button className="btn-gh-b">
                        <div>
                            <AiFillLinkedin className="icon-socials"/>
                            <p>LinkedIn</p>
                        </div>
                        </button>
                </a>
                    <NavLink to="/Resume"><button className="btn-gh-b">
                        <div><AiOutlineFile className="icon-socials"/><p>Resume</p></div>
                        </button></NavLink>
                </div>
                    <div className="cards-inner">
                        <div className= "ndblock">
                            <div>
                                <h5 className="fontwork">European Youth Event </h5>
                                <h6 className="fontwork">Staff Volunteer</h6>
                                <h6 className="fontwork">June 2023</h6>
                                <p>
                                EYE brings thousands of participants from across the European Union and around the world to the European Parliament in Strasbourg to share and shape their ideas for the future of Europe.
                                </p>
                            </div>
                            <div>
                                <img src={eye} height="100px"/>
                            </div>
                        </div>
                        <div className="css-1qm7jzg-wrapper">
                            <span className="css-1qm7jzg">
                                <span className="css-1h8gyx6">Leadership</span>
                            </span>
                            <span className="css-1qm7jzg">
                                <span className="css-1h8gyx6">Communication</span>
                            </span>
                            <span className="css-1qm7jzg">
                                <span className="css-1h8gyx6">Team Management</span>
                            </span>
                        </div>
                    </div>
                    <div className="cards-inner">
                        <div className= "ndblock">
                            <div>
                                <h5 className="fontwork">Github Field Day Berlin</h5>
                                <h6 className="fontwork">Co - Organiser</h6>
                                <h6 className="fontwork">Dec. 2022</h6>
                                <p>
                                Field Day brings together student leaders from different regional communities to hang out, become friends, learn from each other's mistakes and successes, and solve shared problems.
                                </p>
                            </div>
                            <div>
                                <img src={ghdays} height="100px"/>
                            </div>
                        </div>
                        <div className="css-1qm7jzg-wrapper">
                            <span className="css-1qm7jzg">
                                <span className="css-1h8gyx6">Leadership</span>
                            </span>
                            <span className="css-1qm7jzg">
                                <span className="css-1h8gyx6">Community Management</span>
                            </span>
                            <span className="css-1qm7jzg">
                                <span className="css-1h8gyx6">Hackathon Management</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Contact/>
        </section>
    )
}

/*
<section className="project--section">
<img className="project--img" src={props.img} alt ="abc"/> 
<div className="project--info">
     <div className="project--title">{props.title}</div>
     <div className="project--desc">{props.desc}</div>
</div>
</section>
*/