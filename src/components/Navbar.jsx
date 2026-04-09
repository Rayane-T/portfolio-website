import React from "react"
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';


export default function Navbar({ toggleDarkMode, isDarkMode}){

    return (
        <nav>
            <Link href="/" className="nav--leftside">RT</Link>
            <div className="nav--rightside">
                <Link href="/">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/work">Experience</Link>
                {/* <Link href="/blog">Blog</Link>*/}
                {/*  <Link href="/travel">Travel</Link> */}
                <button
                    type="button"
                    className="theme-switch"
                    onClick={toggleDarkMode}
                    aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                    aria-pressed={isDarkMode}
                >
                    <span className="theme-switch-track">
                        <span className="theme-switch-thumb">
                            <FontAwesomeIcon
                                icon={isDarkMode ? faSun : faMoon}
                                className="icon"
                            />
                        </span>
                    </span>
                </button>
            </div>
        </nav>
    )
}
