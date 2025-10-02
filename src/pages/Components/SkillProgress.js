import React from "react";

export default function SkillProgress({ skill, percent, side, animate }) {
  return (
    <div className={`timeline-item ${side} ${animate ? "animate" : ""}`}>
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3>{skill}</h3>
        <div className="progress">
          <div
            className={`progress-bar ${animate ? "animate-bar" : ""}`}
            style={{ "--progress": `${percent}%` }}
          ></div>
          <span className="progress-text">{percent}%</span>
        </div>
      </div>
    </div>
  );
}
