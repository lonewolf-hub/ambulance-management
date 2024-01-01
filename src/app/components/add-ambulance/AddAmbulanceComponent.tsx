"use client"
import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

interface FormData {
  ambulanceType: string;
  ambulanceNumber: string;
  hospital: string;
  bedAvailability: number;
  currentLocation: string;
  driverName: string;
  driverContact: string;
  isAvailable: boolean;
}

const AddAmbulanceComponent: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    ambulanceType: '',
    ambulanceNumber: '',
    hospital: '',
    bedAvailability: 0,
    currentLocation: '',
    driverName: '',
    driverContact: '',
    isAvailable: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Send a POST request to add ambulance
      await axios.post('http://localhost:3000/api/admin/addAmbulance', formData);

      // Reset the form data after successful submission
      setFormData({
        ambulanceType: '',
        ambulanceNumber: '',
        hospital: '',
        bedAvailability: 0,
        currentLocation: '',
        driverName: '',
        driverContact: '',
        isAvailable: true,
      });

      toast.success('Ambulance added successfully!');
      router.push('/book-ambulance')
    } catch (error) {
      console.error('Error adding ambulance:', error);
      toast.error('Error adding ambulance. Please try again.');
    }
  };

  return (
    <div className="bg-secondary-color min-h-screen p-8 text-black">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Add Ambulance</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Ambulance Type */}
          <div>
            <label htmlFor="ambulanceType" className="block text-sm font-bold mb-2">
              Ambulance Type:
            </label>
            <input
              type="text"
              id="ambulanceType"
              name="ambulanceType"
              value={formData.ambulanceType}
              onChange={handleChange}
              className="p-2 border border-primary-color rounded-md w-full"
              required
            />
          </div>

          {/* Ambulance Number */}
          <div>
            <label htmlFor="ambulanceNumber" className="block text-sm font-bold mb-2">
              Ambulance Number:
            </label>
            <input
              type="text"
              id="ambulanceNumber"
              name="ambulanceNumber"
              value={formData.ambulanceNumber}
              onChange={handleChange}
              className="p-2 border border-primary-color rounded-md w-full"
              required
            />
          </div>

          {/* Hospital */}
          <div>
            <label htmlFor="hospital" className="block text-sm font-bold mb-2">
              Hospital:
            </label>
            <input
              type="text"
              id="hospital"
              name="hospital"
              value={formData.hospital}
              onChange={handleChange}
              className="p-2 border border-primary-color rounded-md w-full"
              required
            />
          </div>

          {/* Bed Availability */}
          <div>
            <label htmlFor="bedAvailability" className="block text-sm font-bold mb-2">
              Bed Availability:
            </label>
            <input
              type="number"
              id="bedAvailability"
              name="bedAvailability"
              value={formData.bedAvailability}
              onChange={handleChange}
              className="p-2 border border-primary-color rounded-md w-full"
              required
            />
          </div>

          {/* Current Location */}
          <div>
            <label htmlFor="currentLocation" className="block text-sm font-bold mb-2">
              Current Location:
            </label>
            <input
              type="text"
              id="currentLocation"
              name="currentLocation"
              value={formData.currentLocation}
              onChange={handleChange}
              className="p-2 border border-primary-color rounded-md w-full"
              required
            />
          </div>

          {/* Driver Name */}
          <div>
            <label htmlFor="driverName" className="block text-sm font-bold mb-2">
              Driver Name:
            </label>
            <input
              type="text"
              id="driverName"
              name="driverName"
              value={formData.driverName}
              onChange={handleChange}
              className="p-2 border border-primary-color rounded-md w-full"
              required
            />
          </div>

          {/* Driver Contact */}
          <div>
            <label htmlFor="driverContact" className="block text-sm font-bold mb-2">
              Driver Contact:
            </label>
            <input
              type="text"
              id="driverContact"
              name="driverContact"
              value={formData.driverContact}
              onChange={handleChange}
              className="p-2 border border-primary-color rounded-md w-full"
              required
            />
          </div>

          {/* Is Available */}
          <div>
            <label htmlFor="isAvailable" className="block text-sm font-bold mb-2">
              Is Available:
            </label>
            <select
              id="isAvailable"
              name="isAvailable"
              value={formData.isAvailable.toString()}
              onChange={handleChange}
              className="p-2 border border-primary-color rounded-md w-full"
              required
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>

          {/* Submit Button */}
          <div>
            <button type="submit" className="bg-primary-color text-white p-2 rounded-md w-full">
              Add Ambulance
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAmbulanceComponent;
