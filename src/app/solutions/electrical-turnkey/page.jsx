"use client";
import React from "react";
import { FiZap, FiClipboard, FiSettings, FiUsers, FiCheckCircle } from "react-icons/fi";

export default function ElectricalTurnkeySolutions() {
  const sections = [
    {
      id: 1,
      title: "Our Service",
      icon: <FiClipboard className="h-8 w-8" />,
      section:"https://msplgroup.com/assets/img/services-1.jpg",
      paragraphs: [
        "We're more than just electrical services; we also provide comprehensive solutions including computer networking, fire alarm systems, door access control, CCTV control, and PA System including Building Management Systems (BMS). We have vast experience in mechanical & instrumentation work, particularly in the water management segment, including wireless telemetry based centralized SCADA systems for monitoring & controlling different locations.",
      ]
    },
    {
      id: 2,
      title: "Need Our Solution?",
      icon: <FiSettings className="h-8 w-8" />,
      section:"https://msplgroup.com/assets/img/services-2.jpg",
      paragraphs: [
        "Our commitment to excellence, backed by a robust product service network, ensures we are always ready to meet our client's routine maintenance and support needs. At Upflair, we strive to deliver exceptional electrical solutions that power your business efficiently. Welcome to our world of secure, sustainable, and effective electrical solutions."
      ]
    },
  ];



  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-[url('/8.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-blue-700/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Electrical Turnkey Contract</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Complete electrical project management and implementation
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="text-center max-w-7xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Complete Project Solutions</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We are a leading MEP contractor firm, based in Ahmedabad, specializing in Electro-Mechanical & Instrumentation projects. With over three years of expertise in executing all types of Electro-Mechanical contracting work, our services span the entire gamut, right from low voltage (LV) systems to 11 KVA high tension (HT), and from Extra Low Voltage (ELV) installations to 11 KVA switch yards.
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
                  <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center">
                    <img 
                      src={section.section}
                      alt={section.title}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>



          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#0a1f55] to-[#132b74] rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Turnkey Project?</h2>
              <p className="text-lg mb-8 text-blue-100">
                Contact our project management experts to discuss your electrical project requirements and discover our comprehensive turnkey solutions.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-[#0a1f55] hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Start Your Project</span>
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