import React from "react"
import Navbar from "../components/Navbar.jsx"
import About from "../components/About"
import Contact from "../components/Contact"

export default function Home(){
    return(
    <div>
      <Navbar/>
      <About/>
      <Contact/>
    </div>
  )
}

/*  const projectsElements = data.map(item =>{
    return (
        <Projects
          key={item.id}
          {...item}
            />
    )}
  )
        <div className="project--btitle">Projects</div>
      <section className="card">
        {projectsElements}
      </section>*/
