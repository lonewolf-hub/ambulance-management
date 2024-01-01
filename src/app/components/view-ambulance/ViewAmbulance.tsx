"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Ambulance {
  _id: string;
  ambulanceType: string;
  ambulanceNumber: string;
  hospital: string;
  bedAvailability: number;
  currentLocation: string;
  driverName: string;
  driverContact: string;
  isAvailable: boolean;
  __v: number;
}

const ViewAmbulance: React.FC = () => {
  const [ambulances, setAmbulances] = useState<Ambulance[]>([]);

  useEffect(() => {
    // Fetch ambulances from the API
    const fetchAmbulances = async () => {
      try {
        const response = await axios.get<{ ambulances: Ambulance[] }>('http://localhost:3000/api/users/getAllAmbulance');
        setAmbulances(response.data.ambulances);
      } catch (error) {
        console.error('Error fetching ambulances:', error);
      }
    };

    fetchAmbulances();
  }, []);

  return (
    <div className="bg-secondary-color min-h-screen p-8 text-black">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">View Ambulances</h1>

        {/* Ambulance Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {ambulances.map((ambulance) => (
            <div key={ambulance._id} className="p-6 border border-primary-color rounded-md shadow-md">
              <h2 className="text-xl font-bold mb-2">{ambulance.ambulanceType}</h2>
              <div className="mb-4">
                <p>Hospital: {ambulance.hospital}</p>
                <p>Availability: {ambulance.isAvailable ? 'Available' : 'Not Available'}</p>
                <p>Bed Availability: {ambulance.bedAvailability}</p>
                <p>Current Location: {ambulance.currentLocation}</p>
                <p>Driver Name: {ambulance.driverName}</p>
                <p>Driver Contact: {ambulance.driverContact}</p>
                {/* Add more details as needed */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewAmbulance;
