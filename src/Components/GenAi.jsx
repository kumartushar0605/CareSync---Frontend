import React, { useState } from 'react'
import { Star, Search, Sparkles, Hospital, MapPin } from 'lucide-react'
import { GoogleGenAI } from "@google/genai";
import VisitorHospitalCom from './VisitorHospitalCom';

export default function GenAi({ hospitalsRef, hospitals ,animateIn,handleHospitalClick}) {
  const [symptomText, setSymptomText] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [filteredDepartment, setFilteredDepartment] = useState('')

 const ai = new GoogleGenAI({
  apiKey: process.env.NEXT_PUBLIC_GEN_AI_KEY,  
});
 


 const handleSymptomAnalysis = async () => {
  if (!symptomText.trim()) return;
  setIsAnalyzing(true);

  try {
    const res = await fetch("https://caresync-api.vercel.app/Visitor/analyze-symptoms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ symptoms: symptomText }),
    });

    const data = await res.json();

    if (!data.department) {
      throw new Error("AI did not return a department");
    }

    console.log("AI Department:", data.department);


    setFilteredDepartment(data.department);

  } catch (err) {
    console.error("AI Error:", err);
    alert("AI failed. Try again.");
  } finally {
    setIsAnalyzing(false);
  }
};



 const aiFilteredHospitals = filteredDepartment
  ? hospitals.filter(h =>
      h.departments.some(d => d.name === filteredDepartment)
    )
  : [];


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">

      {/* Header */}
      <div className="bg-white shadow-md py-6 px-4 sticky top-0 z-10">
        <button
          onClick={() => hospitalsRef.current?.scrollIntoView({ behavior: "smooth" })}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-all flex items-center gap-2"
        >
          <Sparkles className="w-5 h-5" />
          View All Hospitals ↓
        </button>

        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="text-purple-600 w-8 h-8" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 to-indigo-600 bg-clip-text text-transparent">
              AI Hospital Finder
            </h1>
            <Hospital className="text-blue-600 w-8 h-8" />
          </div>

          {/* Input */}
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 text-center mb-4">Describe your symptoms and let AI help.</p>

            <div className="flex gap-3">
              <div className="flex-grow relative">
                <input
                  value={symptomText}
                  onChange={(e) => setSymptomText(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSymptomAnalysis()}
                  placeholder="e.g., pain in testis, headache, chest pain..."
                  className="w-full px-6 py-4 rounded-full border-2 border-purple-200 focus:border-purple-500 outline-none"
                />
                {/* <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" /> */}
              </div>

              <button
                onClick={handleSymptomAnalysis}
                disabled={isAnalyzing}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:scale-105 disabled:opacity-50 flex items-center gap-2"
              >
                {isAnalyzing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Analyze
                  </>
                )}
              </button>
            </div>

            {filteredDepartment && (
              <div className="mt-4 text-center">
                <div className="inline-flex items-center gap-2 bg-purple-100 px-6 py-3 rounded-full border-2 border-purple-300">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                  <span className="text-purple-700 font-semibold">
                    AI Recommendation: {filteredDepartment}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Hospitals */}
      <div className="p-6 ">
       {aiFilteredHospitals.length > 0 ? (
        <>
        <VisitorHospitalCom hospitalsRef={hospitalsRef}  hospitals={aiFilteredHospitals} animateIn={animateIn} handleHospitalClick={handleHospitalClick} 
        headingData={{ text:`Hospitals Near You with Department ${filteredDepartment}`, subtext: "Find the best hospital in your area" }}/>
        </>
) : (
  <p className="text-center text-gray-600 mt-6">
    ❌ No hospitals near you for <span className="font-semibold text-purple-600">{filteredDepartment}</span> found.
  </p>
)}

      </div>
    </div>
  )
}
