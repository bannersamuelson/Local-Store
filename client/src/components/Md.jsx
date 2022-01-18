import { useEffect, useState } from 'react'
import { useNavigate, Routes, Route, Link, Navigate } from "react-router-dom";
import axios from 'axios';
import api from '../services/apiConfig';
import newApi from '../services/apiConfig2'
import Navigator from './Navigator';


export default function Dc(props) {
  const [stores, setStores] = useState([])
  const [filter, setFilter] = useState([])
  const [area, setArea] = useState("")
  const navigate = useNavigate()


  useEffect(() => {
    const getStores = async () => {
      const res = await api.get()
      console.log(res.data.records)
      setStores(res.data.records);
      setFilter(res.data.records)
    }
    getStores()
  }, [])


  return (

    <div className="bg-stone-800">
      <Navigator />
      <div className="w-full p-10 grid grid-cols-3 gap-4">

        <div className="w-full">
          <div className="flex flex-wrap justify-center">
            <div className="relative w-auto h-72 overflow-hidden">
              <img src="https://cdn.vox-cdn.com/thumbor/iFaqWymN2OOgC-0PCjxIXBew2Jc=/0x0:2000x1335/1200x900/filters:focal(840x508:1160x828)/cdn.vox-cdn.com/uploads/chorus_image/image/59446887/umbrella_view.20.jpg" alt="maryland rooftop" className="position-fixed z-40 w-full h-full" />

              <div>
                <a href="https://www.onlyinyourstate.com/maryland/rooftop-dining-md/" target="_blank" className="absolute w-full py-2.5 bottom-20 inset-x-0  text-white text-5xl text-center">Maryland Rooftop Restaurants </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-wrap justify-center">
            <div className="relative w-auto h-72 overflow-hidden">
              <img src="https://www.tripsavvy.com/thmb/Unbv8Zv3prfIiQSK77yX2AEE1oM=/2190x1369/filters:fill(auto,1)/baltimore---inner-harbor-867925060-c26cb3aedf574c99943f8a81b33c7bb6.jpg" alt="baltimore harbor" className="position-fixed z-40 w-full h-full" />

              <div>
                <a href="https://bestthingsmd.com/bars/" target="_blank" className="absolute w-full py-2.5 bottom-20 inset-x-0  text-white text-5xl text-center">Nightlife</a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full justify-center">
          <div>
            <div className="relative w-auto h-72 overflow-hidden">
              <img src="https://a.cdn-hotels.com/gdcs/production123/d1709/6bb313ce-e3ab-475e-a015-7d45ff2c1235.jpg" alt="ferris wheel" className="position-fixed z-40 w-full h-full" />

              <div>
                <a href="https://www.busytourist.com/fun-things-to-do-in-maryland/" target="_blank" className="absolute w-full py-2.5 bottom-20 inset-x-0  text-white text-5xl text-center">Things to do in Maryland</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-4xl text-center">Support Maryland Stores</h1>
      </div>

      {
        stores.map((store) => {
          if (store.fields.area === "MD") {
            return (
              <div>
                <div>
                  <div className="m-10 rounded bg-red-100 p-10" key={store.id}>
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
              </div>
            )

          }
        })
      }
    </div >
  )
}