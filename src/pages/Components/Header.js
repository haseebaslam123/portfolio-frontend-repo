import React, { useState, useEffect } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
  };

  // ✅ Custom smooth scroll logic
  const handleNavClick = (e, id) => {
    e.preventDefault();

    if (id === "home") {
      // always force scroll to very top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(id);
      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <header className="header">
      <h1 className="logo">
        <FontAwesomeIcon icon={faAngleLeft} className="bracket-icon" />
        Haseeb Aslam /
        <FontAwesomeIcon icon={faAngleRight} className="bracket-icon" />
      </h1>
      <nav className="nav">
        <button className="toggle-btn" onClick={toggleTheme}>
          <span className={`dot ${darkMode ? "dark" : "light"}`}></span>
        </button>

        <a href="#home" onClick={(e) => handleNavClick(e, "home")}>
          HOME
        </a>
        <a href="#about" onClick={(e) => handleNavClick(e, "about")}>
          ABOUT ME
        </a>
        <a href="#skills" onClick={(e) => handleNavClick(e, "skills")}>
          SKILLS
        </a>
        <a href="#projects" onClick={(e) => handleNavClick(e, "projects")}>
          PROJECTS
        </a>
        <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
          CONTACT
        </a>
      </nav>
    </header>
  );
}

export default Header;
