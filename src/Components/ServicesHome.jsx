import React from 'react';
import { Brain, Search, Calendar, Bed, Users, Activity, Sparkles, MapPin,ClipboardList } from 'lucide-react';

export default function ServicesHome() {
 const features = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI Symptom Guidance",
    description:
      "Analyzes user-entered symptoms using smart rule-based logic to suggest the most relevant medical departments",
    gradient: "from-purple-600 to-blue-600"
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Smart Hospital Finder",
    description:
      "Finds nearby hospitals based on your location and shows details like address, contact, and available departments",
    gradient: "from-blue-600 to-cyan-600"
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Intelligent Department Matching",
    description:
      "Matches symptoms with the correct hospital departments to help users quickly identify the right place for treatment",
    gradient: "from-cyan-600 to-teal-600"
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: "Real-Time Bed & Facility Info",
    description:
      "Displays up-to-date information on bed availability, department status, facilities, and equipment within hospitals",
    gradient: "from-teal-600 to-green-600"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Hospital Admin Dashboard",
    description:
      "Hospitals can manage departments, doctors, beds, facilities, equipment, and real-time data through an integrated dashboard",
    gradient: "from-green-600 to-emerald-600"
  },
  {
    icon: <ClipboardList className="w-8 h-8" />,
    title: "Doctor & Schedule Management",
    description:
      "Maintain doctor profiles, working days, timings, and specialization with a clean and efficient management interface",
    gradient: "from-emerald-600 to-blue-600"
  }
];


  return (
    <div className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full mb-6 shadow-lg">
            <Brain className="w-5 h-5" />
            <span className="font-semibold">AI-Powered Healthcare</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            CareSync Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Intelligent technology transforming hospital management and healthcare accessibility
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.gradient} mb-5 shadow-md`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* AI Highlight Banner */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-3xl p-10 md:p-14 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Brain className="w-12 h-12 text-white" />
              </div>
            </div>
           <div className="flex-1 text-center md:text-left">
  <h3 className="text-3xl font-bold text-white mb-4">
    Smart AI Healthcare Assistant
  </h3>
  <p className="text-white/90 text-lg leading-relaxed">
    Our AI assistant identifies key symptoms and maps them to the right medical 
    departments such as ENT, Urology, Cardiology, and more. It then instantly 
    filters and recommends nearby hospitals that offer those departments, helping 
    you reach the most suitable care with ease.
  </p>
</div>

          </div>
        </div>

      </div>
    </div>
  );
}