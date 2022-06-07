import React from "react"
import Navbar from "./components/Navbar.jsx"
import About from "./components/About"
import Projects from "./components/Projects"
import data from "./data"
import Contact from "./components/Contact"

export default function App(){
  const projectsElements = data.map(item =>{
    return (
        <Projects
          key={item.id}
          {...item}
            />
    )}
  )
    return(
    <div>
      <Navbar/>
      <About/>
      <div className="project--btitle">Projects</div>
      <section className="card">
        {projectsElements}
      </section>
      <Contact/>
    </div>
  )
    }

/*export default function Card(props){
  return(
    <>
    <section className="container">
        <img src={props.imageUrl} className="card--photo"/>
        <div className="card--description">
            <div className="card--descpart1">
                <img src="./img/locationIcon.png" className="card--icon"/>
                <div className="card--location">{props.location}</div>
                <a className="card--google" href= {props.googleMapsUrl}>View on Google Maps</a>
            </div>
            <div className="card--title">{props.title}</div>
            <div className="card--duration">
                <div className="card--startDate">{props.startDate} - </div>
                <div className="card--endDate">{props.endDate}</div>
            </div>
            <p className="card--paragraph">{props.description}</p>
        </div>   
    </section>
    <div className="card--line"></div>
    </>
)
}*/
