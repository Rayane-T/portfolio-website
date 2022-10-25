import React from "react"
import Track from "../image/Track1.PNG"
import Ridof from "../image/Capture12.PNG"
import Contact from "./Contact"
import skyscrapper  from "../image/sky.PNG"
import Labyrinth from "../image/laby.png"
import Portfolio from "../image/Main Logo2.png"
import Interpreter from "../image/interpreter.jpg"
import { FiGithub, FiExternalLink } from "react-icons/fi"

export default function CardProjects() {
    return (
        <div>
            <div className="main-title-project">
                <h2 className="title">Personal Projects 📦</h2>
                <p className="p1">Here you can see a bunch of projects I've worked on in the past couple of years.</p>
                <p className="p2"> --Hover over the projects below to view more details, some even have demos</p>
            </div>
        <div className="contain-wrapper">
            <div className="a-btn-gh">
                <a href="https://github.com/Rayane-T" target="_blank"><button className="btn-gh"><FiGithub size="1em"/>GitHub</button></a>
            </div>
            <div className="contain-wrapper">
                <a href="https://github.com/Rayane-T/Track" target={"_blank"}>
                <div className="wrapper">
                    <div className="card">
                     <img src={Track}/> {/* "https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/195/143/datas/medium.gif" */}
                        <div className="info">
                            <div className="externallinks">
                                <h2>Track</h2>
                                <div className="rightalign">
                                    <a href="https://devpost.com/software/track-pwrn7y"><FiExternalLink size="2em"/></a>
                                    <a href="https://github.com/Rayane-T/Track"><FiGithub size="2em"/></a>
                                </div>
                            </div>
                            <p>Track is a fullstack expense tracker application that enables collaboration between people when budgeting.</p>
                            <a href="https://github.com/Rayane-T/Track" className="btn">ReactJS</a>
                            <a href="https://github.com/Rayane-T/Track" className="btn">TailWindCSS</a>
                            <a href="https://github.com/Rayane-T/Track" className="btn">MongoDB</a>
                            <a href="https://github.com/Rayane-T/Track" className="btn">NodeJS</a>
                        </div>
                    </div>
                </div>
                </a>
                <a href="https://github.com/Rayane-T/RidOf_UI" target={"_blank"}>
                <div className="wrapper">
                    <div className="card">
                        <img src={Ridof} alt="Track logo" />
                        <div className="info">
                            <div className="externallinks">
                                    <h2>RidOf</h2>
                                    <div className="rightalign">
                                        <a href="https://www.youtube.com/watch?v=fFxLg-27hEM&list=LL&index=2"><FiExternalLink size="2em"/></a>
                                        <a href="https://github.com/Rayane-T/RidOf_UI"><FiGithub size="2em"/></a>
                                    </div>
                            </div>
                            <p>Rid Of is a fullstack educationnal application aimed at simplifying the process of recycling trash in your daily life.</p>
                            <a href="https://github.com/Rayane-T/RidOf_UI" target={"_blank"} className="btn">ReactJS</a>
                            <a href="https://github.com/Rayane-T/RidOf_UI" target={"_blank"} className="btn">Flask</a>
                            <a href="https://github.com/Rayane-T/RidOf_UI" target={"_blank"} className="btn">MySql</a>
                            <a href="https://github.com/Rayane-T/RidOf_UI" target={"_blank"} className="btn">ProtoBuf</a>
                        </div>
                    </div>
                </div>
                </a>
                <a href="https://github.com/Rayane-T/portfolio-website" target={"_blank"}>
                <div className="wrapper">
                    <div className="card">
                        <img src={Portfolio} alt="Track logo" />
                        <div className="info">
                        <div className="externallinks">
                                    <h2>Portfolio</h2>
                                    <div className="rightalign">
                                        <a href="https://rayanetayache.me"><FiExternalLink size="2em"/></a>
                                        <a href="https://github.com/Rayane-T/portfolio-website"><FiGithub size="2em"/></a>
                                    </div>
                            </div>
                            <p>This website</p>
                            <a href="https://github.com/Rayane-T/portfolio-website" className="btn">ReactJS</a>
                            <a href="https://github.com/Rayane-T/portfolio-website" className="btn">TailwindCSS</a>
                        </div>
                    </div>
                </div>
                </a>
                <a href="https://github.com/Rayane-T/Integer-Interpreter" target={"_blank"}>
                <div className="wrapper">
                        <div className="card">
                            <img src={Interpreter} alt="Track logo" />
                            <div className="info">
                                <div className="externallinks">
                                    <h2>Integer Interpreter</h2>
                                    <a href="https://github.com/Rayane-T/Integer-Interpreter"><FiGithub size="2em"/></a>
                                </div>
                                <p>Algorithm capable of taking the numerical form of an integer and returning his alphabetical form in the Terminal extracting information from a dictionary.</p>
                                <a href="https://github.com/Rayane-T/Integer-Interpreter" className="btn">C</a>
                                <a href="https://github.com/Rayane-T/Integer-Interpreter" className="btn">MakeFile</a>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/Rayane-T/Sky-scrapper-Solver" target={"_blank"}>
                <div className="wrapper">
                    <div className="card">
                        <img src={skyscrapper} alt="Track logo" />
                        <div className="info">
                            <div className="externallinks">
                                    <h2>Sky-Scrapper Solver</h2>
                                    <a href="https://github.com/Rayane-T/Sky-scrapper-Solver"><FiGithub size="2em"/></a>
                                </div>
                            <p>Algorithm capable of solving the sky-scrapper game using backtracking.</p>
                            <a href="https://github.com/Rayane-T/Sky-scrapper-Solver" target={"_blank"} className="btn">C</a>
                        </div>
                    </div>
                </div>
                </a>
                <a href="https://github.com/Rayane-T" target={"_blank"}>
                    <div className="wrapper">
                    <div className="card">
                        <img src={Labyrinth} alt="Track logo" />
                        <div className="info">
                            <div className="externallinks">
                                    <h2>A* Path Finding Algorithm</h2>
                                    <a href="https://github.com/Rayane-T"><FiGithub size="2em"/></a>
                            </div>
                            <p>Interface for the A* Path Finding Algorithm</p>
                            <a href="https://github.com/Rayane-T" className="btn">Python</a>
                            <a href="https://github.com/Rayane-T" className="btn">Numpy</a>
                            <a href="https://github.com/Rayane-T" className="btn">MatPlotlib</a>
                        </div>
                    </div>
                </div>
                </a>
            </div>
        </div>
        <Contact/>
        </div>
    )
}