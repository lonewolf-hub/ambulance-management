"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AmbulanceCard from './AmbulanceCard';
import { Ambulance } from './AmbulanceCard';

const BookAmbulanceComponent: React.FC = () => {
  const [ambulances, setAmbulances] = useState<Ambulance[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  // Filter ambulances based on the search term
  const filteredAmbulances = ambulances.filter((ambulance) =>
    ambulance.ambulanceType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-secondary-color min-h-screen p-8 text-black">
      <div className="max-w-6xl mx-auto">
        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search Ambulance Type"
            className="p-2 border border-primary-color rounded-md w-full"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

            {/* Ambulance Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {filteredAmbulances.map((ambulance) => (
            <AmbulanceCard key={ambulance._id} ambulance={ambulance} />
          ))}
        </div>

        {/* Additional Sections */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Why Choose Our Ambulance Services?</h2>
          <p className="mb-4">
            Our ambulances are equipped with the latest medical facilities and are available 24/7 to provide timely and efficient emergency medical services.
          </p>
          <p>
            Our dedicated team of medical professionals ensures the safety and well-being of patients during transit. Book an ambulance with us for reliable and prompt service.
          </p>
          {/* Add more sections as needed */}
        </div>
      </div>
    </div>
  );
};

export default BookAmbulanceComponent;
