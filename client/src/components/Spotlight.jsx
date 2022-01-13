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
      <div class="relative w-full overflow-hidden">
        <img src="https://www.tpl.org/sites/default/files/4_2021_Arlington-Virginia_header.jpg" alt="alexandria" className="position-fixed z-40 w-full h-full" />
        <Link to='/store'><div class="absolute w-full py-2.5 bottom-20 inset-x-0  text-white text-5xl text-center">Explore DMV Shops</div>
        </Link>
      </div>
      <div className="grid-cols-3">
        <Link className="w-full" to='/store'>DC</Link>
        <Link className="w-full" to='/store'>MD</Link>
        <Link className="w-full" to='/store'>VA</Link>
      </div>


    </div >
  )
}
