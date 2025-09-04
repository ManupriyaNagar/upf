"use client";
import React from "react";
import { FiServer, FiCpu, FiShield, FiThermometer, FiMonitor } from "react-icons/fi";

export default function DataCenterSolutions() {
  const sections = [
    {
      id: 1,
      title: "Ensuring Data Center Continuity: The Vital Role of UPS Systems",
      icon: <FiServer className="h-8 w-8" />,
      section:"https://images.unsplash.com/photo-1578410169170-021c8c9c1554?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      paragraphs: [
        "The role of UPS systems in data centers is crucial for ensuring uninterrupted and reliable operation of essential IT infrastructure. Even small fluctuations in power can have a significant impact on data center providers.",
        "When the utility power supply fails or experiences disruptions, UPS systems act as a backup power source. They swiftly and seamlessly switch to battery power, preventing any disruptions in data center operations.",
        "Efficient UPS systems are essential for data centers to minimize downtime and uphold business continuity.",
     ]
    },
    {
      id: 2,
      title: "Why Choose Upflair for Data Center Solutions?",
      icon: <FiThermometer className="h-8 w-8" />,
      section:"https://media.istockphoto.com/id/1423555855/photo/inspiration-showing-sign-e-mail-marketing-business-approach-reasons-for-choosing-our-brand.webp?a=1&b=1&s=612x612&w=0&k=20&c=LerZhhqwmvfwbf21wvKXXZ9-BGQfKTZvxCkD-I6jEOA=",
      paragraphs: [
        "We take great pride in offering a highly dependable infrastructure with redundant systems, which means that our customers can rely on us for uninterrupted service and minimal risk of downtime.",
        "Our data center solutions are designed to be incredibly flexible, allowing you to easily adjust your resources as your needs evolve. Whether you're just starting out or planning for significant expansion, our data center solutions can meet your requirements without causing any disruptions.",
        "Our commitment is to provide you with top-quality services, support your business growth, and guarantee the security and reliability of your critical operations.",
   ]
    },
  
  
  ];

  const imageGallery = [
    {
      title: "EASY-UPS",
      description: "Un-Interrupted Power for Server Rack",
      image: "https://msplgroup.com/assets/img/dcs1.png"
    },
    {
      title: "AIR ECONOMIZERS",
      description: "Precision Air Conditioning",
      image: "https://msplgroup.com/assets/img/dcs2.png"
    },
    {
      title: "ECO ASILE",
      description: "Precision Air Conditioning",
      image: "https://msplgroup.com/assets/img/dcs3.png"
    },
    {
      title: "CHILLERS",
      description: "Precision Air Conditioning",
      image: "https://msplgroup.com/assets/img/dcs4.png"
    },
    
    {
      title: "AIR CONDITIONER",
      description: "Precision Air Conditioning",
      image: "https://msplgroup.com/assets/img/dcs6.png"
    },
    {
      title: "RACK",
      description: "Racks and Enclosures",
      image: "https://msplgroup.com/assets/img/dcs7.png"
    },
    {
      title: "ROW 3",
      description: "Power Distribution",
      image: "https://msplgroup.com/assets/img/dcs8.png"
    },
    {
      title: "ROOM",
      description: "Power Distribution",
      image: "/20.jpeg"
    },
    {
      title: "SWITCHES",
      description: "Power Distribution",
      image: "/21.png"
    },
    {
      title: "CAMERAS",
      description: "Security and Environmental Monitoring",
      image: "/22.png"
    }
  
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-[url('/img1.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-blue-700/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Data Center Solutions</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Mission-critical data center power and cooling solutions
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
              Our Data Center Solutions offer professional and efficient power solutions tailored to meet the specific needs of data centers. We understand that reliable and uninterrupted power is crucial for smooth operations.
            </p>
          </div>

          {/* Main Content Sections */}
          <div className="space-y-16 mb-20">
            {sections.map((section, index) => (
              <div key={section.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-700">
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
                  <div className="bg-gray-200 rounded-2xl h-90 flex items-center justify-center">
                    <img 
                      src={section.section}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Data Center Solution Gallery</h2>
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

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#0a1f55] to-[#132b74] rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Data Center?</h2>
              <p className="text-lg mb-8 text-blue-100">
                Contact our data center experts to discuss your mission-critical infrastructure requirements and ensure maximum uptime and efficiency.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-[#0a1f55] hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Plan Your Data Center</span>
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