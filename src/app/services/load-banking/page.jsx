"use client";
import React from "react";
import { FiSettings, FiTool, FiZap, FiShield, FiCpu } from "react-icons/fi";

export default function SpecialisedServices() {
  const sections = [
    {
      id: 1,
      title: "Load Bank Testing Services",
      icon: <FiSettings className="h-8 w-8" />,
      img:"https://media.istockphoto.com/id/1072205164/photo/bank-employee-opening-atm-safe-checking-breakdown-cash-in-transit-service.webp?a=1&b=1&s=612x612&w=0&k=20&c=rFYQyj1wLtrXBH1S-Qm3Oe8pYeoWqEesruW1lhOgx2I=",
      paragraphs: [
        "At Upflair Technologies, we offer a comprehensive Load Bank Testing service to simulate real client load conditions and verify the integrity of the entire power protection system. This process ensures that your UPS, batteries, and supporting infrastructure work seamlessly together when it matters most.",
        "While commissioning procedures, routine testing, and preventive maintenance are vital, the only definitive way to confirm that all components will function correctly under real-world demands is through load bank testing. By fully loading the system in a controlled environment, every component is stressed, and potential weaknesses can be identified before they impact critical operations.",
        "This proactive approach allows businesses to prevent failures, safeguard uptime, and maintain confidence in their power systems. Moreover, investing in professional load bank testing is a cost-effective solution, combining technical expertise with proven methodologies to maximize reliability.",
        "With Upflair’s Load Bank Testing Service, you gain peace of mind knowing your power backup systems will perform exactly as intended during an actual outage or emergency.",
      ]
    },
    {
      id: 2,
      title: "Load Bank Testing",
      icon: <FiZap className="h-8 w-8" />,
      img:"https://images.unsplash.com/photo-1579278350655-6545d9587468?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TG9hZCUyMEJhbmslMjBUZXN0aW5nfGVufDB8fDB8fHww",
      paragraphs: [
        "At Upflair Technologies, our Load Bank Testing service provides a controlled way to verify the integrity and performance of your complete power system. By connecting an electrical load to your UPS or power supply, we simulate real operating conditions to ensure every component of the system works together seamlessly.",
        "Load bank testing not only evaluates the UPS performance but also validates the reliability of the entire electrical infrastructure, including cabling, switchgear, generators, and fuses. This holistic approach ensures that your backup power system will perform as intended when called upon.",
        "Additionally, load banks can be used to safely discharge UPS batteries, providing an accurate and cost-effective method of determining battery autonomy and overall health.",
        "With Upflair’s Load Bank Testing, you gain the confidence that your power systems are fully prepared to handle real-world demands without risk of unexpected failure.",

      ]
    },
   
  
  ];

  const imageGallery = [
    {
      title: "Custom Control Panel",
      description: "Specialized control panel design and manufacturing for unique industrial applications requiring custom electrical solutions and advanced functionality.",
      image: "/specialised-1.jpg"
    },
    {
      title: "High-Voltage Testing",
      description: "Advanced high-voltage testing equipment and procedures for comprehensive evaluation of power system components and insulation integrity.",
      image: "/specialised-2.jpg"
    },
    {
      title: "Automation Integration",
      description: "Complex industrial automation integration combining multiple systems and technologies for seamless process control and monitoring.",
      image: "/specialised-3.jpg"
    },
    {
      title: "Energy Management System",
      description: "Sophisticated energy management platform providing real-time monitoring, analysis, and optimization of electrical energy consumption.",
      image: "/specialised-4.jpg"
    },
    {
      title: "Predictive Maintenance",
      description: "Advanced predictive maintenance technologies using multiple analysis techniques to prevent equipment failures and optimize maintenance strategies.",
      image: "/specialised-5.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-[url('/14.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-blue-700/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Load Bank Testing</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Ensure the reliability of your UPS system through our meticulous load bank testing service, employing industry-standard procedures for thorough UPS load bank testing, validating performance and safeguarding against potential issues.


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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Service of Load Bank Testing</h2>
    
            <p className="text-lg mb-4">At Upflair Technologies, we provide advanced Load Bank Testing services designed to validate the reliability and performance of your power systems under real-world conditions. By applying controlled electrical loads, we ensure that your UPS, batteries, and supporting infrastructure can handle varying demands with confidence.</p>
            <p className="text-lg mb-4">Our load banks are capable of generating a wide range of electrical loads—from just a few kilowatts to several megawatts—enabling comprehensive testing across different load conditions. This ensures that your systems are prepared for both normal and peak performance requirements.</p>
            <p className="text-lg mb-4">To mimic real-world scenarios more accurately, our testing includes both resistive loads, which convert electrical energy into heat, and reactive loads, which simulate the electromagnetic characteristics of motors, transformers, and other inductive equipment.</p>
            <p className="text-lg mb-4">In addition, modern load banks used by Upflair provide precise data collection and reporting during testing. Key parameters such as voltage, current, power factor, frequency, and temperature are monitored and analyzed, offering valuable insights into system performance and helping identify potential issues before they become critical.</p>
            <p className="text-lg ">With Upflair’s Load Bank Testing Service, you gain peace of mind knowing that your power backup systems are fully optimized, dependable, and ready to perform when it matters most.</p>
          </div>


        </div>
      </section>
    </div>
  );
}