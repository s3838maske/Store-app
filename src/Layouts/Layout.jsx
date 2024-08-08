import React, { useEffect, useState } from 'react'
import Navbar from '../Container/Navbar'
import Footer from '../Container/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout(props) {

  let{count} = props;

  return (
    <>
    <Navbar countpass={count} />
    <Outlet/>
    <Footer/>
    </>
  )
}
