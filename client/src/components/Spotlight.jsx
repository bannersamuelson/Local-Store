import { useEffect, useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import api from '../services/apiConfig';


export default function Spotlight(props) {
  const [store, setStore] = useState({})
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
          <Link to='/store/dc'>
            <div className="absolute w-full py-2.5 bottom-20 inset-x-0  text-white text-5xl text-center">Explore DMV</div>
          </Link>
        </div>
      </div>
      {/* DC Info */}
      {/* <div className="grid grid-cols-3"> */}

      <div className="w-full p-10 grid grid-cols-1">
        <div className="w-full">
          <div className="flex flex-wrap justify-center">

            <div onClick={() => {
              navigate('/store/dc')
            }} className="card-zoom">
              <div className="w-full card-zoom-image bg-DC cursor-pointer"></div>
              <h1 className="card-zoom-text cursor-pointer">DC</h1>
            </div>
            <div onClick={() => {

              navigate('/store/md')
            }} className="card-zoom">
              <div className="w-full card-zoom-image bg-MD cursor-pointer"></div>
              <h1 className="card-zoom-text cursor-pointer">MD</h1>
            </div>

            <div onClick={() => {
              navigate('/store/va')
            }} className="card-zoom">
              <div className="w-full card-zoom-image bg-VA cursor-pointer"></div>
              <h1 className="card-zoom-text cursor-pointer">VA</h1>
            </div>
          </div>
        </div >
      </div>
      <div>
        <div className="relative w-full overflow-hidden">
          <img src="https://www.thegrahamgeorgetown.com/wp-content/uploads/2020/11/Graham-RTO-2017-4.jpg" alt="graham georgetown rooftop" className="position-fixed z-40 w-full h-full" />
          <Link to='/store/dc'>
            <div className="absolute w-full py-2.5 bottom-20 inset-x-0  text-white text-5xl text-center">Explore DC</div>
          </Link>
        </div>
      </div>

    </div >


  )
}

// https://daily-dev-tips.com/posts/tailwind-zooming-background-images/
