import "./styles/Contact.css";

const Contact = () => {
    return (
        <div className="contact-section" id="contact">
            <div className="contact-top-marquee" aria-hidden="true">
                <span>C&nbsp;&nbsp;O&nbsp;&nbsp;N&nbsp;&nbsp;T&nbsp;&nbsp;A&nbsp;&nbsp;C&nbsp;&nbsp;T</span>
                <span>M&nbsp;&nbsp;E</span>
                <span>S&nbsp;&nbsp;E&nbsp;&nbsp;C&nbsp;&nbsp;T&nbsp;&nbsp;I&nbsp;&nbsp;O&nbsp;&nbsp;N</span>
            </div>
            <div className="contact-content">
                <div className="contact-title-container">
                    <div className="contact-info-row">
                        <span className="contact-email">mrdziner.mail@gmail.com</span>
                        <span className="contact-phone">+91 9265542717</span>
                    </div>

                    <h1 className="contact-heading">CONTACT ME</h1>
                </div>
            </div>

            {/* Background watermark text */}
            <div className="contact-watermark" aria-hidden="true">
                EVERYONE
            </div>

            <div className="contact-avatar-wrapper">
                <img src="/images/avatarcontactme.svg" alt="Contact Avatar" className="contact-avatar" />
            </div>
        </div>
    );
};

export default Contact;
