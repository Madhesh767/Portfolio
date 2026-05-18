import React from "react";
import "./WorkExperience.scss";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";

export default function WorkExperience() {
  if (!workExperiences.display) {
    return null;
  }
  return (
    <section id="experience">
      <div className="section-label">02 — Experience</div>
      <Fade bottom duration={1000}>
        <h2 className="section-title">Work History</h2>
      </Fade>

      <div className="exp-timeline">
        {workExperiences.experience.map((exp, i) => (
          <div key={i} className="exp-item">
            <Fade bottom duration={1200} distance="20px">
              <div className="exp-card">
                <div className="exp-header">
                  <div>
                    <div className="exp-role">{exp.role}</div>
                    <div className="exp-company">{exp.company}</div>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem'}}>
                    <span className="exp-date">{exp.date}</span>
                    {i === 0 && (
                      <span className="tag" style={{background: 'rgba(0, 255, 163, 0.08)', color: '#00ffa3', borderColor: 'rgba(0, 255, 163, 0.2)'}}>
                        ● Current
                      </span>
                    )}
                  </div>
                </div>
                <p style={{fontSize: '0.88rem', color: '#94a3b8', lineHeight: '1.6'}}>
                  {exp.desc}
                </p>
                <div className="exp-tags">
                  {exp.descBullets.map((tag, j) => (
                    <span key={j} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </Fade>
          </div>
        ))}
      </div>
    </section>
  );
}
