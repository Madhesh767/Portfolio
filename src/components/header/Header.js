import React from "react";
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
  const viewExperience = workExperiences.display;
  const viewSkills = skillsSection.display;
  const viewResume = resumeSection.display;
  const viewEducation = educationInfo.display;
  const viewProjects = bigProjects.display;

  return (
    <Headroom>
      <header className="header">
        <a href="/" className="logo">
          <span>&lt;</span>M<span>/&gt;</span>
        </a>
        <ul className="menu">
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Experience</a>
            </li>
          )}
          {viewProjects && (
            <li>
              <a href="#projects">Projects</a>
            </li>
          )}
          {viewEducation && (
            <li>
              <a href="#education">Education</a>
            </li>
          )}
          {viewResume && (
            <li>
              <a href="#resume">Resume</a>
            </li>
          )}
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="nav-dot" title="Available for work"></div>
      </header>
    </Headroom>
  );
}
export default Header;
