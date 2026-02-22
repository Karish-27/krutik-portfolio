import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      {/* Top marquee text */}
      <div className="about-top-marquee" aria-hidden="true">
        <span>A&nbsp;&nbsp;B&nbsp;&nbsp;O&nbsp;&nbsp;U&nbsp;&nbsp;T</span>
        <span>M&nbsp;&nbsp;E</span>
        <span>S&nbsp;&nbsp;E&nbsp;&nbsp;C&nbsp;&nbsp;T&nbsp;&nbsp;I&nbsp;&nbsp;O&nbsp;&nbsp;N</span>
      </div>

      <div className="about-content">
        {/* Left column: WHO AM I + Avatar */}
        <div className="about-left">
          <div className="about-who">
            <h2 className="about-who-title">WHO AM I ?</h2>
            <p className="about-who-sub">M &nbsp;Y &nbsp;&nbsp;S &nbsp;E &nbsp;L &nbsp;F</p>
          </div>
          <div className="about-avatar-wrapper">
            <img src="/images/Avatar2.svg" alt="Avatar" className="about-avatar" />
          </div>
        </div>

        {/* Right column: ABOUT ME heading + description + DESIGNER */}
        <div className="about-right">
          <h1 className="about-heading">
            <span>ABOUT</span>
            <span>ME</span>
          </h1>
          <p className="about-description">
            I'm a UI/UX designer focused on creating clean, intuitive, and user-centered digital experiences. I combine research, structure, and visual clarity to design products that are not only beautiful but also functional and meaningful. My approach blends minimal aesthetics with practical usability, ensuring every interaction feels simple, smooth, and purposeful. I enjoy turning complex ideas into elegant interfaces that people genuinely enjoy using.
          </p>
          <div className="about-designer-label">
            D&nbsp;&nbsp;E&nbsp;&nbsp;S&nbsp;&nbsp;I&nbsp;&nbsp;G&nbsp;&nbsp;N&nbsp;&nbsp;E&nbsp;&nbsp;R
          </div>
        </div>
      </div>

      {/* Background watermark text */}
      <div className="about-watermark" aria-hidden="true">
        ABOUT ME
      </div>
    </div>
  );
};

export default About;
