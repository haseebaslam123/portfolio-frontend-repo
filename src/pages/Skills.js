import React, { useEffect, useRef, useState } from "react";
import "./Skills.css";
import SkillProgress from "./Components/SkillProgress.js";

export default function Skills() {
  const skillsRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const currentSkills = skillsRef.current; // ref copied
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
          } else {
            setAnimate(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (currentSkills) observer.observe(currentSkills);

    return () => {
      if (currentSkills) observer.unobserve(currentSkills); // cleanup using local variable
    };
  }, []);

  const skillIcons = [
    { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "C", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "C++", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "C#", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
    { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "WordPress", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
    { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Bootstrap", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Django", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "Express", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  ];

  const skills = [
    { name: "HTML", percent: 100 },
    { name: "CSS", percent: 100 },
    { name: "JavaScript", percent: 95 },
    { name: "React", percent: 98 },
    { name: "Python", percent: 99 },
    { name: "Django", percent: 90 },
    { name: "MongoDB", percent: 90 },
    { name: "Express.js", percent: 88 },
    { name: "C", percent: 95 },
    { name: "C++", percent: 95 },
    { name: "C#", percent: 95 },
    { name: "TypeScript", percent: 80 },
  ];

  return (
    <section
      id="skills"
      ref={skillsRef}
      className={`skills-section fade-up ${animate ? "animate" : ""}`}
    >
      <h2 className="h2h fade-up">My Skills</h2>
      <p className="p1 fade-up">Here are some of the technologies and languages I work with:</p>

      <div className="skills-icons fade-up">
        {skillIcons.map((skill, index) => (
          <img
            key={index}
            src={skill.src}
            alt={skill.name}
            title={skill.name}
            className={animate ? "icon-animate" : ""}
          />
        ))}
      </div>

      <div className="timeline">
        {skills.map((s, i) => (
          <SkillProgress
            key={i}
            skill={s.name}
            percent={s.percent}
            side={i % 2 === 0 ? "left" : "right"}
            animate={animate}
          />
        ))}
      </div>
    </section>
  );
}
