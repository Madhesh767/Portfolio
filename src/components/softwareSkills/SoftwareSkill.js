import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div className="tech-stack-grid">
      {skillsSection.softwareSkills.map((skills, i) => {
        return (
          <div key={i} className="tech-card">
            <i className={skills.fontAwesomeClassname}></i>
            <span>{skills.skillName}</span>
          </div>
        );
      })}
    </div>
  );
}
