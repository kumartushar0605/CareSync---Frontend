// components/AboutSection.jsx
'use client';

import { useState, useEffect } from 'react';
import DynamicHeader from './Header';
import Footer from './Footer';

const AboutSection = () => {
  const [visibleElements, setVisibleElements] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.dataset.index]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el, index) => {
      el.dataset.index = index.toString();
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: "🔍",
      title: "Smart Hospital Search",
      description: "Advanced location-based search with filters for specialties, ratings, and available services"
    },
    {
      icon: "⏰",
      title: "Real-Time Updates",
      description: "Live information on bed availability, doctor schedules, and department status"
    },
    {
      icon: "👨‍⚕️",
      title: "Doctor Management",
      description: "Comprehensive profiles, scheduling, and availability tracking for medical professionals"
    },
    {
      icon: "🏢",
      title: "Department Overview",
      description: "Detailed information about hospital departments, services, and specialized equipment"
    },
    {
      icon: "🛏️",
      title: "Bed Tracking",
      description: "Real-time bed availability across different wards and room types"
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description: "Seamless experience across all devices - desktop, tablet, and mobile"
    }
  ];

  return (
    <section 
      id="about" 
      className="relative min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-5 overflow-hidden"
    >
        <DynamicHeader/>
      {/* Floating Background Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-pink-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden">
        {/* Header Section */}
        <div className="text-center pt-16 pb-12 px-8 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50"></div>
          <div className="relative z-10">
            <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 animate-pulse">
              CareSync
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light mb-6">
              Connecting Care, Synchronizing Health
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 px-8 md:px-16 mb-16">
          <div 
            className={`animate-on-scroll bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-indigo-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ${
              visibleElements.has('0') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            data-index="0"
          >
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm mr-3">
                🏥
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              CareSync revolutionizes healthcare accessibility by creating a seamless bridge between patients and hospitals. 
              We envision a world where finding quality healthcare is as simple as a few clicks, and managing hospital 
              operations is streamlined through intelligent technology.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our platform empowers both patients and healthcare providers with real-time information, ensuring transparency, 
              efficiency, and improved patient outcomes across the healthcare ecosystem.
            </p>
          </div>

          <div 
            className={`animate-on-scroll bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-indigo-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ${
              visibleElements.has('1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            data-index="1"
          >
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm mr-3">
                🎯
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">What We Do</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              CareSync is a comprehensive Hospital Management & Finder System that simplifies hospital discovery and 
              streamlines internal operations. Users can effortlessly search for hospitals by location and access 
              real-time information about departments, doctors, bed availability, and specialized facilities.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our robust admin dashboard enables hospitals to efficiently manage doctor schedules, monitor bed occupancy, 
              update department information, and maintain accurate facility data—all in one integrated platform.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="px-8 md:px-16 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`animate-on-scroll bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl text-center border-2 border-transparent hover:border-indigo-200 hover:scale-105 transition-all duration-500 group ${
                  visibleElements.has((index + 2).toString()) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                data-index={index + 2}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-2xl text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="mx-8 md:mx-16 mb-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-10 md:p-12 rounded-2xl text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h3>
            <p className="text-lg md:text-xl leading-relaxed opacity-95 max-w-4xl mx-auto">
              At CareSync, we're committed to transforming healthcare accessibility and management through innovative technology. 
              We believe that every patient deserves quick access to quality healthcare information, and every hospital deserves 
              efficient tools to manage their operations. By synchronizing care across the healthcare ecosystem, we're building 
              a healthier future for communities worldwide.
            </p>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white/20 rounded-full"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-white/20 rounded-full"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-on-scroll {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
      <Footer/>
    </section>
  );
};

export default AboutSection;

