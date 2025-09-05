import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaPhone,
} from "react-icons/fa6";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
        {/* Logo & Description */}
        <div>
          <img
            src="/assets/figma_images/logo.png"
            alt="Logo"
            className="w-[160px] h-[96px] object-contain"
          />
          <p className="mt-4 text-sm leading-relaxed text-gray-600">
            CASA provides fast, reliable, and transparent factoring services,
            helping business owners turn credit card transactions into instant
            cash flow.
          </p>
          <h3 className="mt-6 font-semibold">Follow us on</h3>
          <div className="flex gap-3 mt-3">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0F4E23] text-white"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#DFEDE3] text-[#0F4E23]"
            >
              <FaXTwitter size={14} />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#DFEDE3] text-[#0F4E23]"
            >
              <FaLinkedinIn size={14} />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#DFEDE3] text-[#0F4E23]"
            >
              <FaInstagram size={14} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4 mt-8">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>About service</li>
            <li>Procedure of Service</li>
            <li>Pricing</li>
            <li>Why CASA is Different</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-4 mt-8">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Documentation</li>
            <li>Community</li>
            <li>Support Center</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="font-semibold mb-4 mt-8">Get in touch</h3>
          <ul className="space-y-6 text-sm">
            {/* Address */}
            <li>
              <div className="flex items-center gap-3 mb-1">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#DFEDE3]">
                  <MdLocationOn className="text-green-700 text-lg" />
                </div>
                <span className="font-semibold">Address</span>
              </div>
              <p className="ml-11 text-gray-600">
                123 Business Street, Suite 500, New York, NY 10001
              </p>
            </li>

            {/* Phone */}
            <li>
              <div className="flex items-center gap-3 mb-1">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#DFEDE3]">
                  <FaPhone className="text-green-700 text-lg" />
                </div>
                <span className="font-semibold">Phone</span>
              </div>
              <p className="ml-11 text-gray-600">(123) 456-7890</p>
            </li>

            {/* Email */}
            <li>
              <div className="flex items-center gap-3 mb-1">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#DFEDE3]">
                  <MdEmail className="text-green-700 text-lg" />
                </div>
                <span className="font-semibold">Email</span>
              </div>
              <p className="ml-11 text-gray-600">info@example.com</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p>Copyright © {new Date().getFullYear()} All Rights Reserved.</p>
        <div className="flex gap-6 mt-2 md:mt-0">
          <a href="#">Privacy</a>
          <a href="#">Security</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
