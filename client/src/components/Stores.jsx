import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import api from '../services/apiConfig';
import newApi from '../services/apiConfig2'


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
      <ul>
        {stores.map((store) => {
          return (
            <li key={store.id}>
              <div>
                <h3>{store.fields.storeName}</h3>
                <img
                  style={{ width: "300px" }}
                  src={store.fields.storeImg}
                  alt={store.fields.storeName}
                />
                <h5>{store.fields.storeDescription}</h5>
                <Link to={`/store/${store.id}`}><button>View More</button> </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

