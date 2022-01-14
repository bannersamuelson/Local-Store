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
      <div className="card-zoom grid grid-cols-3">
        <div className="card-zoom-image bg-DC w-full h-full object-cover hover:shadow-gray-50">
          <h1 className="card-zoom-text">DC</h1>
          <Link to='/store'>g

          </Link>
        </div>


        <img className="w-full h-full object-cover" src="https://i.pinimg.com/originals/1e/ec/07/1eec0725909020027d20686786906b63.jpg" alt="baltimore harbor" />
        <img className="w-full h-full object-cover" src="https://s26551.pcdn.co/wp-content/uploads/2020/04/2020-04-21-ARL-Features-28.jpg" alt="arlington viriginia" />

        {/* <Link className="absolute w-full py-2.5 bottom-2 inset-x-0  text-white text-5xl text-center" to='/store'>MD</Link>
        <Link className="absolute w-full py-2.5 bottom-2 inset-x-0  text-white text-5xl text-center" to='/store'>VA</Link> */}
      </div>
    </div>



  )
}

// https://daily-dev-tips.com/posts/tailwind-zooming-background-images/
