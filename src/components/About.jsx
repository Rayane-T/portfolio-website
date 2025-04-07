import React from "react"
import logo1 from '../image/Main Logo2.png'
import logo2 from '../image/Main Logo.png'
import { IoSchoolOutline } from "react-icons/io5";
import id from '../image/aWGznyT0.jpeg'
import { NavLink } from "react-router-dom"
import { IconContext } from "react-icons"
import {FaGithubSquare,FaLinkedin} from "react-icons/fa"
import {BsListNested} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"
import {GoCalendar} from "react-icons/go"
import { FaDownload } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


import '../darkmode.css';

export default function Hero(){

    return(
        <section className="hero--section">
                <div className="hero--p">
                <div className="hero--bio">
                    {/* Profile Picture */}
                    <img src={id} alt="RT" className="hero--profile-pic" />
                    
                    {/* Name */}
                    <h2 className="hero--name">Rayane Tayache</h2>

                    {/* Position */}
                    <p className="hero--position">Prev ML Intern</p>

                    {/* Company */}
                    <p className="hero--company">CNRS-ICUBE</p>

                    <ul className="social">
                    <IconContext.Provider value={{ color: "black"}}>
                    <li><a href="https://github.com/Rayane-T" target="_blank" ><FaGithubSquare size="0.8em" className="logo--color" /></a></li>
                    <li><a href="https://www.linkedin.com/in/rayanetayache/" target="_blank" ><FaLinkedin size="0.8em" className="logo--color"/></a></li>
                    <li><a href="https://www.instagram.com/flemzzer/" target="_blank" ><FaInstagram size="0.8em" className="logo--color"/></a></li>

                    <li><NavLink to="/BucketList"><BsListNested size="0.8em" className="logo--color"/></NavLink></li>
                    <li><a href="mailto:rayane.tayache@etu.unistra.fr" target="_blank" ><AiOutlineMail size="0.8em" className="logo--color"/></a></li>
                    
                    <li><a href="https://calendly.com/rayane-tayache/30min" target="_blank" ><GoCalendar size="0.8em"className="logo--color"/></a></li>
                    
                    </IconContext.Provider>
                </ul>   
                    
                </div>
                  <div className="hero--about">
                    <p className="t">
                      About Me
                    </p>
                    <p className="hero--fp">
                      Hey, my name is <span className="name">Rayane Tayache</span> and I’m a Computer Science major at{' '}
                      <a href="https://en.unistra.fr/" className="a-about">
                        University of Strasbourg
                      </a>{' '}
                      in my third year, planning on graduating by June 2024. Outside of school, I enjoy running 10k's, freestyle skiing and playing average chess.


                    </p>
                    <p className="hero--fp">
                      I previously interned as a ML Researcher at the CNRS and completed a semester exchange
                      at the Indian Institute of Technology, Bombay. I'm open to chat about research, internship and fellowship opportunities for 2025.
                    </p>
                    <p className="hero--sp">
                    I love talking about Quant strategies, Books and about food options in the Mumbai area, I am also a sucker for all sorts of adventurous activities recommendation. - So feel free to hit me up via email or set-up some time in my schedule by clicking the calendar below!
                    </p>
                    <div className="hero--button">
                    <NavLink to="/Resume" className="download-button">
                      <FaDownload className="download-icon" /> Download CV
                    </NavLink>
                  </div>
                  <div className="hero--info-container">
                    <div className="hero--interests">
                      <p className="int--title">Interests</p>
                      <ul>
                        <li>Probability Theory</li>
                        <li>Artificial Intelligence</li>
                        <li>Financial Markets</li>
                      </ul>
                    </div>
                    <div className="hero--education">
                  <p className="edu--title">Education</p>
                  <div className="education-item">
                    <div className="degree-wrapper">
                      <IoSchoolOutline size="1.5em" className="edu-icon" />
                      <div className="edu-details">
                        <span className="edu-degree">BSc Computer Science</span> <br />
                        <span className="hero--uni">University of Strasbourg with SemEx at IIT Bombay</span>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                </div>
              </div>


        </section>
    )
}