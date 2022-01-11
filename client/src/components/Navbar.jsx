import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../Navbar.css'





export default function Navbar() {

  const [navbarOpen, setNavbarOpen] = useState(false)
  const [isActive, setActive] = useState(false);

  // const ToggleClass = () => {
  //   setActive(!isActive);
  // };

  const handleToggle = () => {
    setNavbarOpen(prevToggle => !prevToggle)
    setActive(!isActive);
  }

  return (

    <nav>
      <div className='navBar'>
        <div className="container nav-container">

          <button onClick={handleToggle}>
            <div className={`container ${isActive ? "change" : ""}`}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </button>


          <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
            <li><Link to='/' onClick={handleToggle}>Home</Link></li>
            <li><Link to='/store' onClick={handleToggle}>Stores</Link></li>
            <li><Link to='/contact' onClick={handleToggle}>Contact</Link></li>
          </ul>

        </div>
      </div>
    </nav >
  )
}
