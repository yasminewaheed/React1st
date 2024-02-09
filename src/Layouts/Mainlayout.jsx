import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Media from '../components/Media/Media'
import Footer from '../components/Footer/Footer'

export default function Mainlayout() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Media />
      <Footer/>
    </>
  )
}

