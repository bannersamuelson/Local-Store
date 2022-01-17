import { useEffect, useState } from 'react'
import { useNavigate, Routes, Route, Link, Navigate } from "react-router-dom";
import axios from 'axios';
import api from '../services/apiConfig';
import newApi from '../services/apiConfig2'


export default function Navigator(props) {
  const [store, setStore] = useState({})
  const [stores, setStores] = useState([])
  const [filter, setFilter] = useState([])
  const [area, setArea] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    handleFilter();
  }, [props.area, stores])


  useEffect(() => {
    const getStores = async () => {
      const res = await api.get()
      console.log(res.data.records)
      setStores(res.data.records);
      setFilter(res.data.records)
    }
    getStores()
  }, [])

  const handleFilter = () => {
    let storeFilter = stores.filter(store => {
      if (store.fields.area === props.area) {
        return store
      }
    })
    setFilter(storeFilter);
  }

  return (
    <div>
      <div className="bg-blue-100 p-0">

        <button className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 text-center mr-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700"
          onClick={() => {
            props.setArea("DC")
            navigate('/store/dc')
          }}>Washington, DC</button>
        <button className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 text-center mr-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700"
          onClick={() => {
            props.setArea("MD")
            navigate('/store/md')
          }}>Maryland</button>
        <button className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 text-center mr-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700"
          onClick={() => {
            props.setArea("VA")
          }}>Virginia</button>
        <button className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 text-center mr-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700" onClick={() => setFilter(stores)}>View All</button>
      </div>
    </div>
  )
}
