import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Heart, MapPin, Calendar, Bed, Users, Phone, Mail, Clock, Shield, Award, Stethoscope, Activity, ChevronRight, Menu, X } from 'lucide-react';
import DynamicHeader from './Header';
import Footer from './Footer';

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
      <DynamicHeader/>

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

     <Footer/>
    </div>
  );
}