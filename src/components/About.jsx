import React from "react"
import logo1 from '../image/Main Logo2.png'
import logo2 from '../image/Main Logo.png'
import { NavLink } from "react-router-dom"
import { IconContext } from "react-icons"
import {FaGithubSquare,FaLinkedin} from "react-icons/fa"
import {BsListNested} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"
import {GoCalendar} from "react-icons/go"
import '../darkmode.css';

export default function Hero(){

    return(
        <section className="hero--section">
                <div className="hero--p">
                        <div className="wrapper1">
                        <div>
                            <div className="hover-animation">
                            <a href="" class="">
                            <img className="img-back" src={logo1} alt=""/>
                            <img className="img-front" src={logo2} alt=""/>
                            </a>
                            </div>
                        </div>
                    </div>
                    
                    <p className="hero--fp">
  Hey, my name is <span className="name">Rayane Tayache</span> and I’m a Computer Science major at{' '}
  <a href="https://en.unistra.fr/" className="a-about">
    University of Strasbourg
  </a>{' '}
  in my third year, planning on graduating by June 2024. Outside of school, I'm involved in the development of
  leadership projects such as nextly launching a hackathon at{' '}
  <a href="https://en.unistra.fr" className="a-about">
    unistra
  </a>
  .
</p>
<p className="hero--fp">
  Throughout this year, I'll be working as ML Research Intern at CNRS and will start a two-semester exchange
  at the Indian Institute of Technology, Bombay both consecutively this summer. I'm open to chat about internship
  and fellowship opportunities for 2024.
</p>
<p className="hero--sp">
  I love talking about Trading strategy, Books and about food options in the Mumbai area, I am also a sucker for all
  sorts of adventurous activities recommendation. - So feel free to hit me up via email or set-up some time in my
  schedule by clicking the calendar below!
</p>



                </div>
                <ul className="social">
                    <IconContext.Provider value={{ color: "black"}}>
                    <li><a href="https://github.com/Rayane-T" target="_blank" ><FaGithubSquare size="1.2em" className="logo--color" /></a></li>
                    <li><a href="https://www.linkedin.com/in/rayanetayache/" target="_blank" ><FaLinkedin size="1.2em" className="logo--color"/></a></li>
                    <li><NavLink to="/BucketList"><BsListNested size="1.2em" className="logo--color"/></NavLink></li>
                    <li><a href="mailto:rayane.tayache@etu.unistra.fr" target="_blank" ><AiOutlineMail size="1.2em" className="logo--color"/></a></li>
                    <li><a href="https://calendly.com/rayane-tayache/30min" target="_blank" ><GoCalendar size="1.2em"className="logo--color"/></a></li>
                    </IconContext.Provider>
                </ul>   
        </section>
    )
}