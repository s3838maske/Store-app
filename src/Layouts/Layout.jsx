import React, { useEffect, useState } from 'react'
import Navbar from '../Container/Navbar'
import Footer from '../Container/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout(props) {

  let{cart , wishList, isLogin} = props;

  return (
    <>
    <Navbar auth={isLogin} cartCount={cart} wishlistCount={wishList} />
    <Outlet/>
    <Footer/>
    </>
  )
}
