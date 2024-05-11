import "./Footer.css";
import footer_logo from "../../assets/images/footer_logo.svg";
import user_icon from "../../assets/images/user_icon.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" />
          <p>
            I&apos;m a frontend developer from California, USA with 10 years of
            experience in multiple companies like Microsoft, Apple, Tesla
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2024 Alex Bennett. All Rights Reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
