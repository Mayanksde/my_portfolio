import React from 'react'
import './skills.css'

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillstitle'>Skills</span> <br />
        <span className='skilldescription'>"I'm a passionate web developer who excels at crafting visually appealing and user-friendly websites. My journey in web development is a fusion of creativity and functionality. I take pride in creating websites that look great and provide a superb user experience, helping brands shine in the digital world."</span> <br /><br />
        
           <div className="allskillbar">
                <div className="skillone">
                  <div className="skillonetitle">HTML</div>
                  <div className="skilloneline"><div className='firstline'></div></div>
                </div>
                <div className="skillone">
                  <div className="skillonetitle">CSS</div>
                  <div className="skilloneline"><div className='secondline'></div></div>
                </div>
                <div className="skillone">
                  <div className="skillonetitle">JavaScript</div>
                  <div className="skilloneline"><div className='thirdline'></div></div>
                </div>
                <div className="skillone">
                  <div className="skillonetitle">React</div>
                  <div className="skilloneline"><div className='fourthline'></div></div>
                </div>
                <div className="skillone">
                  <div className="skillonetitle">Tailwind CSS</div>
                  <div className="skilloneline"><div className='fifthline'></div></div>
                </div>
                <div className="skillone">
                  <div className="skillonetitle">Bootstrap</div>
                  <div className="skilloneline"><div className='sixline'></div></div>
                </div>
                <div className="skillone">
                  <div className="skillonetitle">C++</div>
                  <div className="skilloneline"><div className='sevenline'></div></div>
                </div>
                <div className="skillone">
                  <div className="skillonetitle">C Language</div>
                  <div className="skilloneline"><div className='eightline'></div></div>
                </div>
                <div className="skillone">
                  <div className="skillonetitle">Java</div>
                  <div className="skilloneline"><div className='nineline'></div></div>
                </div>
           </div>

           {/* for mobile */}
           <div className="allskillbarmob">
                <div className="skillonemob">
                  <div className="skillonetitlemob">HTML</div>
                  <div className="skillonelinemob"><div className='firstlinemob'></div></div>
                </div> <br />
                <div className="skillonemob">
                  <div className="skillonetitlemob">CSS</div> 
                  <div className="skillonelinemob"><div className='secondlinemob'></div></div>
                </div><br />
                <div className="skillonemob">
                  <div className="skillonetitlemob">JavaScript</div>
                  <div className="skillonelinemob"><div className='thirdlinemob'></div></div>
                </div><br />
                <div className="skillonemob">
                  <div className="skillonetitlemob">React</div> 
                  <div className="skillonelinemob"><div className='fourthlinemob'></div></div>
                </div><br />
                <div className="skillonemob">
                  <div className="skillonetitlemob">Tailwind CSS</div>
                  <div className="skillonelinemob"><div className='fifthlinemob'></div></div>
                </div><br />
                <div className="skillonemob">
                  <div className="skillonetitlemob">Bootstrap</div>
                  <div className="skillonelinemob"><div className='sixlinemob'></div></div>
                </div><br />
                <div className="skillonemob">
                  <div className="skillonetitlemob">C++</div>
                  <div className="skillonelinemob"><div className='sevenlinemob'></div></div>
                </div><br />
                <div className="skillonemob">
                  <div className="skillonetitlemob">C Language</div>
                  <div className="skillonelinemob"><div className='eightlinemob'></div></div>
                </div><br />
                <div className="skillonemob">
                  <div className="skillonetitlemob">Java</div>
                  <div className="skillonelinemob"><div className='ninelinemob'></div></div>
                </div>
           </div>
    </section>
  )
}

export default Skills
