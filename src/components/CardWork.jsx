import React from "react"
import lmc from '../image/lmc.png'
import { NavLink } from "react-router-dom"
import {TbMathFunction} from "react-icons/tb"
import { AiOutlineFile, AiFillLinkedin} from "react-icons/ai"
import { ReactComponent as Logo }  from "../image/42logo_site.svg"
import { VscTerminalBash } from "react-icons/vsc"
import { FaLinux } from "react-icons/fa"

export default function CardWork() {
    return (
        <section>
            <div className="container">
                <div className="cards">
                <div className="a-btn-gh-b">
                    <a href="https://www.linkedin.com/in/rayanetayache/" target="_blank"><button className="btn-gh-b"><AiFillLinkedin size="11px"/>LinkedIn</button></a>
                    <NavLink to="/Resume"><button className="btn-gh-b"><AiOutlineFile size="11px"/>Resume</button></NavLink>
                </div>
            </div>
            <div className="container">
                <div className="cards">
                    <div className="cards-inner">
                        <div className= "ndblock">
                            <div>
                                <h5 className="fontwork">Software Engineering Summer Bootcamp</h5>
                                <h6 className="fontwork">42 Berlin</h6>
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
            <div className="container">
                <div className="cards">
                    <div className="cards-inner">
                        <div className= "ndblock">
                            <div>
                                <h5 className="fontwork">Mathematics Tutor</h5>
                                <h6 className="fontwork">Mathematics Society of Marie Curie's High School</h6>
                                <h6 className="fontwork">Nov. 2020 - Feb. 2021</h6>
                                <p>
                                - Taught/Helped a group of 8 students in Statistics/Probability/Mathematical series/Scalar product, at High School Of Marie Curie.                                
                                </p>
                            </div>
                            <div>
                                <img src={lmc} height="100px"/>
                            </div>
                        </div>
                        <span className="css-1qm7jzg">
                            <TbMathFunction size="2em"/>
                            <span className="css-1h8gyx6">Mathematics</span>
                        </span>
                    </div>
                </div>
            </div>
            </div>
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