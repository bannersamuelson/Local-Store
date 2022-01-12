// import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import api from '../services/apiConfig';
// import newApi from '../services/apiConfig2'
// import '../Store.css'

// export default function Filter() {

//   const [stores, setStores] = useState([])

//   useEffect(() => {
//     const getStores = async () => {
//       const res = await api.get()
//       console.log(res.data.records)
//       setStores(res.data.records);
//     }
//     getStores()
//   }, [])


//   return (
//     <div>
//       {stores.map((store) => {
//         {
//           stores.filter(store => store.area.includes('DC')).map(filteredStore => {
//             return (
//               <div>
//                 {filteredStore}
//               </div>)
//           })
//         }
//       }
    
//       </div>
// }
