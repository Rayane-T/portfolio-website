import React from "react"
import logo from "../image/FedEx_logo.png"

export default function CardWork() {
    return (
        <section className="card--work">
            <div className="card--info">
                <div>FedEx</div>
                <div>Sorting agent manager</div>
                <div>June 2021- August 2021</div>
                <div>- Incoming Software Engineer Intern at Citadel for Global Quantitative Strategies.</div>
            </div>
            <img classname="comp-logo" src={logo} alt="logo fedex" />
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