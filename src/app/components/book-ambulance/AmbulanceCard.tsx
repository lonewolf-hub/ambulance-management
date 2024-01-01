import React from 'react';
import { useRouter } from 'next/navigation';
export interface Ambulance {
    _id: string;
    ambulanceType: string;
    ambulanceNumber: string;
    hospital: string;
    bedAvailability: number;
    currentLocation: string;
    driverName: string;
    driverContact: string;
    isAvailable: boolean;
}

interface AmbulanceCardProps {
    ambulance: Ambulance;
}

const AmbulanceCard: React.FC<AmbulanceCardProps> = ({ ambulance }) => {
    const router = useRouter();
    const handleBookNow = () => {
        // Use router.push to navigate to the book-ambulance page
        router.push(`/book-ambulance/${ambulance._id}`);
      };
    return (
        <div className=" flex flex-col  font-semibold p-4 border border-primary-color bg-[#711DB0] bg-opacity-40 rounded-md shadow-md w-full">
            <h2 className="flex text-xl font-bold mb-2">{ambulance.ambulanceType}</h2>
            <div className="flex flex-col gap-2 mb-4">
                <p>Hospital: {ambulance.hospital}</p>
                <p>Availability: {ambulance.isAvailable ? 'Available' : 'Not Available'}</p>
                <p>Ambulance Number: {ambulance.ambulanceNumber}</p>
                <p>Bed Availability: {ambulance.bedAvailability}</p>
                <p>Current Location: {ambulance.currentLocation}</p>
                <p>Driver Name: {ambulance.driverName}</p>
                <p>Driver Contact: {ambulance.driverContact}</p>
                {/* Add more details as needed */}
            </div>

            {/* Book Now Button (You can handle the book now functionality later) */}
            <button
                onClick={handleBookNow}
                className="bg-[#940B92] text-white p-2 rounded-md">
                Book Now
            </button>
        </div>
    );
};

export default AmbulanceCard;
