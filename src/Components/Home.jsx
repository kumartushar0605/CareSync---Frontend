import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Brain,
  Heart,
  Shield,
  Sparkles,
  Activity,
  Users,
  Clock,
  ChevronRight
} from 'lucide-react';

// Assuming these components exist in your project
import DynamicHeader from './Header';
import Footer from './Footer';
import ServicesHome from './ServicesHome';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // ---------------------
  // DATA CONFIG
  // ---------------------
  const heroSlides = [
    {
      icon: Brain,
      title: "Smart Hospital Finder",
      subtitle: "Locate the best care near you with real-time availability and AI-driven department insights.",
      gradient: "from-blue-600 via-indigo-700 to-purple-800",
      accent: "bg-blue-500"
    },
    {
      icon: Sparkles,
      title: "AI Symptom Guidance",
      subtitle: "Not sure where to go? Enter your symptoms and get instant, intelligent department recommendations.",
      gradient: "from-purple-600 via-fuchsia-700 to-indigo-800",
      accent: "bg-purple-500"
    },
    {
      icon: Shield,
      title: "Unified Management",
      subtitle: "Empowering hospitals to manage doctors, beds, and facilities through one centralized dashboard.",
      gradient: "from-teal-600 via-emerald-700 to-cyan-800",
      accent: "bg-teal-500"
    }
  ];

  const stats = [
    { number: "50+", label: "Partner Hospitals", icon: Activity },
    { number: "100+", label: "Doctors Onboard", icon: Users },
    { number: "24/7", label: "Real-Time Updates", icon: Clock },
    { number: "30+", label: "Specialties Covered", icon: Heart }
  ];

  // ---------------------
  // EFFECTS
  // ---------------------
  
  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000); // Increased to 6s for better readability
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize coordinates to reduce calculation load
      const x = (e.clientX / window.innerWidth) * 20;
      const y = (e.clientY / window.innerHeight) * 20;
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const CurrentIcon = heroSlides[currentSlide].icon;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans selection:bg-blue-200 selection:text-blue-900">
      <DynamicHeader />

      {/* HERO SECTION 
        relative h-screen ensures it takes full height but allows content to flow 
      */}
      <main className="relative flex-grow">
        
        <div className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-20 pb-32">
          
          {/* BACKGROUND LAYERS (Smoother Transition) */}
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} transition-opacity duration-1000 ease-in-out z-0`}
              style={{ opacity: currentSlide === index ? 1 : 0 }}
            />
          ))}

          {/* BACKGROUND PATTERNS */}
          <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-overlay"></div>
          <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

          {/* ANIMATED BLOB */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px] pointer-events-none transition-transform duration-200 ease-out z-0"
            style={{ 
              transform: `translate(${mousePosition.x * -2}px, ${mousePosition.y * -2}px)` 
            }}
          />

          {/* MAIN HERO CONTENT */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
            
            {/* AI Badge */}
            <div className="animate-fade-in-up">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-sm font-medium shadow-lg hover:bg-white/20 transition-colors cursor-default">
                <Brain className="w-4 h-4 text-blue-200" />
                <span>Next-Gen Healthcare AI</span>
              </span>
            </div>

            {/* Icon Circle */}
              <div className="flex justify-center mt-4 mb-6">
            <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-full border border-white/30">
              <CurrentIcon className="w-16 h-16 text-white animate-bounce" />
            </div>
          </div>


            {/* Typography */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 max-w-4xl drop-shadow-sm transition-all duration-500">
              {heroSlides[currentSlide].title}
            </h1>
            
            <p className="text-lg md:text-2xl text-blue-50/90 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              {heroSlides[currentSlide].subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/visitorhome" className="group relative px-8 py-4 bg-white text-blue-900 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3">
                <Heart className="w-5 h-5 text-red-500 group-hover:scale-125 transition-transform" />
                Find Care Now
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>

              <Link href="/hospitalhome" className="group px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3">
                <Shield className="w-5 h-5" />
                Hospital Login
              </Link>
            </div>

            {/* Slide Indicators */}
            <div className="flex gap-3 mt-12">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    currentSlide === idx ? 'w-8 bg-white' : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* STATS SECTION (Overlapping) 
          Negative margin pulls it up over the hero background
        */}
        <div className="relative z-20 -mt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50 p-8 md:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className="mb-4 p-3 bg-blue-50 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <stat.icon className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <div className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base font-medium text-gray-500 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SERVICES SECTION */}
      
           <ServicesHome />
       

      </main>

      <Footer />
    </div>
  );
}