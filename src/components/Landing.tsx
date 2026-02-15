import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div
        className="landing-section"
        id="landingDiv"
        data-cursor="disable"
        style={{
          position: 'relative',
          overflow: 'hidden',
          backgroundImage: 'url(/images/BGhero.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
        }}
      >
        {children}
        <div className="hero-name-container">
          <h1 className="hero-name">KRUTIK</h1>
          <h1 className="hero-name">PARMAR</h1>
        </div>
        <div className="hero-role">
          <span className="hero-role-line">UI/UX</span>
          <span className="hero-role-line">DESIGNER</span>
        </div>
        <div className="avatar-container">
          <img
            src="/images/avtar.svg"
            alt="Avatar"
            className="avatar-img"
          />
        </div>
        <div className="hero-portfolio-label">
          <span className="hero-portfolio-my">MY</span>
          <span className="hero-portfolio-title">PORTFOLIO</span>
          <span className="hero-portfolio-sub">SHOWCASE</span>
        </div>
        <div className="hero-bg-text" aria-hidden="true">
          KRUTIK
        </div>
      </div>
    </>
  );
};

export default Landing;
