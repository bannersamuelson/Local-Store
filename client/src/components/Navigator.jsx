import { Link, useNavigate, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../Navbar.css'





export default function Navigator(props) {

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
    <div className="bg-white-900 h-8 my-8">
      <div className="bg-transparent p-0">
        <Link to='/store/dc' className="text-white bg-neutral-900 hover:bg-gray-900 focus:ring-4 focus:ring-neutral-900 font-medium text-sm px-5 py-2.5 text-center mr-2 dark:bg-neutral-900 dark:hover:bg-neutral-700 dark:focus:ring-neutral-700"
          onClick={() => {
            navigate('/store/dc')
          }}>Washington, DC</Link>
        <Link to='/store/md' className="text-white bg-neutral-900 hover:bg-gray-900 focus:ring-4 focus:ring-neutral-900 font-medium text-sm px-5 py-2.5 text-center mr-2 dark:bg-neutral-900 dark:hover:bg-neutral-700 dark:focus:ring-neutral-700"
          onClick={() => {
            navigate('/store/md')
          }}>Maryland</Link>
        <Link to='/store/md' className="text-white bg-neutral-900 hover:bg-gray-900 focus:ring-4 focus:ring-neutral-900 font-medium text-sm px-5 py-2.5 text-center mr-2 dark:bg-neutral-900 dark:hover:bg-neutral-700 dark:focus:ring-neutral-700"
          onClick={() => {
            navigate('/store/md')
          }}>Virginia</Link>
      </div>
    </div>
  )
}
