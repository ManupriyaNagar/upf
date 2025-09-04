"use client";
import React from "react";
import { FiCamera, FiEye, FiShield, FiMonitor, FiCloud } from "react-icons/fi";

export default function VideoSurveillanceSolutions() {
  const sections = [
    {
      id: 1,
      title: "Is video Surveillance for CCTV same?",
      icon: <FiCamera className="h-8 w-8" />,
      img: "https://images.unsplash.com/photo-1666613789268-e8f311259920?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      paragraphs: [
        "Yes, video surveillance and closed-circuit television (CCTV) are essentially the same thing.",
        "CCTV is a specific type of video surveillance system that uses cameras to capture and record video footage for monitoring and security purposes.",
        "The phrase 'closed-circuit' describes how the video feeds are kept within a closed system and not publicly broadcast, usually being watched on monitors or being recorded for later review.",
        "Video surveillance is a broader term that encompasses various types of systems and technologies used for monitoring and recording video footage.",
        
      ]
    },
    {
      id: 2,
      title: "Discover our top-notch video surveillance solutions!",
      img:"https://images.unsplash.com/photo-1589935447067-5531094415d1?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <FiEye className="h-8 w-8" />,

      paragraphs: [
        "Safeguard your home and office with our user-friendly analog HD cameras. Equipped with night vision, digital zoom, wide-angle lenses, and advanced video analytics, our cameras offer reliable protection.",
        "Count on MAHAVIR SYS POWER Group to provide you with trustworthy analog HD cameras, ensuring peace of mind and protection against any potential issues you may encounter."
        
      ]
    }
  ];

  const imageGallery = [
    {
      title: "VIDEO-CAMERA",
      description: "Analog video Surveillance System",
      image: "https://msplgroup.com/assets/img/vscaa.png"
    },
    {
      title: "CCTV-CAMERA",
      description: "IP Video Surveillance System",
      image: "https://msplgroup.com/assets/img/vscbb.png"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-[url('/9.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-blue-700/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Video Surveillance Solutions</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Advanced security monitoring and intelligent surveillance systems
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="text-center max-w-7xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Product and the solutions we can provide</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Video surveillance, also known as CCTV monitoring, uses cameras to capture and record video footage for security and monitoring
            </p>
          </div>

          {/* Main Content Sections */}
          <div className="space-y-16 mb-20">
            {sections.map((section, index) => (
              <div key={section.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-700">
                      {section.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{section.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {section.paragraphs.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-600 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-gray-200  h-80 flex items-center justify-center">
                    <img 
                      src={section.img}
                      alt={section.title}
                      className="w-full h-full object-cover "
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image Gallery Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Video Surveillance Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
              {imageGallery.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="h-64 bg-gray-200">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#0a1f55] to-[#132b74] rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure Your Facility?</h2>
              <p className="text-lg mb-8 text-blue-100">
                Contact our security experts to discuss your video surveillance requirements and discover how our intelligent monitoring solutions can protect your assets.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-[#0a1f55] hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Get Security Assessment</span>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13 18L19 12L13 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}