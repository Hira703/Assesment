import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["Home", "About", "Services", "Portfolio", "Blog", "Contact"];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0 left-0">
      <div className="max-w-[90%] mx-auto flex items-center justify-between py-4 md:py-3">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/assets/figma_images/logo.png"
            alt="Logo"
            className="w-36 md:w-40 lg:w-44 h-[64px] object-contain"
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex flex-1 justify-center gap-8 font-medium text-black">
          {links.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="hover:text-blue-600 hover:underline underline-offset-4 transition-all duration-300"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          <button className="px-5 py-2 rounded-full bg-[#DFEDE3] text-[#0F4E23] border border-[#c5d6ca] shadow-sm hover:bg-[#cfe0d4] hover:shadow-md transition-all duration-300">
            Login
          </button>
          <button className="px-5 py-2 rounded-full bg-[#141414] text-white shadow-sm hover:bg-[#2a2a2a] hover:shadow-md transition-all duration-300">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md mt-3 rounded-lg p-4 space-y-4 max-w-[90%] mx-auto">
          <ul className="flex flex-col space-y-3 font-medium text-black">
            {links.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="hover:text-blue-600 hover:underline underline-offset-4 transition-all duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col space-y-3 pt-3 border-t">
            <button className="px-5 py-2 rounded-full bg-[#DFEDE3] text-[#0F4E23] border border-[#c5d6ca] shadow-sm hover:bg-[#cfe0d4] hover:shadow-md transition-all duration-300">
              Login
            </button>
            <button className="px-5 py-2 rounded-full bg-[#141414] text-white shadow-sm hover:bg-[#2a2a2a] hover:shadow-md transition-all duration-300">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
