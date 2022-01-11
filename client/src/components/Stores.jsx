import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import api from '../services/apiConfig';


export default function Stores() {

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
    <div>
      yo
    </div>
  )
}
