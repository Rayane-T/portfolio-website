import React from "react"
import logo from '../image/R-logo.png'
import { IconContext } from "react-icons"
import {FaGithubSquare,FaLinkedin,FaInstagramSquare} from "react-icons/fa"
import {IoIosMail} from "react-icons/io"
import {GoCalendar} from "react-icons/go"

export default function Hero(){
    return(
        <section className="hero--section">
                <div className="hero--p">
                    <a href="https://www.namecheap.com/domains/registration/results/?domain=rayanetayache" target="_blank"><img src={logo} alt="logo" className="main--logo" /></a>
                    <p className="hero--fp">Hey, my name is <span className="name">Rayane Tayache </span>   
                     and I’m a Computer Science major at Unistra in my freshman year, planning on graduating by May 2024. 
                    I aim to deepen my understanding in various areas of technology and product development.
                    </p>
                    <p className="hero--sp"> Aside school I love talking about Blockchain, travel around the world looking for cultural novelty and play sports
                    - So feel free to hit me up via email or set-up some time in my schedule by clicking the calendar below!
                    </p>
                </div>
                <ul className="social">
                    <IconContext.Provider value={{ color: "black"}}>
                    <li><a href="https://github.com" target="_blank" ><FaGithubSquare /></a></li>
                    <li><a href="https://www.linkedin.com" target="_blank" ><FaLinkedin /></a></li>
                    <li><a href="https://www.instagram.com" target="_blank" ><FaInstagramSquare /></a></li>
                    <li><a href="mailto:pro.tayacherayane@gmail.com" target="_blank" ><IoIosMail /></a></li>
                    <li><a href="https://calendly.com/" target="_blank" ><GoCalendar /></a></li>
                    </IconContext.Provider>
                </ul>
        </section>
    )
}