import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
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
              <img src="https://cdn.vox-cdn.com/thumbor/iFaqWymN2OOgC-0PCjxIXBew2Jc=/0x0:2000x1335/1200x900/filters:focal(840x508:1160x828)/cdn.vox-cdn.com/uploads/chorus_image/image/59446887/umbrella_view.20.jpg" alt="maryland rooftop" className="position-fixed z-40 w-full h-full" />

              <div>
                <a href="https://www.onlyinyourstate.com/maryland/rooftop-dining-md/" rel="noreferrer" target="_blank" className="absolute w-full py-2.5 bottom-20 inset-x-0  text-white text-5xl text-center">Maryland Rooftop Restaurants </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-wrap justify-center">
            <div className="relative w-auto h-72 overflow-hidden">
              <img src="https://www.tripsavvy.com/thmb/Unbv8Zv3prfIiQSK77yX2AEE1oM=/2190x1369/filters:fill(auto,1)/baltimore---inner-harbor-867925060-c26cb3aedf574c99943f8a81b33c7bb6.jpg" alt="baltimore harbor" className="position-fixed z-40 w-full h-full" />

              <div>
                <a href="https://bestthingsmd.com/bars/" rel="noreferrer" target="_blank" className="absolute w-full py-2.5 bottom-20 inset-x-0  text-white text-5xl text-center">Nightlife</a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full justify-center">
          <div>
            <div className="relative w-auto h-72 overflow-hidden">
              <img src="https://a.cdn-hotels.com/gdcs/production123/d1709/6bb313ce-e3ab-475e-a015-7d45ff2c1235.jpg" alt="ferris wheel" className="position-fixed z-40 w-full h-full" />

              <div>
                <a href="https://www.busytourist.com/fun-things-to-do-in-maryland/" rel="noreferrer" target="_blank" className="absolute w-full py-2.5 bottom-20 inset-x-0  text-white text-5xl text-center">Things to do in Maryland</a>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div>
        {
          stores.forEach((store) => {
            if (store.fields.area === "MD") {
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
