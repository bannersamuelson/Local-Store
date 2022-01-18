import { useEffect, useState } from 'react'
import { useNavigate, Routes, Route, Link, Navigate } from "react-router-dom";
import axios from 'axios';
import api from '../services/apiConfig';
import newApi from '../services/apiConfig2'
import Navigator from './Navigator';


export default function Va(props) {
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
              <img src="https://northernvirginiamag.com/wp-content/uploads/2019/06/canopy.jpg" alt="virginia rooftop" className="position-fixed z-40 w-full h-full" />

              <div>
                <a href="https://www.onlyinyourstate.com/virginia/rooftop-dining-virginia/</div>" target="_blank" className="absolute w-full py-2.5 bottom-20 inset-x-0  text-white text-5xl text-center">Virginia Rooftop Restaurants </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-wrap justify-center">
            <div className="relative w-auto h-72 overflow-hidden">
              <img src="https://res.cloudinary.com/simpleview/image/upload/v1552586925/clients/norfolk/downtown_at_night_3530dce1-7235-4ca7-84a2-311963582c2c.png" alt="Norfolk virignia" className="position-fixed z-40 w-full h-full" />

              <div>
                <a href="https://www.visitalexandriava.com/things-to-do/nightlife/" target="_blank" className=" absolute w-full py-2.5 bottom-20 inset-x-0  text-white text-5xl text-center">Nightlife</a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full justify-center">
          <div>
            <div className="relative w-auto h-72 overflow-hidden">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/48/The_Skyline_of_the_Virginia_Beach_Oceanfront.jpg" alt="virginia beach" className="position-fixed z-40 w-full h-full" />

              <div>
                <a href="https://www.planetware.com/tourist-attractions/virginia-usva.htm" target="_blank" className="absolute w-full py-2.5 bottom-20 inset-x-0  text-white text-5xl text-center">Things to do in Virignia</a>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div>
        {
          stores.map((store) => {
            if (store.fields.area === "VA") {
              return (
                <div>
                  <div>
                    <div className="flex justify-center items-center p-5 h-30 content-center m-10 rounded bg-neutral-600" key={store.id}>
                      <Link className="" to={`/store/${store.id}`}><img
                        style={{ width: "300px" }}
                        src={store.fields.storeImg}
                        alt={store.fields.storeName}
                      /></Link>
                      <div className="m-5"><h5 className="justify-center items-center text-xl">{store.fields.storeDescription}</h5>
                        <Link className="m-5 inline-block bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded items-center" to={`/store/${store.id}`}><button>View More</button></Link>
                      </div>
                    </div>
                  </div>
                </div>
              )

            }
          })
        }
      </div>
    </div >
  )
}
