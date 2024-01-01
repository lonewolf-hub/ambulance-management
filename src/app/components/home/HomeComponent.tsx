"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const HomeComponent: React.FC = () => {
  const router = useRouter();

  const handleBookNow = () => {
    // Use router.push to navigate to the book-ambulance page
    router.push(`/book-ambulance`);
  };
  return (
    <div className="bg-secondary-color text-primary-color min-h-screen p-8">
      <div className="max-w-6xl mx-auto">

        {/* Banner Section */}
        <div className="relative mb-8">
          <img
            src="/assets/icon/banner.jpg"
            alt="Ambulance"
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center pl-10 text-white">
            <div className='flex flex-col items-center justify-center'>
              <h1 className="text-3xl font-bold mb-2">Your Ambulance Booking Solution</h1>
              <p>Fast and Reliable Service</p>
              <button
              onClick={handleBookNow}
                className="bg-primary-color text-white px-4 py-2 mt-4 rounded-md hover:bg-opacity-80 focus:outline-none"
              >
                Book Now
              </button>
            </div>

          </div>

        </div>
        <div className='flex justify-center items-center text-black my-4'>
          <h2 className="text-3xl font-bold mb-4 ">Our Services</h2>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-black">
          <div className="p-4 border border-black rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-2">Emergency Services</h2>
            <p>We Provide Doorstep Emergency Services.</p>
          </div>
          <div className="p-4 border border-black rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-2">24/7 Availability</h2>
            <p>Our Services are Available 24/7.</p>
          </div>
          <div className="p-4 border border-black rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-2">Professional Staff</h2>
            <p>We have the team of Professionals.</p>
          </div>
        </div>

        <div className='flex justify-center items-center my-5'>
          <h2 className="text-3xl font-bold mb-4  text-black">Book Your Ambulance Now</h2>
        </div>

        {/* Booking Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Left Section with Ambulance Photo */}
          <div className="p-4 border border-black rounded-md shadow-md">
            <img
              src="/assets/icon/ambulancephoto.png"
              alt="Ambulance"
              className="w-full h-auto rounded-md"
            />
          </div>

          {/* Right Section with Booking Form and Button */}
          <div className="p-4 items-center justify-center flex flex-col border border-black rounded-md shadow-md">
            <div className='flex justify-center items-center'>
              <h2 className="text-3xl font-bold mb-4  text-black">Book Your Ambulance Now</h2>
            </div>
            <div className='flex justify-center'>
              <button
              onClick={handleBookNow}
                className="bg-primary-color text-black px-4 py-2 mt-4 rounded-md hover:bg-opacity-80 focus:outline-none"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-black">
          {/* Additional Section 1 */}
          <div className="p-4 border border-primary-color rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
            <p>We are dedicated to providing immediate and compassionate ambulance services to our community. Your safety and well-being are our top priorities.</p>
          </div>
          {/* Additional Section 2 */}
          <div className="p-4 border border-primary-color rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-2">Why Choose Us?</h2>
            <p>With a team of highly skilled professionals, we offer 24/7 emergency services, ensuring you receive prompt and reliable assistance during critical times.</p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 text-black">What Our Customers Say</h2>

          {/* Testimonial Slider */}
          <div className="flex items-center justify-center">
            {/* Testimonial Card 1 */}
            <div className=" p-4 mx-2 rounded-md shadow-md w-1/2">
              <img
                src="/assets/icon/customer1.jpg"
                alt="Customer 1"
                className="mx-auto mb-4 w-[500px]"
              />
              <p className="text-gray-800">"Great service! The ambulance arrived promptly, and the staff was very professional. Highly recommend!"</p>
            </div>

            {/* Testimonial Card 2 */}
            <div className=" p-4 mx-2 rounded-md shadow-md w-1/2">
              <img
                src="/assets/icon/customer2.jpg"
                alt="Customer 2"
                className=" mx-auto mb-4 "
              />
              <p className="text-gray-800">"I'm impressed with the level of care provided during a recent emergency. The team was efficient and compassionate."</p>
            </div>

            {/* Add more testimonials as needed */}
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomeComponent;