import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Heart, MapPin, Calendar, Bed, Users, Phone, Mail, Clock, Shield, Award, Stethoscope, Activity, ChevronRight, Menu, X } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Advanced Healthcare Solutions",
      subtitle: "Cutting-edge medical technology meets compassionate care",
      gradient: "from-blue-600 via-blue-700 to-purple-800"
    },
    {
      title: "Expert Medical Team", 
      subtitle: "Board-certified specialists dedicated to your wellness",
      gradient: "from-teal-600 via-cyan-700 to-blue-800"
    },
    {
      title: "24/7 Emergency Care",
      subtitle: "Round-the-clock medical assistance when you need it most",
      gradient: "from-purple-600 via-pink-700 to-red-800"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Cardiology",
      description: "Advanced heart care with state-of-the-art equipment"
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "General Medicine",
      description: "Comprehensive primary healthcare services"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Emergency Care",
      description: "24/7 emergency medical services"
    },
    {
      icon: <Bed className="w-8 h-8" />,
      title: "Inpatient Care",
      description: "Comfortable rooms with modern amenities"
    }
  ];

  const features = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Real-time Location Search",
      description: "Find nearby hospitals and healthcare facilities instantly"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Doctor Management",
      description: "Comprehensive doctor profiles and scheduling system"
    },
    {
      icon: <Bed className="w-6 h-6" />,
      title: "Bed Tracking",
      description: "Real-time bed availability and resource management"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Smart Scheduling",
      description: "Automated appointment and resource scheduling"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Patients Served" },
    { number: "50+", label: "Expert Doctors" },
    { number: "24/7", label: "Emergency Care" },
    { number: "15+", label: "Departments" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center group">
                <div className="h-10 w-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold mr-3 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Heart className="w-5 h-5" />
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  CareSync
                </span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-50 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none transition-all duration-300"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-white border-t`}>
          <div className="px-4 pt-2 pb-3 space-y-1">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-lg text-base font-medium hover:bg-blue-50 transition-all duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className={`absolute inset-0 bg-gradient-to-br ${heroSlides[currentSlide].gradient} transition-all duration-1000`}>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block">{heroSlides[currentSlide].title}</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-white/90 mt-4">
                {heroSlides[currentSlide].subtitle}
              </span>
            </h1>
            
            <p className="mt-8 max-w-3xl mx-auto text-xl text-white/90 leading-relaxed">
              Experience the future of healthcare management with our comprehensive platform designed for patients and healthcare providers
            </p>
            
            {/* Action Buttons */}
            <div className="mt-12 px-4 sm:px-0">
              <div className="flex flex-col gap-4 justify-center items-center max-w-md mx-auto sm:max-w-4xl sm:flex-row sm:gap-6">
                <Link 
                  href="/visitorhome"
                  className="group relative px-6 py-4 bg-white text-blue-600 rounded-full font-semibold text-base sm:text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2 w-full sm:w-auto sm:min-w-[240px]"
                >
                  <Heart className="w-5 h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span className="whitespace-nowrap">Patient Portal</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </Link>
                
                <Link 
                  href="/hospitalhome"
                  className="group relative px-6 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-blue-600 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2 w-full sm:w-auto sm:min-w-[240px]"
                >
                  <Shield className="w-5 h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span className="whitespace-nowrap">Hospital Management</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative -mt-20 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Advanced Healthcare Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with cutting-edge technology to improve healthcare access and operational efficiency
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Medical Services
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Comprehensive healthcare services delivered by expert medical professionals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 hover:bg-white"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to experience better healthcare? Contact us today
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">+91 6207850955</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-gray-300">info@CareSync.com</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Hours</h3>
              <p className="text-gray-300">24/7 Emergency Care</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold mr-3">
                  <Heart className="w-5 h-5" />
                </div>
                <span className="font-bold text-xl">CareSync</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Providing exceptional healthcare services with cutting-edge technology and compassionate care.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['About Us', 'Services', 'Doctors', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                {['Emergency Care', 'Cardiology', 'General Medicine', 'Surgery'].map((service) => (
                  <li key={service}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>ITER ROAD</p>
                <p>Medical City, MC 12345</p>
                <p>+91 6207850955</p>
                <p>info@CareSync.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 HealthCare Plus. All rights reserved. Built with modern technology for better healthcare.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}