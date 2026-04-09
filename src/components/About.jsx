import React from "react"
import Image from "next/image"
import { IoSchoolOutline } from "react-icons/io5";
import id from '../image/aWGznyT0.jpeg'
import Link from "next/link"
import { IconContext } from "react-icons"
import {FaGithubSquare,FaLinkedin} from "react-icons/fa"
import {BsListNested} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"
import {GoCalendar} from "react-icons/go"
import { FaDownload } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RESUME_URL } from "../config/links";

export default function Hero(){

    return(
        <section className="hero--section">
                <div className="hero--p">
                <div className="hero--bio">
                    {/* Profile Picture */}
                    <Image src={id} alt="RT" className="hero--profile-pic" priority />
                    
                    {/* Name */}
                    <h2 className="hero--name">Rayane Tayache</h2>

                    {/* Position */}
                    <p className="hero--position">NLP Research Project</p>

                    
                    <p className="hero--company"><a href="https://icube.unistra.fr" target="_blank" rel="noreferrer" >@ ICube Laboratory</a></p>
                    
                    <ul className="social">
                    <IconContext.Provider value={{ color: "black"}}>
                    <li><a href="https://github.com/Rayane-T" target="_blank" rel="noreferrer" ><FaGithubSquare size="0.8em" className="logo--color" /></a></li>
                    <li><a href="https://www.linkedin.com/in/rayanetayache/" target="_blank" rel="noreferrer" ><FaLinkedin size="0.8em" className="logo--color"/></a></li>
                    <li><a href="https://www.instagram.com/flemzzer/" target="_blank" rel="noreferrer" ><FaInstagram size="0.8em" className="logo--color"/></a></li>

                    <li><Link href="/bucketlist"><BsListNested size="0.8em" className="logo--color"/></Link></li>
                    <li><a href="mailto:rayane.tayache@etu.unistra.fr" target="_blank" rel="noreferrer" ><AiOutlineMail size="0.8em" className="logo--color"/></a></li>
                    
                    <li><a href="https://calendly.com/rayane-tayache/30min" target="_blank" rel="noreferrer" ><GoCalendar size="0.8em"className="logo--color"/></a></li>
                    
                    </IconContext.Provider>
                </ul>   
                    
                </div>
                  <div className="hero--about">
                    <p className="t">
                      About Me
                    </p>
                    <p className="hero--fp">
                      Hey, my name is <span className="name">Rayane Tayache</span> and I’m a first year Master student in Data Science at{' '}
                      <a href="https://en.unistra.fr/" className="a-about">
                        University of Strasbourg
                      </a>{' '}
                      , planning on graduating by June 2027. Outside of school, I enjoy running 10k's, alpine & cross-country skiing and playing chess.


                    </p>
                    <p className="hero--fp">
                      I'm currently working on Early Text Classification at ICube Laboratory until May 2026 and I previously interned as a ML Researcher at the CNRS and completed a semester exchange
                      at the Indian Institute of Technology, Bombay. I'm open to chat about research, internship and fellowship opportunities for 2026.
                    </p>
                    <p className="hero--sp">
                    I love talking about game theory applications, Books and about food options in the Kyoto area, I am also a sucker for all sorts of adventurous activities recommendation. - So feel free to hit me up via email or set-up some time in my schedule by clicking the calendar below!
                    </p>
                    <div className="hero--button">
                    <a href={RESUME_URL} target="_blank" rel="noreferrer" className="download-button">
                      <FaDownload className="download-icon" /> Download CV
                    </a>
                  </div>
                  <div className="hero--info-container">
                    <div className="hero--interests">
                      <p className="int--title">Interests</p>
                      <ul>
                        <li>Natural Language Processing</li>
                        <li>Time Series Forecasting</li>
                        <li>Financial Markets</li>
                      </ul>
                    </div>
                    <div className="hero--education">
                  <p className="edu--title">Education</p>
                  <div className="education-item">
                    <div className="degree-wrapper">
                      <IoSchoolOutline size="1.5em" className="edu-icon" />
                      <div className="edu-details">
                        <span className="edu-degree">MSc, Data Science '27</span> <br />
                        <span className="hero--uni">University of Strasbourg</span>
                      </div>
                    </div>
                  </div>
                  <div className="education-item">
                    <div className="degree-wrapper">
                      <IoSchoolOutline size="1.5em" className="edu-icon" />
                      <div className="edu-details">
                        <span className="edu-degree">BSc Computer Science '25</span> <br />
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