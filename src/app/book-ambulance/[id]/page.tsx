"use client"
import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import BookAmbulanceForm from '../../components/book-ambulance-form/BookAmbulanceForm'
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
interface Props{
  params : {
      id : string
  }}

const ambulanceBookingPage =({params:{id}}:Props) => {
  const router = useRouter();
  return (
    <>
      <Navbar/>
      <BookAmbulanceForm ambulanceId={id} onBookingSuccess={() => router.push('/')}/>
      <Footer/>
    </>
  )
}

export default ambulanceBookingPage
