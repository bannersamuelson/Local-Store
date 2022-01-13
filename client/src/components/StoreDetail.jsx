import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'

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

  // // Clothing api
  // useEffect(() => {
  //   const getClothing = async () => {
  //     const res = await newApi.get()
  //     console.log(res.data)
  //     setClothing(res.data);
  //   }
  //   getClothing()
  // }, [])

  if (!store.fields) {
    return <div>Loading!!!</div>
  }

  return (
    <div>
      <h3 className="flex" >{store.fields.storeName}</h3>
      <a href={store.fields.address} target='_blank'><img
        style={{ width: "300px" }}
        src={store.fields.storeImg}
        alt={store.fields.storeName}
      /></a>
      <h5 className="flex">{store.fields.storeDescription}</h5>
      <p>Address: {store.fields.storeAddress}</p>
      <a href={store.fields.urlAddress} target='_blank'>Company Website</a>
      <Link to='/store'>Back</Link>

    </div>
  )
}
