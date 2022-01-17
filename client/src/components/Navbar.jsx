import { Link, useNavigate, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../Navbar.css'





export default function Navbar(props) {

  const [navbarOpen, setNavbarOpen] = useState(false)
  const [isActive, setActive] = useState(false);
  const [stores, setStores] = useState([])
  const [filter, setFilter] = useState([])
  const navigate = useNavigate()
  const [area, setArea] = useState("")




  useEffect(() => {
    handleFilter();
  }, [props.area, stores])

  const handleToggle = () => {
    setNavbarOpen(prevToggle => !prevToggle)
    setActive(!isActive);
  }

  const handleFilter = () => {
    let storeFilter = stores.filter(store => {
      if (store.fields.area === props.area) {
        return store
      }
    })
    setFilter(storeFilter);
  }

  return (


    <div>
      <div className='navBar'>
        <div className="container nav-container">
          <Link to='/home'><img className="w-[250px]" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Mz0eMqya6lK_i9HTREbsrHKpdzrLGAP6mQ&usqp=CAU'}></img></Link>

          <button onClick={handleToggle}>
            <div className={`container ${isActive ? "change" : ""}`}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </button>


          <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
            <li><Link to='/home' onClick={handleToggle}>Home</Link></li>
            <li><Link to='/store' onClick={() => {
              setArea("DC")
              navigate('/store')
            }}>Stores</Link></li>
            <li><Link to='/contact' onClick={handleToggle}>Contact</Link></li>
          </ul>

        </div>
      </div>
    </div >
  )
}
