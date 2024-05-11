import "./Contact.css";
import theme_pattern from "../../assets/images/theme_pattern.svg";
import mail_icon from "../../assets/images/mail_icon.svg";
import call_icon from "../../assets/images/call_icon.svg";
import location_icon from "../../assets/images/location_icon.svg";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "86e7dde4-ee76-4d23-bd38-611a0a3a338c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      alert(data.message);
    } else {
      console.log("Error", data);
      alert(data.message);
      setResult(data.message);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-title">
        <h1>Get In Touch...</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Connect with me...</h1>
          <p>
            I&apos;m available to take on new projects. So please, feel free to
            send me a message about anything that you want me to work on.
            I&apos;m available Monday to Saturday, 10 to 6. Looking forward to
            collaborate with you...
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>alex_bennett.work@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+1 (503) 360-9030 </p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Beverley Hills, California, USA</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Name: </label>
          <input type="text" placeholder="Enter your name" name="fullName" />
          <label htmlFor="">Email: </label>
          <input type="email" placeholder="Enter your e-mail" name="email" />
          <label htmlFor="">Message: </label>
          <textarea
            name="message"
            rows="8"
            cols="10"
            placeholder="Compose your message..."
          />
          <button type="submit" className="send-message">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
