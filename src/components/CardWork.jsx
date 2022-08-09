import React from "react"
import logo from '../image/R-logo-removebg-preview.png'

export default function CardWork() {
    return (
        <section>
            <div className="container">
                <div className="cards">
                    <div className="cards-inner">
                        <div className= "ndblock">
                            <div>
                                <h5 className="fontwork">Company</h5>
                                <h6 className="fontwork">Position</h6>
                                <h6 className="fontwork">Month year - Month Year</h6>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Praesentium, temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium, temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                            <div>
                                <img src={logo} height="100px"/>
                            </div>
                        </div>
                        <div>
                            <button className="ui--button">HTML/CSS</button>
                            <button className="ui--button">JAVASCRIPT</button>
                            <button className="ui--button">REACTJS</button>
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