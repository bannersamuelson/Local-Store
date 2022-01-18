import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import api from '../services/apiConfig';



export default function Stores(props) {

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
      {filter.map((store) => {
        return (
          <div>
            <div className="md:flex m-10 rounded bg-white" key={store.id}>
              <Link to={`/store/${store.id}`}><img
                style={{ width: "300px" }}
                src={store.fields.storeImg}
                alt={store.fields.storeName}
              /></Link>
              <div className="m-5"><h5 className="text-xl">{store.fields.storeDescription}</h5>
                <Link className="m-5 inline-block bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded items-center" to={`/store/${store.id}`}><button>View More</button></Link>
              </div>
            </div>
          </div>
        )

      })}


    </div>
  )
}

