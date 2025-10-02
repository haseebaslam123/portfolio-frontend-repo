import React from "react";

export default function ProjectCard({ image, title, description, tags, demoLink, className }) {
  return (
    <div className={`project-card ${className}`}>
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />

        {/* Overlay buttons */}
        <div className="overlay">
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="overlay-btn">
            Demo
          </a>
         
        </div>
      </div>

      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tags">
          {tags.map((tag, i) => (
            <span key={i} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
