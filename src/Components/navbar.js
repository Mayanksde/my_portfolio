import React, {useState} from 'react'
import './navbar.css'
import mobmenu from '../Assets/mobicon.png'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
        <h1 className='navhead'>ᗰᗩYᗩᑎK</h1>
        <div className="desktopmenu">
            <a className='hometag' href="#intro">Home</a>
            <a className='skilltag' href="#skills">Skills</a>
            <a className='projecttag' href="#projectsection">Projects</a>
            <a className='experiencetag' href="#allexperience">Experience</a>
        </div>
        <button className="desktopmenubutton">
            <a href="#allcontact">Contact Me</a>
        </button>

        <img className='mobmenu' src={mobmenu} alt="" onClick={()=>setShowMenu(!showMenu)} />
        <div className="mobilemenu" style={{display:showMenu?'flex':'none'}}>
            <a href="#intro" onClick={()=>setShowMenu(false)}>Home</a>
            <a href="#skills" onClick={()=>setShowMenu(false)}>Skills</a>
            <a href="#projectsection" onClick={()=>setShowMenu(false)}>Projects</a>
            <a href="#allexperience" onClick={()=>setShowMenu(false)}>Experience</a>
            <a href="#allcontact" onClick={()=>setShowMenu(false)}>Contact me</a>
        </div>
    </nav>
  )
}

export default Navbar
