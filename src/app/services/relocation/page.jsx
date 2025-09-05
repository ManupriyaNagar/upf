"use client";
import React from "react";
import { FiPlug, FiShield, FiAlertCircle, FiCheckSquare, FiTool } from "react-icons/fi";
import { FaPlug} from "react-icons/fa";

export default function SocketTesting() {
  const sections = [
    {
      id: 1,
      title: "UPS Relocation Services",
      icon: <FaPlug className="h-8 w-8" />,
      img:"https://plus.unsplash.com/premium_photo-1664300914931-76c0f99a96b8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFVQUyUyMFJlbG9jYXRpb24lMjBTZXJ2aWNlc3xlbnwwfHwwfHx8MA%3D%3D",
      paragraphs: [
        "At Upflair Technologies, we specialize in providing complete UPS relocation solutions whether you need to move your system to another room within the same building or to an entirely new site.",
        "The relocation of a UPS is a critical process that involves decommissioning, safe transportation, and re-commissioning of the UPS, along with its associated batteries and electrical switchgear. Our team of trained engineers, supported by an experienced logistics network, ensures that every step is carried out safely, efficiently, and with minimal disruption to your operations.",
        "Once the equipment reaches the new location, our experts handle the re-commissioning process, making sure the system is restored to full functionality and reliability. If your project requires additional electrical work, we collaborate with trusted electrical contractor partners to provide a seamless, end-to-end service.",
        "With Upflair’s UPS Relocation Service, you can rely on a smooth, secure, and professionally managed transition of your power systems.",
      
      ]
    },
    {
      id: 2,
      title: "UPS Disposal Services",
      icon: <FiShield className="h-8 w-8" />,
      img:"https://plus.unsplash.com/premium_photo-1661964043731-5cac3cc7d245?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VVBTJTIwRGlzcG9zYWwlMjBTZXJ2aWNlc3xlbnwwfHwwfHx8MA%3D%3D",
      paragraphs: [
        "At Upflair Technologies, we provide safe and reliable UPS disposal services for a wide range of UPS brands. Whether you are upgrading your power systems or decommissioning existing units, our team ensures the process is handled professionally and in compliance with all regulations.",
        "Our trained engineers carefully decommission the UPS and its associated batteries, making sure every step is carried out with safety as the top priority. Once decommissioned, our experienced logistics team securely packs and palletizes the equipment for transportation and proper disposal.",
        "We follow all relevant environmental and safety guidelines, including the Special Waste Regulations 1996, to ensure that the disposal process is environmentally responsible and fully compliant.",
        "With Upflair’s UPS Disposal Service, you can rest assured that your old UPS systems and batteries will be managed safely, efficiently, and in line with industry standards.",
      ]
    },

  
  ];

  const imageGallery = [
    {
      title: "Assessment and Planning",
      description: "At Upflair Technologies, every UPS relocation or disposal project begins with a thorough assessment and planning phase. Our experts carefully evaluate the existing setup, location, and condition of your UPS system before creating a tailored plan. This proactive approach helps minimize risks, ensures safety, and guarantees a smooth process from start to finish.",
      image: "https://media.istockphoto.com/id/876997894/photo/best-business-concept-photo-representing-brainstorm-in-the-company.webp?a=1&b=1&s=612x612&w=0&k=20&c=pHCiXJ59tfvgOMCsdvI2HiGMpIzZO2C7igZgAYkC1Ek="
    },
    {
      title: "Decommissioning",
      description: "Proper decommissioning is essential for both UPS relocation and disposal. Our trained engineers follow strict safety protocols, including a controlled shutdown of the system, disconnection of all power and network connections, and neutralization of residual energy. This ensures that the UPS is fully safe for handling, transport, or disposal.",
      image: "https://plus.unsplash.com/premium_photo-1664299377684-dfcfbc0d943f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RGVjb21taXNzaW9uaW5nfGVufDB8fDB8fHww"
    },
    {
      title: "Packaging and Transportation",
      description: "To protect your valuable equipment, we provide specialized packaging and secure transportation services. Using industry-approved packing materials and techniques, along with vehicles equipped for sensitive electronics, we ensure your UPS systems and batteries are moved safely and efficiently—whether to a new site or for compliant disposal.",
      image: "https://media.istockphoto.com/id/157558600/photo/view-from-above-inside-a-busy-huge-industrial-warehouse.webp?a=1&b=1&s=612x612&w=0&k=20&c=mjR7Twg0sWuM1QvqU786H7Qw69mtHznkB_iWcH-P08k="
    },
  
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-[url('/13.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-blue-700/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">UPS Relocation & Disposal</h1>
            <p className="text-xl md:text-2xl max-w-7xl mx-auto">
              Effortlessly handle UPS relocations and disposal with our comprehensive service, including professional assistance for seamless UPS relocation and proper disposal of UPS units and batteries, adhering to environmental regulations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Ensuring Electrical Outlet Safety and Reliability</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our socket testing services provide thorough assessment of electrical outlets to ensure safe operation, regulatory compliance, and optimal performance for all types of electrical installations.
            </p>
          </div>

          {/* Main Content Sections */}
          <div className="space-y-16 mb-20">
            {sections.map((section, index) => (
              <div key={section.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-700">
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
                  <div className="bg-gray-200 rounded-2xl h-120 flex items-center justify-center">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Socket Testing Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

         
        </div>
      </section>
    </div>
  );
}