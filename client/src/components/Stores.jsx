import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import api from '../services/apiConfig';
import newApi from '../services/apiConfig2'
import '../Store.css'
import Filter from './Filter';


export default function Stores() {

  const [stores, setStores] = useState([])


  useEffect(() => {
    const getStores = async () => {
      const res = await api.get()
      console.log(res.data.records)
      setStores(res.data.records);
    }
    getStores()
  }, [])


  return (
    <div>


      {stores.map((store) => {
        // if (store.area === 'DC') {
        return (
          <div>
            <div key={store.id} className="storeCSS" className='border'>
              <Link to={`/store/${store.id}`}><img
                style={{ width: "300px" }}
                src={store.fields.storeImg}
                alt={store.fields.storeName}
              /></Link>
              <h5>{store.fields.storeDescription}</h5>
              <Link to={`/store/${store.id}`}><button>View More</button></Link>
            </div>
          </div>
        )

      })}


    </div>
  )
}

