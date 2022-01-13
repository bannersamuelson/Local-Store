import './Store.css'
import Navbar from './components/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Stores from './components/Stores';
import StoreDetail from './components/StoreDetail';
import Spotlight from './components/Spotlight';
import { useState } from 'react';


function App() {

  const [area, setArea] = useState("")

  return (
    <div className='bg-grey-100 text-center'>
      <Navbar />
      <div className="bg-blue-100 p-0">

        <Link to='/store'><button className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 text-center mr-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700" onClick={() => setArea("DC")}>Washington, DC</button></Link>
        <button className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 text-center mr-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700" onClick={() => setArea("MD")}>Maryland</button>
        <button className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 text-center mr-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700" onClick={() => setArea("VA")}>Virginia</button>
      </div>
      <Routes>
        <Route path='/' element={<div className='bg-red-500'>area</div>} />
        <Route path="/home" element={<Spotlight />} />
        <Route path="/store" element={<Stores area={area} />} />
        <Route path="/store/:id" element={<StoreDetail />} />
        <Route path='/contact' element={<div>contact</div>} />
        <Route path='/cart' element={<div>cart</div>} />
      </Routes>

    </div>
  );
}

export default App;

// https://stackoverflow.com/questions/68255008/tailwind-css-text-over-image-problems