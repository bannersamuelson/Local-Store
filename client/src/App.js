import './App.css';
import './Store.css'
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Stores from './components/Stores';
import StoreDetail from './components/StoreDetail';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Store Spotlight</div>} />
        <Route path="/store" element={<Stores />} />
        <Route path="/store/:id" element={<StoreDetail />} />
        <Route path='/contact' element={<div>contact</div>} />
        <Route path='/cart' element={<div>cart</div>} />
      </Routes>

    </div>
  );
}

export default App;
