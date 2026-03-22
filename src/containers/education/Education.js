import React from "react";
import "./Education.scss";
import {educationInfo} from "../../portfolio";
import {Fade} from "react-reveal";

export default function Education() {
  if (!educationInfo.display) {
    return null;
  }
  return (
    <section id="education">
      <div className="section-label">04 — Education</div>
      <Fade bottom duration={1000}>
        <h2 className="section-title">Academic Background</h2>
      </Fade>

      <div className="edu-grid">
        {educationInfo.schools.map((school, index) => (
          <Fade bottom duration={1200} distance="20px" key={index}>
            <div className="edu-card">
              <div className="edu-year">{school.duration}</div>
              <div className="edu-school">{school.schoolName}</div>
              <div className="edu-degree">{school.subHeader}</div>
              <div className="edu-grade">{school.desc}</div>
              {school.logo && (
                <img
                  src={school.logo}
                  alt={school.schoolName}
                  className="edu-logo"
                />
              )}
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
}
