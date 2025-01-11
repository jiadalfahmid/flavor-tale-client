import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="p-10 bg-base-100">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h1 className="text-4xl font-bold logo bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text w-[142px]">
            Flavor Tale
          </h1>
          <p className="mt-2 text-sm">
            Indulge in a world of flavors. Find your favorite dish now!
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 cursor-pointer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 cursor-pointer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 cursor-pointer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 cursor-pointer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Working Hours Section */}
        <div>
          <h2 className="font-bold text-lg">WORKING HOURS</h2>
          <p>Monday - Friday: 09:00 - 22:00</p>
          <p>Saturday: 11:00 - 00:00</p>
          <p>Sunday: 11:00 - 23:00</p>
          <p className="mt-2 font-bold">* Happy hour: 17:00 - 21:00</p>
        </div>

        {/* Address Section */}
        <div>
          <h2 className="font-bold text-lg">OUR ADDRESS</h2>
          <p>Silk St, Barbican, London EC2Y 8DS, UK</p>
          <p>+39-055-123456</p>
          <p>booking@flavor-tale.com</p>
        </div>

        {/* Newsletter Section */}
        <div>
          <h2 className="font-bold text-lg">NEWSLETTER</h2>
          <p className="text-sm">Receive the latest news from us.</p>
          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Your Email Address"
              className="p-2 flex-grow rounded-l-md border border-gray-500 bg-base-100 outline-none"
            />
            <button className="p-2 bg-orange-500 text-white rounded-r-md">
              →
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
