import React from "react"
import Navbar from "../components/Navbar.js"
import About from "../components/About"
import Contact from "../components/Contact"
import { TabTitle } from "../utils/genfun.js"


export default function Home(){
  TabTitle('Home | Rayane Tayache');
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
