import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "./Components/ProjectCard.js";
import "./Project.css";

export default function Projects() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const currentSection = sectionRef.current; // ref copied
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
      { threshold: 0.2 }
    );

    if (currentSection) observer.observe(currentSection);

    return () => {
      if (currentSection) observer.unobserve(currentSection); // cleanup using local variable
    };
  }, []);

  const projects = [
    {
  title: "Real-Time Chat Application",
  description:
    "Developed a full-featured real-time chat app using the MERN stack (MongoDB, Express.js, React.js, Node.js) with Socket.io integration for instant messaging, online user tracking, and message notifications. Includes JWT-based authentication, responsive UI, and smooth frontend-backend synchronization for seamless communication.",
  image: "/icons/chatapp.PNG",
  tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io"],
  demoLink: "https:chats-with-anyone.netlify.app",
},

    {
      title: "Weather Detection App",
      description:
        "Built a responsive weather app using React (JSX), HTML, CSS, and JavaScript that fetches real-time conditions and a 5-day forecast for any city worldwide with a clean, interactive UI.",
      image: "/icons/weather.PNG",
      tags: ["React.js", "HTML", "CSS", "JavaScript"],
      demoLink: "https://check-of-weather.netlify.app",
    },
    {
      title: "Movie Explorer App",
      description:
        "Developed an interactive movie exploration platform using React (JSX), JavaScript, HTML, and Tailwind CSS. The app lets users browse upcoming, popular, and top-rated movies, watch trailers, view cast details, and add favorites for quick access, delivering a dynamic and engaging entertainment experience.",
      image: "/icons/movies.PNG",
      tags: ["React.jsx", "HTML", "CSS", "JavaScript"],
      demoLink: "https://movies-trailer-exhibition.netlify.app",
    },
    {
      title: "Tic-Tac-Toe Game",
      description:
        "Created a browser-based Tic-Tac-Toe game using HTML, CSS, and JavaScript. Designed an engaging user interface with real-time win/draw detection logic and smooth interactivity for a fun user experience.",
      image: "/icons/tiktoe.PNG",
      tags: ["HTML", "CSS", "JavaScript"],
      demoLink: "https://tik-toe-game.netlify.app",
    },
    {
      title: "Amazon Clone",
      description:
        "Developed a fully responsive clone of Amazon’s product page using HTML, CSS, and JavaScript. Implemented structured layouts, interactive elements, and styled components to closely replicate the look and feel of a professional e-commerce platform.",
      image: "/icons/amazon.PNG",
      tags: ["HTML", "CSS", "JavaScript"],
      demoLink: "https://amazon-starter-page.netlify.app",
    }
    
    
  ];

  return (
    <section
      ref={sectionRef}
      className={`projects-section ${animate ? "animate-section" : "hidden-section"}`}
    >
      <h2 className={`section-title ${animate ? "animate-title" : "hidden-title"}`}>
        My Projects
      </h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            className={animate ? "animate-card" : "hidden-card"}
          />
        ))}
      </div>
    </section>
  );
}
