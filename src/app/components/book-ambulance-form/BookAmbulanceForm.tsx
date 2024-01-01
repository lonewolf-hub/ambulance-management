"use client"
import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
interface BookingForm {
  ambulanceId: string;
  pickupLocation: string;
  destination: string;
  patientName: string;
  patientAge: number;
  medicalCondition: string;
  additionalNotes: string;
}

interface BookAmbulanceFormProps {
  ambulanceId: string;
  onBookingSuccess: () => void;
}

const BookAmbulanceForm: React.FC<BookAmbulanceFormProps> = ({ ambulanceId, onBookingSuccess }) => {
  const router = useRouter();
  const [formData, setFormData] = useState<BookingForm>({
    ambulanceId,
    pickupLocation: '',
    destination: '',
    patientName: '',
    patientAge: 0,
    medicalCondition: '',
    additionalNotes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Send a POST request to book ambulance
      await axios.post('http://localhost:3000/api/users/bookAmbulance', formData);

      // Reset the form data after successful submission
      setFormData({
        ambulanceId,
        pickupLocation: '',
        destination: '',
        patientName: '',
        patientAge: 0,
        medicalCondition: '',
        additionalNotes: '',
      });

      // Trigger the parent component to handle booking success
      onBookingSuccess();

      toast.success('Ambulance booked successfully!');
      router.push('/profile')
    } catch (error) {
      console.error('Error booking ambulance:', error);
      toast.error('Error booking ambulance. Please try again.');
    }
  };

  return (
    <div className='flex flex-col mx-80 my-4'>
        <h2 className='flex text-3xl text-black font-bold justify-center my-5'>
            Ambulance Booking Form
        </h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Pickup Location */}
      <div>
        <label htmlFor="pickupLocation" className="block text-sm font-bold mb-2">
          Pickup Location:
        </label>
        <input
          type="text"
          id="pickupLocation"
          name="pickupLocation"
          value={formData.pickupLocation}
          onChange={handleChange}
          className="p-2 border border-primary-color rounded-md w-full"
          required
        />
      </div>

      {/* Destination */}
      <div>
        <label htmlFor="destination" className="block text-sm font-bold mb-2">
          Destination:
        </label>
        <input
          type="text"
          id="destination"
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          className="p-2 border border-primary-color rounded-md w-full"
          required
        />
      </div>

      {/* Patient Name */}
      <div>
        <label htmlFor="patientName" className="block text-sm font-bold mb-2">
          Patient Name:
        </label>
        <input
          type="text"
          id="patientName"
          name="patientName"
          value={formData.patientName}
          onChange={handleChange}
          className="p-2 border border-primary-color rounded-md w-full"
          required
        />
      </div>

      {/* Patient Age */}
      <div>
        <label htmlFor="patientAge" className="block text-sm font-bold mb-2">
          Patient Age:
        </label>
        <input
          type="number"
          id="patientAge"
          name="patientAge"
          value={formData.patientAge}
          onChange={handleChange}
          className="p-2 border border-primary-color rounded-md w-full"
          required
        />
      </div>

      {/* Medical Condition */}
      <div>
        <label htmlFor="medicalCondition" className="block text-sm font-bold mb-2">
          Medical Condition:
        </label>
        <input
          type="text"
          id="medicalCondition"
          name="medicalCondition"
          value={formData.medicalCondition}
          onChange={handleChange}
          className="p-2 border border-primary-color rounded-md w-full"
          required
        />
      </div>

      {/* Additional Notes */}
      <div>
        <label htmlFor="additionalNotes" className="block text-sm font-bold mb-2">
          Additional Notes:
        </label>
        <textarea
          id="additionalNotes"
          name="additionalNotes"
          value={formData.additionalNotes}
          onChange={handleChange}
          className="p-2 border border-primary-color rounded-md w-full"
        />
      </div>

      {/* Submit Button */}
      <div>
        <button type="submit" className="bg-primary-color text-white p-2 rounded-md w-full">
          Book Ambulance
        </button>
      </div>
    </form>
    </div>
  );
};

export default BookAmbulanceForm;
