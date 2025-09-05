"use client";
import React from "react";
import { FiThermometer, FiCamera, FiAlertTriangle, FiEye, FiTrendingUp } from "react-icons/fi";

export default function Thermography() {
  const sections = [
    {
      id: 1,
      title: "The UPTIME+ Advantage from Upflair",
      icon: <FiCamera className="h-8 w-8" />,

      img:"https://media.istockphoto.com/id/1179405499/photo/silhouette-happy-family-people-group-celebrate-jump-for-good-life-on-weekend-concept-for-win.webp?a=1&b=1&s=612x612&w=0&k=20&c=dEMs74za29Hj28mGk-s_yEn1BoOkKMJfkWN5o7_T1A8=",
      paragraphs: [
        "At Upflair Technologies, we leverage advanced web-management technology to ensure the maximum performance and reliability of your UPS batteries.",
        "Our UPTIME+ system continuously monitors key parameters such as internal resistance, temperature, and voltage of every single battery in sequence. Through a smart Equalization process, it optimizes the charging voltage range—effectively preventing issues like gassing, dry-out, and thermal runaway.",
        "With constant, intelligent monitoring and precise control of individual battery voltages, UPTIME+ guarantees battery availability and long-term dependability—keeping your business powered without interruption.",

      ]
    },
    {
      id: 2,
      title: "Smart Reporting with UPTIME+",
      icon: <FiAlertTriangle className="h-8 w-8" />,
            img:"https://images.unsplash.com/photo-1611220277153-a90d3b6e739a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U21hcnQlMjBSZXBvcnRpbmclMjB3aXRoJTIwVVBUSU1FJTJCfGVufDB8fDB8fHww",
      paragraphs: [
        "At Upflair Technologies, we believe in complete transparency and control over your power systems. Our UPTIME+ reporting system provides real-time visibility into the health of all lead-acid batteries by tracking key parameters such as impedance, temperature, and voltage.",
        "Every change is instantly displayed and securely stored, enabling you to monitor performance trends over time. With the UPTIME+ Viewer, reports can be generated and reviewed regularly on-site, ensuring constant system oversight.",
        "By continuously analyzing battery health, the system delivers early warnings whenever attention is required—helping you prevent failures before they happen and ensuring uninterrupted operations.",

      ]
    },
  ];

  const imageGallery = [
    {
      title: "Preventive Maintenance",
      description: "Battery monitoring systems allow users to predict potential failures by continuously tracking battery health and performance. This ability for preventative maintenance can help avert downtime, reducing the potential costs and inconvenience associated with unexpected system failures.",
      image: "https://media.istockphoto.com/id/1283048909/photo/mechanics-working-at-a-garage-wearing-facemasks.webp?a=1&b=1&s=612x612&w=0&k=20&c=jNc74eZUmIpYRq-72LmluJx97IGk3hE0ZP5jvJ13Vh4="
    },
    {
      title: "Longer Battery Life",
      description: "A battery monitoring system helps prolong the life of a battery by protecting it from unfavorable conditions, such as overcharging or discharging, that could damage the battery over time. It also provides essential information for optimizing battery usage, thereby helping to extend its operational life.",
      image: "https://plus.unsplash.com/premium_photo-1681433419747-f5c114430ab5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TG9uZ2VyJTIwQmF0dGVyeSUyMExpZmV8ZW58MHx8MHx8fDA%3D"
    },
    {
      title: "Energy Efficiency",
      description: "By providing detailed information about battery usage, these systems can identify wasteful practices or inefficient components in a system, enabling users to optimize energy consumption. This not only reduces operating costs but also contributes to sustainability goals.",
      image: "https://media.istockphoto.com/id/1316576079/photo/sustainable-power-is-the-future.webp?a=1&b=1&s=612x612&w=0&k=20&c=2vnEMKXtPsLrErW4h6OYhzGUFS-lT85ikiK1YFmd19M="
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-[url('/102.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-blue-700/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Battery Monitoring</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Efficiently monitor and manage your UPS battery health with our advanced battery monitoring system, offering comprehensive oversight and proactive measures to ensure optimal performance and reliability.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Precision Thermal Imaging Solutions</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our thermography services use advanced infrared technology to identify electrical hotspots and potential failure points, enabling proactive maintenance and preventing costly equipment failures.
            </p>
          </div>

          {/* Main Content Sections */}
          <div className="space-y-16 mb-20">
            {sections.map((section, index) => (
              <div key={section.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-700">
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
                  <div className="bg-gray-200  h-90 flex items-center justify-center">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Services of Battery Monitoring</h2>
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