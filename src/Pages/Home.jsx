import React from 'react';
import Navbar from "../components/Navbar.jsx"
import About from "../components/About"
import Contact from "../components/Contact"

export default function Home({ isDarkMode, toggleDarkMode }){
  return(
    <div>
        <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
        <About />
        <Contact />
    </div>
  )
}

