import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaArrowDown } from "react-icons/fa";

const Footer = () => {
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        "Patient Care",
        "Find A Doctor",
        "Medical Services",
        "Patient Testimonials",
        "Value Added Services",
      ],
    },
    {
      title: "Cardiology",
      links: [
        "Pulmonology",
        "Gastroenterology",
        "Spine Surgery",
        "Oncology",
        "Neurology & Neurosurgery",
      ],
    },
    {
      title: "Oral & Maxillofacial Surgery",
      links: [
        "Hand MicroSurgery",
        "G Scan – Open Standing MRI Scan",
        "Hip Arthroscopy",
        "Minimally Invasive Cardiac Surgery",
        "Knee Replacement Surgery",
    
      ],
    },
    {
      title: "Initiatives",
      links: [
        "Awards & Accolades",
        "Careers",
        "Hospitals",
        "Hospitals In India",
        "International Hospitals",
      ],
    },
  ];

  return (
    <footer className="bg-primary-color text-black p-6">
      <div className="flex justify-center items-center">
        <p className="mr-4">Get Connected with us on social Media</p>
        <div className="flex">
          <FaFacebook className="text-2xl mx-2" />
          <FaInstagram className="text-2xl mx-2" />
          <FaTwitter className="text-2xl mx-2" />
        </div>
      </div>
      <div className="flex flex-wrap justify-around mt-4 text-black">
        {footerLinks.map((column, columnIndex) => (
          <div key={columnIndex} className="flex flex-col mx-4">
            {column.title && <h3 className="text-lg font-semibold mb-2">{column.title}</h3>}
            {column.links.map((link, linkIndex) => (
              <div key={linkIndex} className="flex items-center my-3">
                 <Link href={link} className="text-black text-xs lg:text-base">
                    {link}
                  </Link>
                <FaArrowDown className="ml-2" />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="border-t border-white mt-6 pt-4 flex justify-center">
        <p className="text-sm">&copy; 2023 by www.AmbulanceMgmt.com. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
