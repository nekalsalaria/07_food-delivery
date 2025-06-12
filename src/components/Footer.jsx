import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center">
        
        <p className="text-sm font-medium mb-4 sm:mb-0">
          &copy; {new Date().getFullYear()} FoodiesHub. All rights reserved.
        </p>
        
        <div className="flex gap-6 items-center mb-4 sm:mb-0">
          <span className="cursor-default hover:text-white text-sm transition">Privacy Policy</span>
          <span className="cursor-default hover:text-white text-sm transition">Terms</span>
          <span className="cursor-default hover:text-white text-sm transition">Contact</span>
        </div>

        <div className="flex gap-5 text-white text-2xl">
          <a
            href="https://www.linkedin.com/in/nekalsingh/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/nekalsalaria"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
