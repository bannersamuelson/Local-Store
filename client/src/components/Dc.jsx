import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import api from '../services/apiConfig';
import Navigator from './Navigator';


export default function Dc(props) {
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

    <div className="bg-stone-800">
      <Navigator />
      <div className="md:grid-cols-3 w-full p-10 grid grid-cols-1 gap-4">

        <div className="w-full">
          <div className="flex flex-wrap justify-center">
            <div className="relative w-auto h-72 overflow-hidden">
              <img src="https://www.thegrahamgeorgetown.com/wp-content/uploads/2020/11/Graham-RTO-2017-4.jpg" alt="graham georgetown rooftop" className="position-fixed z-40 w-full h-full" />

              <div>
                <a href="https://www.therooftopguide.com/rooftop-bars-in-washington.html" rel="noreferrer" target="_blank" className="absolute w-full py-2.5 bottom-20 inset-x-0  text-white text-5xl text-center">DC Rooftop Restaurants </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-wrap justify-center">
            <div className="relative w-auto h-72 overflow-hidden">
              <img src="https://scwcontent.affino.com/AcuCustom/Sitename/DAM/016/Washingtn_at_night_-_AdobeStock_182500142_-_SCW.jpg" alt="capitol building" className="position-fixed z-40 w-full h-full" />

              <div>
                <a href="https://www.tripsavvy.com/dc-bars-and-nightlife-1039744" rel="noreferrer" target="_blank" className=" absolute w-full py-2.5 bottom-20 inset-x-0  text-white text-5xl text-center">Nightlife</a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full justify-center">
          <div>
            <div className="relative w-auto h-72 overflow-hidden">
              <img src="https://cdn.vox-cdn.com/thumbor/EYCxkN9iKw3RrsWotwfftMXGQZ8=/0x0:5000x3750/1200x900/filters:focal(0x0:5000x3750)/cdn.vox-cdn.com/uploads/chorus_image/image/54199619/shutterstock_522513271.0.jpg" alt="graham georgetown rooftop" className="position-fixed z-40 w-full h-full" />

              <div>
                <a href="https://freetoursbyfoot.com/washington-dc-tours/things-to-do-in-dc/" rel="noreferrer" target="_blank" className="absolute w-full py-2.5 bottom-20 inset-x-0  text-white text-5xl text-center">Things to do in DC</a>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div>
        {
          stores.map((store) => {
            if (store.fields.area === "DC") {
              return (
                <div>
                  <div className="flex items-center p-5 h-30 content-center m-10 rounded bg-slate-50">
                    <div className="sm:flex content-center m-10 rounded bg-neutral-600" key={store.id}>
                      <Link to={`/store/${store.id}`}><img
                        className="max-w-sm h-200"
                        src={store.fields.storeImg}
                        alt={store.fields.storeName}
                      /></Link>
                      <div className="bg-slate-50 p-5"><h5 className="justify-center items-center text-xl">{store.fields.storeDescription}</h5>
                        <Link className="m-5 inline-block bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded items-center" to={`/store/${store.id}`}><button>View More</button></Link>
                      </div>
                    </div>
                  </div>
                </div>
              )

            } else {
              return null
            }
          })
        }
      </div>
    </div >
  )
}
