import React from 'react';
import Navbar from "../components/Navbar.jsx"
import About from "../components/About"
import Contact from "../components/Contact"
import { TabTitle } from "../utils/genfun.js"

export default function Home({ isDarkMode, toggleDarkMode }){
  TabTitle('Home | Rayane Tayache');
  return(
    <div className={isDarkMode ? 'dark-mode-parent' : ''}>
        <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
        <About />
        <Contact />
    </div>
  )
}

