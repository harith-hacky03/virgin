import React, { useState } from 'react'
import Landing_page from './Components/Landing_page'
import Gallery_page from './Components/Gallery_page'
import Contact from './Components/Contact'
import Lenis from '@studio-freight/lenis'
import Services from './Components/Services'
import Footer from './Components/Footer'
import About from './Components/About'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const App = () => {
  useState(()=>{
    const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
  },[])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div className='overflow-hidden'>
        <Landing_page/>
        <Gallery_page/>
        <Services/>
        <Contact/>
        <Footer/>
      </div>,
    },

  ]);

  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default App