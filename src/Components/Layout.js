import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header/Header'

const Layout = ({input,setInput,OnSubmit}) => {
  return (
    <>
        <Header input={input} setInput={setInput} OnSubmit={OnSubmit}/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout