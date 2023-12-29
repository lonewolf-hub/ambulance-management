import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import SeeAmbulanceComponent from '../components/see-ambulance/SeeAmbulanceComponent'

const seeAmbulancePage = () => {
  return (
    <>
    <Navbar/>
    <SeeAmbulanceComponent/>
      <Footer/>
    </>
  )
}

export default seeAmbulancePage
