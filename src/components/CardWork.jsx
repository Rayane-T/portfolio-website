import React from "react"
import logo from '../image/R-logo-removebg-preview.png'
import { NavLink } from "react-router-dom"
import {TbMathFunction} from "react-icons/tb"
export default function CardWork() {
    return (
        <section>
            <div className="container">
                <div className="cards">
                <div className="a-btn-gh-b">
                    <a href="https://github.com/Rayane-T" target="_blank"><button className="btn-gh-b">LinkedIn</button></a>
                    <NavLink to="/Resume"><button className="btn-gh-b">Resume</button></NavLink>
                </div>
                    <div className="cards-inner">
                        <div className= "ndblock">
                            <div>
                                <h5 className="fontwork">Math Society of Marie Curie High School</h5>
                                <h6 className="fontwork">Mathematics Tutor</h6>
                                <h6 className="fontwork">Nov. 2020 - Feb. 2021</h6>
                                <p>
                                Taught/Helped a group of 8 students in Statistics/Probability/Mathematical series/Scalar product, at High School Of Marie Curie.                                
                                </p>
                            </div>
                            <div>
                                <img src={logo} height="100px"/>
                            </div>
                        </div>
                        <span className="css-1qm7jzg">
                            <TbMathFunction/>
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