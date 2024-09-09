// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import { Timeline } from "./pages/Timeline";
import { Blogs } from "./pages/Blogs";
import { Contact } from "./pages/Contact";
import { ThemeProvider, useTheme } from "./components/ThemeContext";
import "./App.css"; // Import the CSS file
import { FaAffiliatetheme } from "react-icons/fa";

const Navbar: React.FC = () => {
  const { colorMode, toggleColorMode } = useTheme();

  return (
    <header style={{ background: colorMode === "light" ? "grey" : "black" }}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/timeline">Timeline</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/contact">Contact</Link>
        <FaAffiliatetheme
          color={colorMode === "light" ? "Dark" : "Light"}
          onClick={toggleColorMode}
        />
      </nav>
    </header>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
