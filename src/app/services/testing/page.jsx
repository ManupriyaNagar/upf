"use client";
import React from "react";
import { FiSettings, FiZap, FiShield, FiCheckCircle, FiMonitor } from "react-icons/fi";

export default function IntegratedSystemTesting() {
  const sections = [
    {
      id: 1,
      title: "Home Integrated System Testing & Black Building Testing",
      icon: <FiSettings className="h-8 w-8" />,
      img:"data:image/jpeg;base64,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",
      paragraphs: [
        "Our trained service engineers provide on-site monitoring of your UPS systems during annual Integrated System Testing and Black Building Tests. These tests are essential for verifying high availability, disaster recovery, and business continuity plans.",
        "In a Black Building Test, the electrical supply to the entire building is intentionally shut off to simulate a complete power outage. This real-world scenario allows us to evaluate system behavior under total failure conditions.",
        "During the process, we test the functionality of generators and power switchover mechanisms, ensuring backup systems perform exactly as required—without causing disruptions to your critical equipment.",
        "By replicating extreme conditions, IST provides confidence that your systems will operate seamlessly when faced with actual emergencies.",
        "Our comprehensive testing approach validates that all interconnected components work together harmoniously under stress conditions."
      ]
    },
    {
      id: 2,
      title: "Why Integrated System Testing Matters",
      icon: <FiZap className="h-8 w-8" />,
      img:"https://media.istockphoto.com/id/1487997386/photo/inscription-testing-business-process-on-electronic-circuit-board-chip.webp?a=1&b=1&s=612x612&w=0&k=20&c=aSxLqj9DtN8ublpB3I5Uj5Zh8i1iSrYPbW8HaiHloLg=",
      paragraphs: [
        "Unexpected loss of power can compromise the safety of staff and operations, putting both personnel and business continuity at risk.",
        "Power outages threaten the protection of sensitive equipment and infrastructure, potentially causing costly damage and extended downtime.",
        "Loss of electrical power affects the comfort and convenience of employees and customers, impacting productivity and service quality.",
        "Through IST, we help prevent these risks by ensuring your entire power infrastructure is robust, reliable, and prepared for real-world challenges.",
        "Regular testing identifies potential vulnerabilities before they become critical failures, saving both time and money in the long run."
      ]
    },
   
  ];

  const imageGallery = [
    {
      title: "System-Wide Testing",
      description: "At Upflair Technologies, our Integrated System Testing (IST) ensures that your entire power and backup system works seamlessly as a whole. Instead of testing components in isolation, we focus on how all elements—UPS, batteries, generators, cabling, and switchgear—function together, delivering a complete performance overview.",
      image: "/load2.jpeg"
    },
    {
      title: "Real-World Scenarios",
      description: "We simulate real-world operating conditions to identify potential issues before they become critical. By replicating power failures, outages, and load variations, our IST process prepares your systems to perform reliably under actual working environments.",
      image: "https://static1.squarespace.com/static/64417fb9cf9d6f67a1bc85b6/64f9f11fab26df165f3149d7/65ce687b3e817664133e4f18/1708027076383/IMG-2029-min.jpg?format=1500w"
    },
    {
      title: "Data Integrity Checks",
      description: "Data accuracy is crucial for any business operation. Our IST services include data integrity checks, ensuring that information passing through different parts of the system remains consistent, accurate, and secure. This guarantees smooth functionality for organizations handling sensitive or mission-critical data.",
      image: "https://blog.qasource.com/hubfs/a-complete-guide-to-data-integrity-testing-1.jpg"
    },
   
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-[url('/15.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-indigo-700/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Integrated System Testing (IST)</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Comprehensive evaluation and functionality testing of power and backup systems for seamless coordination and reliable performance
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
         

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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Service of Integrated System Testing</h2>
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