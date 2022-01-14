import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'

import api from '../services/apiConfig';



export default function StoreDetail() {
  const [store, setStore] = useState({})
  const [clothes, setClothes] = useState({})

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
        <div class="w-full">
          <div class="flex flex-wrap justify-center">

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

    </div>


  )
}

// https://daily-dev-tips.com/posts/tailwind-zooming-background-images/
