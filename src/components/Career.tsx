import "./styles/Career.css";
import { useEffect } from "react";

const Career = () => {
  useEffect(() => {
    const el = document.querySelector(".career-timeline");
    if (el && window.innerWidth > 1024) {
      // trigger CSS grow animation as a fallback when GSAP timeline isn't set
      el.classList.add("animate");
      // remove class after animation to avoid reflow issues
      setTimeout(() => el.classList.remove("animate"), 800);
    }
  }, []);
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>Collab Softech</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
               Worked on developing and maintaining web applications, focusing on
              clean code, feature implementation, and improving overall
              application performance.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MERN Developer</h4>
                <h5>Marwiz Tech Pvt Ltd</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
             Built full-stack applications using the MERN stack, developed
              RESTful APIs, and created responsive user interfaces for
              real-world business solutions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer 1</h4>
                <h5>Pardy Panda Studios</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently working on scalable and performance-driven web
              applications, collaborating with cross-functional teams to
              deliver high-quality production-ready solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
