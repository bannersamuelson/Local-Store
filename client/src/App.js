import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Stores from './components/Stores';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Store Spotlight</div>} />
        <Route path="/stores" element={<Stores />} />
        <Route path='/contact' element={<div>contact</div>} />
        <Route path='/cart' element={<div>cart</div>} />
      </Routes>

    </div>
  );
}

export default App;
