import React from "react"
import logo from '../image/R-logo-removebg-preview.png'

export default function CardWork() {
    return (
        <section>
            <div class="container">
              <div class="cards">
                <div class="cards-inner">
                    <div>
                        <h4>Freelancer</h4>
                        <small>Independant</small>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Praesentium, temporibus.
                        </p>
                    </div>
                    <div>
                        <img src={logo} height="100px"/>
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