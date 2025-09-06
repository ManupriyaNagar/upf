import React from 'react';
import Link from 'next/link';

const Services = () => {
  const servicesData = [
    {
      id: 1,
      image: '/ups.jpeg',
      heading: 'UPS Maintenance Contracts',
      paragraph: "Upflair offers tailored UPS maintenance contracts with reliable service, annual checks, expert guidance, and complete care.",
      link: '/services/ups-maintenance'
    },
    {
      id: 2,
      image: '/battery.jpeg',
      heading: 'Battery Monitoring',
      paragraph: 'Optimize UPS performance with our advanced battery monitoring system for reliable, proactive management.',
      link: '/services/battery'
    },
    {
      id: 3,
      image: '/remote.jpeg',
      heading: 'Remote UPS Monitoring',
      paragraph: 'Ensure uninterrupted power with our advanced UPS remote monitoring for seamless, proactive management.',
      link: '/services/remote-ups'
    },
    {
      id: 4,
      image: '/hire.jpeg',
      heading: 'UPS Hire',
      paragraph: 'Ensure reliable power anytime with our flexible UPS rental solutions for uninterrupted supply and peace of mind.',
      link: '/services/ups-hire'
    },
    {
      id: 5,
      image: '/disposal.jpeg',
      heading: 'UPS Relocation & Disposal',
      paragraph: "Simplify UPS relocation and disposal with our professional, eco-compliant service for units and batteries.",
      link: '/services/relocation'
    },
    {
      id: 6,
      image: '/bank.jpeg',
      heading: 'Load Bank Testing',
      paragraph: 'Safeguard your UPS with our precise load bank testing, ensuring reliability, validated performance, and issue prevention.',
      link: '/services/load-banking'
    },
    {
      id: 7,
      image: '/integrated.jpeg',
      heading: 'Integrated System Testing',
      paragraph: 'Ensure seamless coordination and performance with our comprehensive integrated system testing service.',
      link: '/services/testing'
    },
    {
      id: 8,
      image: '/audit.jpeg',
      heading: 'Energy Audit',
      paragraph: 'Practical renewable energy technology that reduces costs and helps the environment',
      link: '/services/audit'
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
         <div className="mb-16 text-center">
          <p className="mb-4 inline-block rounded-full bg-white px-4 py-1 text-5xl font-semibold text-[#0a1f55]">
             Our Services 
          </p>
         <p className="max-w-4xl mx-auto text-lg">Upflair Technology provides end-to-end solutions for critical infrastructure, specializing in power, thermal control, IT systems, and monitoring, ensuring optimal performance in mission-critical environments.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <Link
              key={service.id}
              href={service.link}
              className="bg-white border-2 border-[#169548] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden block cursor-pointer"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={service.image} 
                  alt={service.heading}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.heading}</h3>
                <p className="text-gray-600 text-sm leading-relaxed ">{service.paragraph}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
