"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import PopupModal from '../components/popup/PopupModal';
import Navbar from '../components/navbar/Navbar';

interface UserData {
  username: string;
  role: string; // Add role to UserData
}

interface UserProfileProps {
  params: {
    id: string;
  };
}

const UserProfile: React.FC<UserProfileProps> = ({ params }: UserProfileProps) => {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [bookedAmbulances, setBookedAmbulances] = useState<Array<any>>([]);

  const getBookedAmbulances = async () => {
    try {
      const response = await axios.get('/api/users/getBookedAmbulance');
      console.log('Booked Ambulances Response:', response.data);

      // Assuming the response contains an array of booked ambulances
      setBookedAmbulances(response.data.bookedAmbulances);
    } catch (error: any) {
      console.error(error.message);
      toast.error('Error fetching booked ambulances. Please try again.');
    }
  };

  useEffect(() => {
    getUserDetails();
    getBookedAmbulances(); // Fetch booked ambulances when the component mounts
  }, []);
  const getUserDetails = async () => {
    try {
      const userRes = await axios.get('/api/users/user');
      console.log('User Response:', userRes.data);

      let userData: UserData | null = null;

      if (userRes.data.data.role === 'admin') {
        try {
          const adminRes = await axios.get('/api/admin/admin');
          console.log('Admin Response:', adminRes.data);

          userData = { ...adminRes.data.data, role: 'admin' };
        } catch (adminError: any) {
          if (adminError.response && adminError.response.status === 403) {
            // Handle 403 (Forbidden) for admin endpoint
            console.log('User is not an admin');
            userData = { ...userRes.data.data, role: 'user' };
          } else {
            throw adminError;
          }
        }
      } else {
        userData = { ...userRes.data.data, role: 'user' };
      }

      console.log('Final UserData:', userData);
      setUserData(userData);
    } catch (error: any) {
      console.error(error.message);
      toast.error(error.message);
    }
  };


  useEffect(() => {
    getUserDetails();
  }, []);

  const handleLogout = () => {
    setIsLogoutModalOpen(true);
  };

  const handleCloseLogoutModal = () => {
    setIsLogoutModalOpen(false);
  };

  const handleConfirmLogout = async () => {
    try {
      await axios.get('/api/users/logout');
      toast.success('Logout successful');
      router.push('/login');
    } catch (error: any) {
      console.error(error.message);
      toast.error(error.message);
    }
  };


  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-secondary-color text-white rounded-md gap-10">
        <h1 className='text-black text-4xl font-bold my-4'>Your Profile</h1>
        <div className="flex flex-col items-center justify-center w-1/2 p-4 bg-primary-color  text-black mx-20 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold mb-4">
            Welcome, {userData?.username || 'Guest'}
          </h1>
          <hr className="border-black w-1/4 mb-6" />
          <h2 className="p-3 rounded bg-indigo-600 text-white">
            {userData?.role === 'admin' ? 'You are an admin!' : 'You are a user!'}
          </h2>
          <hr className="border-black w-1/4 my-6" />
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
          <button
            onClick={getUserDetails}
            className="bg-green-800 mt-4 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Refresh User Details
          </button>
        </div>

       {/* Booked Ambulance Box */}
<div className="flex flex-col p-4 bg-primary-color text-black mx-20 items-center justify-center rounded-lg shadow-md gap-3">
  <h2 className="text-2xl font-bold mb-4">Booked Ambulances </h2>
  <div className='flex flex-wrap gap-5 items-center justify-center'>
    {bookedAmbulances.length > 0 ? (
      bookedAmbulances.map((ambulance) => (
        <div key={ambulance._id} className="bg-white p-4 rounded-md shadow-md mb-4">
          <div className="flex flex-col">
            <span className="font-bold">Ambulance Type:</span> {ambulance.ambulanceId}
          </div>
          <div className="flex flex-col mt-2">
            <span className="font-bold">Patient Name:</span> {ambulance.patientName}
          </div>
          <div className="flex flex-col mt-2">
            <span className="font-bold">Pickup Location:</span> {ambulance.pickupLocation}
          </div>
          <div className="flex flex-col mt-2">
            <span className="font-bold">Destination:</span> {ambulance.destination}
          </div>
          <div className="flex flex-col mt-2">
            <span className="font-bold">Booking Date:</span> {new Date(ambulance.bookingDate).toLocaleString()}
          </div>
          {/* Add more key-value pairs as needed */}
        </div>
      ))
    ) : (
      <p className="text-lg text-center col-span-full">No ambulances booked.</p>
    )}
  </div>



        </div>
      </div>

      <PopupModal
        isOpen={isLogoutModalOpen}
        onClose={handleCloseLogoutModal}
        onConfirm={handleConfirmLogout}
        message="Are you sure you want to logout?"
      />
    </>
  );
};

export default UserProfile;