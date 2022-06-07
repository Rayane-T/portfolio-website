import React from "react"

export default function Projects(props){
    return(
        <section className="project--section">
           <img className="project--img" src={props.img} alt ="abc"/> 
           <div className="project--info">
                <div className="project--title">{props.title}</div>
                <div className="project--desc">{props.desc}</div>
           </div>
        </section>
    )
}