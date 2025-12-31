"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

const Headers = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const solutionCategories = [
    {
      title: "All Solutions",
      description: "Comprehensive energy solutions for residential and commercial spaces",
      href: "/solutions",
    },
    {
      title: "Home & Office Solutions",
      description: "Comprehensive energy solutions for residential and commercial spaces",
      href: "/solutions/home-office",
    },
    {
      title: "Business Solutions",
      description: "Tailored business energy management and efficiency solutions",
      href: "/solutions/business",
    },
    {
      title: "Industrial Solutions",
      description: "Heavy-duty industrial power and infrastructure solutions",
      href: "/solutions/industrial",
    },
    {
      title: "Data Center Solutions",
      description: "Mission-critical data center power and cooling solutions",
      href: "/solutions/data-center",
    },
    {
      title: "Green Solutions",
      description: "Sustainable and environmentally friendly energy solutions",
      href: "/solutions/green",
    },
    {
      title: "Electrical Turnkey Contract",
      description: "Complete electrical project management and implementation",
      href: "/solutions/electrical-turnkey",
    },
    {
      title: "Video Surveillance Solutions",
      description: "Advanced security monitoring and intelligent surveillance systems",
      href: "/solutions/video-surveillance",
    },
    {
      title: "Micro Data Centre FX",
      description: "Compact edge computing solutions for distributed infrastructure",
      href: "/solutions/micro-datacenter-fx",
    },
  ];

  const serviceCategories = [
    {
      title: "All Services",
      description:
        "Our Consulting Services are a suite of offerings that help you construct and smoothly adopt an enterprise-ready architecture.",
      href: "/services",
    },
    {
      title: "UPS Maintenance Contracts",
      description:
        "Comprehensive UPS maintenance contracts tailored to your power requirements.",
      href: "/services/ups-maintenance",
    },
    {
      title: "Battery Monitoring",
      description:
        "Efficiently monitor and manage your UPS battery health with advanced monitoring.",
      href: "/services/battery",
    },
    {
      title: "Remote UPS Monitoring",
      description:
        "Seamless remote monitoring and management of UPS systems with advanced features.",
      href: "/services/remote-ups",
    },
    {
      title: "UPS Hire",
      description: "Get reliable power on demand with flexible UPS hire service.",
      href: "/services/ups-hire",
    },
    {
      title: "UPS Relocation & Disposal",
      description:
        "Seamless UPS relocation and proper disposal adhering to environmental regulations.",
      href: "/services/relocation",
    },
    {
      title: "Load Bank Testing",
      description:
        "Ensure the reliability of your UPS system through our load bank testing service.",
      href: "/services/load-banking",
    },
    {
      title: "Integrated System Testing",
      description:
        "Streamline evaluation and functionality of your integrated systems.",
      href: "/services/testing",
    },
    {
      title: "Energy Audit",
      description: "Practical renewable energy technology that reduces costs.",
      href: "/services/audit",
    },
  ];

  return (
    <section className="bg-white w-full z-50 left-0 border-b sticky top-0">
      <header className="w-full flex items-center justify-between container mx-auto py-4 px-4 md:px-0 bg-white">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="CDS Logo"
              width={140}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-[18px] font-medium text-[#0a0a23]">
          <a href="/" className="hover:text-blue-700 transition">
            Home
          </a>
          <a href="/about" className="hover:text-blue-700 transition">
            About Us
          </a>

          {/* Solutions */}
          <div
            className="relative"
            onMouseEnter={() => setIsSolutionsOpen(true)}
            onMouseLeave={() => setIsSolutionsOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-blue-700 transition">
              Solutions
              <FiChevronDown
                className={`transition-transform duration-200 ${isSolutionsOpen ? "rotate-180" : ""
                  }`}
              />
            </button>
            {isSolutionsOpen && (
              <div className="absolute top-full -left-140 w-[1200px] bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    SOLUTION CATEGORIES
                  </h3>
                  <div className="grid grid-cols-4 gap-6">
                    {solutionCategories.map((solution, index) => (
                      <a
                        key={index}
                        href={solution.href}
                        className="block p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-700">
                          {solution.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {solution.description}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Services */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-blue-700 transition">
              Services
              <FiChevronDown
                className={`transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""
                  }`}
              />
            </button>
            {isServicesOpen && (
              <div className="absolute top-full -left-190 w-[1300px] bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    SERVICE CATEGORIES
                  </h3>
                  <div className="grid grid-cols-4 gap-6">
                    {serviceCategories.map((service, index) => (
                      <a
                        key={index}
                        href={service.href}
                        className="block p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-700">
                          {service.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {service.description}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          <a href="/blogs" className="hover:text-blue-700 transition">
            Blogs
          </a>
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Link href="/contact">
            <button className="bg-[#0a1f55] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#132b74] transition">
              Connect Now →
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg px-4 py-6 space-y-4">
          <a href="/" className="block text-lg font-medium text-gray-800">
            Home
          </a>
          <a href="/about" className="block text-lg font-medium text-gray-800">
            About Us
          </a>

          {/* Solutions Mobile */}
          <div>
            <button
              className="flex items-center justify-between w-full text-lg font-medium text-gray-800"
              onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
            >
              Solutions
              <FiChevronDown
                className={`transition-transform ${isSolutionsOpen ? "rotate-180" : ""
                  }`}
              />
            </button>
            {isSolutionsOpen && (
              <div className="pl-4 mt-2 space-y-2">
                {solutionCategories.map((solution, index) => (
                  <a
                    key={index}
                    href={solution.href}
                    className="block text-gray-600 hover:text-blue-700"
                  >
                    {solution.title}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Services Mobile */}
          <div>
            <button
              className="flex items-center justify-between w-full text-lg font-medium text-gray-800"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services
              <FiChevronDown
                className={`transition-transform ${isServicesOpen ? "rotate-180" : ""
                  }`}
              />
            </button>
            {isServicesOpen && (
              <div className="pl-4 mt-2 space-y-2">
                {serviceCategories.map((service, index) => (
                  <a
                    key={index}
                    href={service.href}
                    className="block text-gray-600 hover:text-blue-700"
                  >
                    {service.title}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Button */}
          <Link href="/contact">
            <button className="w-full bg-[#0a1f55] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#132b74] transition">
              Connect Now →
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default Headers;
