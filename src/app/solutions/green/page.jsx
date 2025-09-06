"use client";
import React from "react";
import { FiRefreshCw, FiSun, FiLeaf, FiTrendingUp, FiBattery } from "react-icons/fi";

export default function GreenSolutions() {
  const sections = [
    {
      id: 1,
      title: "Green Solutions by Upflair Technology",
      icon: <FiSun className="h-8 w-8" />,
      img: "https://images.unsplash.com/photo-1670519808728-335b1eb2ef52?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      paragraphs: [
        "Rooftop solar power is one of the most efficient ways to harness clean and renewable energy. By installing solar panels on rooftops, sunlight is captured and converted into electricity that can be used to power homes, offices, and businesses. This not only ensures sustainable energy production but also significantly reduces monthly electricity bills. With a lifespan of 25 to 30 years, solar panels are durable, require minimal maintenance, and provide long-term reliability..",
        "On-grid solar power systems offer an intelligent and cost-effective way to meet energy needs while staying connected to the local utility grid. When excess energy is produced, it is sent back to the grid, earning you credits through net metering. During times when additional power is required, electricity can be drawn seamlessly from the grid, ensuring uninterrupted supply. This makes on-grid systems highly reliable while also helping users save on energy costs and reduce their carbon footprint",
        
      ]
    },
    
  ];

  const imageGallery = [
    {
      title: "SROOF-TOP",
      description: "Solar Power Genration",
      image: "https://msplgroup.com/assets/img/recent-projects-7.jpg"
    },
    {
      title: "ON-GRID",
      description: "Solar Power Genration",
      image: "https://msplgroup.com/assets/img/recent-projects-8.jpg"
    },
    
  ];
      

  return (

    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-[url('/7.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-blue-700/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Green Solutions</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Sustainable and environmentally friendly energy solutions
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
              Green Solutions are essential for all businesses as they involve environmentally friendly practices and initiatives aimed at reducing the negative impact of business operations on the environment. Implementing these solutions not only helps protect the planet but also brings cost savings and enhances brand reputation.
            </p>
          </div>

          {/* Main Content Sections */}
          <div className="space-y-16 mb-20">
            {sections.map((section, index) => (
              <div key={section.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-700">
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
                  <div className="bg-gray-200  h-96 flex items-center justify-center">
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
          <div className="mb-16 items-center justify-center ">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Green Solution Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ">
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
          <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Go Green?</h2>
              <p className="text-lg mb-8 text-green-100">
                Contact our sustainability experts to discover how green energy solutions can reduce costs and environmental impact for your organization.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-green-700 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Start Your Green Journey</span>
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