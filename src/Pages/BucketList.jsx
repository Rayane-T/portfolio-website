import React from "react"
import Navbar from "../components/Navbar.jsx"
import CardLeadership from "../components/cardLeadership"
import { TabTitle } from "../utils/genfun.js"
import Contact from "../components/Contact.jsx"

export default function BucketList({ isDarkMode, toggleDarkMode }){
    TabTitle('List 100 | Rayane Tayache')
    return(
        <div className={isDarkMode ? 'dark-mode' : ''}>
        <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
            <div className="hero--work">
                <h1>List 100 </h1>
                <p className="p1">Things I want to do before I die. Please let me know if you have any recommendation.</p>
                <p className="p2">Progress as of Apr 8, 2023: 4.25/65.</p>
            </div>
            <ol className="list--arrangment">
                <li>✓ Live in another country</li>
                <li>✗ Live on an island</li>
                <li>✗ Ride a horse in Mongolia</li>
                <li>✗ Atteign Body Prime</li>
                <li>✓ Learn to drive a car</li>
                <li>✗ Surf in Hawaii</li>
                <li>✗ Scuba dive</li>
                <li>✗ Run a marathon</li>
                <li>✗ Do a Ö till ö</li>
                <li>✗ Do an Iron Man</li>
                <li>✗ Do a Norsemen</li>
                <li>✗ Swim ten kilometers</li>
                <li>✓ Be in a submarine</li>
                <li>✓ Go on a trip overseas with friends</li>
                <li>✗ Become a parent</li>
                <li>✗ Learn Russian, Mandarin Chinese, Spanish and German (~25% done)</li>
                <li>✗ Start a company</li>
                <li>✗ Get a PhD (in CS, Neuroscience, or Psychology)</li>
                <li>✗ Teach a university course</li>
                <li>✗ Read 1000 books (~3% done)</li>
                <li>✗ Spend at least a month in Western Africa</li>
                <li>✗ Hitchhike across Africa</li>
                <li>✗ Travel Eastern Europe</li>
                <li>✗ Travel across India</li>
                <li>✗ Do stand-up</li>
                <li>✗ Zero gravity</li>
                <li>✗ Learn to play a music instrument </li>
                <li>✗ Learn to salsa</li>
                <li>✗ See auroras</li>
                <li>✗ Camp in a desert</li>
                <li>✗ Sleep outside on the beach, under the sky</li>
                <li>✓ Sleep in a castle</li>
                <li>✓ Take a walk in the rain</li>
                <li>✗ Create my own programming language</li>
                <li>✗ Visit 100 countries (~8% done)</li>
                <li>✗ Visit Sicily</li>
                <li>✗ Visit Tokyo</li>
                <li>✗ Visit Nordic countries</li>
                <li>✗ Travel across south america</li>
                <li>✗ Stay with an Amazonian tribe</li>
                <li>✗ Visit Mecca</li>
                <li>✗ See Kashmir</li>
                <li>✗ Travel around Eastern Europe</li>
                <li>✗ Eat sushi in Japan</li>
                <li>✗ Drink vodka in Russia</li>
                <li>✗ Sail around the Caribbean</li>
                <li>✗ Visit South Omo valley, Ethiopia</li>
                <li>✗ Go to South Pole or North Pole</li>
                <li>✗ Climb Great Pyramid of Giza, Egypt</li>
                <li>✗ Climb Great wall, China</li>
                <li>✗ Hike Mont Blanc</li>
                <li>✗ Hike to Everest base camp</li>
                <li>✗ Reed Dance, Swaziland</li>
                <li>✗ Ramadan in Morocco</li>
                <li>✗ Carnival in Brazil</li>
                <li>✗ Watch a Broadway show in New York</li>
                <li>✗ Pashut Festival, Israel</li>
                <li>✗ Laos new year</li>
                <li>✗ Watch bullfight in Spain</li>
                <li>✗ Speak at TEDx </li>
                <li>✓ See a comet </li>
                <li>✗ Meet Dalai Lama </li>
                <li>~ Be awesome </li>
                <li>~ Be kind</li>
                <li>~ Succeed life</li>
            </ol>
            <Contact/>
        </div>
    )
}