import React from "react";
import "./Terminal.scss";

const Terminal = ({ children, title = "user@portfolio:~" }) => {
  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="terminal-button red"></span>
          <span className="terminal-button yellow"></span>
          <span className="terminal-button green"></span>
        </div>
        <div className="terminal-title">{title}</div>
      </div>
      <div className="terminal-content">{children}</div>
    </div>
  );
};

export default Terminal;
