import React from "react"
import lmc from '../image/lmc.png'
import { NavLink } from "react-router-dom"
import {TbMathFunction} from "react-icons/tb"
import { AiOutlineFile, AiFillLinkedin} from "react-icons/ai"
import { ReactComponent as Logo }  from "../image/icube.jpg"
import icube from "../image/icube.jpg"
import { ReactComponent as LogoDark }  from "../image/42logo_site_dark.svg"
import { VscTerminalBash } from "react-icons/vsc"
import { FaLinux } from "react-icons/fa"

export default function CardWork() {
    return (
        <section>
            <div className="container">
                <div className="cards">
                <div className="a-btn-gh-b">
                    <a href="https://www.linkedin.com/in/rayanetayache/" target="_blank">
                        <button className="btn-gh-b">
                        <div>
                            <AiFillLinkedin className="icon-socials"/><p>LinkedIn</p></div></button></a>
                    <NavLink to="/Resume"><button className="btn-gh-b">
                        <div><AiOutlineFile className="icon-socials"/><p>Resume</p></div></button></NavLink>
                </div>
            </div>
            <div className="container">
                <div className="cards">
                    <div className="cards-inner">
                        <div className= "ndblock">
                            <div>
                                <h5 className="fontwork">ML Research Intern</h5>
                                <h6 className="fontwork">Icube Lab, CNRS - French National Centre for Scientific Research</h6>
                                <h6 className="fontwork">May. 2023 - Jul. 2023</h6>
                                <p>
                                    - Machine learning, Modeling and Simulation Research Department.<br/>
                                </p>
                            </div>
                            <div>
                            <div>
                                <img src={icube} height="120px"/>
                            </div>
                            </div>
                        </div>
                        <span className="css-1qm7jzg" id="c">
                            <span className="css-1h8gyx6">Machine Learning</span>
                        </span>
                        <span className="css-1qm7jzg" id="c">
                            <span className="css-1h8gyx6">Computer Graphics</span>
                        </span>
                        <span className="css-1qm7jzg" id="c">
                            <span className="css-1h8gyx6">Python</span>
                        </span>
                        <span className="css-1qm7jzg" id="c">
                            <span className="css-1h8gyx6">Pytorch</span>
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