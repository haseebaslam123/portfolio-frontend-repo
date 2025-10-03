import React, { useState, useEffect } from "react";
import "./Header.css";
import "./mobile.css"; // Import mobile styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // ✅ Custom smooth scroll logic
  const handleNavClick = (e, id) => {
    e.preventDefault();
    closeMenu(); // Close menu when link is clicked

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
    <>
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

          {/* Desktop Navigation Links */}
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

          {/* Mobile Hamburger Menu */}
          <button 
            className={`hamburger-menu ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>

      {/* Mobile Side Panel */}
      <div className={`side-panel ${menuOpen ? "open" : ""}`}>
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
      </div>

      {/* Overlay for closing menu */}
      <div 
        className={`menu-overlay ${menuOpen ? "open" : ""}`}
        onClick={closeMenu}
      ></div>
    </>
  );
}

export default Header;