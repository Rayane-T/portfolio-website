import React from "react"
import logo1 from '../image/Main Logo2.png'
import logo2 from '../image/Main Logo.png'
import { IconContext } from "react-icons"
import {FaGithubSquare,FaLinkedin,FaInstagramSquare} from "react-icons/fa"
import {AiOutlineMail} from "react-icons/ai"
import {GoCalendar} from "react-icons/go"

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
                     and I’m a Computer Science major at <a href="https://en.unistra.fr/">Unistra</a> in my sophomore year, planning on graduating by May 2024. 
                    I aim to deepen my understanding in various areas of technology and product development.
                    </p>
                    <p className="hero--fp"> Throughout this year, I interned at <a href="https://42berlin.de/">42 Berlin</a> for the Summer. 
                    I'm open to chat about internship and full-time opportunities for 2023.
                    </p>

                    <p className="hero--sp"> Aside school I love talking about Blockchain, travelling around the world looking for cultural novelty and play sports
                    - So feel free to hit me up via email or set-up some time in my schedule by clicking the calendar below!
                    </p>
                </div>
                <ul className="social">
                    <IconContext.Provider value={{ color: "black"}}>
                    <li><a href="https://github.com/Rayane-T" target="_blank" ><FaGithubSquare size="1.2em" className="logo--color" /></a></li>
                    <li><a href="https://www.linkedin.com/in/rayanetayache/" target="_blank" ><FaLinkedin size="1.2em" className="logo--color"/></a></li>
                    <li><a href="https://www.instagram.com/ryntyc/" target="_blank" ><FaInstagramSquare size="1.2em" className="logo--color"/></a></li>
                    <li><a href="mailto:rayane.tayache@etu.unistra.fr" target="_blank" ><AiOutlineMail size="1.2em" className="logo--color"/></a></li>
                    <li><a href="https://calendly.com/rayane-tayache/30min" target="_blank" ><GoCalendar size="1.2em"className="logo--color"/></a></li>
                    </IconContext.Provider>
                </ul>   
        </section>
    )
}