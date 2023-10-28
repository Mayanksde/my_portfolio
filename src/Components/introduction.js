import React from "react";
import "./introduction.css";
import mayankimg from "../Assets/mayank-image.jpg";

const Introduction = () => {
  return (
    <section id="intro">
      <div className="introleft">
        <span className="hello">Hello,</span>
        <span className="introtext">
          I'm <span className="introname">Mayank Mishra</span> <br /> Web
          Developer{" "}
        </span>
        <p className="intropara">
          I am a skilled and passionate web developer with experience in
          creating <br /> visually appealing and user-friendly websites.
        </p>
        <button className="hire">Hire me</button>
      </div>
      <div>
        <p className="introparamobile">
        Hey there, I'm Mayank Mishra, I'm a final year B.Tech student and full stack developer who loves transforming ideas into engaging digital experiences. Join me as I showcase my journey through a collection of projects that blend creativity and technology.
        </p>
      </div>
      <div className="introright">
        <img className="userimg" src={mayankimg} alt="" />
      </div>
    </section>
  );
};

export default Introduction;
