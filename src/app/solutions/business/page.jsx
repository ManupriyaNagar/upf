"use client";
import React from "react";
import { FiBriefcase, FiTrendingUp, FiUsers, FiTarget, FiBarChart } from "react-icons/fi";

export default function BusinessSolutions() {
  const sections = [
    {
      id: 1,
      title: "Power Solutions for Businesses:",
      icon: <FiBarChart className="h-8 w-8" />,
      section:"https://www.unisunpowersolutions.com/wp-content/uploads/2025/03/toolxox.com-h7wsRbpigF-1024x577.jpg",
      paragraphs: [
        "At Upflair Technologies, we deliver smart and dependable power solutions tailored to your business needs. Our commitment is to ensure uninterrupted operations, empowering you to focus on growth while we take care of reliable energy support.",
        "At Upflair Technologies, our UPS solutions—designed for both small and large enterprises—deliver instant backup power to keep your operations running seamlessly. From maintaining productivity to safeguarding customer service and critical data, our systems provide the reliable protection your business needs until primary power is restored or alternate sources take over.",
        "Voltage stabilizers, or voltage regulators, ensure a steady and reliable flow of electricity to safeguard sensitive equipment. Sudden surges, drops, or spikes in voltage can damage critical systems like computers, servers, and industrial machinery—leading to costly repairs and downtime.",
        "Batteries are the backbone of reliable backup power, ensuring business continuity during outages. Integral to UPS systems, they safeguard critical operations by preventing data loss, enabling safe equipment shutdown, and supporting sectors like data centers, hospitals, financial institutions, and telecoms where uninterrupted power is essential.",
      ]
    },
    {
      id: 2,
      title: "Experience the Benefits of Remote Monitoring:",
      icon: <FiTrendingUp className="h-8 w-8" />,
      section:"https://media.noria.com/sites/Uploads/2019/11/19/959b09e3-6fe6-4b90-a755-bf2e473ffb84_ArticleImages_RP31485_1234x694_09202019_extra_large.jpeg",
      paragraphs: [
        "1] Real-time Visibility: Gain instant access to the status and performance of your UPS systems and batteries, right at your fingertips.",
        "2] Proactive Maintenance: Stay ahead of maintenance needs by receiving timely alerts and notifications for low battery levels, temperature anomalies, or potential risks.",
        "3] Minimize Downtime: Detect issues early on and resolve them promptly to minimize disruptions and ensure smooth operations.",
        "4] Cost Savings: Improve operational efficiency and reduce maintenance expenses through effective remote monitoring.",
        "5] Safety Audit: A safety audit is a thorough evaluation of a business's safety practices, procedures, and infrastructure. It is conducted to ensure compliance with regulations, identify potential hazards, and enhance overall safety performance.",

      ]
    },


  ];

  const imageGallery = [
    {
      title: "SMART-UPS",
      description: "Home Theatere & Smart Homes",
      image: "https://msplgroup.com/assets/img/smart-ups.png"
    },
    {
      title: "BACK-UPS-PRO",
      description: "Computer & Peripherals",
      image: "https://msplgroup.com/assets/img/hos3.png"
    },
    {
      title: "BACK-UPS",
      description: "Computer & Peripherals",
      image: "https://msplgroup.com/assets/img/hos4.png"
    },
    {
      title: "Easy UPS On-Line",
      description: "Computer & Peripherals",
      image: "https://msplgroup.com/assets/img/easy-ups-on-line.png"
    },
    {
      title: "SMART-UPS",
      description: "Home Theatere & Smart Homes",
      image: "https://msplgroup.com/assets/img/hos1.png"
    },
    {
      title: "EASY-3M-UPS",
      description: "Power Backup for Industrial Load",
      image: "https://msplgroup.com/assets/img/is1.png"
    },
    {
      title: "Symmetra LX UPS ",
      description: "Power Backup for Industrial Load",
      image: "https://msplgroup.com/assets/img/symmetra-lx-ups.png"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-[url('/2.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-blue-700/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Business Solutions</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Tailored business energy management and efficiency solutions
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16 px-4">
            <h2 className="text-3xl md:text-4xl font-medium text-[#0a1f55] mb-4 md:mb-6">Product and the solutions we can provide</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              We provide reliable and efficient power protection solutions for small to medium-sized businesses. Our products are designed to offer high density, true double-conversion, and online power protection for various equipment such as servers, voice/data networks, point-of-sale (POS) equipment, medical labs, and light industrial applications. With our top-notch range of power solutions, we ensure that your business receives the best products and services.
            </p>
          </div>

          {/* Main Content Sections */}
          <div className="space-y-12 md:space-y-16 mb-16 md:mb-20 px-4">
            {sections.map((section, index) => (
              <div key={section.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 md:gap-12 items-center`}>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4 md:mb-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 mx-auto md:mx-0">
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
            <h2 className="text-3xl md:text-4xl font-medium text-[#0a1f55] mb-8 md:mb-12 text-center">
              Experience the power of remote monitoring and take control of your UPS systems and batteries like never before.
            </h2>
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
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Ready to Optimize Your Business?</h2>
              <p className="text-base md:text-lg mb-6 md:mb-8 text-blue-100">
                Contact our business energy experts to discover how our solutions can reduce costs, improve efficiency, and create competitive advantages for your organization.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-[#0a1f55] hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Schedule Consultation</span>
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