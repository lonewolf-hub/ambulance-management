import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HomeComponent from '../components/home/HomeComponent'
import FooterComponent from '../components/footer/Footer'
import Footer from '../components/footer/Footer'

const homePage = () => {
  return (
    <>
      <Navbar/>
      <HomeComponent/>
      <Footer/>
    </>
  )
}

export default homePage
