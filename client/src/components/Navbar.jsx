import { Link } from 'react-router-dom'
import '../Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='container nav-container'>
        <input class="checkbox" type="checkbox" name="" id="" />
        <div class="hamburger-lines">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div>
        <div class="menu-items">
          <Link to='/'><h1>Home</h1></Link>
          <ul>
            <li><Link to='/store'>Stores</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
