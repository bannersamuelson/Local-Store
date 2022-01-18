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


    <div className="bg-stone-700">
      <div className="navBar">
        <div className="container nav-container">
          <Link to='/'><img className="w-[150px] object-center" src={'https://i.ibb.co/2SDHPVN/supportinglocals-logo.png'}></img></Link>

          <button onClick={handleToggle}>
            <div className={`container ${isActive ? "change" : ""}`}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </button>


          <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
            <li><Link to='/' onClick={handleToggle}>Home</Link></li>
            <li>
              <Link to='/store/dc' >DC</Link>
            </li>
            <li>
              <Link to='/store/md'>MD</Link>
            </li>
            <li>
              <Link to='/store/va'>VA</Link>
            </li>


            <li><Link to='/reviews' onClick={handleToggle}>User Reviews</Link></li>
          </ul>

        </div>
      </div>
    </div >
  )
}