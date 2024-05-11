import "./Navbar.css";
import logo from "../../assets/images/logo.svg";
import underline from "../../assets/images/nav_underline.svg";
import { useState } from "react";
const Navbar = () => {
  const [menu, setMenu] = useState("about");
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <ul className="nav-menu">
        <li>
          <p onClick={()=>{setMenu("home")}}>Home</p>
          {menu === "home" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <p onClick={()=>{setMenu("about")}}>About Me</p>
          {menu === "about" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <p onClick={()=>{setMenu("services")}}>Services</p>
          {menu === "services" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <p onClick={()=>{setMenu("works")}}>Latest Works</p>
          {menu === "works" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <p onClick={()=>{setMenu("contact")}}>Contact</p>
          {menu === "contact" ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default Navbar;
