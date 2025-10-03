import  { useEffect, useRef } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa"; // Import icons
import { ReactTyped } from "react-typed";
import "./Home.css";



function Home() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    
    // Observer for scroll trigger
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class when section comes into view
            section.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (section) observer.observe(section);

    // Manual trigger if hash matches (for header button clicks)
    if (window.location.hash === '#home') {
      setTimeout(() => section.classList.add('animate'), 200);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section className="home" ref={sectionRef} id="home">
     
      <div className="home-left">
        
        <h2 className="slide-in-left" style={{animationDelay: '0.2s'}}>
          Hello <span className="wave">👋</span>, I'm
        </h2>
        <h1 className="name slide-in-left" style={{animationDelay: '0.4s'}}>Haseeb Aslam</h1>

        {/* ✅ Typing Animation Instead of Static Role */}
        <h3 className="role slide-in-left" style={{animationDelay: '0.6s'}}>
          <span className="typed-text">
            <ReactTyped
              strings={[
                "A full stack developer",
                "A BSCS graduate",
                "A problem solver",
                "An innovative thinker",
                "A... ^1000 cool guy?",
                "Ok... ^1000 I'm running out of ideas!",
                "Uhh... ^1000 You can scroll down to see my projects now..!",
                "Seriously, my projects are really cool, go check them out!",
                "You're Uh... ^1000 Still here?",
                "Ok, This has been fun, But I'm gonna restart the loop now...",
                "See Ya! :)",
              ]}
              typeSpeed={30}
              backSpeed={20}
              backDelay={1000}
              loop
            />
          </span>
        </h3>

        <p className="experience slide-in-left" style={{animationDelay: '0.8s'}}>1 Year Experience</p>

        <a href="#contact" className="contact-btn slide-in-left" style={{animationDelay: '1s'}}>
          Contact
        </a>

        {/* Social Icons */}
        <div className="social-links slide-in-left" style={{animationDelay: '1.2s'}}>
          <a
            href="https://wa.me/923184625930"
            target="_blank"
            rel="noreferrer"
            className="icon"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=haseebquotex1021@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="home-right slide-in-right" style={{animationDelay: '1.4s'}}>
        <img src="/icons/right.png" alt="illustration" />
      </div>
    </section>
  );
}

export default Home;
