import React from "react";
import "./GlitchText.scss";

const GlitchText = ({ text, className }) => {
  return (
    <div className={`glitch-wrapper ${className || ""}`}>
      <h1 className="glitch" data-text={text}>
        {text}
      </h1>
    </div>
  );
};

export default GlitchText;
