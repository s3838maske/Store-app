import React from 'react'
import Navbar from '../Container/Navbar'
import Footer from '../Container/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
