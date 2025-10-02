import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-left">
        <h2 className="about-title fade-up">About Me</h2>

        <p className="about-text fade-up">
          I’m <strong>Haseeb Aslam</strong>, a Computer Science undergraduate at FAST-NUCES,
          specializing in <strong>Full Stack Web Development</strong> with the MERN stack (MongoDB, Express, React, Node.js).
          I love building modern web apps that are fast, scalable, and user-friendly.
        </p>

        <p className="about-text fade-up">
          From designing pixel-perfect frontends in <strong>React</strong> to crafting secure and efficient backends with <strong>Node.js & Express</strong>,
          I enjoy creating applications that feel seamless across devices.
        </p>

        <p className="about-text fade-up">
          I work with <strong>MongoDB</strong> to design clean and optimized databases, integrate REST APIs, and bring everything together into responsive,
          production-ready web solutions.
        </p>

        <h3 className="about-subtitle fade-up">Education</h3>

        <p className="about-highlight fade-up">
          <strong>BS in Computer Science</strong>
        </p>
        <p className="about-detail fade-up">
          National University of Computer and Emerging Sciences (FAST-NUCES), Lahore <br />
          Aug 2022 – Present
        </p>

        <p className="about-highlight fade-up">
          <strong>Intermediate in Computer Science</strong>
        </p>
      </div>

      <div className="about-right slide-in-right">
        <div className="about-img-bg">
          <img src="/icons/pic.png" alt="Haseeb Aslam" className="about-img" />
        </div>
      </div>

      {/* Resume Button at Bottom Center */}
      <div className="resume-btn-container fade-up">
        <a href="/Haseeb_Aslam_Full_Stack_Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
   Download  Resume
</a>

      </div>
    </section>
  );
}

export default About;
