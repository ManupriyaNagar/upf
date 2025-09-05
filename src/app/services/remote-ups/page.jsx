"use client";
import React from "react";
import { FiBatteryCharging, FiActivity, FiAlertCircle, FiTrendingDown, FiCheckCircle } from "react-icons/fi";

export default function BatteryImpedanceTesting() {
  const sections = [
    {
      id: 1,
      title: "How EcoStruxure IT Expert Works for UPS Monitoring",
      icon: <FiBatteryCharging className="h-8 w-8" />,
      img:"https://images.unsplash.com/photo-1563770661132-85c7385910d3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SG93JTIwRWNvU3RydXh1cmUlMjBJVCUyMEV4cGVydCUyMFdvcmtzJTIwZm9yJTIwVVBTJTIwTW9uaXRvcmluZ3xlbnwwfHwwfHx8MA%3D%3D",
      paragraphs: [
        "At Upflair Technologies, we utilize EcoStruxure IT Expert to provide intelligent, real-time monitoring of your UPS systems. This advanced platform communicates continuously with your UPS to automatically detect any errors or alarm messages.",
        "In the event of an incident, EcoStruxure IT Expert immediately connects with our service network via email transmitting a detailed status message along with device identification information. This ensures our team receives instant alerts and can take prompt action to resolve issues before they impact your operations.",
        "With proactive fault detection and seamless service integration, we help you achieve maximum uptime, reliability, and peace of mind.",
      ]
    },
    {
      id: 2,
      title: "Need Our Solution?",
      icon: <FiActivity className="h-8 w-8" />,
      img:"https://msplgroup.com/assets/img/services-2.jpg",
      paragraphs: [
        "Looking for UPS on Rent, UPS Maintenance, or UPS on Hire?",
        "At Upflair Technologies, we’ve got you covered!",
        "We offer a wide range of high-quality UPS systems and reliable power solutions designed to match your exact business needs. Whether you require short-term rentals, long-term maintenance, or complete UPS solutions, our team will help you find the perfect fit—ensuring uninterrupted power and peace of mind.",
        "📞 Contact us today to explore the right UPS solution for your business!",
      ]
    },
 
  ];

  const imageGallery = [
    {
      title: "Real-time Monitoring",
      description: "Remote UPS monitoring provides real-time visibility into the UPS system's performance, including input/output voltages, load levels, battery status, and overall system health. This feature allows users to stay informed about the UPS's operational status and identify any potential issues promptly.",
      image: "https://media.istockphoto.com/id/2182751072/photo/businessman-pointing-icon-with-smart-devices-connectivity-automation-real-time-data-machine.webp?a=1&b=1&s=612x612&w=0&k=20&c=tKlWLawdELapho228O191SwQOo5f6ENFpV9JHC7qlWY="
    },
    {
      title: "Alert Notifications",
      description: "Remote UPS monitoring systems send out automated alerts and notifications in the event of critical events or abnormalities. These alerts can be delivered via email, SMS, or through dedicated monitoring software, enabling users to respond quickly to any UPS-related issues or failures.",
      image: "https://media.istockphoto.com/id/2148676029/photo/warning-attention-symbol-with-exclamation-mark-in-the-triangle-on-the-abstract-human-hand.webp?a=1&b=1&s=612x612&w=0&k=20&c=_z5PN_bEKKcy2s9ycEWFxLfZFDucf1KZ1BsCB4OBMC4="
    },
    {
      title: "Historical Data Analysis",
      description: "Remote UPS monitoring collects and stores historical data on UPS performance and power events. This feature allows users to analyze trends, identify patterns, and assess the overall reliability and efficiency of the UPS system over time. It can also help in planning for future capacity needs.",
      image: "https://media.istockphoto.com/id/1472089286/photo/magnifying-glass-on-a-stack-of-documents.webp?a=1&b=1&s=612x612&w=0&k=20&c=4xPXxkPYFfkNEJKJe18AxFIV8r8EWoGo520GornmXoU="
    },
  
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-[url('/11.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-blue-700/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Remote UPS Monitoring</h1>
            <p className="text-xl md:text-2xl max-w-7xl mx-auto">
          Experience seamless remote monitoring and management of your UPS systems with our state-of-the-art UPS remote monitoring service, including advanced features such as APC remote UPS monitoring, ensuring proactive maintenance and uninterrupted power protection.
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
                  <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">OUR SERVICE OF <br />

Remote UPS Monitoring</h2>
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