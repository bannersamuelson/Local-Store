import Navbar from './components/Navbar';
import { useNavigate, Routes, Route, Link, Navigate } from "react-router-dom";
import Stores from './components/Stores';
import StoreDetail from './components/StoreDetail';
import Spotlight from './components/Spotlight';
import { useState } from 'react';


function App() {

  const [area, setArea] = useState("")
  const navigate = useNavigate()

  return (
    <div className='bg-grey-100 text-center'>
      <Navbar setArea={setArea} />
      <Routes>
        <Route path='/' element={<div className='bg-red-500'>area</div>} />
        <Route path="/home" element={<Spotlight setArea={setArea} />} />
        <Route path="/store" element={<Stores setArea={setArea} area={area} />} />
        <Route path="/store/:id" element={<StoreDetail />} />
        <Route path='/contact' element={<div>contact</div>} />
        <Route path='/cart' element={<div>cart</div>} />
      </Routes>

    </div>
  );
}

export default App;

// https://stackoverflow.com/questions/68255008/tailwind-css-text-over-image-problems