import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <div id="allexperience">
      <p className="projectpara">Experience</p> <br />
      <p className="projectdescription">
        " Throughout my college years, I eagerly embraced a wide array of
        academic and extracurricular experiences. My focus on personal and
        professional growth allowed me to sharpen my critical thinking,
        communication, and leadership abilities. My time in school was defined
        by a love for learning and a commitment to excellence. Through
        challenging classes and active involvement in extracurriculars, I built
        a strong knowledge foundation, gained valuable skills, and formed
        lasting friendships, creating truly memorable school days. "
      </p> <br />
      <div className="experience1box">
        <h1>CodSoft</h1>
        <p>Web Development Intern</p>
        <p>August 2023 - September 2023</p>
        <ul>
          <li>
            Crafted an impressive scientific calculator with advanced math
            capabilities, with intuitive user interface using HTML, CSS, and
            JavaScript.
          </li>
          <li>
            Created captivating landing pages that engage users effectively
            through visually pleasing design and persuasive content, utilizing
            HTML and CSS.
          </li>
          <li>
            Designed an portfolio website using HTML, CSS, and creative web
            design, seamlessly blending captivating visuals with compelling
            content to showcase projects effectively.
          </li>
        </ul>
      </div>
      {/* <br /> */}
      <div className="experience1box">
        <h1>J.K. Institute of Applied Physics & Technology</h1>
        <p>August 2023 - Present</p>
        <ul>
          <li>
            Collaborated with a team of developers to design and implement new
            features in our official college website.
          </li>
          <li>Provide technical support and resolving issues as needed.</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
