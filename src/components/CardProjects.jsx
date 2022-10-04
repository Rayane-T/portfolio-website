import React from "react"
import Track from "../image/Track.png"
import Ridof from "../image/Ridof.png"
import Contact from "./Contact"
import skyscrapper  from "../image/skyscrapper.jpg"
import { AiFillGithub } from "react-icons/ai"

export default function CardProjects() {
    return (
        <div>
            <div className="main-title-project">
                <h2 className="title">Personal Projects 📦</h2>
                <p className="p1">Here you can see a bunch of projects I've worked on in the past couple of years.</p>
                <p className="p2"> --Hover over the projects below to view more details, some even have demos</p>
            </div>
        <div>
            <div className="a-btn-gh">
                <a href="https://github.com/Rayane-T" ><button className="btn-gh">GitHub</button></a>
            </div>
            <div className="contain-wrapper">
                <div className="wrapper">
                    <div className="card">
                        <img src={Track} alt="Track logo" />
                        <div className="info">
                            <h1>Heading</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus laboriosam provident corrupti incidunt. Velit nihil a modi, deleniti temporibus, aliquid illum consectetur et assumenda expedita tempore sed eum est dolore!</p>
                            <a href="" className="btn">ReadMore</a>
                        </div>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="card">
                        <img src={Ridof} alt="Track logo" />
                        <div className="info">
                            <h1>Heading</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus laboriosam provident corrupti incidunt. Velit nihil a modi, deleniti temporibus, aliquid illum consectetur et assumenda expedita tempore sed eum est dolore!</p>
                            <a href="" className="btn">ReadMore</a>
                        </div>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="card">
                        <img src={skyscrapper} alt="Track logo" />
                        <div className="info">
                            <h1>Heading</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus laboriosam provident corrupti incidunt. Velit nihil a modi, deleniti temporibus, aliquid illum consectetur et assumenda expedita tempore sed eum est dolore!</p>
                            <a href="" className="btn">ReadMore</a>
                        </div>
                    </div>
                </div>
                    <div className="wrapper">
                        <div className="card">
                            <img src={skyscrapper} alt="Track logo" />
                            <div className="info">
                                <h1>Heading</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus laboriosam provident corrupti incidunt. Velit nihil a modi, deleniti temporibus, aliquid illum consectetur et assumenda expedita tempore sed eum est dolore!</p>
                                <a href="" className="btn">ReadMore</a>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper">
                    <div className="card">
                        <img src={Ridof} alt="Track logo" />
                        <div className="info">
                            <h1>Heading</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus laboriosam provident corrupti incidunt. Velit nihil a modi, deleniti temporibus, aliquid illum consectetur et assumenda expedita tempore sed eum est dolore!</p>
                            <a href="" className="btn">ReadMore</a>
                        </div>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="card">
                        <img src={Ridof} alt="Track logo" />
                        <div className="info">
                            <h1>Heading</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus laboriosam provident corrupti incidunt. Velit nihil a modi, deleniti temporibus, aliquid illum consectetur et assumenda expedita tempore sed eum est dolore!</p>
                            <a href="" className="btn">ReadMore</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Contact/>
        </div>
    )
}