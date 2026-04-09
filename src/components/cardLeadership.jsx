import React from "react"
import { AiOutlineFile, AiFillLinkedin } from "react-icons/ai"
import MinimalCard from "./MinimalCard"
import { leadershipCards } from "../data/cards"
import { RESUME_URL } from "../config/links"

export default function CardLeadership() {
    return (
        <section className="minimal-section">
            <div className="a-btn-gh-b">
                <a href="https://www.linkedin.com/in/rayanetayache/" target="_blank" rel="noreferrer">
                    <button className="btn-gh-b">
                        <div>
                            <AiFillLinkedin className="icon-socials"/>
                            <p>LinkedIn</p>
                        </div>
                    </button>
                </a>
                <a href={RESUME_URL} target="_blank" rel="noreferrer"><button className="btn-gh-b">
                    <div><AiOutlineFile className="icon-socials"/><p>Resume</p></div>
                </button></a>
            </div>
            <div className="minimal-grid">
                {leadershipCards.map((role) => (
                    <MinimalCard
                        key={role.title}
                        variant="experience"
                        title={role.title}
                        subtitle={role.company}
                        period={role.period}
                        description={role.description}
                        tags={role.tags}
                    />
                ))}
            </div>
        </section>
    )
}