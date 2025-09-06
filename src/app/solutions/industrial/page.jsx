"use client";
import React from "react";
import { FiTool, FiCpu, FiShield, FiSettings, FiZap } from "react-icons/fi";

export default function IndustrialSolutions() {
  const sections = [
    {
      id: 1,
      title: "Some Important Aspects of Industrial Solutions:",
      icon: <FiZap className="h-8 w-8" />,
      section:"https://images.unsplash.com/photo-1708876955225-67542fb2d6ca?q=80&w=2154&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      paragraphs: [
        "1] On-site power generation is a key component of industrial power solutions. This involves using generators or cogeneration systems to ensure reliable backup power during outages.",
        "2] Industrial facilities need strong power distribution systems to efficiently transmit electricity from the source to various equipment and machinery. This includes transformers, switchgear, distribution panels, busbar systems, and protective devices to ensure safe and reliable power distribution.",
        "3] Effective energy management is crucial in industrial settings to optimize power usage and reduce costs.",
        "4] Power disruptions can be very costly for industrial environments, leading to production downtime and equipment damage.",
        "5] Power factor correction equipment, like capacitors, helps to reduce reactive power consumption, lower energy costs, and improve overall system performance.",
      ]
    },
    {
      id: 2,
      title: "Why Choose Upflair for Industrial Solutions:",
      icon: <FiCpu className="h-8 w-8" />,
      section:"https://media.istockphoto.com/id/2148275696/photo/detail-of-electrician-using-equipment-in-shop.webp?a=1&b=1&s=612x612&w=0&k=20&c=L9rADhB9E6RQQIpdr0xqNbQ-mIEP6NSAaHhIgmEr-wQ=",
      paragraphs: [
        "At Upflair, we provide industrial solutions that can give your business a competitive edge. With a wide range of products and solutions offered at the best price, you can rely on us to meet your needs.",
        "Our comprehensive approach ensures smooth and efficient project implementation, delivering a hassle-free experience for our clients.",
        "Safety is a top priority in industrial environments, and our company takes it seriously in every aspect of our solutions. We are committed to complying with industry regulations and standards, implementing strong safety measures, and conducting thorough risk assessments to minimize hazards and safeguard the well-being of both personnel and assets.",
      ]
    },
 
  ];

  const imageGallery = [
    {
      title: "EASY-3S-UPS",
      description: "Power Backup for Industrial Load",
      image: "https://msplgroup.com/assets/img/is1.png"
    },
    {
      title: "GALAXY VM",
      description: "Power Backup for Industrial Load",
      image: "https://msplgroup.com/assets/img/is3.png"
    },
    {
      title: "GALAXY VX ",
      description: "Power Backup for Industrial Load",
      image: "https://msplgroup.com/assets/img/is4.png"
    },
  
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-[url('/5.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-blue-700/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Industrial Solutions</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Heavy-duty industrial power and infrastructure solutions
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16 px-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 md:mb-6">Product and the solutions we can provide</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Industrial power solutions are customized electrical systems and equipment designed to meet the specific power needs of industrial facilities. These solutions are built to handle the demanding power requirements, tough operating conditions, and crucial reliability needs of industries like manufacturing plants, refineries, data centers, utilities, mining operations, and more.
            </p>
          </div>

          {/* Main Content Sections */}
          <div className="space-y-12 md:space-y-16 mb-16 md:mb-20 px-4">
            {sections.map((section, index) => (
              <div key={section.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 md:gap-12 items-center`}>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4 md:mb-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-700 mx-auto md:mx-0">
                      {section.icon}
                    </div>
                    <h3 className="text-xl md:text-3xl font-bold text-gray-900 text-center md:text-left">{section.title}</h3>
                  </div>
                  <div className="space-y-3 md:space-y-4">
                    {section.paragraphs.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-600 leading-relaxed text-sm md:text-base">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-gray-200 rounded-2xl h-64 md:h-80 flex items-center justify-center overflow-hidden">
                    <img
                      src={section.section}
                      alt={section.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image Gallery Section */}
          <div className="mb-12 md:mb-16 px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center">Industrial Solution Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {imageGallery.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="h-48 md:h-64 bg-gray-200">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#0a1f55] to-[#132b74] rounded-2xl p-6 md:p-8 lg:p-12 text-white mx-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Ready to Power Your Industry?</h2>
              <p className="text-base md:text-lg mb-6 md:mb-8 text-blue-100">
                Contact our industrial experts to discuss your heavy-duty power and automation requirements and discover how our solutions can optimize your operations.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-[#0a1f55] hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Get Industrial Quote</span>
                <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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