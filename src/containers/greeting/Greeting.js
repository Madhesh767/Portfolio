import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

// 📸 Import your profile photo here
import profileImage from "../../assets/images/Mad1.png"; // update to relative path

export default function Greeting() {
  const { isDark } = useContext(StyleContext);

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        {/* LEFT TEXT BLOCK */}
        <div className="greeting-text-div">
          <Fade bottom duration={1200}>
            <h1 className={isDark ? "dark-mode greeting-text" : "greeting-text"}>
              {greeting.title}
            </h1>
          </Fade>

          <Fade bottom duration={1400}>
            <p className={isDark ? "dark-mode greeting-text-p" : "greeting-text-p subTitle"}>
              {greeting.subTitle}
            </p>
          </Fade>

          <div id="resume" className="empty-div"></div>

          <Fade bottom duration={1600}>
            <SocialMedia />
            <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              {greeting.resumeLink && (
                <a
                  href={require("../../assets/images/Mad.pdf")}
                  download="Resume.pdf"
                  className="download-link-button"
                >
                  <Button text="Download my resume" />
                </a>
              )}
            </div>
          </Fade>
        </div>

        {/* RIGHT PROFILE BLOCK */}
        <div className="greeting-image-div stacked-profile">
          <Fade right duration={1500}>
            <div className="image-name-block">
              <div className="profile-wrapper">
                <img
                  alt="Profile"
                  src={profileImage}
                  className="tight-profile-img"
                />
              </div>
              <div className="name-gradient">
                <h2 className="overlay-name">Madhesh Duraisamy</h2>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
