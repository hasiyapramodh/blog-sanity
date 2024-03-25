import React from 'react';
import Image from 'next/image'; // Import Next.js Image component
import Image1 from '../../../public/img.jpg'

const ContactUs: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      {/* New image section with responsive behavior */}
      <div className="image-container flex pl-10 pr-10 mt-[4rem]">
        <div className="w-full  ">
          <Image
            src={Image1} // Replace with your actual image path
            alt="Contact Us"
           
        className="max-md:block max-md:w-full hover:rounded-md hover:brightness-125 object-cover mb-9"
          />
        </div>
      </div>

      {/* Centered content section */}
      <div className="content flex flex-col items-center justify-content: center">
        {/* Contact Information section */}
        <h1 className="text-3xl font-bold mb-8 font-head">Contact Us</h1>
        <p className="mb-4 font-text">
          Get in touch with us if you have any questions, requests, or feedback. We'd love to hear from you!
        </p>
        <ul className="list-disc pl-4 font-text">
          {/* Replace placeholders with your actual contact information */}
          <li>Email: inyapa97@gmail.com</li>
          <li>Phone: (078) 587-9739</li>
          <li>
            {/* Add links for social media (optional) */}
            <a href="https://www.facebook.com/your-page" target="_blank" rel="noreferrer">
              Facebook
            </a>
          </li>
        </ul>

        {/* Footer section */}
        <footer className="text-center mt-16">
          <p>Copyright &copy; {new Date().getFullYear()} Advertaro(PVT)Ltd.</p>
        </footer>
      </div>
    </div>
  );
};

export default ContactUs;
