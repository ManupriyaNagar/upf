"use client";
import React from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const FooterLink = ({ href, children }) => (
    <li>
      <Link
        href={href}
        className="transition-colors duration-300 hover:text-blue-400"
      >
        {children}
      </Link>
    </li>
  );

  return (
    <footer className=" bg-gray-200 text-black md:px-0 px-4">
      <div className="container mx-auto  pt-12 pb-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {/* Column 1 */}
          <div className="space-y-4 text-center md:text-left flex flex-col items-center md:items-start">
            <Image
              src="/logo.png"
              alt="UP Flair Logo"
              width={160}
              height={54}
              priority
            />
            <p className="text-[0.922rem]">Upflair Technologies started as a start-up with a focus on delivering efficient, high-quality UPS solutions for small and medium-sized businesses. We are proud to be the first power-saving and backup solution providers in Bengaluru, ensuring seamless power continuity for our clients.</p>

          </div>

          {/* Column 2 */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">
              Official Info
            </h3>
            <div className="space-y-4">
              <a
                href="https://www.google.com/maps/place/522%2Fa,+19th+Main+Rd,+Sector+3,+HSR+Layout,+Bengaluru,+Karnataka+560102/@12.9050462,77.6414794,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae1499b113353d:0x3437676c18416969!8m2!3d12.905041!4d77.6440543!16s%2Fg%2F11snpzzg0y?entry=ttu&g_ep=EgoyMDI1MDkwMi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 justify-center md:justify-start transition-colors duration-300 hover:text-[#169548]"
              >
                <MapPin className="h-10 w-15 text-[#169548]" />
                <span>
                  Ground floor, Srishyalaya No.523 A, 19th Main Service Road, HSR Layout Sector III,
                  Bengaluru, Bengaluru Urban, Karnataka, 560102
                </span>
              </a>
              <a
                href="tel:+919035300045"
                className="flex items-center gap-3 justify-center md:justify-start transition-colors duration-300 hover:text-[#169548]"
              >
                <Phone className="h-5 w-5 text-[#169548]" />
                <span>+91 9035300045</span>
              </a>
              <a
                href="mailto:sales@upflair.in"
                className="flex items-center gap-3 justify-center md:justify-start transition-colors duration-300 hover:text-[#169548]"
              >
                <Mail className="h-5 w-5 text-[#169548]" />
                <span>sales@upflair.in</span>
              </a>
            </div>
          </div>

          {/* Column 4 */}

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center border-t border-slate-800 pt-6 text-sm md:flex-row md:justify-between">
          <p className="text-gray-900 text-center md:text-left">
            © {new Date().getFullYear()} Upflair. All rights reserved.
          </p>

          <div className="mt-4 flex gap-6 md:mt-0">
            <Link
              href=""
              className="transition-colors duration-300 hover:text-[#169548]"
            >
              Privacy Policy
            </Link>
            <Link
              href=""
              className="transition-colors duration-300 hover:text-[#169548]"
            >
              Terms of Service
            </Link>
          </div>
        </div>

        <div className="flex justify-center pt-6">
          <p>
            Powered By
            <Link
              href="https://rbshstudio.com/" target="_blank"
              className="transition-colors duration-300 hover:text-[#169548]"
            >   <span>  RBSH Studio</span>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
