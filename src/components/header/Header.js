import React, { useState } from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import {
  workExperiences,
  skillsSection,
  resumeSection,
  educationInfo,
  bigProjects
} from "../../portfolio";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const viewExperience = workExperiences.display;
  const viewSkills = skillsSection.display;
  const viewResume = resumeSection.display;
  const viewEducation = educationInfo.display;
  const viewProjects = bigProjects.display;

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <Headroom>
      <header className="header">
        <a href="/" className="logo">
          <span>&lt;</span>Madhesh<span>/&gt;</span>
        </a>
        
        <button className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle Menu">
          <span className="hamburger"></span>
        </button>

        <ul className={`menu ${menuOpen ? 'open' : ''}`}>
          {viewSkills && (
            <li>
              <a href="#skills" onClick={closeMenu}>Skills</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience" onClick={closeMenu}>Experience</a>
            </li>
          )}
          {viewProjects && (
            <li>
              <a href="#projects" onClick={closeMenu}>Projects</a>
            </li>
          )}
          {viewEducation && (
            <li>
              <a href="#education" onClick={closeMenu}>Education</a>
            </li>
          )}
          {/* {viewResume && (
            <li>
              <a href="#resume" onClick={closeMenu}>Resume</a>
            </li>
          )} */}
          <li>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </li>
        </ul>
        <div className="nav-dot" title="Available for work"></div>
      </header>
    </Headroom>
  );
}
export default Header;
