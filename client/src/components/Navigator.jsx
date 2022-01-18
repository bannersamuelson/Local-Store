import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../Navbar.css'





export default function Navigator(props) {

  const [isActive, setActive] = useState(false);
  const navigate = useNavigate()



  useEffect(() => {
    handleFilter();
  }, [props.area, stores])

  return (
    <div className="bg-white-900 h-8 my-8">
      <div className="bg-transparent p-0">
        <Link to='/store/dc' className="text-slate-50 bg-neutral-900 hover:bg-gray-900 focus:ring-4 focus:ring-neutral-900 font-medium text-sm px-5 py-2.5 text-center mr-2 dark:bg-neutral-900 dark:hover:bg-neutral-700 dark:focus:ring-neutral-700"
          onClick={() => {
            navigate('/store/dc')
          }}>Washington, DC</Link>
        <Link to='/store/md' className="text-slate-50 bg-neutral-900 hover:bg-gray-900 focus:ring-4 focus:ring-neutral-900 font-medium text-sm px-5 py-2.5 text-center mr-2 dark:bg-neutral-900 dark:hover:bg-neutral-700 dark:focus:ring-neutral-700"
          onClick={() => {
            navigate('/store/md')
          }}>Maryland</Link>
        <Link to='/store/va' className="text-slate-50 bg-neutral-900 hover:bg-gray-900 focus:ring-4 focus:ring-neutral-900 font-medium text-sm px-5 py-2.5 text-center mr-2 dark:bg-neutral-900 dark:hover:bg-neutral-700 dark:focus:ring-neutral-700"
          onClick={() => {
            navigate('/store/va')
          }}>Virginia</Link>
      </div>
    </div>
  )
}
