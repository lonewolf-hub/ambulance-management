import React from 'react';

const AboutUsComponent: React.FC = () => {
  return (
    <div className="bg-secondary-color text-primary-color min-h-screen p-8">
      <div className="max-w-6xl mx-auto">

        {/* Banner Section */}
        <div className="relative mb-8">
          <img
            // src="/assets/icon/aboutusgif.gif"
            alt="About Us"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center text-white">
            <div>
              <h1 className="text-4xl font-bold mb-2">About Our Ambulance Services</h1>
              <p>Your Reliable Partner in Emergency Medical Transportation</p>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Who We Are</h2>
          <p className="text-gray-800">
            At [Your Company Name], we are dedicated to providing swift and efficient ambulance services. With years of experience, we understand the importance of timely and professional medical transportation.
          </p>
        </div>

        {/* Our Mission Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
          <p className="text-gray-800">
            Our mission is to save lives by delivering prompt and compassionate ambulance services. We strive to be the first choice for individuals and healthcare providers in times of emergencies.
          </p>
        </div>

        {/* Services Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Our Services</h2>
          <p className="text-gray-800">
            - 24/7 Emergency Medical Transportation <br />
            - Highly Trained and Certified Medical Professionals <br />
            - State-of-the-Art Ambulance Fleet <br />
            - Quick Response Time
          </p>
        </div>

        {/* Google Map Section */}
        <div className="mb-8">
          {/* Integrate your Google Map component here */}
          {/* Example: <GoogleMapComponent /> */}
        </div>

        {/* Team Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Meet Our Team</h2>
          {/* Add team member details, photos, and roles here */}
          {/* Example:
          <div>
            <img src="/path/to/team-member1.jpg" alt="Team Member 1" className="w-16 h-16 rounded-full mx-auto mb-2" />
            <p>John Doe</p>
            <p>CEO</p>
          </div>
          */}
        </div>

        {/* Contact Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
          {/* Add contact information or a contact form here */}
          {/* Example: <ContactForm /> */}
        </div>

      </div>
    </div>
  );
};

export default AboutUsComponent;
