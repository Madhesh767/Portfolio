import React from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {skillsSection, techStack} from "../../portfolio";
import {Fade} from "react-reveal";

export default function Skills() {
  if (!skillsSection.display) {
    return null;
  }
  return (
    <section id="skills">
      <div className="section-label">01 — Skills</div>
      <Fade bottom duration={1000}>
        <h2 className="section-title">What I do</h2>
      </Fade>

      <div className="skills-grid">
        <div className="skills-left">
          <Fade bottom duration={1200} distance="20px">
            <p>{skillsSection.subTitle}</p>
            <ul className="skill-list">
              {skillsSection.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>

            <div className="proficiency-section">
              <style>{`
                .proficiency-section { margin-top: 2.5rem; }
                .prof-item { margin-bottom: 1.25rem; }
                .prof-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem; }
                .prof-name { font-size: 0.85rem; font-weight: 600; color: #e2e8f0; }
                .prof-pct { font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #00e5ff; }
                .prof-bar { height: 3px; background: #111827; border-radius: 2px; overflow: hidden; }
                .prof-fill { height: 100%; border-radius: 2px; background: linear-gradient(90deg, #00e5ff, #a855f7); }
              `}</style>
              {techStack.experience.map((exp, i) => (
                <div key={i} className="prof-item">
                  <div className="prof-header">
                    <span className="prof-name">{exp.Stack}</span>
                    <span className="prof-pct">{exp.progressPercentage}</span>
                  </div>
                  <div className="prof-bar">
                    <div 
                      className="prof-fill" 
                      style={{ width: exp.progressPercentage }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Fade>
        </div>

        <div className="skills-right">
          <Fade bottom duration={1400} distance="20px">
            <SoftwareSkill />

            <div className="code-block" style={{marginTop: '1.5rem'}}>
              <div className="code-header">
                <div className="dot-r"></div><div className="dot-y"></div><div className="dot-g"></div>
                <span className="code-title">madhesh.config.js</span>
              </div>
              <div className="code-body">
                <span className="c-comment">// Current stack</span><br />
                <span className="c-key">const</span> madhesh <span className="c-punct">=</span> <span className="c-punct">{'{'}</span><br />
                &nbsp;&nbsp;runtime<span className="c-punct">:</span> <span className="c-str">"Node.js 20"</span><span className="c-punct">,</span><br />
                &nbsp;&nbsp;cloud<span className="c-punct">:</span> <span className="c-str">"AWS Lambda + API Gateway"</span><span className="c-punct">,</span><br />
                &nbsp;&nbsp;db<span className="c-punct">:</span> <span className="c-punct">[</span><span className="c-str">"DynamoDB"</span><span className="c-punct">,</span> <span className="c-str">"PostgreSQL"</span><span className="c-punct">],</span><br />
                &nbsp;&nbsp;experience<span className="c-punct">:</span> <span className="c-num">2</span><span className="c-punct">,</span> <span className="c-comment">// years</span><br />
                &nbsp;&nbsp;openToWork<span className="c-punct">:</span> <span className="c-key">false</span><br />
                <span className="c-punct">{'}'};</span>
              </div>
            </div>
          </Fade>
        </div>
      </div>

      <div className="stats-row">
        <Fade bottom duration={1000}>
          <div className="stat-box">
            <span className="stat-num">2+</span>
            <span className="stat-label">Years Experience</span>
          </div>
        </Fade>
        <Fade bottom duration={1200}>
          <div className="stat-box">
            <span className="stat-num">3+</span>
            <span className="stat-label">Projects Built</span>
          </div>
        </Fade>
        <Fade bottom duration={1400}>
          <div className="stat-box">
            <span className="stat-num">8+</span>
            <span className="stat-label">Technologies</span>
          </div>
        </Fade>
        <Fade bottom duration={1600}>
          <div className="stat-box">
            <span className="stat-num">AWS</span>
            <span className="stat-label">Cloud Certified</span>
          </div>
        </Fade>
      </div>
    </section>
  );
}
