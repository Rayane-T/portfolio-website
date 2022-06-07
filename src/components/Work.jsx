import React from "react"

export default function Work(props){
    return(
        <section>
           <img className="project--img" src={props.img} alt ="abc"/> 
           <div className="project--info">
                <div className="project--title">{props.title}</div>
                <div className="project--desc">{props.desc}</div>
           </div>
        </section>
    )
}