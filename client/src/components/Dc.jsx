import React from 'react'
import { Link } from 'react-router-dom'
export default function Dc() {
  return (
    <div>
      <div className="relative w-full overflow-hidden">
        <img src="https://www.thegrahamgeorgetown.com/wp-content/uploads/2020/11/Graham-RTO-2017-4.jpg" alt="graham georgetown rooftop" className="position-fixed z-40 w-full h-full" />

        <div>
          <a href="https://www.therooftopguide.com/rooftop-bars-in-washington.html" target="_blank" className="absolute w-full py-2.5 bottom-20 inset-x-0  text-white text-5xl text-center">DC Rooftop Restaurants </a>
        </div>
      </div>
    </div>
  )
}
