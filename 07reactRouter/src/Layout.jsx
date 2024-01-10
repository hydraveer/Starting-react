import React from 'react'
import Header from './component/header/header/header'
import Footer from './component/header/footer/footer'
import {Outlet} from 'react-router-dom'
function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout