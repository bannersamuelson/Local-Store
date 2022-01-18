import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'
import Navigator from './Navigator';

import api from '../services/apiConfig';


export default function StoreDetail() {
  const [store, setStore] = useState({})


  const { id } = useParams()

  // store api
  useEffect(() => {
    const getStore = async () => {
      const res = await api.get(`/${id}`)
      console.log(res.data)
      setStore(res.data)
    }
    getStore()
  }, []);

  if (!store.fields) {
    return <div>Loading!!!</div>
  }

  return (
    <div>
      <Navigator />
      <div className="flex items-center justify-items-center p-5 h-screen content-center m-10 rounded bg-neutral-600">
        <a href={store.fields.address} target='_blank'><img
          style={{ width: "500px" }}
          src={store.fields.storeImg}
          alt={store.fields.storeName}
        /></a>
        <h3>{store.fields.storeName}</h3>
        <h5 className="flex">{store.fields.storeDescription}</h5>
        <p>Address: {store.fields.storeAddress}</p>
        <div className="bg-neutral-900 my-8 p-2 text-slate-50">
          <a href={store.fields.urlAddress} target='_blank'>Company Website</a>
        </div>
      </div>
    </div>
  )
}
