"use client";
import React from "react";
import { FiSettings, FiThermometer, FiBattery, FiLayers, FiPlug, FiTool, FiCalendar, FiGift } from "react-icons/fi";

export default function ServicesPage() {
  // Services data
  const services = [
    {
      id: 1,
      title: "Ups Maintenance Contract", 
      icon: <FiSettings className="h-8 w-8" />,
      description: "Comprehensive electrical power quality assessment and analysis to identify issues affecting equipment performance and reliability.",
      features: [
        "Voltage disturbance analysis",
        "Harmonic measurement and mitigation",
        "Power factor correction",
        "Load flow analysis and optimization"
      ],
      link: "/services/ups-maintenance"
    },
    {
      id: 2,
      title: "Battery Monitoring",
      icon: <FiThermometer className="h-8 w-8" />,
      description: "Eficiently monitor and manage your UPS battery health with our advanced battery monitoring system, offering comprehensive oversight and proactive measures to ensure optimal performance and reliability.",
      features: [
        "Infrared thermal imaging",
        "Electrical hotspot detection",
        "Preventive maintenance planning",
        "Safety and compliance assessment"
      ],
      link: "/services/thermography"
    },
    {
      id: 3,
      title: "Remote UPS Monitoring",
      icon: <FiBattery className="h-8 w-8" />,
      description: "Professional battery testing services to ensure reliable backup power systems and optimal battery performance.",
      features: [
        "Battery condition assessment",
        "Impedance and conductance testing",
        "Load testing and capacity verification",
        "Maintenance scheduling optimization"
      ],
      link: "/services/remote-ups"
    },
    {
      id: 4,
      title: "UPS Hire",
      icon: <FiLayers className="h-8 w-8" />,
      description: "Comprehensive grounding system testing and analysis to ensure electrical safety and regulatory compliance.",
      features: [
        "Earth resistance testing",
        "Soil resistivity analysis",
        "Grounding system design verification",
        "Lightning protection assessment"
      ],
      link: "/services/ups-hire"
    },
    {
      id: 5,
      title: "UPS Relocation & Disposal",
    //   icon: <FiPlug className="h-8 w-8" />,
      description: "Electrical outlet safety and performance testing to ensure safe operation and regulatory compliance.",
      features: [
        "Electrical socket safety testing",
        "RCD and RCBO functionality testing",
        "Polarity and wiring verification",
        "Power quality assessment"
      ],
      link: "/services/relocation"
    },
    {
      id: 6,
      title: "Load Bank Testing",
      icon: <FiTool className="h-8 w-8" />,
      description: "Expert solutions for unique electrical challenges and complex requirements that demand specialized knowledge.",
      features: [
        "Custom electrical solutions",
        "Advanced electrical testing",
        "Industrial automation integration",
        "Energy management systems"
      ],
      link: "/services/testing"
    },
    {
      id: 7,
      title: "Integrated System Testing",
      icon: <FiCalendar className="h-8 w-8" />,
      description: "Comprehensive electrical maintenance and Annual Maintenance Contract services to ensure system reliability.",
      features: [
        "Comprehensive maintenance programs",
        "Emergency response services",
        "Predictive maintenance services",
        "Maintenance management systems"
      ],
      link: "/services/maintenance-amc"
    },
    {
      id: 8,
      title: "Energy Audit",
      icon: <FiGift className="h-8 w-8" />,
      description: "Exclusive benefits and rewards for our valued AMC customers with special offers and comprehensive coverage.",
      features: [
        "Exclusive AMC package benefits",
        "Premium customer rewards",
        "Comprehensive coverage options",
        "Value-added services"
      ],
      link: "/services/audit"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative h-[400px] bg-[url('/banner.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-blue-700/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              End-to-end solutions for critical infrastructure
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Introduction Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Professional Electrical Testing and Maintenance Services</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Upflair Technology provides comprehensive electrical testing, analysis, and maintenance services to ensure optimal performance, safety, and reliability of your electrical systems and infrastructure.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-100 transform hover:-translate-y-1"
              >
                <div className="p-8">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-700">
                    {service.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Learn More Button */}
                <div className="px-8 pb-8">
                  <a
                    href={service.link}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                  >
                    Learn More
                    <span className="ml-2 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Service Categories Section */}
          <div className="bg-gradient-to-r from-[#0a1f55] to-[#132b74] rounded-2xl p-8 md:p-12 text-white mb-16">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Service Categories</h2>
              <p className="text-lg text-blue-100 mb-12 text-center">
                We offer a comprehensive range of services to meet the diverse needs of our clients, from consulting to implementation and ongoing support.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Service Category 1 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-xl font-semibold text-white mb-4">Consulting Services</div>
                  <p className="text-blue-100">
                    Strategic guidance and expert advice to help you make informed decisions about your infrastructure and technology investments.
                  </p>
                </div>
                
                {/* Service Category 2 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-xl font-semibold text-white mb-4">Design & Engineering</div>
                  <p className="text-blue-100">
                    Comprehensive design and engineering services to ensure your systems are optimized for performance, efficiency, and scalability.
                  </p>
                </div>
                
                {/* Service Category 3 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-xl font-semibold text-white mb-4">Implementation</div>
                  <p className="text-blue-100">
                    End-to-end implementation services with expert project management to ensure successful deployment of your solutions.
                  </p>
                </div>
                
                {/* Service Category 4 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-xl font-semibold text-white mb-4">Maintenance & Support</div>
                  <p className="text-blue-100">
                    Ongoing maintenance and support services to ensure your systems continue to operate at peak performance.
                  </p>
                </div>
                
                {/* Service Category 5 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-xl font-semibold text-white mb-4">Training</div>
                  <p className="text-blue-100">
                    Comprehensive training programs to ensure your team has the knowledge and skills to maximize your investment.
                  </p>
                </div>
                
                {/* Service Category 6 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-xl font-semibold text-white mb-4">Managed Services</div>
                  <p className="text-blue-100">
                    Outsourced management of your critical systems by our team of experienced professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
