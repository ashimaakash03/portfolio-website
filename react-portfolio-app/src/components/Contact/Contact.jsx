import "./Contact.css";
import theme_pattern from "../../assets/images/theme_pattern.svg";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get In Touch...</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h2>Connect with me</h2>
          <p>
            I&apos;m currently available to take on new projects, so feel fee to
            send me a message, about anything, that you want me to work on. I am
            available from Monday to Friday, 9 to 5.
          </p>
          <div className="contact-details">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
