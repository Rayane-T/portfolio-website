import React from "react"
import ReactDOM from "react-dom"
import Home from "./Pages/Home"
import Projects from "./Pages/Projects"
import Work from "./Pages/Work"
import Resume from "./Pages/Resume"
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"

ReactDOM.render(
<Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Resume" element={<Resume />}/>
        <Route path="*" element={<Navigate to="/" />}/>
    </Routes>
</Router>, document.getElementById("root"))