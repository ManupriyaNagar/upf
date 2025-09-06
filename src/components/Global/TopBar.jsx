"use client";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn, FaVimeoV } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="bg-[#0a1f55] text-white text-sm py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        
        {/* Left Section */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-white" />
            <span>+91 9035300045</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-white" />
            <span>sales@upflair.in</span>
          </div>
        </div>

        {/* Right Section */}
       
        <div className="flex items-center space-x-6 mt-2 sm:mt-0">
          {/* Links */}
          <div className="flex space-x-4">
            <a href="https://www.google.com/maps/place/522%2Fa,+19th+Main+Rd,+Sector+3,+HSR+Layout,+Bengaluru,+Karnataka+560102/@12.9050462,77.6414794,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae1499b113353d:0x3437676c18416969!8m2!3d12.905041!4d77.6440543!16s%2Fg%2F11snpzzg0y?entry=ttu&g_ep=EgoyMDI1MDkwMi4wIKXMDSoASAFQAw%3D%3D" className="hover:underline " target="_blank" rel="noopener noreferrer">Location</a>
            <span>|</span>
            <a href="/contact" className="hover:underline">Contact Us</a>
       
          </div>

          {/* Social Icons */}
          <div className="flex space-x-3">

            <a href="https://www.linkedin.com/company/uplflair/posts/?feedView=all" className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
           

          </div>
        </div>
      </div>
    </div>
  );
}
