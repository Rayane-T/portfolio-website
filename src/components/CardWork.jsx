import React from "react"
import lmc from '../image/lmc.png'
import { NavLink } from "react-router-dom"
import {TbMathFunction} from "react-icons/tb"
import { AiOutlineFile, AiFillLinkedin} from "react-icons/ai"
export default function CardWork() {
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
                                <h5 className="fontwork">Mathematics Society of Marie Curie's High School</h5>
                                <h6 className="fontwork">Mathematics Tutor</h6>
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