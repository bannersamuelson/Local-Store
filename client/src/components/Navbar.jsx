import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <Link to='/'><h1>Home</h1></Link>
      <ul>
        <li><Link to='/stores'>Stores</Link></li>
        <li><Link to='/clothing'>Clothing</Link></li>
        <li><Link to='/contact us'>Contact</Link></li>
        <li><Link to='/cart'>cart</Link></li>
      </ul>
    </div>
  )
}
