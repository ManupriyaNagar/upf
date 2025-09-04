"use client";
import React from "react";
import { FiServer, FiCpu, FiThermometer, FiShield, FiZap } from "react-icons/fi";

export default function MicroDataCentreFXSolutions() {
  const sections = [
    {
      id: 1,
      title: "Cost of Developing a Micro Data Center",
      icon: <FiServer className="h-8 w-8" />,
      img:"https://media.istockphoto.com/id/1183701011/photo/server-room-data-center-backup-mining-hosting-mainframe-farm-and-computer-rack-with-storage.webp?a=1&b=1&s=612x612&w=0&k=20&c=63QrzWziX8XO5jaQl6R2jmy6o3Zr0bBA8fx77U3NRUU=",
      paragraphs: [
        "The cost of developing a micro data center can vary based on factors like size, capacity, features, location, and project requirements. Please note that the following estimates are approximate and actual costs may vary.",
        "1] Infrastructure Costs: This includes physical components like enclosures, cooling systems, power distribution units, cabling, and security measures.",
        "2] IT Equipment Costs: This covers servers, storage devices, networking equipment, and other necessary hardware.",
        "3] Power and Cooling Costs: Proper power and cooling infrastructure are crucial for micro data centers. Costs depend on equipment efficiency, local electricity rates, and cooling needs.",
        "4]Networking Costs: The cost of networking equipment depends on deployment size and desired capabilities.",

      ]
    },
 
  
  ];

  const imageGallery = [
    {
      title: "MICRO-DC-FX",
      description: "Data Centre",
      image: "https://msplgroup.com/assets/img/mdcc.png"
    },
    

  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-[url('/10.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-blue-700/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Micro Data Centre FX</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Compact edge computing solutions for distributed infrastructure
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
              A micro data center, also known as a modular or edge data center, is a compact and self-contained facility that provides computing power and storage capabilities in a smaller space.
            </p>
          </div>

          {/* Main Content Sections */}
          <div className="space-y-16 mb-20">
            {sections.map((section, index) => (
              <div key={section.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700">
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
                  <div className="bg-gray-200  h-120 flex items-center justify-center">
                    <img 
                      src={section.img}
                      alt={section.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image Gallery Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Micro Data Centre FX Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
              {imageGallery.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="h-full bg-gray-200">
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
          <div className="bg-[#0a1f55] rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Deploy Edge Computing?</h2>
              <p className="text-lg mb-8 text-indigo-100">
                Contact our edge computing specialists to discuss your micro data centre requirements and discover how our FX solutions can bring computing power closer to your data and users.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-indigo-700 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Explore Edge Solutions</span>
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