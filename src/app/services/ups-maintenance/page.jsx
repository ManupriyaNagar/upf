"use client";
import React from "react";
import { FiZap, FiBarChart, FiActivity, FiSettings, FiShield } from "react-icons/fi";

export default function PowerQualityAnalysis() {
  const sections = [
    {
      id: 1,
      title: "Upflair’s Maintenance Plans Offer:",
      icon: <FiZap className="h-8 w-8" />,
      paragraphs: [
        "At Upflair Technologies, we provide flexible maintenance plans designed to minimize risks and control costs. Our plans include regular preventive maintenance visits, with the freedom to choose the response time that best fits your business needs.",
        "To ensure maximum reliability of your UPS systems, our service plans focus on early detection of critical component wear and degradation. This proactive approach allows us to perform timely repairs or replacements before failures occur, keeping your operations uninterrupted.",
        "Additionally, with our robust inventory of spare parts, immediate spares availability is guaranteed—ensuring faster resolutions and greater peace of mind for your business.",
      ]
    },
   
   
   
   
  ];

  const imageGallery = [
    {
      title: "Reliability and Expertise",
      description: "An authorized service provider has trained professionals who are well-versed with UPS systems. These professionals have gone through rigorous training on the specific brand of UPS systems and know the ins and outs of the equipment. This ensures that you are getting service from highly competent and reliable individuals.",
      image: "https://media.istockphoto.com/id/543351810/photo/your-health-in-our-hands.webp?a=1&b=1&s=612x612&w=0&k=20&c=Y3tT0n0utc2Ocx_QwFXW010JgYFtBVc_BLujK5XKeyU="
    },
    {
      title: "Regular Scheduled Maintenance",
      description: "By choosing a maintenance contract, you ensure that your UPS system undergoes regular checks. This allows for the early detection of issues, ensuring minimal disruptions and preventing catastrophic failures, thus ensuring your UPS system operates optimally and extends its lifespan.",
      image: "https://media.istockphoto.com/id/2228557596/photo/female-engineer-inspecting-control-panel-and-taking-notes-for-safety-and-maintenance-at-power.webp?a=1&b=1&s=612x612&w=0&k=20&c=xG3mMvm2USNep2DbR4sxTig89PwKiC3nDmV9oegyY2A="
    },
    {
      title: "Compliance and Safety",
      description: "Authorized service providers are knowledgeable about the industry standards and safety protocols for UPS systems. This means that all servicing and maintenance done are compliant with the necessary regulations, ensuring not just optimal performance but also the safety of your staff and premises.",
      image: "https://media.istockphoto.com/id/1251377620/photo/cyber-security-systems-for-business-network.webp?a=1&b=1&s=612x612&w=0&k=20&c=-1L-_fH6z7Q_I8mCjnNlTVHZKi4l-MyzVaq1mi3EkPk="
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-[url('/92.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-blue-700/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Power Quality Analysis</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Comprehensive power quality assessment and monitoring solutions
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="text-center max-w-7xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Ensuring Optimal Power Quality</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
      
We at upflair group provides Comprehensive UPS maintenance contracts designed to your specific power requirements, ensuring reliable UPS service, annual maintenance, expert guidance on how to maintain your UPS, and a thorough UPS maintenance checklist.
            </p>
          </div>

          {/* Main Content Sections */}
          <div className="space-y-16 mb-20">
            {sections.map((section, index) => (
              <div key={section.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-700">
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
                      src={`/power-quality-section-${section.id}.jpg`}
                      alt={section.title}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image Gallery Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Power Quality Analysis Gallery</h2>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Improve Your Power Quality?</h2>
              <p className="text-lg mb-8 text-blue-100">
                Contact our power quality experts to schedule a comprehensive analysis of your electrical systems and discover optimization opportunities.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-[#0a1f55] hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Schedule Analysis</span>
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