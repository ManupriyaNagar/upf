"use client";
import React from "react";
import { FiLayers, FiShield, FiZap, FiCheckCircle, FiAlertTriangle } from "react-icons/fi";

export default function EarthPitTesting() {
  const sections = [
    {
      id: 1,
      title: "UPS on Rent Packages from Upflair",
      icon: <FiLayers className="h-8 w-8" />,
      img:"/upshire1.jpeg",
      paragraphs: [
        "At Upflair Technologies, we provide exclusive UPS rental solutions tailored to your business and personal power needs. Our rental range covers 1 kVA to 500 kVA UPS systems, with batteries configured to suit your exact requirements.",
        "Whether for industrial use or home applications, we offer a wide selection of trusted brands, including APC, Schneider, and Luminous. Our inventory includes single-phase, three phase, rack-mounted, standalone, and modular UPS systems giving you complete flexibility in choosing the right solution.",
        "With reliable performance, quick availability, and cost-effective plans, UPS on rent from Upflair is the smart way to ensure uninterrupted power without heavy upfront investments.",
      ]
    },
    {
      id: 2,
      title: "UPS Hire Packages from Upflair",
      icon: <FiZap className="h-8 w-8" />,
      img:"/upshire2.jpeg",
      paragraphs: [
        "At Upflair Technologies, we deliver end to end UPS hire solutions designed to make your rental experience seamless and hassle-free. Our complete package includes:",
        "-> Delivery to your site",
        "-> Professional installation",
        "-> Commissioning and battery build (if required)",
        "-> Decommissioning and removal at the end of the rental period",
        "-> Over the years, we’ve successfully powered projects for educational institutions, banks, data centers, and even large-scale events. From supporting sporting events like the IPL to providing reliable backup for India’s biggest reality shows, our UPS hire services have proven to deliver uninterrupted performance where it matters most.",
        "Choose Upflair’s UPS Hire Package for trusted power solutions backed by expertise and experience."
      ]
    },


  ];

  const imageGallery = [
    {
      title: "Seamless Power Backup",
      description: "At Upflair Technologies, our UPS hire solutions ensure uninterrupted power during outages or fluctuations. With a smooth transition between the main supply and backup, your critical systems and equipment from data centers and hospitals to manufacturing units keep running without disruption.",
      image: "https://media.istockphoto.com/id/1169814011/photo/visualization-3d-cad-model-of-uninterruptible-power-supply-blueprint-3d-rendering.webp?a=1&b=1&s=612x612&w=0&k=20&c=Dywg_-dM5D-sCMa2AJJCH7mvmgQpb5fGQH3vR1V-LH0="
    },
    {
      title: "Scalability to Match Your Needs",
      description: "Power demands often change due to seasonal variations, expansion, or short-term projects. With our scalable UPS rental options, you can easily adjust backup capacity to match your requirements without the need for large, fixed investments in permanent systems.",
      image: "https://plus.unsplash.com/premium_photo-1681586533774-1d9d42425712?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFNjYWxhYmlsaXR5JTIwdG8lMjBNYXRjaCUyMFlvdXIlMjBOZWVkc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "Expert Maintenance & Support",
      description: "When you choose UPS hire from Upflair, you also gain access to our expert maintenance and support services. We handle inspections, preventive maintenance, and repairs ensuring your system is always in peak operating condition, so you can focus on your core business.",
      image: "https://media.istockphoto.com/id/499148420/photo/facility-management.webp?a=1&b=1&s=612x612&w=0&k=20&c=yulFav_l-9zUjF6X0N8D8TaphD-su-yPvBfO8Dsmp8w="
    },
    {
      title: "Advanced Monitoring & Management",
      description: "Our UPS rental packages come with intelligent monitoring tools that provide real time insights into system performance, power usage, and alerts for any issues. This allows proactive problem solving and ensures maximum efficiency at all times.",
      image: "https://media.istockphoto.com/id/2204328752/photo/engineer-evaluating-machinery-while-using-a-tablet-in-a-modern-industrial-facility.webp?a=1&b=1&s=612x612&w=0&k=20&c=iHAUlRkbyFlVCXTQxDz1ICtSaITk_iSKahdHGfkb65Q="
    },
    {
      title: "Cost-Effective Power Solutions",
      description: "Renting a UPS is a smart and cost efficient alternative to buying. With no heavy upfront investments or hidden costs for batteries, installations, or upgrades, you benefit from predictable rental fees while freeing up capital for other business priorities.",
      image: "https://images.unsplash.com/photo-1681495628907-592089c3a546?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q29zdCUyMEVmZmVjdGl2ZSUyMFBvd2VyJTIwU29sdXRpb25zfGVufDB8fDB8fHww"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-[url('/12.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-blue-700/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">UPS Hire
            </h1>
            <p className="text-xl md:text-2xl max-w-7xl mx-auto">
              Get reliable power on demand with our flexible UPS hire service, offering convenient rental UPS solutions that cater to your specific needs, ensuring uninterrupted power supply and peace of mind.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
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
                  <div className="bg-gray-200 rounded-2xl h-full flex items-center justify-center">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our UPS Hire Service</h2>
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