import React from 'react';

const ContactUsComponent: React.FC = () => {
  return (
    <div className="bg-secondary-color text-primary-color min-h-screen p-8">
      <div className="max-w-6xl mx-auto">

        {/* Banner Section */}
        <div className="relative mb-8">
          <img
            src="/path/to/contact-us-image.jpg"
            alt="Contact Us"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center text-white">
            <div>
              <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
              <p>Get in touch with us</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>
          {/* Add your contact form here */}
          {/* Example: <ContactForm /> */}
        </div>

        {/* Additional Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="p-4 border border-primary-color rounded-md">
            <h2 className="text-2xl font-bold mb-2">Additional Section 5</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="p-4 border border-primary-color rounded-md">
            <h2 className="text-2xl font-bold mb-2">Additional Section 6</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactUsComponent;

