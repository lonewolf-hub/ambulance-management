import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import ViewAmbulance from '../components/view-ambulance/ViewAmbulance'

const viewAmbulancepage = () => {
  return (
    <>
     <Navbar/>
      <ViewAmbulance/>
     <Footer/>
    </>
  )
}

export default viewAmbulancepage
