import React from 'react'
import Header from '../componenet/Header'
import Navbar from '../componenet/Navbar'
import Home from '../componenet/Home'
import Welcome from '../componenet/Welcome'
import Footer1 from '../componenet/Footer1'
import Footer from '../componenet/Footer'

function Homepage() {
  return (
    <div>
    <Header/>
    <Navbar/>
    <Home/>
    <Welcome/>
    <Footer1/>
    <Footer/>
    </div>
  )
}

export default Homepage