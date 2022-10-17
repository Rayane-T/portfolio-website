import React from "react"
import ghdays from "../image/ghdays1.png"
import { NavLink } from "react-router-dom"
import Contact from "./Contact"
import { VscTerminalBash } from "react-icons/vsc"
import { FaLinux } from "react-icons/fa"
import { AiOutlineFile, AiFillLinkedin } from "react-icons/ai"
import { ReactComponent as Logo }  from "../image/42logo_site.svg"

export default function CardLeadership() {
    return (
        <section>
            <div className="container">
                <div className="cards">
                <div className="a-btn-gh-b">
                    <a href="https://www.linkedin.com/in/rayanetayache/" target="_blank"><button className="btn-gh-b"><AiFillLinkedin size="11px"/>LinkedIn</button></a>
                    <NavLink to="/Resume"><button className="btn-gh-b"><AiOutlineFile size="11px"/>Resume</button></NavLink>
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
            <div className="container">
                <div className="cards">
                    <div className="cards-inner">
                        <div className= "ndblock">
                            <div>
                                <h5 className="fontwork">42 Berlin</h5>
                                <h6 className="fontwork">Fellow</h6>
                                <h6 className="fontwork">Jun. 2022 - Jul. 2022</h6>
                                <p>
                                    - Selected to participate in a month bootcamp at 42 Berlin during the summer.<br/>
                                    - I deepen my understanding in C language through developping amazing projects and making C librairies. <br/>
                                    - Developped Bash scripts along my journey to simplify tasks and save more time. (Task Automation)<br/>
                                    - Succeeded and certified with 40 Fellows among 140 participants!
                                </p>
                            </div>
                            <div>
                                <llogo/>
                                <Logo/>
                            </div>
                        </div>
                        <span className="css-1qm7jzg" id="c">
                            <span className="css-1h8gyx6">C (Programming Language)</span>
                        </span>
                        <span className="css-1qm7jzg">
                            <VscTerminalBash size="2em"/>
                            <span className="css-1h8gyx6">BASH</span>
                        </span>
                        <span className="css-1qm7jzg">
                            <FaLinux size="2em"/>
                            <span className="css-1h8gyx6">LINUX</span>
                        </span>
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