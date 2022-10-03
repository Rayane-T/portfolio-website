import React from "react"
import Track from "../image/Track.png"
import Ridof from "../image/Ridof.png"
import skyscrapper  from "../image/skyscrapper.jpg"

export default function CardProjects() {
    return (
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
        </div>
        
    )
}