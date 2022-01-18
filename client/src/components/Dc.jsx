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

    <div>
      <Navigator />
      <div className="w-full p-10 grid grid-cols-3 gap-4">

        <div className="w-full">
          <div className="flex flex-wrap justify-center">
            <div className="relative w-auto h-72 overflow-hidden">
              <img src="https://www.thegrahamgeorgetown.com/wp-content/uploads/2020/11/Graham-RTO-2017-4.jpg" alt="graham georgetown rooftop" className="position-fixed z-40 w-full h-full" />

              <div>
                <a href="https://www.therooftopguide.com/rooftop-bars-in-washington.html" target="_blank" className="absolute w-full py-2.5 bottom-20 inset-x-0  text-white text-5xl text-center">DC Rooftop Restaurants </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-wrap justify-center">
            <div className="relative w-auto h-72 overflow-hidden">
              <img src="https://scwcontent.affino.com/AcuCustom/Sitename/DAM/016/Washingtn_at_night_-_AdobeStock_182500142_-_SCW.jpg" alt="capitol building" className="position-fixed z-40 w-full h-full" />

              <div>
                <a href="https://www.tripsavvy.com/dc-bars-and-nightlife-1039744" target="_blank" className="absolute w-full py-2.5 bottom-20 inset-x-0  text-white text-5xl text-center">Nightlife</a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full justify-center">
          <div>
            <div className="relative w-auto h-72 overflow-hidden">
              <img src="https://cdn.vox-cdn.com/thumbor/EYCxkN9iKw3RrsWotwfftMXGQZ8=/0x0:5000x3750/1200x900/filters:focal(0x0:5000x3750)/cdn.vox-cdn.com/uploads/chorus_image/image/54199619/shutterstock_522513271.0.jpg" alt="graham georgetown rooftop" className="position-fixed z-40 w-full h-full" />

              <div>
                <a href="https://freetoursbyfoot.com/washington-dc-tours/things-to-do-in-dc/" target="_blank" className="absolute w-full py-2.5 bottom-20 inset-x-0  text-white text-5xl text-center">Things to do in DC</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-4xl text-center">Support DC Stores</h1>
      </div>
      {
        stores.map((store) => {
          if (store.fields.area === "DC") {
            return (
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
            )

          }
        })
      }
    </div >
  )
}
