import { useEffect, useState } from 'react';
import { useNavigate, Routes, Route, Link, Navigate } from "react-router-dom";
import api from '../services/apiConfig';
import Stores from '../components/Stores';


export default function Spotlight() {
  const [store, setStore] = useState({})
  const [clothes, setClothes] = useState({})
  const [area, setArea] = useState("")
  const navigate = useNavigate()

  // store api
  useEffect(() => {
    const getStore = async () => {
      const res = await api.get()
      console.log(res.data.records)
      setStore(res.data.records[0])
    }
    getStore()
  }, []);

  if (!store.fields) {
    return <div>Loading!!!</div>
  }

  return (
    <div>
      <div>
        <div className="relative w-full overflow-hidden">
          <img src="https://www.tpl.org/sites/default/files/4_2021_Arlington-Virginia_header.jpg" alt="alexandria" className="position-fixed z-40 w-full h-full" />
          <Link to='/store'>
            <div className="absolute w-full py-2.5 bottom-20 inset-x-0  text-white text-5xl text-center">Explore DMV Shops</div>
          </Link>
        </div>
      </div>
      {/* DC Info */}
      {/* <div className="grid grid-cols-3"> */}

      <div className="w-full p-10 grid grid-cols-1">
        <div className="w-full">
          <div className="flex flex-wrap justify-center">
            <button className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 text-center mr-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700"
              onClick={() => {
                setArea("DC")
                navigate('/store')
              }}>Washington, DC</button>

            <div className="card-zoom">
              <div className="w-full card-zoom-image bg-DC"></div>
              <h1 className="card-zoom-text">DC</h1>
            </div>
            <div className="card-zoom">
              <div className="w-full card-zoom-image bg-MD"></div>
              <h1 className="card-zoom-text">MD</h1>
            </div>

            <div className="card-zoom">
              <div className="w-full card-zoom-image bg-VA"></div>
              <h1 className="card-zoom-text">VA</h1>
            </div>
          </div>
        </div >
      </div>

    </div >


  )
}

// https://daily-dev-tips.com/posts/tailwind-zooming-background-images/
