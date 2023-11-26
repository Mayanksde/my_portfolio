import React from "react";
import "./contactme.css";
import insta from "../Assets/ins3.jpg";
import facebook from "../Assets/facebook.png";
import github from "../Assets/GitHub.png";
import linkedin from "../Assets/linkedin.png";

const Contactme = () => {
  return (
    <div id="allcontact">
      <p className="projectpara">Contact Me</p> <br />
      <div className="allbuttons">
        <div className="mybutton">
          <a href="https://www.instagram.com/mayankm0210/" target="blank">
            <img src={insta} alt="" />
          </a>
        </div>
        <div className="mybutton">
          <a href="https://www.facebook.com/profile.php?id=100080202590504" target="blank">
            <img src={facebook} alt="" />
          </a>
        </div>
        <div className="mybutton">
          <a href="https://github.com/Mayanksde" target="blank">
            <img src={github} alt="" />
          </a>
        </div>
        <div className="mybutton">
          <a href="https://www.linkedin.com/in/mayank-mishra-370902213/" target="blank">
            <img src={linkedin} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contactme;
