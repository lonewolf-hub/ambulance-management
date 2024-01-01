import React from 'react';
import Link from 'next/link';

const ServicesComponent = () => {
  return (
    <div className="bg-secondary-color min-h-screen p-8 text-black">
      <div className="max-w-6xl mx-auto">

        {/* Title Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Our Services</h1>
          <p>Explore the range of ambulance services we provide</p>
        </div>

        {/* Service Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Card 1: Redirects to See Ambulance Page */}
          <Link href="/book-ambulance">
            <div className="serviceCard">
              <h2 className="text-2xl font-bold mb-2">Book Ambulances</h2>
              <p>Explore available ambulances for booking and choose the one that suits your needs.</p>
            </div>
          </Link>

          {/* Card 2: Redirects to Add Ambulance Page */}
          <Link href="/add-ambulance">
            <div className="serviceCard">
              <h2 className="text-2xl font-bold mb-2">Add Ambulance</h2>
              <p>Add a new ambulance to our fleet and contribute to enhancing emergency medical services in your area.</p>
            </div>
          </Link>

          {/* Card 3: Redirects to View Ambulances Page */}
          <Link href="/view-ambulances">
            <div className="serviceCard">
              <h2 className="text-2xl font-bold mb-2">View Ambulances</h2>
              <p>Check the list of all available ambulances, their features, and current status.</p>
            </div>
          </Link>

          {/* Card 4: Redirects to Track Ambulance Location Page */}
          <Link href="/track-ambulance-location">
            <div className="serviceCard">
              <h2 className="text-2xl font-bold mb-2">Track Ambulance Location</h2>
              <p>Track the real-time location of a booked ambulance and stay informed during emergencies.</p>
            </div>
          </Link>
        </div>

        {/* Additional Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8 ">
          {/* Additional Section 1 */}
          <div className="additionalSection">
            <h2 className="text-2xl font-bold mb-2">Our Commitment to Quality</h2>
            <p>At [Your Company Name], we are committed to providing high-quality ambulance services that prioritize patient care and safety.</p>
          </div>

          {/* Additional Section 2 */}
          <div className="additionalSection">
            <h2 className="text-2xl font-bold mb-2">Emergency Medical Professionals</h2>
            <p>Our team of dedicated emergency medical professionals ensures swift response times and expert care during critical situations.</p>
          </div>

          {/* Additional Section 3 */}
          <div className="additionalSection">
            <h2 className="text-2xl font-bold mb-2">Community Outreach Programs</h2>
            <p>We actively participate in community outreach programs to raise awareness about emergency medical services and promote health and safety.</p>
          </div>

          {/* Additional Section 4 */}
          <div className="additionalSection">
            <h2 className="text-2xl font-bold mb-2">Customer Feedback</h2>
            <p>We value customer feedback and continuously strive to improve our services based on the experiences and suggestions of our users.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServicesComponent;
