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
      <h3>RECOMMENDED</h3>
      <a href={store.fields.address} target='_blank'><img
        style={{ width: "300px" }}
        src={store.fields.storeImg}
        alt={store.fields.storeName}
      /></a>
      <h5>{store.fields.storeDescription}</h5>
      <p>Address: {store.fields.storeAddress}</p>
      <a href={store.fields.urlAddress} target='_blank'>Company Website</a>


    </div>
  )
}
