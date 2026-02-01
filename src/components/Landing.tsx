import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import Ballpit from "./Ballpit";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv" data-cursor="disable" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }} aria-hidden="true">
          <Ballpit
            count={120}
            gravity={0.01}
            friction={0.9975}
            wallBounce={0.95}
            followCursor={true}
          />
        </div>
        <div className="landing-container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="landing-center">
            <div className="landing-intro">
              <h1>Hello! I'm Karishma Kumavat</h1>
            </div>
            <div className="landing-info">
            <h3>A Creative</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Web Developer</div>
              <div className="landing-h2-2">Mern Developer</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Web Developer</div>
              <div className="landing-h2-info-1">Mern Developer</div>
            </h2>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
