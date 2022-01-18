import Navbar from './components/Navbar';
import { useNavigate, Routes, Route, Link, Navigate } from "react-router-dom";
import Stores from './components/Stores';
import StoreDetail from './components/StoreDetail';
import Spotlight from './components/Spotlight';
import { useState } from 'react';
import Dc from './components/Dc'
import Md from './components/Md';
import Va from './components/Va'
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import NewReview from './components/NewReview';

function App() {

  const [area, setArea] = useState("")
  const navigate = useNavigate()

  return (
    <div className='bg-zinc-800 text-center'>
      <Navbar setArea={setArea} />
      <Routes>
        <Route path="/" element={<Spotlight setArea={setArea} />} />
        <Route path="/store" element={<Stores setArea={setArea} area={area} />} />
        <Route path="/store/dc" element={<Dc setArea={setArea} area={area} />} />
        <Route path="/store/md" element={<Md setArea={setArea} area={area} />} />
        <Route path="/store/va" element={<Va setArea={setArea} area={area} />} />
        <Route path="/store/:id" element={<StoreDetail />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/reviews/new" element={<NewReview />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;

// https://stackoverflow.com/questions/68255008/tailwind-css-text-over-image-problems