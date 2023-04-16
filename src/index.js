import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Work from "./Pages/Work";
import Resume from "./Pages/Resume";
import Leadership from "./Pages/Leadership";
import BucketList from "./Pages/BucketList";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = JSON.parse(localStorage.getItem('darkMode'));
    return savedMode !== null ? savedMode : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "dark-mode" : ""}>
      <Router>
        <Routes>
          <Route path="/" element={<Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/Projects" element={<Projects isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/Work" element={<Work isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}  />} />
          <Route path="/Resume" element={<Resume isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/Leadership" element={<Leadership isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/BucketList" element={<BucketList isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="*" element={<Navigate to="/" isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
        </Routes>
      </Router>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
