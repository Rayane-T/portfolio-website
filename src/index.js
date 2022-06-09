import React from "react"
import ReactDOM from "react-dom"
import Home from "./Pages/Home"
import Projects from "./Pages/Projects"
import Work from "./Pages/Work"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

ReactDOM.render(
<Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Work" element={<Work />} />
    </Routes>
</Router>, document.getElementById("root"))