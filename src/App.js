import Navbar from "./Components/navbar";
import Introduction from "./Components/introduction";

import Skills from "./Components/skills";
import Myprojects from "./Components/myprojects";
import Education from "./Components/education";
import Experience from "./Components/experience";
import Contactme from "./Components/contactme";

function App() {
  return (
    <div className="App">
       <Navbar></Navbar>
       <Introduction></Introduction>
       <Skills></Skills>
       <Myprojects></Myprojects>
       <Education></Education>
       <Experience></Experience>
       <Contactme></Contactme>
       
    </div>
  );
}

export default App;
