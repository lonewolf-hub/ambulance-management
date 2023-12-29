import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import AddAmbulanceComponent from '../components/add-ambulance/AddAmbulanceComponent'

const addAmbulancePage = () => {
  return (
    <>
      <Navbar/>
      <AddAmbulanceComponent/>
      <Footer/>
    </>
  )
}

export default addAmbulancePage
