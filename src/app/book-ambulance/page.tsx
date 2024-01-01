import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import BookAmbulanceComponent from '../components/book-ambulance/BookAmbulanceComponent'

const bookAmbulancePage = () => {
  return (
    <>
     <Navbar/>
     <BookAmbulanceComponent/>
     <Footer/> 
    </>
  )
}

export default bookAmbulancePage
