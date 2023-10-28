import React from "react";
import "./myprojects.css";
// import Sliders from "./sliders";
import ImageSlider from "./sliders";

const Myprojects = () => {
  return (
    <div id="projectsection">
      <p className="projectpara">Projects</p> <br />
      <p className="projectdescription">
      Throughout my college journey, I immersed myself in a diverse range of academic and extracurricular activities. With a focus on both personal and professional growth, I honed my critical thinking, communication, and leadership skills, fostering a well-rounded and enriching college experience.
      </p>

     <ImageSlider></ImageSlider>
    </div>
  );
};

export default Myprojects;
