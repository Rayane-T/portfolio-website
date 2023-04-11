import React from "react"
import logo1 from '../image/Main Logo2.png'
import logo2 from '../image/Main Logo.png'
import { NavLink } from "react-router-dom"
import { IconContext } from "react-icons"
import {FaGithubSquare,FaLinkedin} from "react-icons/fa"
import {BsListNested} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"
import {GoCalendar} from "react-icons/go"
import '../Pages/darkmode.css';

export default function Hero(){

    return(
        <section className="hero--section">
                <div className="hero--p">
                    <a href="" class="hover-animation">
                        <div className="wrapper1">
                        <div>
                            <div className="hover-animation">
                            <img className="img-back" src={logo1} alt=""/>
                            <img className="img-front" src={logo2} alt=""/>
                            </div>
                        </div>
                    </div>
                    </a>

                    <p className="hero--fp">Hey, my name is <span className="name">Rayane Tayache </span>   
                     and I’m a Computer Science major with an Economics option at <a href="https://en.unistra.fr/" className="a-about">University of Strasbourg</a> in my sophomore year, planning on graduating by June 2024.<br/>
                    Outside of school, I'm involved in the development of leadership projects such as organising <br/>the next <a href="https://githubfieldday.com/berlin2022/" className="a-about">GitHub Field Day</a> in Berlin and planning on launching a hackathon at<a href="https://en.unistra.fr" className="a-about"> unistra</a>. 
                    
                    </p>
                    <p className="hero--fp"> Throughout last summer I interned at <a href="https://42berlin.de/" className="a-about">42 Berlin</a>,
                    Won <a href="https://hackthe6ix.com/" className="a-about">Hackthe6ix</a> Hackathon and Achieved 3rd Place at <a href="https://www.slash.berlin/" className="a-about">//Slash</a> Hackathon.
                    I'm open to chat about internship and working-student opportunities for Summer 2023.
                    </p>

                    <p className="hero--sp">I love talking about Leadership experience, reading books, travelling around the world looking for cultural novelty and play sports
                    - So feel free to hit me up via email or set-up some time in my schedule by clicking the calendar below!
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