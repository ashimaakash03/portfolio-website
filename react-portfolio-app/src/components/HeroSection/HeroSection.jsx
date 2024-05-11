import "./HeroSection.css";
import profile_img from "../../assets/images/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const HeroSection = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I&apos;m Alex Bennett,</span> frontend developer, based in USA.
      </h1>
      <p>
        I am a frontend developer from California, USA with 10 years of
        experience in multiple companies like Microsoft, Apple, Tesla
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">Download My Resume</div>
      </div>
    </div>
  );
};

export default HeroSection;
