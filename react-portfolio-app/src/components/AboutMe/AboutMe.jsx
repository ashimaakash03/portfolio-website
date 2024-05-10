import "./AboutMe.css";
import theme_pattern from "../../assets/images/theme_pattern.svg";
import profile_img from "../../assets/images/profile_img.svg";

const AboutMe = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me...</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-paragraphs">
            <p>
              I am an experienced frontend developer with over a decade of
              professional experience in this field. Throughout my career, I
              have had the privilege of collaborating with prestigious
              organizations, contributing to their success and growth.
            </p>
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience, but also in the enthusiasm and dedication, I
              bring to each project.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML5 & CSS3</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>ReactJS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Angular</p>
              <hr style={{ width: "65%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
