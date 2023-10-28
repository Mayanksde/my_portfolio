import React from "react";
import "./education.css";

const Education = () => {
  return (
    <div id="alleducation">
      <p className="projectpara">Education</p> <br />
      <p className="projectdescription">
      " Throughout my college years, I eagerly embraced a wide array of academic and extracurricular experiences. My focus on personal and professional growth allowed me to sharpen my critical thinking, communication, and leadership abilities. My time in school was defined by a love for learning and a commitment to excellence. Through challenging classes and active involvement in extracurriculars, I built a strong knowledge foundation, gained valuable skills, and formed lasting friendships, creating truly memorable school days. "
      </p>
      <br /> <br />
      <div class="box">
        <div class="box-content">
            <div class="boxfront">
                <p>B.Tech (Computer Science & Engineering) <br /><span>CGPA: 8.60</span></p>
            </div>
            <div class="boxback">
                <p>J.K. Institute of Applied Physics & Technology, University of Allahabad, Uttar Pradesh.</p>
            </div>
        </div>
        <div class="box-content2">
            <div class="boxfront2">
                <p>Intermediate <br /><span>Percentage: 80.80%</span></p>
            </div>
            <div class="boxback2">
                <p>Shiv Devi Saraswati Vidya Mandir Inter College Budaun, Uttar pradesh.</p>
            </div>
        </div>
        <div class="box-content3">
            <div class="boxfront3">
                <p>Highschool <br /><span>Percentage: 80.80%</span></p>
            </div>
            <div class="boxback3">
                <p>Shiv Devi Saraswati Vidya Mandir Inter College Budaun, Uttar pradesh.</p>
            </div>
        </div>
    </div>
    </div>
  );
};

export default Education;
